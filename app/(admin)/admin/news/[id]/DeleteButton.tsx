"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { deleteNews } from "../actions";
import { Spinner } from "@/components/ui/spinner";

const DeleteButton = ({ newsId }: { newsId: number }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleDelete = async (newsId: number) => {
    try {
      setLoading(true);
      await deleteNews(newsId);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      router.push("/admin/news");
    }
  };

  return (
    <Button variant='destructive' className="w-full mt-4" type="submit" onClick={() => handleDelete(newsId)}>
      {loading ? (
        <div className="flex items-center gpa-4">
          <Spinner />
          در حال حذف خبر
        </div>
      ) : (
        "حذف خبر"
      )}
    </Button>
  );
};

export default DeleteButton;
