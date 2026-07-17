"use client";

import dynamic from "next/dynamic";
import NewMajorPageLoading from "./loading";
;

const MajorForm = dynamic(() => import("../_components/MajorForm"), {
  ssr: false, 
  loading : () => <NewMajorPageLoading />
});

const NewMajorsPage = () => {
  return <MajorForm />;
};

export default NewMajorsPage;
