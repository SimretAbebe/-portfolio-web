import { motion, useInView, AnimatePresence, LayoutGroup } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, ChevronRight, X, Layout, Server, Database, Zap, Cpu, Code2 } from 'lucide-react';

const projects = [
  {
    title: "Women's Journeys Blog",
    description: 'A premium storytelling platform dedicated to sharing impactful and inspiring women’s experiences.',
    longDescription:
      'A visually rich storytelling platform combining a React frontend with a robust Django REST backend. Implemented secure JWT authentication and dynamic content fetching. The platform emphasizes accessibility, performance, and storytelling, enabling seamless engagement with meaningful content.',
    image: '/women-blog.PNG',
    tags: ['React', 'Django', 'PostgreSQL', 'UI/UX'],
    category: ['Full-Stack Applications', 'Social Impact'],
    techStack: {
      frontend: ['React.js', 'Tailwind CSS', 'Axios'],
      backend: ['Django', 'Django REST Framework'],
      database: ['PostgreSQL'],
      authentication: ['Simple JWT'],
    },
    features: [
      'Dynamic blog post management via REST APIs',
      'Inclusive and accessible UI/UX design',
      'Secure multi-user authentication system',
      'Responsive content rendering',
    ],
    github: 'https://github.com/SimretAbebe/women-stories-blog',
    demo: 'https://women-stories-blog.vercel.app/',
  },
  {
    title: 'Full Stack Realtime Chat App',
    description: 'A professional real-time communication platform built with the MERN stack and WebSockets.',
    longDescription:
      'A scalable real-time chat application integrating Socket.io for instant messaging and Zustand for efficient state management. The platform includes secure JWT-based authentication, online user presence tracking, and Cloudinary-powered media uploads. Designed with a clean and responsive UI using TailwindCSS and DaisyUI.',
    image: '/chat-app.PNG',
    tags: ['MERN Stack', 'Socket.io', 'Zustand', 'Cloudinary'],
    category: ['Full-Stack Applications'],
    techStack: {
      frontend: ['React', 'TailwindCSS', 'DaisyUI', 'Zustand'],
      backend: ['Node.js', 'Express.js', 'Socket.io'],
      database: ['MongoDB'],
      media: ['Cloudinary'],
    },
    features: [
      'Real-time messaging with WebSocket integration',
      'Secure JWT authentication and authorization',
      'Online/Offline presence tracking',
      'Media sharing via Cloudinary integration',
      'Global state management with Zustand',
    ],
    github: 'https://github.com/SimretAbebe/chat-app',
    demo: 'https://chat-app-2-qwm0.onrender.com',
  },
  {
    title: 'Smart Queue Management',
    description: 'A digital solution to optimize service queues, reducing wait times for public institutions.',
    longDescription:
      'Tailored for professional and public institutions to streamline service delivery. Users can join, track, and manage queues digitally. Built with a Django REST backend and React + TypeScript frontend, supporting role-based access and real-time updates.',
    image: '/queue-system.PNG',
    tags: ['TypeScript', 'Django', 'System Design'],
    category: ['System Solutions'],
    techStack: {
      frontend: ['React', 'TypeScript', 'Tailwind CSS'],
      backend: ['Django', 'DRF'],
      database: ['PostgreSQL'],
    },
    features: [
      'Real-time queue tracking and status updates',
      'Role-based access control (Admin/Staff/User)',
      'Departmental service organization',
      'Digital ticketing system',
    ],
    github: 'https://github.com/SimretAbebe/Ethiopian-Queue-Management-System',
    demo: 'https://smartqueue-system.vercel.app/',
  },
  {
    title: 'SmartHire AI',
    description: 'AI-powered marketplace connecting employers with verified domestic workers using identity verification.',
    longDescription:
      'A Top 10 hackathon project transforming the domestic labor market. Features AI-powered worker matching and bilingual contract generation (Amharic/English) using Gemini AI. Emphasizes trust through digital identity verification.',
    image: '/smarthire-ai.PNG',
    tags: ['AI/ML', 'Gemini AI', 'Hackathon'],
    category: ['AI Projects', 'Hackathon Projects'],
    techStack: {
      ai: ['Google Gemini API'],
      backend: ['Django', 'DRF'],
      frontend: ['React', 'Vite'],
      verification: ['Fayda ID API'],
    },
    features: [
      'Intelligent matching using skill-matching algorithms',
      'Automated bilingual contract generation',
      'Digital ID verification for worker safety',
      'Reliable API failover mechanisms',
    ],
    role: 'Backend Developer',
    impact: ['Top 10 National AI Hackathon Finalist', 'Built core AI integration workflows'],
    github: 'https://github.com/SimretAbebe/SmartHire-Ai',
    demo: 'https://smart-hire-ai-eight.vercel.app/',
  },
  {
    title: 'Ethiopian Fitness Hub',
    description: 'A modern fitness platform with culturally-inspired aesthetics and engaging interactive elements.',
    longDescription:
      'Emphasizes responsive design and smooth animations with an Ethiopian-inspired theme. Showcases structured programs and interactive components built with Framer Motion and React Hook Form.',
    image: '/ethio-fitness.PNG',
    tags: ['Frontend', 'Animations', 'Framer Motion'],
    category: ['Frontend & UI'],
    techStack: {
      frontend: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      tooling: ['Vite'],
    },
    features: [
      'Culturally-inspired UI theme and palette',
      'Smooth scroll-based animations',
      'Interactive program explorers',
      'Optimized performance with Vite',
    ],
    github: 'https://github.com/SimretAbebe/ethio-fitness',
    demo: 'https://ethio-fitness.vercel.app/',
  },
];

