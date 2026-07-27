import Image, { StaticImageData } from "next/image";
import logo from "../../public/icon0.svg";
import Link from "next/link";
import phone from "../../public/Vector@2x.png";
import map from "../../public/Vector.png";
import email from "../../public/Vector (1).png";

const Footer = () => {
  return (
    <footer className="flex gap-48 pt-6 bg-primary text-white mt-20">
      <div className="flex flex-col items-center gap-3">
        <div className="size-20 pt-1.5 flex justify-center items-center bg-white rounded-full">
          <Image src={logo} alt="footer-logo" />
        </div>
        <h2 className="w-40 text-center">
          هنرستان فنی و حرفه ای شهید طهرانی مقدم
        </h2>
      </div>
      <ul className="space-y-2">
        <h3 className="w-30 border-b-2 mb-2">دسترسی سریع</h3>
        {links.map((link) => (
          <li key={link.value}>
            <Link href={link.href}>{link.lebel}</Link>
          </li>
        ))}
      </ul>
      <ul className="space-y-4">
        <h3 className="w-30 border-b-2 mb-2">ارتباط با ما</h3>
        {contacts.map((contact) => (
          <li key={contact.id} className="flex items-center gap-4">
            <Image className="size-7" src={contact.logo} alt="contact-logo" />
            <p>{contact.value}</p>
          </li>
        ))}
      </ul>
    </footer>
  );
};

const links: { lebel: string; value: string; href: string }[] = [
  { lebel: "رشته ها", value: "Majros", href: "#majors" },
  { lebel: "گالری آثار", value: "Gallery", href: "#gallery" },
  { lebel: "سوالات متداول", value: "Questions", href: "#questions" },
  { lebel: "قدم های ثبت نام", value: "Roadmap", href: "#roadmap" },
];

const contacts: { id: number; value: string; logo: StaticImageData }[] = [
  { id: 0, value: "09012345678", logo: phone },
  { id: 1, value: "تهران ، خیابان ، پلاک", logo: map },
  { id: 2, value: "info@Honarestan.ir", logo: email },
];

export default Footer;
