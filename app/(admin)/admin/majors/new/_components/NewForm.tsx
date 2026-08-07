"use client";

import dynamic from "next/dynamic";
const MajorForm = dynamic(() => import("../../_components/MajorForm"), {
  ssr: false,
});

const NewForm = () => {
  return <MajorForm />;
};

export default NewForm;
