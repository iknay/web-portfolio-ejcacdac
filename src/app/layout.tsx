import type { Metadata } from "next";
import { Archivo, Poppins } from "next/font/google";
import "./globals.css";
import { ViewportProvider } from "./providers/ViewportProvider";
import DesktopOnlyWarning from "./components/custom/DesktopOnlyWarning";
import { GoogleTagManager } from "@next/third-parties/google";
import { Toaster } from "./components/ui/Toaster";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ejay",
  description: "My Web Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID!} />
      <body
        className={`${archivo.variable} ${poppins.variable} font-poppins antialiased`}
      >
        <ViewportProvider>
          <Toaster />
          {children}
          <DesktopOnlyWarning />
        </ViewportProvider>
      </body>
    </html>
  );
}
