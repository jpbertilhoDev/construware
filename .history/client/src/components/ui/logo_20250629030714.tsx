import { Link } from "wouter";
import { motion } from "framer-motion";

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  className?: string;
}

export function Logo({ size = 'md', showTagline = false, className = '' }: LogoProps) {
  const sizeClasses = {
    sm: {
      container: 'w-9 h-7',
      large: 'w-4 h-4',
      small: 'w-2.5 h-2.5',
      text: 'text-base md:text-lg',
    },
    md: {
      container: 'w-11 h-8 sm:w-13 sm:h-10',
      large: 'w-5 h-5 sm:w-6 sm:h-6',
      small: 'w-3 h-3 sm:w-3.5 sm:h-3.5',
      text: 'text-xl md:text-xl lg:text-2xl',
    },
    lg: {
      container: 'w-15 h-12',
      large: 'w-7 h-7',
      small: 'w-4.5 h-4.5',
      text: 'text-2xl md:text-2xl lg:text-3xl',
    }
  };

  const classes = sizeClasses[size];

  return (
    <Link href="/" className={`flex items-center space-x-3 group ${className}`}>
      {/* Recreated 3-Square Logo - Exact Layout from Image */}
      <div className="relative">
        <motion.div 
          className={`${classes.container} relative`}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          {/* Top Right Square (LARGE) */}
          <motion.div
            className={`${classes.large} bg-gradient-to-br from-orange-500 to-orange-600 absolute top-0 right-0 shadow-lg`}
            style={{ borderRadius: '4px' }}
            whileHover={{ scale: 1.1, rotate: 2 }}
            transition={{ duration: 0.2 }}
          />
          
          {/* Middle Left Square (LARGE) */}
          <motion.div
            className={`${classes.large} bg-gradient-to-br from-orange-500 to-orange-600 absolute shadow-lg`}
            style={{ 
              borderRadius: '4px',
              top: '50%',
              left: '0',
              transform: 'translateY(-50%)'
            }}
            whileHover={{ scale: 1.1, rotate: -2 }}
            transition={{ duration: 0.2, delay: 0.1 }}
          />
          
          {/* Bottom Right Square (SMALL) */}
          <motion.div
            className={`${classes.small} bg-gradient-to-br from-orange-500 to-orange-600 absolute bottom-0 right-0 shadow-md`}
            style={{ borderRadius: '2px' }}
            whileHover={{ scale: 1.15, rotate: 3 }}
            transition={{ duration: 0.2, delay: 0.2 }}
          />
          
          {/* Enhanced glow effect */}
          <div className={`absolute inset-0 ${classes.container} bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-lg opacity-0 group-hover:opacity-100 blur-sm transition-all duration-300`}></div>
        </motion.div>
        
        {/* Floating particles on hover */}
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {[...Array(2)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-orange-400 rounded-full"
              style={{
                top: `${30 + i * 20}%`,
                left: `${20 + i * 40}%`,
              }}
              animate={{
                y: [-8, -16, -8],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.4
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Brand Name with Inter Font */}
      <motion.span 
        className={`${classes.text} font-black bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent group-hover:from-orange-100 group-hover:to-white transition-all duration-300`}
        style={{ fontFamily: 'Inter, sans-serif' }}
        whileHover={{ 
          backgroundImage: "linear-gradient(to right, #ff6b35, #f7931e, #ff6b35)",
          WebkitBackgroundClip: "text"
        }}
      >
        construware
      </motion.span>
    </Link>
  );
}
