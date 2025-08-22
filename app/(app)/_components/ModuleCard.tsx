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
import { cn } from '@/lib/utils';
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
import * as Dialog from "@radix-ui/react-dialog";
import { X } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface ModuleData {
  id: string;
  title: string;
  published: boolean;
  items: any[];
}

interface ModuleCardProps {
  moduleData: ModuleData;
  onDelete: (moduleId: string) => void;
  forceCollapsed?: boolean;
}

export default function ModuleCard({ moduleData, onDelete, forceCollapsed = false }: ModuleCardProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isPublished, setIsPublished] = useState(moduleData.published);
  const [isAddItemModalOpen, setIsAddItemModalOpen] = useState(false);
  const [selectedItemType, setSelectedItemType] = useState("");
  
  // Determine the actual expanded state - if forceCollapsed is true, override local state
  const actuallyExpanded = forceCollapsed ? false : isExpanded;
  
  return (
    <TooltipProvider>
      <div className="bg-white border border-[#E5E7EB] rounded-lg mb-4 module">
        <div className="flex items-center justify-between p-3 border-b border-[#E5E7EB] bg-[#f9f9f9]">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1 hover:bg-gray-100 rounded transition-colors"
              aria-expanded={actuallyExpanded}
            >
              {actuallyExpanded ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </button>
            
            <h3 className="text-[15px] font-medium">{moduleData.title}</h3>
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
            
            <Dialog.Root open={isAddItemModalOpen} onOpenChange={setIsAddItemModalOpen}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Dialog.Trigger asChild>
                    <button className="p-1.5 hover:bg-gray-100 rounded transition-colors">
                      <Plus className="h-5 w-5 text-gray-600" />
                    </button>
                  </Dialog.Trigger>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Add content</p>
                </TooltipContent>
              </Tooltip>
              
              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-white/80 z-50" />
                <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-2xl w-[700px] max-h-[80vh] z-50 flex flex-col">
                  <Dialog.Description className="sr-only">
                    Select an item type and indentation level to add to the module
                  </Dialog.Description>
                  <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <Dialog.Title className="text-lg font-semibold">
                      Add Item to {moduleData.title}
                    </Dialog.Title>
                    <Dialog.Close asChild>
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <X className="h-4 w-4" />
                      </button>
                    </Dialog.Close>
                  </div>
                  
                  <div className="flex-1 p-6 pb-40 space-y-4">
                    <div className="flex items-center gap-4">
                      <label className="text-sm font-medium w-20">Add</label>
                      <select 
                        className="flex-1 px-3 py-2 pr-8 border border-gray-300 rounded-md"
                        value={selectedItemType}
                        onChange={(e) => setSelectedItemType(e.target.value)}
                      >
                        <option value="">Select item type</option>
                        <option value="assignment">Assignment</option>
                        <option value="quiz">Quiz</option>
                        <option value="discussion">Discussion</option>
                        <option value="page">Page</option>
                        <option value="file">File</option>
                        <option value="url">External URL</option>
                        <option value="external-tool">External Tool</option>
                      </select>
                      <span className="text-sm text-gray-600">to {moduleData.title}</span>
                    </div>
                    
                    {selectedItemType === "external-tool" ? (
                      <>
                        <div className="space-y-4">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-link">
                              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                            </svg>
                            <span>Select a tool from the list below, or enter a URL for an external tool you already know is configured with Basic LTI to add a link to it to this module.</span>
                          </div>
                          
                          <div className="space-y-2">
                            <div className="bg-[#f9f9f9] border border-gray-200 rounded-md p-3 hover:bg-gray-100 cursor-pointer">
                              <div className="flex items-center justify-between">
                                <div>
                                  <h4 className="text-sm font-medium text-[#8C1D40]">Pearson Links</h4>
                                  <p className="text-xs text-gray-600">Access Pearson</p>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search text-gray-400">
                                  <circle cx="11" cy="11" r="8"/>
                                  <path d="m21 21-4.35-4.35"/>
                                </svg>
                              </div>
                            </div>
                            
                            <div className="bg-[#f9f9f9] border border-gray-200 rounded-md p-3 hover:bg-gray-100 cursor-pointer">
                              <div>
                                <h4 className="text-sm font-medium text-[#8C1D40]">CreateAI Builder</h4>
                                <p className="text-xs text-gray-600">Create or embed an AI project from ASU's CreateAI Builder.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <div className="flex items-center gap-4 mt-8">
                            <label className="text-sm font-medium w-16">URL:</label>
                            <input 
                              type="url" 
                              className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
                              placeholder=""
                            />
                          </div>
                          
                          <div className="flex items-center gap-4">
                            <label className="text-sm font-medium w-16">Page Name:</label>
                            <input 
                              type="text" 
                              className="px-3 py-2 border border-gray-300 rounded-md w-40"
                              placeholder=""
                            />
                          </div>
                          
                          <div className="flex items-center gap-3">
                            <input 
                              type="checkbox" 
                              id="load-new-tab"
                              className="h-4 w-4 text-[#8C1D40] border-gray-300 rounded focus:ring-[#8C1D40]"
                            />
                            <label htmlFor="load-new-tab" className="text-sm">Load in a new tab</label>
                          </div>
                        </div>
                      </>
                    ) : null}
                    
                    <div className="flex items-center gap-4">
                      <label className="text-sm font-medium w-20">Indentation:</label>
                      <select className="px-3 py-2 pr-8 border border-gray-300 rounded-md">
                        <option value="0">Don't Indent</option>
                        <option value="1">Indent 1 level</option>
                        <option value="2">Indent 2 levels</option>
                        <option value="3">Indent 3 levels</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-b-lg border-t border-gray-200 flex justify-end gap-2">
                    <Dialog.Close asChild>
                      <Button variant="outline">Cancel</Button>
                    </Dialog.Close>
                    <Button className="bg-brand-maroon hover:bg-brand-maroon/90">Add Item</Button>
                  </div>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="p-1.5 hover:bg-gray-100 rounded transition-colors">
                  <MoreVertical className="h-5 w-5 text-gray-600" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Edit module</DropdownMenuItem>
                <DropdownMenuItem onClick={() => onDelete(moduleData.id)}>Delete module</DropdownMenuItem>
                <DropdownMenuItem>Move module</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        
        {actuallyExpanded && (
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