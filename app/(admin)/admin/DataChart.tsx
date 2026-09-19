'use client';

import { Major } from "@/lib/generated/prisma/client";
import { ChartContainer, type ChartConfig } from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, Line, Tooltip, XAxis, YAxis } from "recharts";

const DataChart = ({ majors }: { majors: Major[] }) => {
  const chartData: { name: string, students: number }[] = majors.map(major => ({
    name: major.title,
    students: major.students
  }));

  const chartConfig = {
    major: {
      label: 'Major',
      color : '#000'
    }
  } satisfies ChartConfig
  
  return (
    <ChartContainer config={chartConfig} className="w-160">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <Tooltip defaultIndex={2} wrapperClassName="rounded-lg" />
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="students" className="fill-secondary" radius={20} />
      </BarChart>
    </ChartContainer>
  )
};

export default DataChart;