import { Button } from "@/components/ui/button";
import { Major } from "@/lib/generated/prisma/client";
import { prisma } from "@/prisma/client";
import Link from "next/link";
import MajorsTable from "./_components/MajorsTable";

const MajorsPage = async () => {
  const majors = await prisma.major.findMany();
  return (
    <div className="w-400 overflow-y-auto">
      <Button className='mb-5'>
        <Link href="/admin/majors/new">رشته جدید</Link>
      </Button>
      <MajorsTable majors={majors} />
    </div>
  );
};

export default MajorsPage;
