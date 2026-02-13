import PillNav from "./PillNav";
import { Logo } from "@/public/icons";

const BottomNavbar = () => {
  return (
    <PillNav
      logo={Logo}
      logoAlt="Company Logo"
      items={[
        { label: "Works", href: "#works" },
        { label: "About", href: "#about" },
        { label: "Contact me", href: "#contact-me" },
      ]}
      activeHref="#"
      ease="power2.easeOut"
      baseColor="#000000"
      pillColor="#ffffff"
      hoveredPillTextColor="#ffffff"
      pillTextColor="#000000"
      initialLoadAnimation={false}
    />
  );
};

export default BottomNavbar;
