"use client";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { useState } from "react";
import { LuX } from "react-icons/lu";
import { toast } from "sonner";
import { deleteImage } from "../actions";
import useImage from "@/app/(admin)/store";

interface Props {
  id: string;
  imageName: string;
}

const DeleteButton = ({ id, imageName }: Props) => {
  const [pending, setPending] = useState(false);
  const deleteImageState = useImage(state => state.deleteImageState);
  const handleDelete = async () => {
    try {
      setPending(true);
      if (id) await deleteImage(id);
      toast.success(`عکس ${imageName} حذف شد`);
      deleteImageState(id);
      setPending(false);
    } catch (error) {
      console.log(error);
      toast.error("خطایی رخ داد");
      setPending(false);
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
