import React from 'react';
import { cn } from '@/lib/utils';

export const EVENT_CATEGORIES = [
  { value: 'music', label: 'Music', emoji: '🎵' },
  { value: 'tech', label: 'Tech', emoji: '💻' },
  { value: 'sports', label: 'Sports', emoji: '⚽' },
  { value: 'art', label: 'Art', emoji: '🎨' },
  { value: 'food', label: 'Food', emoji: '🍕' },
  { value: 'networking', label: 'Networking', emoji: '🤝' },
  { value: 'education', label: 'Education', emoji: '📚' },
  { value: 'community', label: 'Community', emoji: '👥' },
  { value: 'nightlife', label: 'Nightlife', emoji: '🌙' },
  { value: 'other', label: 'Other', emoji: '✨' },
] as const;

export type EventCategory = typeof EVENT_CATEGORIES[number]['value'];

interface CategorySelectProps {
  value: EventCategory;
  onChange: (value: EventCategory) => void;
  className?: string;
}

export const CategorySelect: React.FC<CategorySelectProps> = ({ value, onChange, className }) => {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {EVENT_CATEGORIES.map((category) => (
        <button
          key={category.value}
          type="button"
          onClick={() => onChange(category.value)}
          className={cn(
            "px-3 py-2 text-[13px] font-medium uppercase tracking-wider border transition-colors",
            value === category.value
              ? "bg-onstage-charcoal text-white border-onstage-charcoal"
              : "bg-background text-foreground border-border hover:bg-secondary"
          )}
        >
          {category.emoji} {category.label}
        </button>
      ))}
    </div>
  );
};

interface CategoryBadgeProps {
  category: EventCategory;
  size?: 'sm' | 'md';
  className?: string;
}

export const CategoryBadge: React.FC<CategoryBadgeProps> = ({ category, size = 'sm', className }) => {
  const categoryInfo = EVENT_CATEGORIES.find(c => c.value === category) || EVENT_CATEGORIES[EVENT_CATEGORIES.length - 1];
  
  return (
    <div className={cn(
      "bg-background border border-border flex items-center",
      size === 'sm' ? "px-2 h-[23px]" : "px-3 h-[28px]",
      className
    )}>
      <span className={cn(
        "font-medium uppercase leading-none text-foreground",
        size === 'sm' ? "text-[11px]" : "text-[13px]"
      )}>
        {categoryInfo.emoji} {categoryInfo.label}
      </span>
    </div>
  );
};
