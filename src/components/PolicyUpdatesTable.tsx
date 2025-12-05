"use client";

import { useState } from "react";
import { Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PolicyDetailsModal from "./PolicyDetailsModal";

interface PolicyUpdate {
  id: string;
  title: string;
  category: string;
  publishedDate: string;
  status: "New" | "Reviewed";
  sourceLink: string;
  fetchedAt: string;
  summary: string;
}

const initialPolicyUpdates: PolicyUpdate[] = [
  {
    id: "1",
    title: "EPFO increases PF cap to ₹15,000",
    category: "Provident Fund",
    publishedDate: "2024-12-10",
    status: "New",
    sourceLink: "https://www.epfindia.gov.in/site_en/Whats-New.php",
    fetchedAt: "2024-12-10T14:30:00",
    summary: "The Employees' Provident Fund Organisation (EPFO) has announced an increase in the PF wage ceiling from ₹15,000 to ₹21,000 per month. This change will affect contribution calculations for employees earning above this threshold. The new ceiling will be effective from the next financial year, allowing employers and employees time to adjust their payroll systems accordingly."
  },
  {
    id: "2",
    title: "New Sick Leave Policy Changes",
    category: "Leave Policy",
    publishedDate: "2024-12-08",
    status: "New",
    sourceLink: "https://labour.gov.in/sick-leave-policy",
    fetchedAt: "2024-12-08T10:15:00",
    summary: "The Ministry of Labour has updated the sick leave policy guidelines for all registered establishments. Key changes include mandatory medical certificates for leaves exceeding 3 consecutive days, introduction of half-day sick leave options, and provisions for remote work during recovery periods. Organizations must implement these changes within 90 days of notification."
  },
  {
    id: "3",
    title: "Gratuity Period Updated",
    category: "Benefits",
    publishedDate: "2024-12-05",
    status: "Reviewed",
    sourceLink: "https://labour.gov.in/gratuity-act",
    fetchedAt: "2024-12-05T16:45:00",
    summary: "The Payment of Gratuity Act has been amended to reduce the qualifying service period from 5 years to 4 years for contractual employees. This amendment aims to provide better social security coverage for workers in the gig economy and contractual employment sector. The change is applicable to all establishments covered under the Act."
  },
  {
    id: "4",
    title: "ESI Wage Limit Revision",
    category: "Insurance",
    publishedDate: "2024-12-03",
    status: "Reviewed",
    sourceLink: "https://www.esic.nic.in/notifications",
    fetchedAt: "2024-12-03T09:20:00",
    summary: "The Employees' State Insurance Corporation (ESIC) has revised the wage limit for ESI coverage from ₹21,000 to ₹25,000 per month. This expansion will bring more workers under the social security net, providing them access to medical benefits and cash benefits during sickness, maternity, and temporary disablement."
  },
  {
    id: "5",
    title: "Maternity Benefit Amendment",
    category: "Benefits",
    publishedDate: "2024-11-28",
    status: "Reviewed",
    sourceLink: "https://labour.gov.in/maternity-benefit",
    fetchedAt: "2024-11-28T11:30:00",
    summary: "The Maternity Benefit Act has been amended to extend paid maternity leave from 26 weeks to 30 weeks for the first two children. Additionally, work-from-home provisions have been expanded, allowing eligible employees to work remotely for up to 6 months post-delivery. Establishments with 50+ employees must provide crèche facilities."
  },
  {
    id: "6",
    title: "Bonus Payment Ceiling Increased",
    category: "Compensation",
    publishedDate: "2024-11-25",
    status: "Reviewed",
    sourceLink: "https://labour.gov.in/bonus-act",
    fetchedAt: "2024-11-25T13:00:00",
    summary: "The Payment of Bonus Act has been revised to increase the wage ceiling for bonus calculation from ₹21,000 to ₹25,000 per month. The minimum bonus percentage remains at 8.33% while the maximum is capped at 20%. This revision ensures better alignment with current wage structures and cost of living increases."
  }
];

type FilterStatus = "All" | "New" | "Reviewed";

export default function PolicyUpdatesTable() {
  const [activeFilter, setActiveFilter] = useState<FilterStatus>("All");
  const [policyUpdates, setPolicyUpdates] = useState<PolicyUpdate[]>(initialPolicyUpdates);
  const [selectedPolicy, setSelectedPolicy] = useState<PolicyUpdate | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredPolicies = policyUpdates.filter(policy => 
    activeFilter === "All" || policy.status === activeFilter
  );

  const handleViewDetails = (policy: PolicyUpdate) => {
    setSelectedPolicy(policy);
    setIsModalOpen(true);
  };

  const handleMarkAsReviewed = () => {
    if (selectedPolicy) {
      setPolicyUpdates(prev =>
        prev.map(p =>
          p.id === selectedPolicy.id ? { ...p, status: "Reviewed" as const } : p
        )
      );
    }
  };

  return (
    <>
      <Card 
        className="bg-white shadow-lg border h-auto lg:h-[600px] flex flex-col" 
        style={{ borderColor: '#E5EAF0', borderRadius: '8px' }}
      >
        <CardHeader className="pb-3 sm:pb-4 border-b p-4 sm:p-6" style={{ borderColor: '#E5EAF0' }}>
          <CardTitle className="text-lg sm:text-xl font-semibold" style={{ color: '#0052CC' }}>
            Latest Government Policy Updates
          </CardTitle>
          <p className="text-xs sm:text-sm mt-1" style={{ color: '#6B7280' }}>
            Something new requires review
          </p>
          
          {/* Status Filter Pills */}
          <div className="flex gap-2 mt-3 sm:mt-4 flex-wrap">
            {(["All", "New", "Reviewed"] as FilterStatus[]).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className="px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all"
                style={{
                  backgroundColor: activeFilter === filter ? '#0052CC' : '#F7F9FC',
                  color: activeFilter === filter ? '#FFFFFF' : '#6B7280',
                  border: `1px solid ${activeFilter === filter ? '#0052CC' : '#E5EAF0'}`
                }}
              >
                {filter}
              </button>
            ))}
          </div>
        </CardHeader>

        <CardContent className="p-0 flex-1 overflow-hidden">
          <div className="h-full max-h-[500px] lg:max-h-none overflow-y-auto px-4 sm:px-6 py-3 sm:py-4">
            <div className="space-y-3 sm:space-y-4">
              {filteredPolicies.map((policy) => (
                <div 
                  key={policy.id}
                  className="p-3 sm:p-4 rounded-lg border hover:shadow-md transition-all cursor-pointer"
                  style={{ borderColor: '#E5EAF0', backgroundColor: 'white' }}
                >
                  <div className="flex items-start justify-between gap-2 sm:gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm sm:text-base mb-2 line-clamp-2" style={{ color: '#1A1A1A' }}>
                        {policy.title}
                      </h3>
                      <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                        <span 
                          className="text-xs px-2 sm:px-2.5 py-1 rounded-full font-medium"
                          style={{ 
                            backgroundColor: '#F7F9FC',
                            color: '#6B7280',
                            border: '1px solid #E5EAF0'
                          }}
                        >
                          {policy.category}
                        </span>
                        <span className="text-xs" style={{ color: '#9BA9B4' }}>
                          {new Date(policy.publishedDate).toLocaleDateString('en-US', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric'
                          })}
                        </span>
                        <Badge 
                          className="text-xs font-semibold px-2 sm:px-2.5 py-0.5"
                          style={{ 
                            backgroundColor: policy.status === "New" ? '#00B8D9' : '#9BA9B4',
                            color: 'white'
                          }}
                        >
                          {policy.status}
                        </Badge>
                      </div>
                    </div>
                    <button 
                      className="p-1.5 sm:p-2 rounded-lg hover:bg-gray-50 transition-colors flex-shrink-0"
                      aria-label="View details"
                      onClick={() => handleViewDetails(policy)}
                    >
                      <Eye className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: '#00B8D9' }} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <PolicyDetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        policy={selectedPolicy}
        onMarkAsReviewed={handleMarkAsReviewed}
      />
    </>
  );
}