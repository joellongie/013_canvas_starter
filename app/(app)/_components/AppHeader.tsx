"use client"

import React from 'react';
import { Menu, ChevronRight, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AppHeader() {
  return (
    <header className="fixed top-0 left-[88px] right-0 h-[50px] bg-white border-b border-[#E5E7EB] flex items-center justify-between px-4 z-10">
      <div className="flex items-center gap-3">
        <button className="p-2 hover:bg-gray-100 rounded-md transition-colors">
          <Menu className="h-5 w-5" />
        </button>
        
        <div className="flex items-center gap-2">
          <span className="text-brand-maroon font-bold text-[18px]">ASU</span>
        </div>
        
        <nav className="flex items-center gap-2 text-[14px]">
          <span className="text-gray-600">DEV-2025-LIT:jlongie</span>
          <ChevronRight className="h-4 w-4 text-gray-400" />
          <span className="text-gray-900 font-medium">Modules</span>
        </nav>
      </div>
      
      <Button variant="outline" className="gap-2">
        <Eye className="h-4 w-4" />
        View as Student
      </Button>
    </header>
  );
}