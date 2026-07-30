"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const QusetionAccordion = () => {
  return (
      <Accordion
        dir="rtl"
        className="max-w-7xl mx-auto p-4 space-y-20"
        defaultValue={["billing"]}
      >
        <AccordionItem className="border-2 border-thertiary p-4 rounded-3xl">
          <AccordionTrigger className="flex items-center gap-4 hover:underline-offset-2 decoration-blue-superlight">
            <div className="flex items-center gap-2">
              <p className="size-12 flex justify-center items-center bg-blue-superlight text-secondary text-xl rounded-full">
                1
              </p>
              <p className="text-secondary text-5xl">sdsds</p>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
            iure enim quae molestiae doloremque aperiam mollitia quam?
            Perferendis voluptatibus sapiente iusto ipsam libero vel incidunt
            voluptatem earum voluptates! Suscipit, blanditiis!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className="border-2 border-thertiary p-4 rounded-3xl">
          <AccordionTrigger className="flex items-center gap-4 hover:underline-offset-2 decoration-blue-superlight">
            <div className="flex items-center gap-2">
              <p className="size-12 flex justify-center items-center bg-blue-superlight text-secondary text-xl rounded-full">
                1
              </p>
              <p className="text-secondary text-5xl">sdsds</p>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
            iure enim quae molestiae doloremque aperiam mollitia quam?
            Perferendis voluptatibus sapiente iusto ipsam libero vel incidunt
            voluptatem earum voluptates! Suscipit, blanditiis!
          </AccordionContent>
        </AccordionItem>
      </Accordion>
  );
};

export default QusetionAccordion;
