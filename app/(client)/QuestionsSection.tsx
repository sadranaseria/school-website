import ObserverProvider from "./components/ObserverProvider";
import SectionTitle from "./components/SectionTitle";
import QusetionAccordion from "./QusetionAccordion";

const QuestionsSection = () => {
  return (
    <ObserverProvider id="questions">
      <SectionTitle title="سوالات متداول" href="#questions" />
      <div className="text-center space-y-2">
        <h2 className="text-2xl md:text-6xl text-secondary font-bold">
          به پرسش های شما پاسخ می‌دهیم
        </h2>
        <p className="text-lg md:text-4xl text-secondary leading-8 md:leading-14 font-extralight">
          در این بخش می‌توانید پاسخ سوالات رایج درباره هنرستان و خدمات آموزشی ما
          را مشاهده کنید
        </p>
      </div>
      <QusetionAccordion />
    </ObserverProvider>
  );
};

export default QuestionsSection;
