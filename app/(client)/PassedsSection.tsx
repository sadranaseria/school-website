import { prisma } from "@/prisma/client";
import ObserverProvider from "./components/ObserverProvider";
import SectionTitle from "./components/SectionTitle";
import PassedCard from "./PassedCard";

const PassedsSection = async () => {
  const passeds = await prisma.passed.findMany({
    include: { images: true },
  });

  return (
    <section className="py-20">
      <ObserverProvider id="passeds">
        <SectionTitle title="قبولی ها" href="#passeds" />
        <div className="flex gap-4 my-20">
            {passeds.map((passed) => (
              <PassedCard key={passed.id} passed={passed} />
            ))}
          </div>
      </ObserverProvider>
    </section>
  );
};

export default PassedsSection;
