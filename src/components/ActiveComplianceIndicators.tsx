"use client";

import { Info, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface PFMetric {
  label: string;
  value: string;
  percentage: number;
  color: string;
  effectiveFrom: string;
}

const pfMetrics: PFMetric[] = [
  {
    label: "Employee PF Contribution",
    value: "12%",
    percentage: 80,
    color: "#0052CC",
    effectiveFrom: "Jan 2024"
  },
  {
    label: "Employer PF Contribution",
    value: "12%",
    percentage: 80,
    color: "#0052CC",
    effectiveFrom: "Jan 2024"
  },
  {
    label: "PF Wage Cap",
    value: "₹15,000",
    percentage: 100,
    color: "#00B8D9",
    effectiveFrom: "Apr 2024"
  }
];

export default function ActiveComplianceIndicators() {
  return (
    <Card 
      className="bg-white shadow-lg border h-auto lg:h-[600px] flex flex-col" 
      style={{ borderColor: '#E5EAF0', borderRadius: '8px' }}
    >
      <CardHeader className="pb-3 sm:pb-4 border-b p-4 sm:p-6" style={{ borderColor: '#E5EAF0' }}>
        <CardTitle className="text-lg sm:text-xl font-semibold" style={{ color: '#0052CC' }}>
          Active Policy Highlights
        </CardTitle>
        <p className="text-xs sm:text-sm mt-1" style={{ color: '#6B7280' }}>
          Focus on PF only (for MVP)
        </p>
      </CardHeader>

      <CardContent className="p-4 sm:p-6 flex-1">
        <div className="space-y-6 sm:space-y-8">
          {pfMetrics.map((metric, index) => (
            <div key={index} className="space-y-2 sm:space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs sm:text-sm font-medium flex-1" style={{ color: '#1A1A1A' }}>
                  {metric.label}
                </span>
                <span className="text-2xl sm:text-3xl font-bold" style={{ color: metric.color }}>
                  {metric.value}
                </span>
              </div>
              <div className="w-full h-2 rounded-full overflow-hidden" style={{ backgroundColor: '#F7F9FC' }}>
                <div 
                  className="h-full rounded-full transition-all duration-300"
                  style={{ 
                    width: `${metric.percentage}%`,
                    backgroundColor: metric.color
                  }}
                />
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3 sm:w-3.5 h-3 sm:h-3.5 flex-shrink-0" style={{ color: '#9BA9B4' }} />
                <span className="text-xs" style={{ color: '#9BA9B4' }}>
                  Effective From: {metric.effectiveFrom}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div 
          className="mt-6 sm:mt-8 p-3 sm:p-4 rounded-lg border flex items-start gap-2 sm:gap-3"
          style={{ backgroundColor: '#F7F9FC', borderColor: '#E5EAF0' }}
        >
          <Info className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5" style={{ color: '#00B8D9' }} />
          <div className="flex-1 min-w-0">
            <p className="text-xs sm:text-sm font-medium" style={{ color: '#1A1A1A' }}>
              As per latest EPFO rules
            </p>
            <p className="text-xs mt-1" style={{ color: '#6B7280' }}>
              Updated on December 10, 2024
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}