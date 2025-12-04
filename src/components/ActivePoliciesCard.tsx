"use client";

import { Wallet, TrendingUp, Shield, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface PolicyDetail {
  icon: React.ReactNode;
  title: string;
  value: string;
  progress: number;
  color: string;
  subtitle: string;
}

export default function ActivePoliciesCard() {
  const policies: PolicyDetail[] = [
    {
      icon: <Wallet className="w-5 h-5" />,
      title: "Employee PF Contribution",
      value: "12%",
      progress: 75,
      color: "bg-blue-500",
      subtitle: "of Basic Salary"
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Employer PF Contribution",
      value: "13.61%",
      progress: 85,
      color: "bg-green-500",
      subtitle: "including admin charges"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "ESI Contribution",
      value: "0.75%",
      progress: 45,
      color: "bg-purple-500",
      subtitle: "Employee Share"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Employer ESI Share",
      value: "3.25%",
      progress: 90,
      color: "bg-orange-500",
      subtitle: "of Gross Wages"
    }
  ];

  return (
    <Card className="shadow-md">
      <CardHeader style={{ backgroundColor: 'var(--hr-secondary)', color: 'white' }}>
        <div className="flex items-center gap-3">
          <Shield className="w-6 h-6" />
          <div>
            <CardTitle className="text-xl text-white">Current Active Policies</CardTitle>
            <CardDescription className="text-blue-100">PF & ESI contribution details</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-6">
          {policies.map((policy, index) => (
            <div key={index} className="space-y-3">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div 
                    className="p-2 rounded-lg text-white"
                    style={{ backgroundColor: policy.color.replace('bg-', '#').replace('-500', '') }}
                  >
                    {policy.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{policy.title}</p>
                    <p className="text-xs text-gray-500 mt-1">{policy.subtitle}</p>
                  </div>
                </div>
                <span className="text-lg font-bold" style={{ color: 'var(--hr-primary)' }}>
                  {policy.value}
                </span>
              </div>
              <div className="space-y-1">
                <Progress value={policy.progress} className="h-2" />
                <p className="text-xs text-gray-500 text-right">{policy.progress}% of max limit</p>
              </div>
              {index < policies.length - 1 && (
                <div className="border-b border-gray-200 pt-3"></div>
              )}
            </div>
          ))}
        </div>

        {/* Summary Card */}
        <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: '#E3F2FD' }}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-700">Total Monthly Contribution</p>
              <p className="text-xs text-gray-500 mt-1">Combined PF & ESI</p>
            </div>
            <p className="text-2xl font-bold" style={{ color: 'var(--hr-primary)' }}>
              29.61%
            </p>
          </div>
        </div>

        <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-xs text-yellow-800">
            <strong>Note:</strong> Rates updated as per latest government notification (Jan 2024)
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
