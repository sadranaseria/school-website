'use client';

import { Button } from "@/components/ui/button";
import { deleteRoadmapStep } from "./actions";
import { useState } from "react";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "sonner";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";

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
    <AlertDialog>
      <AlertDialogTrigger
        render={<Button variant="destructive">حذف مرحله</Button>}
      />
      <AlertDialogContent dir="rtl">
        <AlertDialogHeader>
          <AlertDialogTitle>
            آیا از پاک کردن این مرحله اطمینان دارید؟
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>خیر</AlertDialogCancel>
          <AlertDialogAction
            disabled={isLoading}
            variant="destructive"
            onClick={hanldeDelete}
          >
            {isLoading && <Spinner />}
            بله
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default DeleteStepButton;