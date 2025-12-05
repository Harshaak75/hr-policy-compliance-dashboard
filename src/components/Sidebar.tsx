"use client";

import { useState } from "react";
import { LayoutDashboard, FileText, Bell, Settings, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  activePage?: string;
  onClose?: () => void;
}

const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "policy-management", label: "Policy Management", icon: FileText },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "settings", label: "Settings", icon: Settings },
];

export default function Sidebar({ activePage = "dashboard", onClose }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside
      className="bg-white border-r transition-all duration-300 flex flex-col"
      style={{ 
        width: isCollapsed ? '80px' : '260px',
        borderColor: '#E5EAF0',
        height: '100vh',
        position: 'sticky',
        top: 0
      }}
    >
      {/* Sidebar Header */}
      <div className="p-4 sm:p-6 border-b flex items-center justify-between" style={{ borderColor: '#E5EAF0' }}>
        {!isCollapsed && (
          <h2 className="text-base sm:text-lg font-semibold" style={{ color: '#1A1A1A' }}>
            HR Portal
          </h2>
        )}
        {/* Close button for mobile */}
        {onClose && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="lg:hidden p-1"
          >
            <X className="w-5 h-5" style={{ color: '#6B7280' }} />
          </Button>
        )}
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 p-3 sm:p-4 space-y-1 sm:space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = item.id === activePage;
          
          return (
            <button
              key={item.id}
              onClick={() => onClose?.()}
              className="w-full flex items-center gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg transition-all hover:bg-gray-50"
              style={{
                backgroundColor: isActive ? '#E8F2FF' : 'transparent',
                borderLeft: isActive ? '3px solid #0052CC' : '3px solid transparent',
              }}
            >
              <Icon
                className="w-5 h-5 flex-shrink-0"
                style={{ color: isActive ? '#0052CC' : '#6B7280' }}
              />
              {!isCollapsed && (
                <span
                  className="text-sm font-medium"
                  style={{ color: isActive ? '#0052CC' : '#1A1A1A' }}
                >
                  {item.label}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Toggle Button - Hidden on mobile */}
      <div className="hidden lg:block p-4 border-t" style={{ borderColor: '#E5EAF0' }}>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="w-full flex items-center justify-center"
        >
          {isCollapsed ? (
            <ChevronRight className="w-5 h-5" style={{ color: '#6B7280' }} />
          ) : (
            <ChevronLeft className="w-5 h-5" style={{ color: '#6B7280' }} />
          )}
        </Button>
      </div>
    </aside>
  );
}