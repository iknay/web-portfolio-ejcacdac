import React from "react";
import TopNavbar from "../components/custom/navbar/TopNavbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-background">
      <TopNavbar />
      {children}
    </div>
  );
};

export default MainLayout;
