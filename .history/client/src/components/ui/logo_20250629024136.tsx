import { Link } from "wouter";

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  className?: string;
}

export function Logo({ size = 'md', showTagline = true, className = '' }: LogoProps) {
  const sizeClasses = {
    sm: {
      icon: 'w-6 h-6',
      iconInner: 'w-3 h-3',
      iconCenter: 'w-1.5 h-1.5',
      text: 'text-lg',
      tagline: 'text-xs'
    },
    md: {
      icon: 'w-8 h-8 sm:w-10 sm:h-10',
      iconInner: 'w-4 h-4 sm:w-5 sm:h-5',
      iconCenter: 'w-2 h-2 sm:w-2.5 sm:h-2.5',
      text: 'text-xl sm:text-2xl',
      tagline: 'text-xs'
    },
    lg: {
      icon: 'w-12 h-12',
      iconInner: 'w-6 h-6',
      iconCenter: 'w-3 h-3',
      text: 'text-2xl sm:text-3xl',
      tagline: 'text-sm'
    }
  };

  const classes = sizeClasses[size];

  return (
    <Link href="/" className={`flex items-center space-x-3 group ${className}`}>
      {/* Custom Logo Icon */}
      <div className="relative">
        <div className={`${classes.icon} bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-orange-500/25 transition-all duration-300 group-hover:scale-110`}>
          <div className={`${classes.iconInner} bg-white rounded-sm flex items-center justify-center`}>
            <div className={`${classes.iconCenter} bg-gradient-to-br from-orange-500 to-orange-600 rounded-sm`}></div>
          </div>
        </div>
        {/* Subtle glow effect */}
        <div className={`absolute inset-0 ${classes.icon} bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg opacity-20 blur-sm group-hover:opacity-40 transition-all duration-300`}></div>
      </div>
      
      {/* Brand Name */}
      <div className="flex flex-col">
        <span className={`${classes.text} font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent group-hover:from-orange-100 group-hover:to-white transition-all duration-300`}>
          Construware
        </span>
        {showTagline && (
          <span className={`${classes.tagline} text-orange-400 font-medium opacity-80 -mt-1`}>
            BUILD SMART
          </span>
        )}
      </div>
    </Link>
  );
} 