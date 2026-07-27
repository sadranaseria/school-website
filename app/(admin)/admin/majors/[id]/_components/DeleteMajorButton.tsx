"use client";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { deleteMajor } from "../../../actions";

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
    <Button variant="destructive" onClick={onDeletemajor}>
      {isloading && <Spinner />}
      حذف رشته
    </Button>
  );
};

export default DeleteMajorButton;
