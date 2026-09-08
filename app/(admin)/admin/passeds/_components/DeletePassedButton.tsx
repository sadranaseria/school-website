'use client';

import { Button } from "@/components/ui/button";
import { HiTrash } from "react-icons/hi2";
import { deletePassed } from "../actions";

const DeletePassedButton = ({ passedId }: { passedId: number }) => {

  const handleDelete = async () => {
    try {
      await deletePassed(passedId);
    } catch (error) {
      console.log(error);
    } finally {
      
    }
  }
  return (
    <Button variant='destructive' onClick={handleDelete}><HiTrash className="size-5" /></Button>
  )
}

export default DeletePassedButton;