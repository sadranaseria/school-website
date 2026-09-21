import Image, { StaticImageData } from "next/image";
import logo from "../../public/icon0.svg";
import Link from "next/link";
import { HiPhone } from "react-icons/hi2";
import { HiMapPin } from "react-icons/hi2";
import { HiMail } from "react-icons/hi";
import { ReactNode } from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row gap-12 md:gap-16 items-start md:items-stretch bg-linear-to-b from-stone-100 to-indigo-500 text-white px-14 py-16">
      <div className="w-60 flex flex-col items-center gap-3">
        <div className="size-20 pt-1.5 flex justify-center items-center bg-white rounded-full">
          <Image src={logo} alt="footer-logo" />
        </div>
        <h2 className="w-40 text-center">
          هنرستان فنی و حرفه ای شهید طهرانی مقدم
        </h2>
      </div>
      <ul className="space-y-2 w-60">
        <h3 className="w-30 border-b-2 mb-5">دسترسی سریع</h3>
        {links.map((link) => (
          <li key={link.value} className="flex items-center gap-4 group cursor-pointer">
            <div className="w-0 h-1.5 bg-indigo-700 rounded-full group-hover:w-10 transition-all"></div>
            <Link href={link.href}>{link.lebel}</Link>
          </li>
        ))}
      </ul>
      <ul className="space-y-4">
        <h3 className="w-30 border-b-2 mb-5">ارتباط با ما</h3>
        {contacts.map((contact) => (
          <li key={contact.id} className="flex items-center gap-4">
            <span className="size-6">{contact.logo}</span>
            <p>{contact.value}</p>
          </li>
        ))}
      </ul>
    </footer>
  );
};

const links: { lebel: string; value: string; href: string }[] = [
  { lebel: "درباره هنرستان", value: "info", href: "#info" },
  { lebel: "رشته ها", value: "majors", href: "#majors" },
  { lebel: "قبولی ها", value: "passeds", href: "#passeds" },
  { lebel: "گالری آثار", value: "gallery", href: "#gallery" },
  { lebel: "اخبار", value: "news", href: "#news" },
  { lebel: "سوالات متداول", value: "questions", href: "#questions" },
  { lebel: "قدم های ثبت نام", value: "roadmap", href: "#roadmap" },
];

const contacts: { id: number; value: string; logo: ReactNode }[] = [
  { id: 0, value: "09012345678", logo: <HiPhone className="size-full"/> },
  { id: 1, value: "تهران ، خیابان ، پلاک", logo: <HiMapPin className="size-full"/> },
  { id: 2, value: "info@Honarestan.ir", logo: < HiMail className="size-full"/> },
];

export default Footer;
