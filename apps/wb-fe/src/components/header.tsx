import { FC } from "react";

import { cn } from "@/libs/utils";

import Navbar from "./navbar";
import NavigationProgress from "./navigation-progress";

const Header: FC = () => {
  return (
    <header>
      <div className={cn("bg-background fixed inset-y-0 z-50 h-[56px] w-screen border-b shadow-sm")}>
        <Navbar />
        <NavigationProgress className="absolute inset-x-0 bottom-0 translate-y-1" />
      </div>
    </header>
  );
};
export default Header;
