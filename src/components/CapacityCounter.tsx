import React from 'react';
import { cn } from '@/lib/utils';

interface CapacityCounterProps {
  capacity: number | null;
  registeredCount: number;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showLabel?: boolean;
}

export const CapacityCounter: React.FC<CapacityCounterProps> = ({
  capacity,
  registeredCount,
  size = 'sm',
  className,
  showLabel = true
}) => {
  // If no capacity limit, don't show the counter
  if (capacity === null || capacity === undefined) {
    return null;
  }

  const spotsRemaining = Math.max(0, capacity - registeredCount);
  const isFull = spotsRemaining === 0;
  const isAlmostFull = spotsRemaining <= 5 && spotsRemaining > 0;
  const percentFilled = Math.min(100, (registeredCount / capacity) * 100);

  return (
    <div className={cn(
      "flex flex-col gap-1",
      className
    )}>
      <div className={cn(
        "flex items-center gap-2",
        size === 'lg' && "gap-3"
      )}>
        <div className={cn(
          "border flex items-center justify-center font-medium uppercase leading-none",
          isFull 
            ? "bg-[#1A1A1A] text-white border-[#1A1A1A]" 
            : isAlmostFull 
              ? "bg-[#FF6B6B] text-white border-[#FF6B6B]"
              : "bg-white text-black border-black",
          size === 'sm' && "px-2 h-[23px] text-[11px]",
          size === 'md' && "px-3 h-[28px] text-[12px]",
          size === 'lg' && "px-4 h-[32px] text-[13px]"
        )}>
          {isFull ? (
            "SOLD OUT"
          ) : (
            <>
              {spotsRemaining} {showLabel && (spotsRemaining === 1 ? 'SPOT LEFT' : 'SPOTS LEFT')}
            </>
          )}
        </div>
      </div>
      
      {size === 'lg' && (
        <div className="w-full h-1 bg-gray-200 overflow-hidden">
          <div 
            className={cn(
              "h-full transition-all duration-300",
              isFull ? "bg-[#1A1A1A]" : isAlmostFull ? "bg-[#FF6B6B]" : "bg-[#4CAF50]"
            )}
            style={{ width: `${percentFilled}%` }}
          />
        </div>
      )}
    </div>
  );
};
