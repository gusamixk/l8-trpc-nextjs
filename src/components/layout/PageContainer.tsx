
import { cn } from "@/lib/utils";
import React, { forwardRef } from "react";
import { MainLayout } from "./MainLayout";

type PageContainerProps = {
  withHeader?: boolean;
  withFooter?: boolean;
  title?: string;
};

export const PageContainer = forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement> & PageContainerProps
>(
  (
    { className, children, withHeader = false, withFooter = false, ...props },
    ref,
  ) => {
    return (
      <MainLayout>
      <div className="h-full w-full">
        {/* {withHeader && <Header />} */}
        <main ref={ref} className={cn("flex flex-col", className)} {...props}>
          {children}
        </main>
        {/* {withFooter && <Footer />} */}
      </div>
      </MainLayout>
    );
  },
);

PageContainer.displayName = "PageContainer";
