import { Behance, Instagram, LinkedIn } from "@/public/icons";
import { Athletica, Doon, Medsgo, TixGenie, TravelGuru } from "@/public/images";

export const NavbarLang = [
  {
    label: "Works",
    href: "#works",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Contact Me",
    href: "/contact-me",
  },
];

export const SocialMediaLang = [
  {
    icon: LinkedIn,
    href: " https://www.linkedin.com/in/ejcacdac",
  },
  {
    icon: Instagram,
    href: " https://www.instagram.com/ejysenpaii",
  },
  {
    icon: Behance,
    href: "https://www.behance.net/ejaycacdac",
  },
];

export const WorksLang = [
  {
    title: "Athletica - GYM Booking App",
    href: "/athletica",
    bgColor: "#0088FE",
    img: Athletica,
    details: [
      "Mobile App",
      "Web Admin",
      "Company Project",
      "UI Design",
      "UX Research",
    ],
  },
  {
    title: "Doon - Peer to peer Car Rental",
    href: "/doon",
    bgColor: "#BCEB02",
    textColor: "#696969",
    img: Doon,
    details: [
      "Guest App",
      "Host App",
      "Mobile and Web App",
      "Web Admin",
      "UI Design",
      "UX Research",
    ],
  },
  {
    title: "MedsGo - Pharmacy App",
    href: "/medsgo",
    bgColor: "#203C64",
    textColor: "#66BC01",
    sparkleColor: "#F9414D",
    img: Medsgo,
    details: [
      "Customer App",
      "Seller App",
      "Mobile App",
      "Corporate Website",
      "UI/UX Design",
    ],
  },
  {
    title: "Travelguru - Booking Application",
    href: "/travelguru",
    bgColor: "#FFFFFF",
    textColor: "#262161",
    img: TravelGuru,
    details: [
      "Guest App",
      "Admin App",
      "Corporate Website",
      "Competitive Analysis",
      "UI/UX Design",
    ],
  },
  {
    title: "TixGenie - Ticket Selling App",
    href: "/tixgenie",
    bgColor: "#1E2630",
    textColor: "#31E1BB",
    img: TixGenie,
    details: ["Personal Project", "Case Study", "UI/UX Design"],
  },
];
