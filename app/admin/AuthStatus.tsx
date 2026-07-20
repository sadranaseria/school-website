"use client"

import {
  LogOutIcon
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LogoutLink, useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs"

export default function AuthStatus() {
  const { user } = useKindeBrowserClient();

  if(!user) return

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="ghost" size="icon" className="rounded-full"><Avatar>
          <AvatarImage src={`https://ui-avatars.com/api/?name=${user.given_name}`} alt="Admin" />
          <AvatarFallback>A</AvatarFallback>
        </Avatar></Button>} />
      <DropdownMenuContent align="end" className='w-50'>
        <DropdownMenuGroup>
          <DropdownMenuItem>{user.email}</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOutIcon />
          <LogoutLink>خروج</LogoutLink>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

