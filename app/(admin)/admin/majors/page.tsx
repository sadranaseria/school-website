import { Button } from "@/components/ui/button";
import { prisma } from "@/prisma/client";
import Link from "next/link";
import MajorsTable from "./_components/MajorsTable";
import { Metadata } from "next";

const MajorsPage = async () => {
  const majors = await prisma.major.findMany();
  return (
    <div className="w-full md:max-w-400 overflow-y-auto">
      <Button className='mb-5'>
        <Link href="/admin/majors/new">رشته جدید</Link>
      </Button>
      <MajorsTable majors={majors} />
    </div>
  );
};

export const metadata : Metadata = {
  title : 'طهرانی ادمین - رشته ها',
  description : 'This page for admin and just admin can enter it. And admin can see majors'
}

export default MajorsPage;
