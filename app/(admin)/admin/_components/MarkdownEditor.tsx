const SimpleMdeReact = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});
import "easymde/dist/easymde.min.css";
import dynamic from "next/dynamic";

interface Props {
  id: string;
  value: string;
  onChange: (value: string) => void;
}

const MarkdownEditor = ({ id, value, onChange }: Props) => {
  return (
    <SimpleMdeReact
      id={id}
      className="text-right"
      value={value}
      onChange={onChange}
    />
  );
};

export default MarkdownEditor;
