"use client";

import { deleteMajor } from "@/app/admin/actions";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const DeleteMajorButton = ({ majorId } : { majorId : number }) => {
    const [isloading , setLoading] = useState(false);
    const router = useRouter();

  return (
    <Button 
    variant="destructive" 
    onClick={ async () => {
        try {
            setLoading(true);
            await deleteMajor(majorId);
            toast.success('رشته با موفقیت حذف شد' , { position : 'top-center' });
            router.push('/admin/majors');
        } catch (error) {
            setLoading(false);
            toast.error('خطایی در هنگام حذف رشته رخ داد' , { position : 'top-center' });
        }
    }}>
        { isloading && <Spinner /> }
      حذف رشته
    </Button>
  );
};

export default DeleteMajorButton;
