"use client";

import { useEffect, useRef, useState } from "react";
import useActiveLink from "../store";

export function useObserver() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setVisible] = useState(false);
  const setLinkId = useActiveLink((state) => state.setLinkId);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);

        if (entry.isIntersecting) setLinkId(entry.target.id);
        console.log(entry.target.id);
      },
      { threshold: 0.5, rootMargin: "0px 0px -50px 0px" },
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.disconnect();
    };
  }, [setLinkId]);
  return { isVisible, ref };
}
