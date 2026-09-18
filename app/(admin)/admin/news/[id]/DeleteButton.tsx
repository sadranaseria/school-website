"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { deleteNews } from "../actions";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "sonner";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";

const DeleteButton = ({ newsId }: { newsId: number }) => {
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    try {
      setLoading(true);
      await deleteNews(newsId);
      toast.success('خبر با موفقیت حذف شد');
    } catch (error) {
      console.log(error);
      toast.error('خبر با حذف نشد');
    } finally {
      setLoading(false);
      router.push("/admin/news");
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger
        render={<Button variant="destructive">حذف خبر</Button>}
      />
      <AlertDialogContent dir="rtl">
        <AlertDialogHeader>
          <AlertDialogTitle>
            آیا از پاک کردن این خبر اطمینان دارید؟
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

export default DeleteButton;
