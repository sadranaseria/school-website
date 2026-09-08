"use client";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { useState } from "react";
import { HiTrash } from "react-icons/hi2";
import { deletePassed } from "../actions";
import { toast } from "sonner";

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
    <Button variant="destructive" onClick={handleDelete}>
      {isLoading ? <Spinner /> : <HiTrash className="size-5" />}
    </Button>
  );
};

export default DeletePassedButton;
