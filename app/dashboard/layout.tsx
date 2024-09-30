import Link from "next/link";
import { PropsWithChildren } from "react";

const Layout = (props: PropsWithChildren) => {
  return (
    <div className="max-w-5xl m-auto p-4 ">
      <nav className="flex items-center gap-4 mt-4 h-full">
        <Link
          href="/dashboard/posts"
          className="flex bg-accent/20 hover:bg-accent/50 h-8 items-center gap-2 rounded-md px-2 text-sm translate-colors"
        >
          Created posts
        </Link>
        <Link
          href="/dashboard/posts/new"
          className="flex bg-accent/20 hover:bg-accent/50 h-8 items-center gap-2 rounded-md px-2 text-sm translate-colors"
        >
          New posts
        </Link>
      </nav>
      <div className="mt-8">{props.children}</div>
    </div>
  );
};

export default Layout;
