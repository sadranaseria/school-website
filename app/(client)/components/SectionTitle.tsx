import Link from "next/link";
import { LuLink } from "react-icons/lu";

interface Props {
  title: string;
  href: string;
}

const SectionTitle = ({ title, href }: Props) => {
  if (!href) return null;

  return (
    <div className='group mb-20 flex gap-10 items-center'>
      <div className="w-full h-px bg-linear-to-r from-gray-300 to-gray-200"></div>
      <h2 className='gap-2 text-primary text-xl md:text-[24px] font-bold flex items-center justify-center shrink-0'>
        {title}
        <Link href={href} className="hidden group-hover:block">
          <LuLink className="size-4 stroke-primary" />
        </Link>
      </h2>
      <div className="w-full h-px bg-linear-to-l from-gray-300 to-gray-200"></div>
    </div>
  );
};

export default SectionTitle;
