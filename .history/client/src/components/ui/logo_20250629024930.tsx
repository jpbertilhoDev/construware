import { Link } from "wouter";
import { motion } from "framer-motion";

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
      {/* Custom Logo Icon with Enhanced Effects */}
      <div className="relative">
        {/* Main Icon */}
        <motion.div 
          className={`${classes.icon} bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-orange-500/25 transition-all duration-300 group-hover:scale-110 relative overflow-hidden`}
          whileHover={{ rotate: [0, -2, 2, 0] }}
          transition={{ duration: 0.5 }}
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          
          <motion.div 
            className={`${classes.iconInner} bg-white rounded-sm flex items-center justify-center relative z-10`}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div 
              className={`${classes.iconCenter} bg-gradient-to-br from-orange-500 to-orange-600 rounded-sm`}
              animate={{ 
                boxShadow: [
                  "0 0 0 0 rgba(255, 107, 53, 0)",
                  "0 0 0 4px rgba(255, 107, 53, 0.1)",
                  "0 0 0 0 rgba(255, 107, 53, 0)"
                ]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "loop"
              }}
            />
          </motion.div>
        </motion.div>
        
        {/* Enhanced glow effect */}
        <div className={`absolute inset-0 ${classes.icon} bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg opacity-20 blur-sm group-hover:opacity-40 transition-all duration-300`}></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-orange-400 rounded-full"
              style={{
                top: `${20 + i * 20}%`,
                left: `${15 + i * 25}%`,
              }}
              animate={{
                y: [-10, -20, -10],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Enhanced Brand Name */}
      <div className="flex flex-col">
        <motion.span 
          className={`${classes.text} font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent group-hover:from-orange-100 group-hover:to-white transition-all duration-300`}
          whileHover={{ 
            backgroundImage: "linear-gradient(to right, #ff6b35, #f7931e, #ff6b35)",
            WebkitBackgroundClip: "text"
          }}
        >
          Construware
        </motion.span>
        {showTagline && (
          <motion.span 
            className={`${classes.tagline} text-orange-400 font-medium opacity-80 -mt-1 tracking-wider`}
            initial={{ opacity: 0.8 }}
            whileHover={{ 
              opacity: 1,
              letterSpacing: "0.15em"
            }}
            transition={{ duration: 0.3 }}
          >
            BUILD SMART
          </motion.span>
        )}
      </div>
    </Link>
  );
} 