const categories = [
  'All',
  'AI Projects',
  'Full-Stack Applications',
  'System Solutions',
  'Frontend & UI',
  'Hackathon Projects',
];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category.includes(activeCategory));

  return (
    <section id="projects" className="py-24 relative overflow-hidden" ref={sectionRef}>
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-4 block">Portfolio</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mt-2 mb-6 tracking-tight">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            A curated selection of engineering projects where I solve real-world problems through clean code and innovative system design.
          </p>
        </motion.div>

        {/* Categories / Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-16 px-4">
          <LayoutGroup id="categories">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-6 py-2.5 rounded-full text-sm font-medium transition-colors duration-300 ${
                  activeCategory === category ? 'text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {activeCategory === category && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-primary rounded-full -z-10"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {category}
              </button>
            ))}
          </LayoutGroup>
        </div>

        {/* Projects Grid - Bento Style */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-3 auto-rows-auto gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              // Bento Logic: Featured projects take more space
              const isFeatured = index === 0 || index === 3;
              const isSuperFeatured = index === 4; // 5th Project
              
              return (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 30 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    type: 'spring',
                    stiffness: 100,
                    damping: 20
                  }}
                  className={`group relative h-full ${
                    isSuperFeatured ? 'md:col-span-3' : isFeatured ? 'md:col-span-2' : 'md:col-span-1'
                  }`}
                >
                  <div 
                    className={`relative h-full glass-card hover-lift border border-white/5 transition-all duration-500 rounded-3xl overflow-hidden flex flex-col ${
                      isSuperFeatured 
                        ? 'bg-gradient-to-br from-primary/10 via-background/40 to-secondary/10 border-primary/20 md:flex-row' 
                        : 'bg-white/[0.01] hover:bg-white/[0.04]'
                    }`}
                  >
                    {/* Glowing Accent Border */}
                    <div className={`absolute inset-0 border rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
                      isSuperFeatured ? 'border-primary/40 opacity-30' : 'border-primary/20'
                    }`} />

                    {/* Image Container */}
                    <div className={`relative overflow-hidden ${
                      isSuperFeatured 
                        ? 'aspect-video md:aspect-auto md:w-2/5' 
                        : isFeatured ? 'aspect-[2/1] md:aspect-[21/9]' : 'aspect-video'
                    }`}>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-105"
                      />
                      
                      {/* Subtle Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                      
                      {/* Badges */}
                      <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                        {isSuperFeatured && (
                          <span className="text-[10px] font-black uppercase tracking-widest bg-primary text-white px-3 py-1 rounded-full shadow-2xl animate-pulse">
                            Main Showcase
                          </span>
                        )}
                        {project.tags.slice(0, 3).map(tag => (
                          <span key={tag} className="text-[9px] font-black uppercase tracking-widest bg-black/60 backdrop-blur-md text-primary px-2.5 py-1 rounded-full border border-primary/20 shadow-xl">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Action Icons */}
                      <div className="absolute bottom-6 right-6 flex gap-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="w-10 h-10 rounded-2xl bg-primary/20 backdrop-blur-xl border border-primary/30 flex items-center justify-center hover:bg-primary transition-colors text-white"
                          title="Source Code"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                        <a 
                          href={project.demo} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="w-10 h-10 rounded-2xl bg-secondary/20 backdrop-blur-xl border border-secondary/30 flex items-center justify-center hover:bg-secondary transition-colors text-white"
                          title="Live Demo"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </div>
                    </div>

                    {/* Content Details */}
                    <div className={`p-6 md:p-8 flex flex-col flex-grow relative ${isSuperFeatured ? 'md:justify-center md:w-3/5' : ''}`}>
                      <div className="flex justify-between items-start mb-4">
                        <h3 className={`font-display font-bold tracking-tight group-hover:text-primary transition-colors duration-300 ${
                          isSuperFeatured ? 'text-3xl md:text-4xl' : 'text-2xl md:text-3xl'
                        }`}>
                          {project.title}
                        </h3>
                      </div>
                      
                      <p className={`text-muted-foreground/80 leading-relaxed mb-8 flex-grow ${
                        isSuperFeatured ? 'text-lg line-clamp-4' : 'line-clamp-3 md:line-clamp-none'
                      }`}>
                        {project.description}
                      </p>

                      <div className="flex items-center justify-between pt-6 border-t border-white/5">
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="group/more flex items-center gap-3 text-sm font-black uppercase tracking-[0.2em] text-primary/70 hover:text-primary transition-all"
                        >
                          Discover More 
                          <span className="w-8 h-px bg-primary/20 group-hover/more:w-12 group-hover/more:bg-primary transition-all duration-500" />
                          <ChevronRight className="w-4 h-4" />
                        </button>
                        
                        <span className="text-[9px] font-medium text-muted-foreground/40 italic">
                          {project.category[0]}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modern Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-background/95 backdrop-blur-md overflow-hidden"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl max-h-[90vh] bg-card border border-white/10 rounded-2xl shadow-2xl overflow-y-auto"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-10 p-2 rounded-full bg-background/50 hover:bg-muted transition-colors border border-white/5"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="grid lg:grid-cols-5 h-full">
                {/* Visual Side */}
                <div className="lg:col-span-2 bg-muted/30 p-8 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/5">
                  <div className="relative aspect-square rounded-xl overflow-hidden shadow-2xl mb-8 group">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                  </div>

                  <div className="flex flex-col gap-3">
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-3 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-primary/20"
                    >
                      <ExternalLink className="w-5 h-5" />
                      View Live Project
                    </a>
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-white/10 font-bold hover:bg-white/10 transition-all"
                    >
                      <Github className="w-5 h-5" />
                      View Source Code
                    </a>
                  </div>
                </div>

                {/* Content Side */}
                <div className="lg:col-span-3 p-8 md:p-12">
                  <div className="mb-10">
                    <div className="flex items-center gap-3 mb-4">
                      {selectedProject.category.map(cat => (
                        <span key={cat} className="text-[10px] font-black uppercase tracking-tighter text-primary bg-primary/10 px-2 py-1 rounded">
                          {cat}
                        </span>
                      ))}
                      {selectedProject.role && (
                        <span className="text-[10px] font-black uppercase tracking-tighter text-secondary bg-secondary/10 px-2 py-1 rounded">
                          {selectedProject.role}
                        </span>
                      )}
                    </div>
                    <h3 className="text-3xl md:text-5xl font-display font-bold mb-6 tracking-tight">
                      {selectedProject.title}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {selectedProject.longDescription}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-10">
                    {/* Features Section */}
                    <div>
                      <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary mb-6">
                        <Zap className="w-4 h-4" /> Key Features
                      </h4>
                      <ul className="space-y-4">
                        {selectedProject.features.map((feature, i) => (
                          <li key={i} className="flex gap-3 text-sm text-muted-foreground group">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Section */}
                    <div>
                      <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-secondary mb-6">
                        <Cpu className="w-4 h-4" /> Tech Ecosystem
                      </h4>
                      <div className="space-y-6">
                        {Object.entries(selectedProject.techStack).map(([key, techs]) => (
                          <div key={key}>
                            <p className="text-[10px] uppercase font-bold text-muted-foreground/60 mb-2">{key}</p>
                            <div className="flex flex-wrap gap-2">
                              {(techs as string[]).map(tech => (
                                <span key={tech} className="px-2.5 py-1 text-xs bg-white/5 border border-white/5 rounded-md hover:border-primary/30 transition-colors">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {selectedProject.impact && (
                    <div className="mt-12 pt-10 border-t border-white/5">
                      <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-accent mb-6">
                         Project Impact
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {selectedProject.impact.map((text, i) => (
                          <div key={i} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-sm text-muted-foreground italic">
                            "{text}"
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
