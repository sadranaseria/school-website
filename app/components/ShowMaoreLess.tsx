"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import Markdown from "react-markdown";

const ShowMoreLess = ({ text }: { text: string }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="prose">
      <div className={showMore ? '' : 'line-clamp-3'}>
          <Markdown>{text}</Markdown>
      </div>

      {text.length > 20 && (
        <Button className='inline' onClick={() => setShowMore(!showMore)}>
          {showMore ? "نمایش کمتر" : "نمایش بیشتر"}
        </Button>
      )}
    </div>
  );
};

export default ShowMoreLess;