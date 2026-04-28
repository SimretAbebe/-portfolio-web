import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  SiPython, 
  SiJavascript, 
  SiTypescript, 
  SiPostgresql, 
  SiMongodb, 
  SiMysql, 
  SiReact, 
  SiDjango, 
  SiGit, 
  SiPostman, 
  SiGithub, 
  SiTailwindcss 
} from 'react-icons/si';
import { Database, Code, type LucideIcon } from 'lucide-react';
import type { IconType } from 'react-icons';

const techStack = [
  // Frequently Used - Core
  { name: 'React', icon: SiReact, color: '#61DAFB', isCore: true },
  { name: 'Django', icon: SiDjango, color: '#092E20', isCore: true },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1', isCore: true },
  
  // Others
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  { name: 'SQL', icon: Database, color: '#4479A1' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'GitHub', icon: SiGithub, color: '#181717' },
  { name: 'VS Code', icon: Code, color: '#007ACC' },
  { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
    },
  },
};

const TechStackSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-2 block opacity-70">Tech Stack I </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            Frequently <span className="gradient-text">Used</span>
          </h2>
          <div className="w-12 h-1 bg-primary/20 mx-auto mt-4 rounded-full" />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          {techStack.map((tech) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className={`relative group p-6 rounded-3xl transition-all duration-500 cursor-default bg-white/[0.02] border border-white/5 hover:border-primary/20 overflow-hidden ${
                tech.isCore ? 'ring-1 ring-primary/10 bg-primary/[0.02]' : ''
              }`}
            >
              {/* Background Aura */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 blur-2xl pointer-events-none"
                style={{ backgroundColor: tech.color }}
              />
              
              <div className="relative z-10 flex flex-col items-center gap-4">
                <div 
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                    tech.isCore ? 'bg-primary/5 shadow-2xl' : 'bg-white/5 shadow-xl'
                  } border border-white/10 group-hover:border-primary/20`}
                >
                  <tech.icon 
                    size={24} 
                    color={tech.color} 
                    className="group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="text-center">
                  <span className="block text-xs font-bold tracking-tight text-foreground/90 group-hover:text-primary transition-colors">
                    {tech.name}
                  </span>
                  {tech.isCore && (
                    <span className="text-[10px] uppercase tracking-widest text-primary/60 font-black mt-1 block">
                      Core
                    </span>
                  )}
                </div>
              </div>

              {/* Hover Indicator */}
              <motion.div 
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: tech.color }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;

