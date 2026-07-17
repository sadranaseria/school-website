'use client';

import dynamic from "next/dynamic";

const MajorForm = dynamic(() => import('../_components/MajorForm'), {
  ssr: false,
});

const NewMajorsPage = () => {
  return <MajorForm />;
};

export default NewMajorsPage;
