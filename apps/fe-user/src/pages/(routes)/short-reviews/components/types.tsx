import clsx from "clsx";

import { Badge } from "@ui/components/ui/badge";
import { TBadgeColor } from "@wb/common/src/types/colors";
import { typesSchema } from "@wb/common/src/types/types";
import { cn } from "@wb/ui/src/libs/utils";
import { ScrollArea } from "@wb/ui/src/components/ui/scroll-area";

type Props = {
  types: string[];
  className?: string;
  noWrap?: boolean;
};

const Types = ({ types, className, noWrap }: Props) => {
  const getVariant = (type: string) => {
    let variant: TBadgeColor;
    switch (type) {
      case typesSchema.enum.anime_movie:
        variant = "blue";
        break;
      case typesSchema.enum.anime_tv_series:
        variant = "yellow";
        break;
      case typesSchema.enum.manga:
        variant = "gray";
        break;
      case typesSchema.enum.web_novel:
      case typesSchema.enum["web_novel/light_novel"]:
      case typesSchema.enum["light_novel/web_novel"]:
      case typesSchema.enum.light_novel:
        variant = "green";
        break;
      default:
        variant = "default";
        break;
    }
    return variant;
  };
  return (
    <div className={cn("flex w-[200px] flex-row gap-2", className, !noWrap && "flex-wrap")}>
      {types.map((item) => {
        const type = item.toLocaleLowerCase().trim().replaceAll(" ", "_");
        const variant = getVariant(type);
        return (
          <Badge key={type} className={clsx("whitespace-nowrap")} variant={variant}>
            {item[0].toUpperCase() + item.slice(1).replaceAll("_", " ")}
          </Badge>
        );
      })}
    </div>
  );
};

export default Types;
