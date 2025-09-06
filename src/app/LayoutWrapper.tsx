"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import NavbarDrawer from "@/components/navbar/NavbarDrawer";

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {

  const pathname = usePathname();
  const hideLayout = ["/register", "/thankYou", "/subscriptionplan", "/login", "/welcome"].includes(pathname) || pathname.startsWith("/dashboard");

  return (
    <>
      {!hideLayout && <Navbar />}
      {!hideLayout && <NavbarDrawer />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
};

export default LayoutWrapper;