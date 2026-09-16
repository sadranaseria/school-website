'use client';

import { Button } from "@/components/ui/button";
import { deleteQuestion } from "../actions";

const DeleteButton = ({ id } : { id : number }) => {
  const handleDelete = async () => {
    try {
      await deleteQuestion(id);
    } catch (error) {
      console.log(error);
    } finally {
      
    }
  }
  
  return (
    <Button variant="destructive" onClick={handleDelete}>حذف سوال</Button>
  )
};

export default DeleteButton;