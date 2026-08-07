import { fetchMajor } from "../../../action";
import EditForm from "./_components/EditForm";

const EditMajorPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const major = await fetchMajor(parseInt(id));

  if (!major) return;

  return <EditForm major={major} />;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const major = await fetchMajor(parseInt(id));

  return {
    title: `${major?.title} - ویرایش`,
    description: `This page for admin and just admin can enter it. And this page for edit major by ${major?.id} id`,
  };
}

export default EditMajorPage;
