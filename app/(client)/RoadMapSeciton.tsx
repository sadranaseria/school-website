import { prisma } from "@/prisma/client";
import ObserverProvider from "./components/ObserverProvider";
import SectionTitle from "./components/SectionTitle";
import Roadmap from "./Roadmap";

const RoadMapSeciton = async () => {
  const steps = await prisma.roadmap.findMany();
  
  return (
    <section className="py-20">
      <ObserverProvider id="roadmap">
        <SectionTitle title="قدم های ثبت نام" href="#roadmap" />
        <div className="w-full text-center mx-auto p-4">
          <div className="space-y-10">
            <h2 className="text-thertiary text-2xl md:text-6xl font-black">راهنمای <span className="text-blue-light">ثبت نام</span> در هنرستان</h2>
            <p className="text-thertiary font-extralight text-lg md:text-4xl">برای ثبت نام در هنرستان مراحل زیر را دنبال کنید.</p>
          </div>
          <Roadmap steps={steps} />
        </div>
      </ObserverProvider>
    </section>
  );
};



export default RoadMapSeciton;
