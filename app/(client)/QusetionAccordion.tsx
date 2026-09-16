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
      className="w-full p-4 space-y-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-start gap-4 my-12"
      defaultValue={["billing"]}
    >
      {questions.map((q , i) => (
        <AccordionItem className="border-2 border-thertiary p-1 md:p-2 rounded-3xl" key={q.id}>
          <AccordionTrigger className="flex items-center gap-4 hover:underline-offset-2 decoration-blue-superlight">
            <div className="flex items-center gap-2">
              <p className="size-8 md:size-7 flex justify-center items-center bg-blue-superlight text-secondary text-sm md:text-md rounded-full pt-1">
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
