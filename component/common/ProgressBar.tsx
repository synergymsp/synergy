'use client';

import { useEffect, useState } from 'react';

interface ProgressBarProps {
  label: string;
  percentage: number;
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ label, percentage, className = '' }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => setProgress(percentage), 300);

    return () => clearTimeout(timeout);
  }, [percentage]);

  return (
    <div className={`mb-4 ${className}`}>
      <div className="mb-1 flex justify-between md:mb-3">
        <span className="font-exo text-title text-sm font-semibold uppercase md:text-base">{label}</span>
        <span className="font-exo text-title text-sm font-semibold uppercase md:text-base">{progress}%</span>
      </div>
      <div className="h-4 w-full rounded-md border border-[#D5E0F5] p-1">
        <div
          className="bg-theme h-full rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
