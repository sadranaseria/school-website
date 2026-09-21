import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/reui/timeline";
import { cn } from "@/lib/utils";

const Roadmap = () => {
  return (
    <Timeline
      orientation="horizontal"
      className="w-full max-w-xl mx-auto mt-20"
      dir="rtl"
    >
      {items.map((item) => (
        <TimelineItem
          key={item.id}
          step={item.id}
          className="group-data-[orientation=horizontal]/timeline:mt-2"
        >
          <TimelineHeader>
            <TimelineSeparator className="group-data-[orientation=horizontal]/timeline:top-8 left-0" />
            <TimelineDate className="mb-10">{item.title}</TimelineDate>
            <TimelineIndicator className="group-data-[orientation=horizontal]/timeline:top-8 right-0 bg-primary size-5" />
          </TimelineHeader>
          <TimelineContent>{item.description}</TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

const items = [
  {
    id: 1,
    date: "Oct 2024",
    title: "Kickoff",
    description: "Defining project goals and core team selection.",
  },
  {
    id: 2,
    date: "Nov 2024",
    title: "Discovery",
    description: "User research and requirements gathering phase.",
  },
  {
    id: 3,
    date: "Dec 2024",
    title: "Implementation",
    description: "Core development and sprint execution.",
  },
];

export default Roadmap;
