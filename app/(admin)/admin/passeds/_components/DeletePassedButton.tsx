"use client";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { useState } from "react";
import { HiTrash } from "react-icons/hi2";
import { deletePassed } from "../actions";
import { toast } from "sonner";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";

const DeletePassedButton = ({ passedId }: { passedId: number }) => {
  const [isLoading, setLoading] = useState(false);

  const handleDelete = async () => {
    try {
      setLoading(true);
      await deletePassed(passedId);
      toast.success('قبولی با موفقیت حذف شد');
    } catch (error) {
      console.log(error);
      toast.error('قبولی حذف نشد');
    } finally {
      setLoading(false);
    }
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger
        render={<Button variant="destructive"><HiTrash className="size-5" /></Button>}
      />
      <AlertDialogContent dir="rtl">
        <AlertDialogHeader>
          <AlertDialogTitle>
            آیا از پاک کردن این قبولی اطمینان دارید؟
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
  );
};

export default DeletePassedButton;
