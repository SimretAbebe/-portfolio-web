import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, ExternalLink } from 'lucide-react';

const skillCategories = [
  {
    name: 'Programming Languages',
    skills: [
      { name: 'JavaScript', level: 94 },
      { name: 'TypeScript', level: 90 },
      { name: 'Python', level: 97 },
      { name: 'C++', level: 92 },
      { name: 'Java', level: 91 },
      { name: 'Dart', level: 90 },
      { name: 'PHP', level: 90 },
    ],
  },
  {
    name: 'Full-Stack & Backend Engineering',
    skills: [
      { name: 'Django', level: 95 },
      { name: 'Express.js', level: 96 },
      { name: 'FastAPI', level: 92 },
      { name: 'REST API Design', level: 96 },
      { name: 'Node.js', level: 91 },
      { name: 'Authentication & JWT', level: 94 },
    ],
  },
  {
    name: 'Frontend & UI Development',
    skills: [
      { name: 'React.js', level: 95 },
      { name: 'Redux / Redux-Saga', level: 93 },
      { name: 'Tailwind CSS', level: 94 },
      { name: 'HTML5 & CSS3', level: 96 },
      { name: 'Next.js', level: 90 },
      { name: 'Webpack & Modular Architecture', level: 92 },
    ],
  },
  {
    name: 'Databases & Data Engineering',
    skills: [
      { name: 'MongoDB', level: 95 },
      { name: 'PostgreSQL', level: 92 },
      { name: 'MySQL', level: 94 },
      { name: 'SQL', level: 97 },
    ],
  },
  {
    name: 'Competitive Programming & CS Foundations',
    skills: [
      { name: 'Data Structures & Algorithms', level: 98 },
      { name: 'Dynamic Programming', level: 95 },
      { name: 'Graphs & Trees', level: 94 },
      { name: 'Time & Space Complexity', level: 96 },
    ],
  },
  {
    name: 'Tools, Workflows & Collaboration',
    skills: [
      { name: 'Git & GitHub', level: 96 },
      { name: 'Agile & Team Collaboration', level: 93 },
      { name: 'Technical Documentation', level: 92 },
      { name: 'Testing & Debugging', level: 91 },
      { name: 'Project Management & Coordination', level: 94 },
    ],
  },
];

