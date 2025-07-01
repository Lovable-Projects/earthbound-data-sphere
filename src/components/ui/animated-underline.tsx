"use client";
import { ReactNode } from "react";

export const AnimatedUnderline = ({ children, active = false }: { children: ReactNode; active?: boolean }) => {
  return (
    <div
      className={
        `relative after:absolute after:bg-primary after:bottom-0 after:left-0 after:h-px after:w-full after:transition-transform after:ease-in-out after:duration-300 ` +
        (active
          ? 'after:origin-bottom-left after:scale-x-100'
          : 'after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100')
      }
    >
      <span className="text-primary">{children}</span>
    </div>
  );
} 