import { NextResponse } from "next/server";
import { PostSchema } from "../../dashboard/posts/new/post.schema";

export const POST = async (req: Request) => {
  const body = await req.json();

  const data = PostSchema.parse(body);

  return NextResponse.json(data);
};
