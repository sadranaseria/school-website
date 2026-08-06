"use client";

import useImage from "@/app/(admin)/admin/gallery/store";
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
  const [pending, setPending] = useState(false);
  const deleteImageState = useImage((state) => state.deleteImageState);
  const handleDelete = async () => {
    if (cid) {
      setPending(true);
      const result = await deleteImage(cid);
      if (result.success) {
        toast.success(`عکس ${imageName} حذف شد`);
        setPending(false);
        deleteImageState(cid);
      } else {
        console.log("doesnt work");
        setPending(false);
        toast.error("خطایی رخ داد");
      }
    } else {
      console.log("cid no");
    }
  };

  return (
    <Button
      onClick={handleDelete}
      className="absolute top-2 right-2 opacity-0 group-hover:opacity-100"
      variant="destructive"
      disabled={pending}
    >
      {pending ? <Spinner /> : <LuX />}
    </Button>
  );
};

export default DeleteButton;
