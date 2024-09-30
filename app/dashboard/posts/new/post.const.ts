import { PostMode } from "@prisma/client";
import {
  AlignJustify,
  BookText,
  Code,
  Key,
  ListOrdered,
  LucideIcon,
} from "lucide-react";

export const LANGUAGES = {
  English: "🇬🇧",
  French: "🇫🇷",
  Spanish: "🇪🇸",
  German: "🇩🇪",
  Chinese: "🇨🇳",
  Japanese: "🇯🇵",
  Russian: "🇷🇺",
  Portuguese: "🇵🇹",
  Italian: "🇮🇹",
  Arabic: "🇸🇦",
} as const;

export const PostModeDataMap: Record<
  PostMode,
  { icon: LucideIcon; description: string }
> = {
  BULLET_POINT: {
    icon: ListOrdered,
    description: "Organizes content into bullet points for clarity.",
  },
  CODE: {
    icon: Code,
    description: "Displays content in a code format for technical posts.",
  },
  MAIN_POINTS: {
    icon: Key,
    description: "Highlights the key points of the content.",
  },
  SHORT: {
    icon: AlignJustify,
    description: "Presents a brief and concise version of the content.",
  },
  THREAD: {
    icon: BookText,
    description: "Displays content as a continuous thread.",
  },
TWEET: {
  icon: AlignJustify,
  description: "Presents content in a tweet format.",
},
TOP3: {
  icon: Key,
  description: "Highlights the top 3 points of the content.",
},
};
