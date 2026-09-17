import { Button } from "@/components/ui/button";
import { deleteRoadmapStep } from "./actions";

const DeleteStepButton = ({ stepId }: { stepId: number }) => {
  const hanldeDelete = async () => {
    try {
      await deleteRoadmapStep(stepId);
    } catch (error) {
      console.log(error);
    } finally {
      
    }
  }
  
  return (
    <Button variant="destructive" onClick={hanldeDelete}>حذف مرحله</Button>
  )
}

export default DeleteStepButton;