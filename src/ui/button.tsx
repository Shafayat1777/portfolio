import type { ButtonProps } from "@/lib/types";
import cn from "@/utils/cn";
import React from "react";

export default function Button({
  text,
  icon,
  isActive = false,
  onClick = () => {},
}: ButtonProps) {
  return (
    <label
      onClick={onClick}
      className={cn(
        "text-center cursor-pointer  py-3 px-5 text-lg font-semibold transition-all focus:scale-110 active:scale-105 hover:scale-110 flex items-center justify-between gap-2",
        {
          " bg-secondary-dark text-white": isActive,
          " bg-tertiary-dark text-primary-light": !isActive,
        }
      )}
    >
      {text}
      {icon && icon}
    </label>
  );
}
