"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { useState } from "react";
import { LuX } from "react-icons/lu";
import { toast } from "sonner";
import { deleteImage } from "../actions";

interface Props {
  imageId: number;
}

const DeleteButton = ({ imageId }: Props) => {
  const [isLoading, setLoading] = useState(false);
  const handleDelete = async () => {
    try {
      setLoading(true);
      await deleteImage(imageId);
      toast.success(`عکس ${imageId} حذف شد`);
    } catch (error) {
      console.log(error);
      toast.error(`عکس ${imageId} حذف نشد`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger
        render={
          <Button
            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100"
            variant="destructive"
          >
            <LuX />
          </Button>
        }
      />
      <AlertDialogContent dir="rtl">
        <AlertDialogHeader>
          <AlertDialogTitle>
            آیا از پاک کردن این عکس اطمینان دارید؟
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>خیر</AlertDialogCancel>
          <AlertDialogAction
            disabled={isLoading}
            variant="destructive"
            onClick={handleDelete}
          >
            بله {isLoading && <Spinner />}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteButton;
