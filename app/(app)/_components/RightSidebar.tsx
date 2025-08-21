"use client"

import React from 'react';
import { 
  ChevronDown,
  CheckCircle2,
  FileUp,
  FileInput,
  Home,
  Activity,
  ListTodo,
  Megaphone,
  BarChart3,
  Bell,
  Calendar
} from 'lucide-react';
import { courseStatus } from '@/lib/seed';
import { cn } from '@/lib/utils';

// Safety check for courseStatus data
const courseStatusData = courseStatus || { published: false, actions: [] };

const actionIcons: Record<string, React.ElementType> = {
  'Import Existing Content': FileInput,
  'Import from Commons': FileUp,
  'Choose Home Page': Home,
  'View Course Stream': Activity,
  'Course Setup Checklist': ListTodo,
  'New Announcement': Megaphone,
  'Course Analytics': BarChart3,
  'View Course Notifications': Bell,
};

export default function RightSidebar() {
  return (
    <aside 
      className="fixed right-0 top-[50px] h-[calc(100vh-50px)] w-[320px] bg-white border-l border-[#E5E7EB] overflow-y-auto"
      aria-label="Course Status"
    >
      <div className="p-4">
        <h2 className="text-[15px] font-semibold mb-4">Course Status</h2>
        
        <button className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors mb-4">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-success" />
            <span className="text-[14px] font-medium">Published</span>
          </div>
          <ChevronDown className="h-4 w-4 text-gray-500" />
        </button>
        
        <div className="space-y-2">
          {courseStatusData.actions.map((action, index) => {
            const Icon = actionIcons[action] || Activity;
            return (
              <button
                key={index}
                className="w-full flex items-center gap-3 p-3 text-left hover:bg-gray-50 rounded-md transition-colors group"
              >
                <Icon className="h-5 w-5 text-gray-500 group-hover:text-gray-700" />
                <span className="text-[14px] text-gray-700 group-hover:text-gray-900">
                  {action}
                </span>
              </button>
            );
          })}
        </div>
      </div>
      
      <div className="border-t border-[#E5E7EB] p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-[15px] font-semibold">Coming Up</h3>
          <button className="flex items-center gap-1 text-[13px] text-brand-maroon hover:underline">
            <Calendar className="h-4 w-4" />
            View Calendar
          </button>
        </div>
        
        <p className="text-[13px] text-gray-500">Nothing for the next week</p>
      </div>
    </aside>
  );
}