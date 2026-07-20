import { AppSidebar } from "@/app/admin/appSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarTrigger className="cursor-pointer" />
      <main className="h-screen w-screen flex justify-center items-center">
        {children}
      </main>
    </SidebarProvider>
  );
};

export default layout;
