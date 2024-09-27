import { PropsWithChildren } from "react";

const Layout = (props: PropsWithChildren) => {
  return (
    <div>
      <nav>
        <li>Created posts</li>
        <li>New posts</li>
      </nav>
      {props.children}
    </div>
  );
};

export default Layout;
