import React from 'react';
import { cn } from '@/lib/utils';
import { LucideProps, Zap } from 'lucide-react';

interface InteractiveHoverCardProps {
  heading: string;
  text: string;
  icon?: React.ReactElement<LucideProps>;
  imageUrl?: string;
  className?: string;
}

const InteractiveHoverCard: React.FC<InteractiveHoverCardProps> = ({
  heading,
  text,
  icon,
  imageUrl,
  className,
}) => {
  return (
    <div
      className={cn(
        'group flex flex-col md:flex-row items-center gap-6 p-5 rounded-xl border border-foreground/10 bg-background transition-colors hover:border-primary/80 w-full max-w-lg h-auto md:h-44',
        className
      )}
    >
      {/* Icon or Image */}
      <div className="flex-none flex items-center justify-center h-20 w-20 relative border border-foreground/20 rounded-lg bg-background group-hover:border-primary transition-colors duration-300 overflow-hidden">
        {imageUrl ? (
          <img src={imageUrl} alt={heading} className="w-full h-full object-cover dark:invert" />
        ) : icon ? (
          React.cloneElement(icon, {
            className: 'w-9 h-9 text-foreground group-hover:text-primary transition-colors duration-300',
          })
        ) : (
          <Zap className="w-9 h-9 text-foreground group-hover:text-primary transition-colors duration-300" />
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 h-full overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {/* Centered Heading Horizontally Only */}
        <div className="flex items-center justify-center">
          <div className="relative font-semibold text-lg cursor-pointer overflow-hidden select-none w-fit py-1">
            {/* Base text, always visible underneath */}
            <span className="text-foreground">{heading}</span>
            {/* Wipe container with top text layer */}
          </div>
        </div>
        <p className="text-sm text-foreground/70 select-none leading-snug">
          {text}
        </p>
      </div>
    </div>
  );
};

export default InteractiveHoverCard; 
