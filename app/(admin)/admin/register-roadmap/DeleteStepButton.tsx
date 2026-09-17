'use client';

import { Button } from "@/components/ui/button";
import { deleteRoadmapStep } from "./actions";
import { useState } from "react";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "sonner";

const DeleteStepButton = ({ stepId }: { stepId: number }) => {
  const [isLoading , setLoading] = useState(false);
  
  const hanldeDelete = async () => {
    try {
      setLoading(true);
      await deleteRoadmapStep(stepId);
      toast.success('مرحله با موفقیت حذف شد')
    } catch (error) {
      console.log(error);
      toast.error('مرحله حذف نشد');
    } finally {
      setLoading(false);
    }
  }
  
  return (
    <Button variant="destructive" onClick={hanldeDelete}>{isLoading ? (
      <div className="flex items-center gap-2">
        <Spinner />
    در حال حذف
      </div>
    ) : (
'حذف مرحله'
    )}</Button>
  )
}

export default DeleteStepButton;