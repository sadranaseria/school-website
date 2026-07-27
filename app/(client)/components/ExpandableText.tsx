"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import Markdown from "react-markdown";

const ExpendableText = ({ children }: { children: string }) => {
  const [expened, setExpened] = useState(false);
  const limit = 300;

  if (children.length <= limit)
    return (
      <div className="prose">
        <Markdown>{children}</Markdown>
      </div>
    );

  return (
    <>
      <div className={expened ? "prose" : "prose line-clamp-3"}>
        <Markdown>{children}</Markdown>
      </div>
      <Button onClick={() => setExpened(!expened)}>
        {expened ? "نمایش کمتر" : "نمایش بیشتر"}
      </Button>
    </>
  );
};

export default ExpendableText;
