import ObserverProvider from "./components/ObserverProvider";
import SectionTitle from "./components/SectionTitle";
import Roadmap from "./Roadmap";

const RoadMapSeciton = () => {
  return (
    <ObserverProvider id="roadmap">
      <SectionTitle title="قدم های ثبت نام" href="#roadmap" />
      <div className="w-full text-center mx-auto flex flex-col md:flex-row items-center justify-between p-4">
        <div className="space-y-10">
          <h2 className="text-thertiary text-2xl md:text-6xl font-black">راهنمای <span className="text-blue-light">ثبت نام</span> در هنرستان</h2>
          <p className="text-thertiary font-extralight text-lg md:text-4xl">برای ثبت نام در هنرستان مراحل زیر را دنبال کنید.</p>
        </div>
        <Roadmap />
      </div>
    </ObserverProvider>
  );
};



export default RoadMapSeciton;
