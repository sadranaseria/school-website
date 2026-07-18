"use client";

import { deleteMajor } from "@/app/admin/actions";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const DeleteMajorButton = ({ majorId } : { majorId : number }) => {
    const router = useRouter();

  return (
    <Button 
    variant="destructive" 
    onClick={ async () => {
        try {
            await deleteMajor(majorId);
            router.push('/admin/majors');
        } catch (error) {
            throw new Error();
        }
    }}>
      حذف رشته
    </Button>
  );
};

export default DeleteMajorButton;
