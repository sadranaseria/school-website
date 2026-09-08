import { prisma } from "@/prisma/client";
import PassedForm from "../../_components/PassedForm";

const EditPassedPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const passed = await prisma.passed.findUnique({
    where: { id: parseInt(id) },
    include : { images : true }
  })

  if (!passed) return null;
  
  return (
    <div className="max-w-4xl mx-auto">
      <PassedForm passed={passed} />
    </div>
  )
}

export default EditPassedPage;