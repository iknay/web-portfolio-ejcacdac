import Logo from "@/public/icons/logo.svg";
import { NavbarLang } from "@/src/lib/lang/NavbarLang";
import Image from "next/image";

const TopNavbar = () => {
  return (
    <header className="flex w-full justify-between px-12 py-6">
      <Image src={Logo} alt="Logo" sizes="100%" className="w-14 h-8" />
      <div className="flex gap-6 h-full">
        {NavbarLang.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="font-medium text-lg glass-card h-fit px-5 py-4"
          >
            {item.label}
          </a>
        ))}
      </div>
    </header>
  );
};

export default TopNavbar;
