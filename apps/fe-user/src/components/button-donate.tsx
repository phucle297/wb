import clsx from "clsx";
import { Coffee } from "lucide-react";

import { Button } from "@ui/components/ui/button";

type Props = {
  className?: string;
};
const ButtonDonate = ({ className }: Props) => {
  return (
    <Button
      className={clsx(className, "mt-4 max-w-full gap-2 text-wrap")}
      onClick={() => {
        window.open("https://ko-fi.com/weeboo");
      }}
    >
      <Coffee size={24} />
      Bánh mì thơm và cà phê đắng
    </Button>
  );
};

export default ButtonDonate;
