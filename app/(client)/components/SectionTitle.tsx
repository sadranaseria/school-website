import Link from "next/link";
import { LuLink } from "react-icons/lu";

interface Props {
  title: string;
  href: string;
}

const SectionTitle = ({ title ,href }: Props) => {
  if (!href) return null;

  return (
      <h2 className="group flex items-center justify-center gap-2 text-center text-primary text-4xl my-10 pt-8">
        {title}
        <Link href={href} className="hidden group-hover:block">
          <LuLink className="size-5 stroke-primary" />
        </Link>
      </h2>
  );
};

export default SectionTitle;
