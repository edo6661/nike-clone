import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { forwardRef } from "react";

const headerVariants = cva("", {
  variants: {
    variant: {
      default: "font-montserrat ",
    },
    size: {
      default: "font-semibold sm:text-2xl text-xl font-montserrat",
      sm: "font-medium sm:text-xl text-lg",
      lg: "font-bold sm:text-4xl text-2xl",
      md: "font-semibold sm:text-3xl text-xl",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface HeadingProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof headerVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, variant, size, as = "h3", ...props }, ref) => {
    const Comp = as || "h3";

    return (
      <Comp
        className={cn(headerVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);

Heading.displayName = "Title";

export { Heading, headerVariants };
