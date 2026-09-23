import { prisma } from "@/prisma/client";
import ObserverProvider from "./components/ObserverProvider";
import SectionTitle from "./components/SectionTitle";
import QusetionAccordion from "./QusetionAccordion";

const QuestionsSection = async () => {
  const questions = await prisma.question.findMany();
  
  return (
    <section className="py-20">
      <ObserverProvider id="questions">
        <SectionTitle title="سوالات متداول" href="#questions" />
        <section className="flex gap-20">
          <div className="text-center space-y-6">
            <h2 className="text-2xl md:text-t2 text-secondary font-bold">
              به پرسش های شما پاسخ می‌دهیم
            </h2>
            <p className="text-body md:text-caption text-secondary leading-8 md:leading-8 font-extralight">
              در این بخش می‌توانید پاسخ سوالات رایج درباره هنرستان و خدمات آموزشی ما
              را مشاهده کنید
            </p>
          </div>
          <QusetionAccordion questions={questions} />
        </section>
      </ObserverProvider>
    </section>
  );
};

export default QuestionsSection;
