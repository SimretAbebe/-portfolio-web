import { motion } from 'framer-motion';

interface ProfilePictureProps {
  mainImage?: string;
}

const ProfilePicture = ({ 
  mainImage = '/simret-image.jpg'
}: ProfilePictureProps) => {
  return (
    <div className="flex flex-col items-center">
      <motion.div
        // Circular, centered avatar sizing
        className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden shadow-[0_0_40px_rgba(var(--primary-rgb),0.3)] border-4 border-primary/20 group cursor-pointer"
        // Initial entrance animation
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
        // Eye-catching hover effect on the entire card
        whileHover={{ scale: 1.05, y: -10, rotate: 1 }}
      >
        {/* Main image with slow beautiful zoom effect on hover */}
        <motion.img
          src={mainImage}
          alt="Profile"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        
        {/* Cool modern shine/gradient overlay when hovered */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-overlay" />
      </motion.div>

      {/* Tagline below image */}
    </div>
  );
};

export default ProfilePicture;
