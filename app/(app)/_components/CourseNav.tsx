"use client"

import React from 'react';
import { EyeOff } from 'lucide-react';
import { courseNav } from '@/lib/seed';
import { cn } from '@/lib/utils';
import { useNavigation } from './NavigationContext';

// Safety check for courseNav data
const courseNavData = courseNav || [];

export default function CourseNav() {
  const { isNavVisible } = useNavigation();
  
  if (!isNavVisible) {
    return null;
  }

  return (
    <nav 
      className="nav-menu-items fixed left-[88px] top-[50px] h-[calc(100vh-50px)] w-[224px] bg-white border-r border-[#E5E7EB] overflow-y-auto transition-all duration-300"
      aria-label="Course navigation"
    >
      <div className="py-3">
        <div className="px-3 pb-2 text-[10px] font-semibold text-gray-500 uppercase tracking-wider">
          2025 DEV
        </div>
        
        {courseNavData.map((item, index) => {
          return (
            <button
              key={index}
              className={cn(
                "w-full px-6 py-2.5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors relative group text-[14px]",
                item.selected && "bg-gray-50 font-semibold"
              )}
              aria-current={item.selected ? "page" : undefined}
            >
              {item.selected && (
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-brand-maroon" />
              )}
              
              <div className="flex items-center gap-3 flex-1">
                <span className={cn(
                  "text-[#8C1D40]",
                  item.selected && "font-semibold"
                )}>
                  {item.label}
                </span>
              </div>
              
              {item.hidden && (
                <EyeOff className="h-4 w-4 text-gray-400" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}