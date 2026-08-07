import { Metadata } from "next";
import NewForm from "./_components/NewForm";

const NewMajorsPage = () => {
  return <NewForm />;
};

export const metadata : Metadata = {
  title : 'طهرانی ادمین - رشته - جدید',
  description : 'This page for admin and just admin can enter it. And admin can add a new major'
}

export default NewMajorsPage;
