"use client"

import React from 'react';
import { Plus, MoreVertical, CheckCircle, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function ModulesToolbar() {
  return (
    <div className="flex items-center justify-between p-4 bg-white border-b border-[#E5E7EB]">
      <div className="flex items-center gap-2">
        <Button variant="secondary" size="sm">
          Collapse All
        </Button>
        
        <Button variant="secondary" size="sm">
          View Progress
        </Button>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="sm" className="gap-2">
              <CheckCircle className="h-4 w-4 text-success" />
              Publish All
              <ChevronDown className="h-3 w-3" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Publish all modules and items</DropdownMenuItem>
            <DropdownMenuItem>Unpublish all modules and items</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      
      <div className="flex items-center gap-2">
        <Button size="sm" className="gap-2">
          <Plus className="h-4 w-4" />
          Module
        </Button>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Manage modules</DropdownMenuItem>
            <DropdownMenuItem>Module settings</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}