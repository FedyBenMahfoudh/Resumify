import { AvatarProps } from "@radix-ui/react-avatar";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Icons } from "@/components/shared/icons";
import { User } from "@supabase/supabase-js";

interface UserAvatarProps extends AvatarProps {
  user: User;
}

export function UserAvatar({ user, ...props }: UserAvatarProps) {
  const image =
    typeof user.user_metadata?.avatar_url === "string"
      ? user.user_metadata.avatar_url
      : undefined;
  const name =
    user.user_metadata?.name ?? user.user_metadata?.full_name ?? "User";

  return (
    <Avatar {...props}>
      {image ? (
        <AvatarImage alt="Picture" src={image} referrerPolicy="no-referrer" />
      ) : (
        <AvatarFallback>
          <span className="sr-only">{name}</span>
          <Icons.user className="size-4" />
        </AvatarFallback>
      )}
    </Avatar>
  );
}
