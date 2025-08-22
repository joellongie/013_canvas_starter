"use client"

import { useNavigation } from './NavigationContext';

interface LayoutContentProps {
  children: React.ReactNode;
}

export default function LayoutContent({ children }: LayoutContentProps) {
  const { isNavVisible } = useNavigation();
  
  return (
    <div className={`pr-[320px] pt-[50px] h-full transition-all duration-300 ${
      isNavVisible ? 'pl-[312px]' : 'pl-[88px]'
    }`}>
      <main className="h-full overflow-y-auto bg-[#FAFAFA]">
        {children}
      </main>
    </div>
  );
}