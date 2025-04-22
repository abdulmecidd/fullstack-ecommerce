import {
  Sidebar,
  SidebarHeader,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import "../../globals.css";
import { AppSidebar } from "@/components/admin/dashboard/appSidebar";

export const metadata = {
  title: "Admin Dashboard",
  description: "You can manage everything here",
};

export default function AdminLayout({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />

      <main className="pt-8 w-full">{children}</main>
    </SidebarProvider>
  );
}
