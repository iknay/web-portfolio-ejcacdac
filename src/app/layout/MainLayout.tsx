import React from "react";
import TopNavbar from "../components/custom/navbar/TopNavbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-background">
      <TopNavbar />
      <div className="flex justify-center w-full">{children}</div>
    </div>
  );
};

export default MainLayout;
