"use client";

import useImage from "@/app/(admin)/admin/gallery/store";
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
  cid?: string;
  imageName: string;
}

const DeleteButton = ({ cid, imageName }: Props) => {
  const [isLoading, setLoading] = useState(false);
  const deleteImageState = useImage((state) => state.deleteImageState);
  const handleDelete = async () => {
    if (cid) {
      setLoading(true);
      const result = await deleteImage(cid);
      if (result.success) {
        toast.success(`عکس ${imageName} حذف شد`);
        setLoading(false);
        deleteImageState(cid);
      } else {
        console.log("doesnt work");
        setLoading(false);
        toast.error("خطایی رخ داد");
      }
    } else {
      console.log("cid no");
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
          <AlertDialogAction disabled={isLoading} variant='destructive' onClick={handleDelete}>
            بله {isLoading && <Spinner />}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteButton;
