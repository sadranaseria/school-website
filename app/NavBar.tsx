import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  const links: { lebel: string; value: string; href: string }[] = [
    { lebel: "رشته ها", value: "Majros", href: "#majors" },
    { lebel: "گالری آثار", value: "Gallery", href: "#gallery" },
    { lebel: "سوالات متداول", value: "Questions", href: "#questions" },
    { lebel: "قدم های ثبت نام", value: "Roadmap", href: "#roadmap" },
  ];

  return (
    <nav className="bg-white flex fixed top-5">
      <div className=""></div>
      <ul className="flex gap-5">
        {links.map((link) => (
          <li key={link.value}>
            <Link href={link.href}>{link.lebel}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
