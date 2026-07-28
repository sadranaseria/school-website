import Link from "next/link";
import { LuLink } from "react-icons/lu";

interface Props {
  title: string;
  id : string;
  href: string;
}

const SectionTitle = ({ title, id ,href }: Props) => {
  if (!href) return null;

  return (
    <div className="w-full mx-auto pt-14 flex items-center gap-2" id={id}>
      <h2 className="text-center text-primary text-4xl my-20">
        {title}
      </h2>
        <Link href={href}>
          <LuLink className="size-5 stroke-primary" />
        </Link>
    </div>
  );
};

export default SectionTitle;
