import Image from "next/image";
import ObserverProvider from "./components/ObserverProvider";
import SectionTitle from "./components/SectionTitle";
import Imagesource from '@/public/jellies.webp';

const InfoSection = () => {
  return (
    <ObserverProvider id="info">
      <SectionTitle title="درباره هنرستان" href="#info" />
      <div className="flex justify-between px-30">
        <Image src={Imagesource} alt="image" width={500} height={500} className="size-100 object-cover rounded-4xl" />
        <div className="max-w-4xl space-y-4">
          <h2 className="text-2xl text-primary">هنرستان طهرانی مقدم</h2>
          <p className="text-lg leading-8">متن تستی جهت نمایشجهت نمایشجهت نمایشجهت نمایشجهت نمایشجهت نمایشجهت نمایشجهت نمایشجهت نمایشجهت نمایشجهت نمایشجهت نمایشجهت نمایشجهت نمایش </p>
        </div>
      </div>
    </ObserverProvider>
  )
}

export default InfoSection;