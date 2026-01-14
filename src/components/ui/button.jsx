import * as React from "react";
import { cn } from "../../lib/utils";

export function Button({ className, disabled, ...props }) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-xl text-sm font-medium transition-colors",
        "bg-black text-white hover:bg-gray-800",
        "disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed",
        "h-10 px-4 py-2",
        className
      )}
      disabled={disabled}
      {...props}
    />
  );
}
