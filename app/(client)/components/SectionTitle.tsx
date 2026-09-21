import Link from "next/link";
import { LuLink } from "react-icons/lu";

interface Props {
  title: string;
  href: string;
}

const SectionTitle = ({ title, href }: Props) => {
  if (!href) return null;

  return (
    <div className='group mb-20'>
      <h2 className='gap-2 text-primary text-xl md:text-7xl flex items-center justify-center'>
        {title}
        <Link href={href} className="hidden group-hover:block">
          <LuLink className="size-7 stroke-primary" />
        </Link>
      </h2>
    </div>
  );
};

export default SectionTitle;
