import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
} from "@/components/ui/sidebar"
import Link from "next/link";
import { LuPlus } from "react-icons/lu";

const sidebarItems : { lable : string , value : string , href : string }[] = [
    { lable : 'داشبورد' , value : 'dashboard' , href : '/'},
    { lable : 'مقالات' , value : 'articles' , href : '/articles' },
    { lable : 'گالری' , value : 'gallery' , href : '/gallery' },
    { lable : 'رشته ها' , value : 'majors' , href : '/majors' },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className='font-bold text-3xl'>
        پنل مدیریت
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
            <SidebarGroupLabel>خدمات</SidebarGroupLabel>
            <SidebarGroupContent>
                <ul className="space-y-1">
                    { sidebarItems.map(sidebarItem => (
                        <li key={sidebarItem.value}>
                            <Link href={sidebarItem.href}>{sidebarItem.lable}</Link>
                        </li>
                    ))}
                </ul>
            </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}