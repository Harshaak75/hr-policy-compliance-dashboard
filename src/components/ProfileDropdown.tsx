"use client";

import { User, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function ProfileDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Avatar className="w-9 h-9 border-2" style={{ borderColor: '#E5EAF0' }}>
            <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" />
            <AvatarFallback style={{ backgroundColor: '#F7F9FC', color: '#6B7280' }}>
              HA
            </AvatarFallback>
          </Avatar>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48" style={{ borderColor: '#E5EAF0' }}>
        <DropdownMenuLabel style={{ color: '#1A1A1A' }}>Harsha AK</DropdownMenuLabel>
        <DropdownMenuSeparator style={{ backgroundColor: '#E5EAF0' }} />
        <DropdownMenuItem className="cursor-pointer">
          <User className="w-4 h-4 mr-2" style={{ color: '#6B7280' }} />
          <span style={{ color: '#1A1A1A' }}>My Profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          <LogOut className="w-4 h-4 mr-2" style={{ color: '#6B7280' }} />
          <span style={{ color: '#1A1A1A' }}>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
