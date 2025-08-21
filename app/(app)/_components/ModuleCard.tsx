"use client"

import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronRight,
  CircleSlash,
  CheckCircle,
  Plus,
  MoreVertical,
  Upload
} from 'lucide-react';
import { moduleData } from '@/lib/seed';
import { cn } from '@/lib/utils';

// Safety check for module data
const safeModuleData = moduleData || { title: 'Loading...', published: false, items: [] };
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function ModuleCard() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isPublished, setIsPublished] = useState(safeModuleData.published);
  
  return (
    <TooltipProvider>
      <div className="bg-white border border-[#E5E7EB] rounded-lg mb-4">
        <div className="flex items-center justify-between p-3 border-b border-[#E5E7EB]">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1 hover:bg-gray-100 rounded transition-colors"
              aria-expanded={isExpanded}
            >
              {isExpanded ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </button>
            
            <h3 className="text-[15px] font-medium">{safeModuleData.title}</h3>
          </div>
          
          <div className="flex items-center gap-1">
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={() => setIsPublished(!isPublished)}
                  className="p-1.5 hover:bg-gray-100 rounded transition-colors"
                  aria-pressed={isPublished}
                >
                  {isPublished ? (
                    <CheckCircle className="h-5 w-5 text-success" />
                  ) : (
                    <CircleSlash className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{isPublished ? 'Published' : 'Unpublished'}</p>
              </TooltipContent>
            </Tooltip>
            
            <Tooltip>
              <TooltipTrigger asChild>
                <button className="p-1.5 hover:bg-gray-100 rounded transition-colors">
                  <Plus className="h-5 w-5 text-gray-600" />
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Add content</p>
              </TooltipContent>
            </Tooltip>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="p-1.5 hover:bg-gray-100 rounded transition-colors">
                  <MoreVertical className="h-5 w-5 text-gray-600" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Edit module</DropdownMenuItem>
                <DropdownMenuItem>Delete module</DropdownMenuItem>
                <DropdownMenuItem>Move module</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        
        {isExpanded && (
          <div className="p-6">
            <div className="border-2 border-dashed border-[#E5E7EB] rounded-lg p-8 text-center">
              <Upload className="h-12 w-12 text-gray-400 mx-auto mb-3" />
              <p className="text-[14px] text-gray-600 mb-2">
                Drop files here to add to module
              </p>
              <button className="text-[13px] text-brand-maroon hover:underline">
                or choose files
              </button>
            </div>
          </div>
        )}
      </div>
    </TooltipProvider>
  );
}