import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
} from "@/components/ui/sidebar";
import AuthStatus from "./AuthStatus";
import NavBar from "./NavBar";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="font-bold text-3xl">پنل مدیریت</SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>خدمات</SidebarGroupLabel>
          <SidebarGroupContent>
            <NavBar />
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter>
        <AuthStatus />
      </SidebarFooter>
    </Sidebar>
  );
}
