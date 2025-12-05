"use client";

import { Search, Menu } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Sidebar from "./Sidebar";
import NotificationDropdown from "./NotificationDropdown";
import ProfileDropdown from "./ProfileDropdown";
import PolicyUpdatesTable from "./PolicyUpdatesTable";
import ActiveComplianceIndicators from "./ActiveComplianceIndicators";

export default function HRDashboard() {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen" style={{ backgroundColor: '#F7F9FC' }}>
      {/* Sidebar Navigation - Hidden on mobile, shown on lg+ */}
      <div className="hidden lg:block">
        <Sidebar activePage="dashboard" />
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMobileSidebarOpen && (
        <>
          {/* Backdrop with smooth transition */}
          <div 
            className="fixed inset-0 bg-gray-900/20 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ease-in-out"
            onClick={() => setIsMobileSidebarOpen(false)}
          />
          {/* Sidebar with smooth slide-in animation */}
          <div className="fixed inset-y-0 left-0 z-50 lg:hidden transform transition-transform duration-300 ease-in-out">
            <Sidebar activePage="dashboard" onClose={() => setIsMobileSidebarOpen(false)} />
          </div>
        </>
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header Bar - Sticky */}
        <header className="sticky top-0 z-10 bg-white border-b" style={{ borderColor: '#E5EAF0' }}>
          <div className="px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
            <div className="flex items-center justify-between gap-2 sm:gap-4 lg:gap-8">
              {/* Left: Mobile Menu + Title */}
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <Button
                  variant="ghost"
                  size="sm"
                  className="lg:hidden p-2"
                  onClick={() => setIsMobileSidebarOpen(true)}
                >
                  <Menu className="w-5 h-5" style={{ color: '#1A1A1A' }} />
                </Button>
                <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold truncate" style={{ color: '#1A1A1A' }}>
                  <span className="hidden sm:inline">HR Policy Dashboard</span>
                  <span className="sm:hidden">HR Dashboard</span>
                </h1>
              </div>
              
              {/* Center: Search Bar - Hidden on mobile, shown on md+ */}
              <div className="hidden md:flex flex-1 max-w-md">
                <div className="relative w-full">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: '#9BA9B4' }} />
                  <Input
                    type="text"
                    placeholder="Search Policies..."
                    className="pl-10 pr-4 py-2 w-full border rounded-lg"
                    style={{ 
                      borderColor: '#E5EAF0',
                      backgroundColor: '#F7F9FC',
                    }}
                  />
                </div>
              </div>
              
              {/* Right: Notifications + User */}
              <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
                <NotificationDropdown />
                <ProfileDropdown />
              </div>
            </div>

            {/* Mobile Search Bar - Full width below header on mobile */}
            <div className="md:hidden mt-3">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: '#9BA9B4' }} />
                <Input
                  type="text"
                  placeholder="Search Policies..."
                  className="pl-10 pr-4 py-2 w-full border rounded-lg text-sm"
                  style={{ 
                    borderColor: '#E5EAF0',
                    backgroundColor: '#F7F9FC',
                  }}
                />
              </div>
            </div>
          </div>
        </header>

        {/* Main Dashboard Section - Two Cards Side by Side */}
        <main className="flex-1 px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {/* Card 1: Government Updates */}
            <PolicyUpdatesTable />

            {/* Card 2: Active Policy Highlights */}
            <ActiveComplianceIndicators />
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-auto border-t" style={{ borderColor: '#E5EAF0' }}>
          <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
            <div className="flex flex-col items-center gap-2">
              <p className="text-xs text-center" style={{ color: '#9BA9B4' }}>
                Prototype — Developed by Harsha AK
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs">
                <a href="#" className="hover:underline whitespace-nowrap" style={{ color: '#00B8D9' }}>
                  Privacy Policy
                </a>
                <span style={{ color: '#E5EAF0' }}>|</span>
                <a href="#" className="hover:underline whitespace-nowrap" style={{ color: '#00B8D9' }}>
                  Terms of Use
                </a>
                <span style={{ color: '#E5EAF0' }}>|</span>
                <a href="#" className="hover:underline whitespace-nowrap" style={{ color: '#00B8D9' }}>
                  Contact Support
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}