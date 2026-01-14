import * as React from "react";
import { cn } from "../../lib/utils";

export const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      ref={ref}
      className={cn(
        "flex h-10 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm",
        "file:border-0 file:bg-transparent file:text-sm file:font-medium",
        "focus:outline-none focus:ring-2 focus:ring-black",
        className
      )}
      {...props}
    />
  );
});
Input.displayName = "Input";
