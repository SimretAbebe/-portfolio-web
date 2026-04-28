import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown, Download, X, FileText } from 'lucide-react';
import ProfilePicture from './ProfilePicture';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Full Stack Developer ';
  
  const [showResumeModal, setShowResumeModal] = useState(false);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/CV.pdf'; // Update with your resume file path
    link.download = 'CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center justify-center w-full min-h-[80vh] text-center gap-8 py-20">
            
            {/* Profile Picture (Avatar Style) */}
            <div className="flex justify-center mb-2 mt-12 lg:mt-0">
              <ProfilePicture />
            </div>

            <div className="flex flex-col items-center justify-center w-full">
              {/* Main headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 tracking-tight leading-[1.15]"
              >
                <span className="block text-foreground mb-2">
                  Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary animate-gradient drop-shadow-sm">Simret</span>
                </span>
                <span className="block min-h-[1.5em]">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-muted-foreground to-foreground/60 break-words">
                    {displayText}
                  </span>
                  <span className="inline-block w-1.5 md:w-2.5 h-[0.8em] bg-primary animate-pulse ml-2 align-baseline" />
                </span>
              </motion.h1>

              {/* Email Tag */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-8"
              >
                <a 
                  href="mailto:simretabebe24@gmail.com"
                  className="inline-flex items-center gap-2 px-5 py-2 bg-primary/5 border border-primary/20 rounded-full text-primary hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 shadow-sm"
                >
                  <span className="text-sm font-medium">simretabebe24@gmail.com</span>
                </a>
              </motion.div>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed font-light"
              >
                Specializing in <strong className="text-primary font-medium">Django</strong>, <strong className="text-secondary font-medium">Machine Learning</strong>, and <strong className="text-foreground font-medium">Full Stack Development</strong>. Building scalable solutions, high-performance services, and AI integrated systems.
              </motion.p>

              {/* CTA Buttons & Badge */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col md:flex-row items-center justify-center gap-4 w-full"
              >
                <motion.button
                  onClick={scrollToProjects}
                  className="group relative overflow-hidden flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground rounded-full font-bold shadow-[0_0_30px_rgba(190,95%,55%,0.3)] hover:shadow-[0_0_40px_rgba(190,95%,55%,0.5)] transition-all duration-300 w-full sm:w-auto"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    View Projects
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                </motion.button>

                <motion.button
                  onClick={() => setShowResumeModal(true)}
                  className="group flex items-center justify-center gap-2 px-8 py-3.5 bg-background border border-border hover:border-primary/50 hover:bg-primary/5 rounded-full font-medium transition-all duration-300 w-full md:w-auto"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <FileText className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  Resume
                </motion.button>

                {/* Eye-catching Availability Badge */}
                <motion.div
                  className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-full glass-card border border-primary/30 shadow-[0_0_20px_rgba(190,95%,55%,0.15)] backdrop-blur-md w-full md:w-auto mt-2 md:mt-0"
                >
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                  </span>
                  <span className="text-sm font-medium tracking-wide text-foreground/90 whitespace-nowrap">Available for new opportunities</span>
                </motion.div>
              </motion.div>

              {/* Tech stack preview */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm"
              >
                <span className="text-muted-foreground font-medium uppercase tracking-wider text-xs">Powered By</span>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                  {['Django', 'React', 'Machine Learning', 'Python'].map((tech) => (
                    <span key={tech} className="px-4 py-1.5 rounded-full border border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/10 transition-colors text-foreground/80 text-xs font-medium backdrop-blur-sm cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-muted-foreground"
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>

      <AnimatePresence>
        {showResumeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowResumeModal(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl h-[85vh] flex flex-col bg-background rounded-xl border border-white/10 shadow-2xl overflow-hidden"
            >
              <div className="flex items-center justify-between p-4 border-b border-white/10 bg-background/50 backdrop-blur-md">
                <h3 className="text-xl font-display font-bold">Resume Preview</h3>
                <div className="flex items-center gap-2">
                  <button
                    onClick={downloadResume}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Download Resume
                  </button>
                  <button
                    onClick={() => setShowResumeModal(false)}
                    className="p-2 rounded-full hover:bg-muted transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <iframe src="/CV.pdf" className="w-full h-full bg-muted/50" title="Resume PDF" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HeroSection;
