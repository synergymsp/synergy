'use client';

import { usePathname } from 'next/navigation';
import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

interface JiraWidgetContextType {
  isVisible: boolean
  isLoaded: boolean
  hasError: boolean
  toggleVisibility: () => void
}

const JiraWidgetContext = createContext<JiraWidgetContextType | undefined>(undefined);

export function useJiraWidget() {
  const context = useContext(JiraWidgetContext);

  if (context === undefined) {
    throw new Error('useJiraWidget must be used within a JiraWidgetProvider');
  }

  return context;
}

interface JiraWidgetProviderProps {
  children: ReactNode
}

export function JiraWidgetProvider({ children }: JiraWidgetProviderProps) {
  const pathname = usePathname();
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Hide widget on contact page
  const shouldShowWidget = pathname !== '/contact';

  useEffect(() => {
    setIsVisible(shouldShowWidget);
  }, [shouldShowWidget]);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const contextValue: JiraWidgetContextType = {
    isVisible: isVisible && shouldShowWidget,
    isLoaded,
    hasError,
    toggleVisibility,
  };

  return <JiraWidgetContext.Provider value={contextValue}>{children}</JiraWidgetContext.Provider>;
}
