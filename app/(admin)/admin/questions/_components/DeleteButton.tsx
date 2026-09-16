'use client';

import { Button } from "@/components/ui/button";
import { deleteQuestion } from "../actions";
import { useState } from "react";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "sonner";

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
    <Button variant="destructive" onClick={handleDelete}>{isLoading ? <div className="flex gap-2 items-center"><Spinner /> در حال حذف</div> : "حذف سوال"}</Button>
  )
};

export default DeleteButton;