import { prisma } from "@/prisma/client";
import QuestionForm from "../../_components/QuestionForm";

const EditQuestionPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const question = await prisma.question.findUnique({
    where : { id : parseInt(id) }
  })

  if (!question) return null;
  
  return (
    <div className="max-w-3xl mx-auto">
      <QuestionForm question={question} />
    </div>
  );
};

export default EditQuestionPage;