'use client';

import { Button } from "@/components/ui/button";
import { HiTrash } from "react-icons/hi2";

const DeletePassedButton = () => {
  return (
    <Button variant='destructive'><HiTrash className="size-5" /></Button>
  )
}

export default DeletePassedButton;