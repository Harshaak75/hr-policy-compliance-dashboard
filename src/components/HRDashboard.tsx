"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import Sidebar from "./Sidebar";
import NotificationDropdown from "./NotificationDropdown";
import ProfileDropdown from "./ProfileDropdown";
import PolicyUpdatesTable from "./PolicyUpdatesTable";
import ActiveComplianceIndicators from "./ActiveComplianceIndicators";

export default function HRDashboard() {
  return (
    <div className="flex min-h-screen" style={{ backgroundColor: '#F7F9FC' }}>
      {/* Sidebar Navigation */}
      <Sidebar activePage="dashboard" />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Header Bar */}
        <header className="bg-white border-b" style={{ borderColor: '#E5EAF0' }}>
          <div className="px-8 py-4">
            <div className="flex items-center justify-between gap-8">
              {/* Left: Title */}
              <h1 className="text-2xl font-semibold whitespace-nowrap" style={{ color: '#1A1A1A' }}>
                HR Policy Dashboard
              </h1>
              
              {/* Center: Search Bar */}
              <div className="flex-1 max-w-md">
                <div className="relative">
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
              <div className="flex items-center gap-4">
                <NotificationDropdown />
                <ProfileDropdown />
              </div>
            </div>
          </div>
        </header>

        {/* Main Dashboard Section - Two Cards Side by Side */}
        <main className="flex-1 px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Card 1: Government Updates */}
            <PolicyUpdatesTable />

            {/* Card 2: Active Policy Highlights */}
            <ActiveComplianceIndicators />
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-auto border-t" style={{ borderColor: '#E5EAF0' }}>
          <div className="px-8 py-6">
            <div className="flex flex-col items-center gap-2">
              <p className="text-xs" style={{ color: '#9BA9B4' }}>
                Prototype — Developed by Harsha AK
              </p>
              <div className="flex items-center gap-3 text-xs">
                <a href="#" className="hover:underline" style={{ color: '#00B8D9' }}>
                  Privacy Policy
                </a>
                <span style={{ color: '#E5EAF0' }}>|</span>
                <a href="#" className="hover:underline" style={{ color: '#00B8D9' }}>
                  Terms of Use
                </a>
                <span style={{ color: '#E5EAF0' }}>|</span>
                <a href="#" className="hover:underline" style={{ color: '#00B8D9' }}>
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