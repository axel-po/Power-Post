import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
// import { displayName } from "@/lib/format/displayName";
import { auth } from "@/auth/helper";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { LoginButton } from "./LoginButton";
import { UserDropdown } from "./UserDropdown";

export const AuthButton = async () => {
  const user = await auth();

  if (user) {
    return (
      <UserDropdown>
        <Button variant="outline" size="sm">
          <Avatar className="mr-2 size-6">
            <AvatarFallback>
              {user.email ? user.email.slice(0, 2) : "??"}
            </AvatarFallback>
            {user.image && <AvatarImage src={user.image} />}
          </Avatar>
          {/* <span className="max-lg:hidden">{displayName(user)}</span> */}
          <span className="max-lg:hidden">{user.name}</span>
        </Button>
      </UserDropdown>
    );
  }

  return <LoginButton />;
};
