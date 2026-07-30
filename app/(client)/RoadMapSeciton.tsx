import ObserverProvider from "./components/ObserverProvider";
import SectionTitle from "./components/SectionTitle";
import { useObserver } from "./hooks/useObserver";
import Roadmap from "./Roadmap";

const RoadMapSeciton = () => {
  return (
    <ObserverProvider id="roadmap">
      <SectionTitle title="قدم های ثبت نام" href="#roadmap" />
      <div className="w-full mx-auto flex items-center justify-between">
        <div className="space-y-10">
          <h2 className="text-thertiary text-7xl font-black">راهنمای <span className="text-blue-light">ثبت نام</span> در هنرستان</h2>
          <p className="text-thertiary font-extralight text-5xl">برای ثبت نام در هنرستان مراحل زیر را دنبال کنید.</p>
          <p className="text-thertiary font-extralight text-5xl">برای ثبت نام در هنرستان مراحل زیر را دنبال کنید.</p>
          <p className="text-thertiary font-extralight text-5xl">برای ثبت نام در هنرستان مراحل زیر را دنبال کنید.</p>
          <p className="text-thertiary font-extralight text-5xl">برای ثبت نام در هنرستان مراحل زیر را دنبال کنید.</p>
          <p className="text-thertiary font-extralight text-5xl">برای ثبت نام در هنرستان مراحل زیر را دنبال کنید.</p>
          <p className="text-thertiary font-extralight text-5xl">برای ثبت نام در هنرستان مراحل زیر را دنبال کنید.</p>
          <p className="text-thertiary font-extralight text-5xl">برای ثبت نام در هنرستان مراحل زیر را دنبال کنید.</p>
        </div>
        <Roadmap />
      </div>
    </ObserverProvider>
  );
};



export default RoadMapSeciton;
