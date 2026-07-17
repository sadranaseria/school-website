import { AppSidebar } from "@/app/appSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarTrigger className="cursor-pointer" />
      <main className="size-svh flex justify-center items-center">
        {children}
      </main>
    </SidebarProvider>
  );
};

export default layout;
