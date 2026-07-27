import {
  Timeline,
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
    <Timeline dir="ltr">
      {milestones.map((item) => (
        <TimelineItem
          key={item.id}
          step={item.id}
          className={cn(
            "w-[calc(50%-1.5rem)] wrap-anywhere odd:ms-auto even:me-auto even:text-right even:group-data-[orientation=vertical]/timeline:ms-0 even:group-data-[orientation=vertical]/timeline:me-8",
            "even:group-data-[orientation=vertical]/timeline:**:data-[slot=timeline-indicator]:-right-6 even:group-data-[orientation=vertical]/timeline:**:data-[slot=timeline-indicator]:left-auto",
            "even:group-data-[orientation=vertical]/timeline:**:data-[slot=timeline-indicator]:translate-x-1/2 even:group-data-[orientation=vertical]/timeline:**:data-[slot=timeline-separator]:-right-6",
            "even:group-data-[orientation=vertical]/timeline:**:data-[slot=timeline-separator]:left-auto even:group-data-[orientation=vertical]/timeline:**:data-[slot=timeline-separator]:translate-x-1/2",
          )}
        >
          <TimelineHeader>
            <TimelineSeparator />
            <TimelineDate>{item.title}</TimelineDate>
            <TimelineTitle>{item.description}</TimelineTitle>
            <TimelineIndicator />
          </TimelineHeader>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

const milestones = [
  {
    id: 1,
    title: "مرحله اول",
    description:
      "بللبلريالبلّبللبلريالبلّبللبلريالبلّبللبلريالبلّبللبلريالبلّبللبلريالبلّبللبلريالبلّبللبلريالبلّ",
  },
  {
    id: 2,
    title: "مرحله دوم",
    description: "بللبلريالبلّ",
  },
  {
    id: 3,
    title: "مرحله سوم",
    description: "بللبلريالبلّ",
  },
  {
    id: 4,
    title: "مرحله چهارم",
    description: "Series A",
  },
  {
    id: 5,
    title: "مرحله پنجم",
    description: "Global Expansion",
  },
];

export default Roadmap;
