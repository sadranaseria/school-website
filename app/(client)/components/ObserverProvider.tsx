"use client";

import { ReactNode } from "react";
import { useObserver } from "../hooks/useObserver";
import { cn } from "@/lib/utils";

const ObserverProvider = ({
  children,
  id,
}: {
  children: ReactNode;
  id: string;
}) => {
  const { ref, isVisible } = useObserver();
  return (
    <div
      ref={ref}
      className={cn(
        'my-30',
        isVisible
          ? "opacity-100 translate-y-0 transition-all duration-700 pt-5"
          : "opacity-0 translate-y-5 transition-all duration-700 pt-5"
      )}
      id={id}
    >
      {children}
    </div>
  );
};

export default ObserverProvider;
