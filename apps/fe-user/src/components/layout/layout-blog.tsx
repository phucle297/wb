import { cn } from "@wb/ui/src/libs/utils";
import React from "react";

type IProps = { children: React.ReactNode };

const LayoutBlog = ({ children }: IProps) => {
  const isMainPage = location.pathname === "/";
  return (
    <div className="container py-10">
      <div className={cn("grid gap-5", { "grid-cols-[4fr_1fr]": !isMainPage })}>
        <>{children}</>
        <div className="ads relative mt-20">
          <div className="bg-[hsl(var(--popover)] rounded-lg p-4">
            {!isMainPage && (
              <div className="">
                <h2 className="mb-4 text-xl font-semibold">Ads will be here {":)"}</h2>
                <img className="rounded-lg" src="https://via.placeholder.com/300x300" alt="ads" />
                <img className="mt-4 rounded-lg" src="https://via.placeholder.com/300x300" alt="ads" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutBlog;
