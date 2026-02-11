import React from "react";
import TopNavbar from "../components/custom/navbar/TopNavbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-background">
      <TopNavbar />
      <div className="flex flex-col px-12 pb-20 gap-20">{children}</div>
    </div>
  );
};

export default MainLayout;
