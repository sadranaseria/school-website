'use client';

import { Button } from "@/components/ui/button";
import { deleteNews } from "../actions";
import { useRouter } from "next/navigation";

const DeleteButton = ({ newsId }: { newsId: number }) => {
  const router = useRouter();

  const handleDelete = async (newsId: number) => {
    try {
      await deleteNews(newsId);
    } catch (error) {
      console.log(error);
    } finally {
      router.push('/admin/news');
    }
  }
  
  return (
    <Button variant='destructive' onClick={() => handleDelete(newsId)}>حذف خبر</Button>
  )
}

export default DeleteButton;