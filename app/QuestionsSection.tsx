import React from 'react'
import SectionTitle from './components/SectionTitle'
import QusetionAccordion from './QusetionAccordion'

const QuestionsSection = () => {
  return (
    <div>
        <SectionTitle title='سوالات متداول' />
        <div className="text-center space-y-10">
          <h2 className='text-7xl text-secondary font-bold'>به پرسش های شما پاسخ می‌دهیم</h2>
          <p className='w-190 mx-auto text-4xl text-secondary leading-14 font-light'>در این بخش می‌توانید پاسخ سوالات رایج درباره هنرستان و خدمات آموزشی ما را مشاهده کنید</p>
        </div>
        <QusetionAccordion />
    </div>
  )
}

export default QuestionsSection