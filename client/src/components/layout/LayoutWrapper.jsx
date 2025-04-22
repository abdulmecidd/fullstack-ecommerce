"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  return (
    <>
      {!isAdmin && <Header />}
      <div
        className={!isAdmin ? "max-w-[90%] mx-auto px-4" : "max-w-[100%] px-4"}
      >
        <main>{children}</main>
      </div>
      {!isAdmin && <Footer />}
    </>
  );
}
