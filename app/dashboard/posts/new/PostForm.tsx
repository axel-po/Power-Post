"use client";

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
import { LANGUAGES } from "./languages.const";
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

  return (
    <Form
      form={form}
      onSubmit={(values) => {
        console.log("values", values);
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
    </Form>
  );
};
