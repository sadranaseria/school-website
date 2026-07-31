import useFile from "../../store";
import Uploader from "./_components/Uploader";

const GalleryPage = () => {
  const files = useFile((state) => state.files);
  return (
    <div>
      <h2 className="mb-5">عکس های هنرستان</h2>
      <Uploader />
      <div className="grid grid-cols-1 md:grid-cols-3">
        {files.map((file) => (
          <div className="w-md" key={file.id}>
            <img className="w-full" src={file.objectUrl} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
