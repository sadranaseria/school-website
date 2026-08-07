"use client";

import dynamic from "next/dynamic";
import NewMajorPageLoading from "./loading";
import { Metadata } from "next";
;

const MajorForm = dynamic(() => import("../_components/MajorForm"), {
  ssr: false, 
  loading : () => <NewMajorPageLoading />
});

const NewMajorsPage = () => {
  return <MajorForm />;
};

export const metadata : Metadata = {
  title : 'طهرانی ادمین - رشته - جدید',
  description : 'This page for admin and just admin can enter it. And admin can add a new major'
}

export default NewMajorsPage;
