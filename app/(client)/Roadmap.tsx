import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle
} from "@/components/reui/timeline";
import { type Roadmap } from "@/lib/generated/prisma/client";

const Roadmap = ({ steps }: { steps: Roadmap[] }) => {
  if (!steps) return null;
    
  return (
    <Timeline
      orientation="horizontal"
      className="w-full max-w-xl mx-auto mt-20"
      dir="rtl"
    >
      {steps.map((step) => (
        <TimelineItem
          key={step.id}
          step={step.id}
          className="group-data-[orientation=horizontal]/timeline:mt-2"
        >
          <TimelineHeader>
            <TimelineSeparator className="group-data-[orientation=horizontal]/timeline:top-8 left-0" />
            <TimelineDate className="mb-10">مرحله {step.id.toLocaleString('fa-IR')}</TimelineDate>
            <TimelineIndicator className="group-data-[orientation=horizontal]/timeline:top-8 right-0 bg-primary size-5" />
          </TimelineHeader>
          <TimelineTitle>{step.title}</TimelineTitle>
          <TimelineContent>{step.description}</TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default Roadmap;
