"use client";

import { useState } from "react";
import { Bell } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import PolicyDetailsModal from "./PolicyDetailsModal";

interface Notification {
  id: string;
  title: string;
  date: string;
  status: "NEW" | "Reviewed";
  category: string;
  publishedDate: string;
  sourceLink: string;
  fetchedAt: string;
  summary: string;
}

const notifications: Notification[] = [
  {
    id: "1",
    title: "EPFO increases PF cap to ₹15,000",
    date: "Dec 10, 2024",
    status: "NEW",
    category: "Provident Fund",
    publishedDate: "2024-12-10",
    sourceLink: "https://www.epfindia.gov.in/site_en/Whats-New.php",
    fetchedAt: "2024-12-10T14:30:00",
    summary: "The Employees' Provident Fund Organisation (EPFO) has announced an increase in the PF wage ceiling from ₹15,000 to ₹21,000 per month. This change will affect contribution calculations for employees earning above this threshold. The new ceiling will be effective from the next financial year, allowing employers and employees time to adjust their payroll systems accordingly."
  },
  {
    id: "2",
    title: "New Sick Leave Policy Changes",
    date: "Dec 8, 2024",
    status: "NEW",
    category: "Leave Policy",
    publishedDate: "2024-12-08",
    sourceLink: "https://labour.gov.in/sick-leave-policy",
    fetchedAt: "2024-12-08T10:15:00",
    summary: "The Ministry of Labour has updated the sick leave policy guidelines for all registered establishments. Key changes include mandatory medical certificates for leaves exceeding 3 consecutive days, introduction of half-day sick leave options, and provisions for remote work during recovery periods. Organizations must implement these changes within 90 days of notification."
  },
  {
    id: "3",
    title: "Gratuity Period Updated",
    date: "Dec 5, 2024",
    status: "Reviewed",
    category: "Benefits",
    publishedDate: "2024-12-05",
    sourceLink: "https://labour.gov.in/gratuity-act",
    fetchedAt: "2024-12-05T16:45:00",
    summary: "The Payment of Gratuity Act has been amended to reduce the qualifying service period from 5 years to 4 years for contractual employees. This amendment aims to provide better social security coverage for workers in the gig economy and contractual employment sector. The change is applicable to all establishments covered under the Act."
  },
];

export default function NotificationDropdown() {
  const [selectedNotification, setSelectedNotification] = useState<Notification | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const unreadCount = notifications.filter((n) => n.status === "NEW").length;

  const handleViewDetails = (notification: Notification) => {
    setSelectedNotification(notification);
    setIsModalOpen(true);
  };

  const transformedPolicy = selectedNotification ? {
    title: selectedNotification.title,
    category: selectedNotification.category,
    publishedDate: selectedNotification.publishedDate,
    fetchedAt: selectedNotification.fetchedAt,
    sourceLink: selectedNotification.sourceLink,
    summary: selectedNotification.summary,
    status: selectedNotification.status === "NEW" ? "New" as const : "Reviewed" as const
  } : null;

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="relative p-2 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
            <Bell className="w-5 h-5" style={{ color: '#6B7280' }} />
            {unreadCount > 0 && (
              <div
                className="absolute -top-1 -right-1 h-4 w-4 rounded-full flex items-center justify-center text-[10px] font-semibold text-white"
                style={{ backgroundColor: '#EF4444' }}
              >
                {unreadCount}
              </div>
            )}
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-80" style={{ borderColor: '#E5EAF0' }}>
          <DropdownMenuLabel className="text-base font-semibold" style={{ color: '#1A1A1A' }}>
            Notifications
          </DropdownMenuLabel>
          <DropdownMenuSeparator style={{ backgroundColor: '#E5EAF0' }} />
          <div className="max-h-96 overflow-y-auto">
            {notifications.map((notification) => (
              <DropdownMenuItem
                key={notification.id}
                className="flex flex-col items-start p-4 cursor-pointer hover:bg-gray-50"
                onSelect={(e) => e.preventDefault()}
              >
                <div className="w-full space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-sm font-medium flex-1" style={{ color: '#1A1A1A' }}>
                      {notification.title}
                    </h4>
                    <Badge
                      className="text-xs font-semibold px-2 py-0.5"
                      style={{
                        backgroundColor: notification.status === "NEW" ? '#0052CC' : '#9BA9B4',
                        color: 'white',
                      }}
                    >
                      {notification.status}
                    </Badge>
                  </div>
                  <p className="text-xs" style={{ color: '#9BA9B4' }}>
                    {notification.date}
                  </p>
                  <button
                    className="text-xs font-medium hover:underline"
                    style={{ color: '#00B8D9' }}
                    onClick={() => handleViewDetails(notification)}
                  >
                    View Details →
                  </button>
                </div>
              </DropdownMenuItem>
            ))}
          </div>
        </DropdownMenuContent>
      </DropdownMenu>

      <PolicyDetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        policy={transformedPolicy}
      />
    </>
  );
}