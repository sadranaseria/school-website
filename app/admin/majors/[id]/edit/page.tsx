import React from "react";
import dynamic from "next/dynamic";
import { prisma } from "@/prisma/client";
import EditForm from "./_components/EditForm";

const EditMajorPage = async ({ params } : { params : Promise<{ id : string }>}) => {
  const { id } = await params;
  const major = await prisma.major.findUnique({
    where : { id : parseInt(id) }
  })

  if(!major) return

  return <EditForm major={major} />;
};

export default EditMajorPage;
