import { AppSidebar } from '@/components/appSidebar'
import { Button } from '@/components/ui/button'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import React, { PropsWithChildren, ReactNode } from 'react'

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