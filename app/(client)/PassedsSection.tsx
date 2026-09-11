import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ObserverProvider from "./components/ObserverProvider";
import SectionTitle from "./components/SectionTitle";
import { prisma } from "@/prisma/client";
import Image from "next/image";

const PassedsSection = async () => {
  const passeds = await prisma.passed.findMany({
    include: { images: true },
  });

  return (
    <>
      <ObserverProvider id="passeds">
        <SectionTitle title="قبولی ها" href="#passeds" />
        <div className="flex gap-4 my-60">
          {passeds.map((passed) => (
            <Card key={passed.id} className="max-w-90 w-full flex flex-row items-center">
              <CardHeader className="w-35">
                <Image
                  src={passed.images[0].url}
                  alt={`Image of passed ${passed.images[0].passedId}`}
                  width={500}
                  height={500}
                  className="size-20 object-cover rounded-full"
                />
              </CardHeader>
              <div>
                <CardTitle>{passed.name}</CardTitle>
                <CardDescription>{passed.univercity}</CardDescription>
              </div>
            </Card>
          ))}
        </div>
      </ObserverProvider>
    </>
  );
};

export default PassedsSection;
