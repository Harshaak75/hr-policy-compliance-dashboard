"use client";

import { ExternalLink, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface PolicyDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  policy: {
    title: string;
    category: string;
    publishedDate: string;
    fetchedAt: string;
    sourceLink: string;
    summary: string;
    status: "New" | "Reviewed";
  } | null;
  onMarkAsReviewed?: () => void;
}

export default function PolicyDetailsModal({
  isOpen,
  onClose,
  policy,
  onMarkAsReviewed,
}: PolicyDetailsModalProps) {
  if (!policy) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl" style={{ borderColor: '#E5EAF0' }}>
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold pr-8" style={{ color: '#1A1A1A' }}>
            {policy.title}
          </DialogTitle>
          <DialogDescription className="flex items-center gap-2 mt-2">
            <Badge
              className="text-xs font-semibold px-3 py-1"
              style={{
                backgroundColor: '#F7F9FC',
                color: '#6B7280',
                border: '1px solid #E5EAF0',
              }}
            >
              {policy.category}
            </Badge>
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Source Link */}
          <div className="space-y-2">
            <label className="text-sm font-medium" style={{ color: '#6B7280' }}>
              Source
            </label>
            <a
              href={policy.sourceLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium hover:underline"
              style={{ color: '#00B8D9' }}
            >
              {policy.sourceLink}
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Dates */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium" style={{ color: '#6B7280' }}>
                Government Publish Date
              </label>
              <p className="text-sm font-semibold" style={{ color: '#1A1A1A' }}>
                {new Date(policy.publishedDate).toLocaleDateString('en-US', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                })}
              </p>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium" style={{ color: '#6B7280' }}>
                Fetched At
              </label>
              <p className="text-sm font-semibold" style={{ color: '#1A1A1A' }}>
                {new Date(policy.fetchedAt).toLocaleString('en-US', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </p>
            </div>
          </div>

          {/* Summary */}
          <div className="space-y-2">
            <label className="text-sm font-medium" style={{ color: '#6B7280' }}>
              Summary
            </label>
            <p
              className="text-sm leading-relaxed p-4 rounded-lg"
              style={{
                backgroundColor: '#F7F9FC',
                color: '#1A1A1A',
                border: '1px solid #E5EAF0',
              }}
            >
              {policy.summary}
            </p>
          </div>
        </div>

        <DialogFooter className="flex gap-3">
          <Button
            variant="ghost"
            onClick={onClose}
            className="font-medium"
            style={{ color: '#6B7280' }}
          >
            Close
          </Button>
          {policy.status === "New" && (
            <Button
              onClick={() => {
                onMarkAsReviewed?.();
                onClose();
              }}
              className="font-medium"
              style={{ backgroundColor: '#0052CC', color: 'white' }}
            >
              Mark as Reviewed
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