const certifications = [
   {
    name: 'BDU AI Hackathon - Top 10 Finalist',
    issuer: 'Bahir Dar University (BiT)',
    year: '2026',
    image: '/hackaton.jpg',
    link: '/hackathon.jpg',
    description: 'Recognized as a Top 10 finalist in the BDU AI Hackathon 2026 for outstanding performance and innovation as part of Team Tech Hive.',
    category: 'Hackathon / AI',
  },
  {
    name: 'Web Development Bootcamp',
    issuer: 'U.S. Embassy Addis Ababa',
    year: '2022',
    image: '/american-corner.jpg',
    link: '/american-corner.jpg',
    description: 'Participated in a web development bootcamp focused on building scalable web applications using modern tools and technologies.',
    category: 'Web Development',
  },
  {
    name: 'Artificial Intelligence (AI) for Social Impact',
    issuer: 'Asian Development Bank Institute (ADBI)',
    year: '2025',
    image: '/ai-for social.jpg',
    link: '/ai-for social.jpg',
    description: 'Completed a course on applying Artificial Intelligence for social impact, focusing on real-world problem solving and ethical AI applications.',
    category: 'AI / Learning',
  },
  {
    name: 'ALX Freelance Academy Program',
    issuer: 'ALX Ventures',
    year: '2025',
    image: '/simrets-alx.jpg',
    link: '/simrets-alx.jpg',
    description: 'Completed a 2-week intensive program focused on freelancing fundamentals, client acquisition, and remote work skills under ALX Ventures.',
    category: 'Professional Development',
  },
  {
    name: 'G17 Ethiopia National Induction',
    issuer: 'G17 University Ambassadors Consortium',
    year: '2025',
    image: '/national-induction.jpg',
    link: '/national-induction.jpg',
    description: 'Awarded for participating in the G17 Ethiopia National Induction held on December 14, 2025. Focused on leadership, global collaboration, and Sustainable Development Goals (SDGs).',
    category: 'Leadership / Global Program',
  },
  {
    name: 'Leaders of Change: Recognizing the Role of Youth in Achieving the SDGs',
    issuer: 'The Road to Rights & G17 University Ambassadors Consortium',
    year: '2026',
    image: '/leader of change.jpg',
    link: '/leader of change.jpg',
    description: 'Awarded for participating in the "Leaders of Change" webinar focused on youth engagement in achieving the Sustainable Development Goals (SDGs). Conducted on March 31, 2026, recognizing commitment to global impact and community development.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-background">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-20">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0] 
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, -40, 0],
            y: [0, -60, 0] 
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-24 -right-24 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-[120px]" 
        />
      </div>

      <div className="section-container relative z-10" ref={ref}>
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">Expertise</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-black">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1.5 bg-primary relative mx-auto mt-6 rounded-full overflow-hidden">
             <motion.div 
               initial={{ x: "-100%" }}
               animate={isInView ? { x: "100%" } : {}}
               transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
               className="absolute inset-0 bg-white/30"
             />
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="glass-card p-8 border border-white/10 hover:border-primary/30 transition-all duration-300 shadow-xl group relative overflow-hidden"
            >
              {/* Subtle card glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <h3 className="text-xl font-display font-bold mb-8 text-foreground group-hover:text-primary transition-colors flex items-center gap-3">
                <span className="w-2 h-6 bg-primary rounded-full" />
                {category.name}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="relative">
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors">{skill.name}</span>
                      <span className="text-xs text-primary font-mono font-bold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted/50 rounded-full overflow-hidden backdrop-blur-sm border border-white/5">
                      <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        animate={isInView ? { width: `${skill.level}%`, opacity: 1 } : {}}
                        transition={{ 
                          duration: 1.5, 
                          delay: 0.5 + (catIndex * 0.1) + (skillIndex * 0.05),
                          type: 'spring',
                          bounce: 0.3
                        }}
                        className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications Section */}
        <div className="mt-32 relative">
          {/* Section Background Decoration */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center gap-6 mb-20 text-center relative z-10"
          >
            <div className="relative">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-full blur-xl"
              />
              <div className="relative p-5 bg-background/80 backdrop-blur-xl rounded-2xl border border-primary/20 text-primary shadow-2xl">
                <Award className="w-12 h-12" />
              </div>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-4xl md:text-5xl font-display font-black tracking-tight">
                Honors & <span className="gradient-text">Certifications</span>
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
                A collection of professional milestones, academic achievements, and global recognitions 
                that validate my commitment to continuous learning and excellence.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.4, ease: "easeOut" } }}
                className="group relative h-full"
              >
                {/* Dynamic Border Glow */}
                <div className="absolute -inset-[1px] bg-gradient-to-br from-primary/50 via-transparent to-secondary/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                
                <div className="relative h-full flex flex-col bg-card/40 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] group-hover:bg-card/60">
                  
                  {/* Image Container with Holographic Effect */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <motion.img
                      src={cert.image}
                      alt={cert.name}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.8 }}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Shimmer/Holographic Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <motion.div 
                      initial={false}
                      animate={{ 
                        x: ['-100%', '200%'],
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        repeatDelay: 2,
                        ease: "linear"
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none"
                    />

                    {/* Category & Year Badges */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-primary border border-primary/30 px-2.5 py-1 rounded-full">
                        {cert.category || 'Professional'}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="text-xs font-mono font-bold bg-primary text-white px-2 py-1 rounded-md shadow-lg">
                        {cert.year}
                      </span>
                    </div>

                    {/* Hover Action Overlay */}
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                      <motion.a 
                        href={cert.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-5 py-2.5 rounded-full bg-white text-black font-bold text-sm flex items-center gap-2 shadow-2xl transition-transform"
                      >
                        Verify Credential <ExternalLink size={16} />
                      </motion.a>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="mb-4">
                      <h4 className="font-display font-bold text-lg leading-tight mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {cert.name}
                      </h4>
                      <div className="flex items-center gap-2 text-muted-foreground group-hover:text-foreground transition-colors">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                        <span className="text-sm font-medium">{cert.issuer}</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground/80 text-sm leading-relaxed mb-6 line-clamp-3 italic">
                      "{cert.description}"
                    </p>
                    
                    <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                       <div className="flex -space-x-2">
                          <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                            <Award size={14} />
                          </div>
                       </div>
                       <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: '40px' }}
                          className="h-px bg-gradient-to-r from-primary to-transparent"
                       />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

