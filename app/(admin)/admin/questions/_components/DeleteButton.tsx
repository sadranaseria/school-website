'use client';

import { Button } from "@/components/ui/button";
import { deleteQuestion } from "../actions";
import { useState } from "react";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "sonner";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";

const DeleteButton = ({ id }: { id: number }) => {
  const [isLoading, setIsLoading] = useState(false);
  
  const handleDelete = async () => {
    try {
      setIsLoading(true);
      await deleteQuestion(id);
      toast.success('سوال با موفقیت حذف شد');
    } catch (error) {
      console.log(error);
      toast.error('سوال حذف نشد');
    } finally {
      setIsLoading(false);
    }
  }
  
  return (
    <AlertDialog>
      <AlertDialogTrigger
        render={<Button variant="destructive">حذف سوال</Button>}
      />
      <AlertDialogContent dir="rtl">
        <AlertDialogHeader>
          <AlertDialogTitle>
            آیا از پاک کردن این سوال اطمینان دارید؟
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>خیر</AlertDialogCancel>
          <AlertDialogAction
            disabled={isLoading}
            variant="destructive"
            onClick={handleDelete}
          >
            {isLoading && <Spinner />}
            بله
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
};

export default DeleteButton;