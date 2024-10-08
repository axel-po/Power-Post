"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useZodForm,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { PostMode } from "@prisma/client";
import { useMutation } from "@tanstack/react-query";
import { LANGUAGES, PostModeDataMap } from "./post.const";
import { PostSchema } from "./post.schema";

export type PostFormProps = {
  defaultSource?: string;
};

export const PostForm = (props: PostFormProps) => {
  const form = useZodForm({
    schema: PostSchema,
    defaultValues: {
      source: props.defaultSource,
      language: "English",
    },
  });

  const postMutation = useMutation({
    mutationFn: async (values: PostSchema) => {
      const result = await fetch("/api/powerpost", {
        method: "POST",
        body: JSON.stringify(values),
      });
      const json = await result.json();
      return json;
    },
  });

  console.log(postMutation.data);

  return (
    <Form
      disabled={postMutation.isPending}
      form={form}
      className="flex flex-col gap-4"
      onSubmit={(values) => {
        postMutation.mutate(values);
      }}
    >
      <FormField
        control={form.control}
        name="source"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Source</FormLabel>
            <FormControl>
              <Input placeholder="https://medium.com/..." {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="mode"
        render={({ field }) => (
          <FormItem className="flex flex-col items-start gap-2 border border-border p-2">
            <FormLabel>Mode</FormLabel>
            <FormControl>
              <ToggleGroup
                className="flex flex-wrap gap-2"
                type="single"
                value={field.value}
                onValueChange={field.onChange}
              >
                {Object.entries(PostMode).map(([key, value]) => {
                  const data = PostModeDataMap[key as PostMode];
                  return (
                    <ToggleGroupItem
                      key={key}
                      value={value}
                      className="flex h-auto flex-col gap-2 p-3"
                    >
                      <data.icon size={24} />
                      <span>{value}</span>
                    </ToggleGroupItem>
                  );
                })}
              </ToggleGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="language"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Language</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select a language" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {Object.entries(LANGUAGES).map(([key, value]) => (
                  <SelectItem key={key} value={key}>
                    {value} {key}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button type="submit">
        {postMutation.isPending ? "Create..." : "Create"}
      </Button>
    </Form>
  );
};
