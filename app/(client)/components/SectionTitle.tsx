import Link from "next/link";
import { LuLink } from "react-icons/lu";
import { HiArrowNarrowLeft } from "react-icons/hi";

interface Props {
  title: string;
  href: string;
  viewMore?: boolean;
  viewMoreText?: string;
  viewMoreLink?: string;
}

const SectionTitle = ({ title, href , viewMore , viewMoreText , viewMoreLink }: Props) => {
  if (!href) return null;

  return (
    <div className='mb-20 flex gap-10 items-center'>
      {!viewMore && <div className="w-full h-px bg-linear-to-r from-gray-300 to-gray-200"></div>}
      <h2 className='group gap-2 text-primary text-xl md:text-t2 font-bold flex items-center justify-center shrink-0'>
        {title}
        <Link href={href} className="hidden group-hover:block">
          <LuLink className="size-4 stroke-primary" />
        </Link>
      </h2>
      <div className={`w-full h-px ${viewMore ? 'bg-gray-300' : 'bg-linear-to-l from-gray-300 to-gray-200'}`}></div>
      {viewMore && (
        <Link className="w-30 flex items-center gap-2" href={viewMoreLink ?? ''}>
          {viewMoreText}
          <HiArrowNarrowLeft />
        </Link>
      )}
    </div>
  );
};

export default SectionTitle;
