import { AppSidebar } from '@/components/appSidebar'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { ReactNode } from 'react'

const layout = ({ children } : { children : ReactNode }) => {
  return (
    <SidebarProvider>
        <AppSidebar />
        <main>
            <SidebarTrigger className='cursor-pointer' />
            { children }
        </main>
    </SidebarProvider>
  )
}

export default layout