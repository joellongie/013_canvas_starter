"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface NavigationContextType {
  isNavVisible: boolean;
  toggleNav: () => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};

export const NavigationProvider = ({ children }: { children: ReactNode }) => {
  const [isNavVisible, setIsNavVisible] = useState(true);

  const toggleNav = () => {
    setIsNavVisible(prev => !prev);
  };

  return (
    <NavigationContext.Provider value={{ isNavVisible, toggleNav }}>
      {children}
    </NavigationContext.Provider>
  );
};