"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Question } from "@/lib/generated/prisma/client";

const QusetionAccordion = ({ questions }: { questions: Question[] }) => {
  return (
    <Accordion
      dir="rtl"
      className='w-1/2 divide-y divide-primary ring-2 ring-primary rounded-2xl p-4'
      defaultValue={["billing"]}
    >
      {questions.map((q, i) => (
        <AccordionItem className='' key={q.id}>
          <AccordionTrigger className="bg-[#f0f0f0] flex items-center gap-4 hover:underline-offset-2 decoration-blue-superlight">
            <div className="flex items-center gap-2">
              <p className="size-8 md:size-7 flex justify-center items-center bg-blue-superlight text-sm md:text-md rounded-full pt-1">
                {i + 1}
              </p>
              <p className="text-secondary text-lg md:text-xl">{q.title}</p>
            </div>
          </AccordionTrigger>
          <AccordionContent>{q.anwser}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default QusetionAccordion;
