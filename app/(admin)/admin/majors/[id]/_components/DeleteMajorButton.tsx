"use client";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { deleteMajor } from "../../actions";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const DeleteMajorButton = ({ majorId }: { majorId: number }) => {
  const [isloading, setLoading] = useState(false);
  const router = useRouter();

  const onDeletemajor = async () => {
    try {
      setLoading(true);
      await deleteMajor(majorId);
      toast.success("رشته با موفقیت حذف شد", { position: "top-center" });
      router.push("/admin/majors");
    } catch (error) {
      setLoading(false);
      toast.error("خطایی در هنگام حذف رشته رخ داد", { position: "top-center" });
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger
        render={<Button variant="destructive">حذف رشته</Button>}
      />
      <AlertDialogContent dir="rtl">
        <AlertDialogHeader>
          <AlertDialogTitle>
            آیا از پاک کردن این رشته اطمینان دارید؟
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>خیر</AlertDialogCancel>
          <AlertDialogAction onClick={onDeletemajor}>
            بله {isloading && <Spinner />}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteMajorButton;
