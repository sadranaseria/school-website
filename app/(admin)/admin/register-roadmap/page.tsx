import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { prisma } from "@/prisma/client";
import RoadmapForm from "./RoadmapForm";

const RegisterRoadmapPage = async () => {
  const steps = await prisma.roadmap.findMany({ orderBy : { id : 'asc' }});

  return (
    <section className="max-w-sm mx-auto">
      {steps.map((step, i) => (
        <div key={step.id}>
          <Card className="w-full gap-0 border-2 border-primary text-center rounded-lg">
            <CardHeader>{i + 1}</CardHeader>
            <CardContent>
              <RoadmapForm step={step} />
            </CardContent>
          </Card>
          <div className="w-0.5 bg-primary h-20 rounded-full mx-auto"></div>
        </div>
      ))}
      <RoadmapForm /> {/* as a button */}
    </section>
  );
};

export default RegisterRoadmapPage;
