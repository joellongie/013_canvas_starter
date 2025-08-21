"use client"

import React from 'react';
import { 
  UserRound, 
  LayoutDashboard, 
  BookOpen, 
  Calendar, 
  Inbox, 
  History, 
  Share2, 
  HelpCircle, 
  Accessibility,
  ArrowLeftFromLine
} from 'lucide-react';
import { globalNav } from '@/lib/seed';
import { cn } from '@/lib/utils';

// Safety check for globalNav data
const globalNavData = globalNav || [];
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const iconMap: Record<string, React.ElementType> = {
  UserRound,
  LayoutDashboard,
  BookOpen,
  Calendar,
  Inbox,
  History,
  Share2,
  HelpCircle,
  Accessibility,
};

export default function GlobalNav() {
  return (
    <TooltipProvider>
      <nav 
        className="fixed left-0 top-0 h-full w-[88px] bg-[#2B2B2B] flex flex-col"
        aria-label="Global navigation"
      >
        <div className="flex flex-col items-center py-3 flex-1 overflow-y-auto">
          {globalNavData.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <Tooltip key={item.id}>
                <TooltipTrigger asChild>
                  <button
                    className={cn(
                      "w-full h-[72px] flex flex-col items-center justify-center text-[#E5E7EB] hover:bg-[#3A3A3A] transition-colors relative group",
                      item.active && "bg-[#3A3A3A] text-white"
                    )}
                    aria-current={item.active ? "page" : undefined}
                  >
                    {item.active && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-white" />
                    )}
                    <div className="relative">
                      <Icon className="h-6 w-6 mb-1" />
                      {item.badge && (
                        <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] mt-1">{item.label}</span>
                  </button>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            );
          })}
        </div>
        
        <div className="border-t border-[#3A3A3A] py-3">
          <Tooltip>
            <TooltipTrigger asChild>
              <button className="w-full h-[72px] flex flex-col items-center justify-center text-[#E5E7EB] hover:bg-[#3A3A3A] transition-colors">
                <ArrowLeftFromLine className="h-6 w-6 mb-1" />
                <span className="text-[11px] mt-1">Back</span>
              </button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Go back</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </nav>
    </TooltipProvider>
  );
}