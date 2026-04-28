import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

const experiences = [
  {
    title: 'Full-stack Developer',
    company: 'Future Interns',
    location: 'Remote',
    period: 'Aug 2025 – Sep 2025',
    description:
      'Participated in internship focused on the MERN stack, delivering scalable web solutions and participating in agile development cycles.',
    achievements: [
     'Architected and deployed full-stack applications using MongoDB, Express.js, React, and Node.js.',
     'Implemented responsive user interfaces with React and modern CSS frameworks, ensuring cross-browser compatibility.',
     'Integrated third-party APIs and services to enhance application functionality and user experience.',
     'Utilized Git and GitHub for version control, contributing to team workflows and maintaining code integrity.',
    ],
    technologies: [
      'MERN Stack',
      'JavaScript',
      'Node.js',
      'Express.js',
      'React',
      'MongoDB',
    ],
  },
  {
    title: 'Hackathon Finalist – SmartHire AI',
    company: 'Bahir Dar Institute of Technology (BiT) | Bahir Dar, Ethiopia',
    location: 'Bahir Dar',
    period: '48 Hour Hackathon April 2026',
    description:
      'Built and delivered a fully functional AI-powered platform within a high-pressure 48-hour hackathon environment to solve local employment challenges',
    achievements: [
      'Designed and developed SmartHire AI, an end-to-end platform connecting homeowners with trusted domestic workers.',
      'Implemented Fayda ID-based verification to ensure user trust, security, and authenticity within the system.',
      'Built a bilingual user experience (Amharic + English) to ensure accessibility for a diverse range of Ethiopian users.',
      'Integrated AI-assisted contract generation to streamline the hiring process and provide legal clarity for both parties.',
    ],
    technologies: [
      'Django',
      'Django REST Framework',
      'PostgreSQL',
      'React',
      'TailwindCSS',
    ],
  },
  {
    title: 'G17 UAC Campus Ambassador',
    company: 'G17 Ethiopian Chapter',
    location: 'Bahir Dar, Ethiopia',
    period: 'Nov 2025 – Present',
    description:
      'Representing Bahir Dar University as a G17 UAC Ambassador, focusing on mobilizing youth for sustainable development and technological innovation.',
    achievements: [
     'Advocate for sustainable development goals through student-led initiatives and professional networking.',
     'Represent Bahir Dar University in the G17 UAC network to foster international collaboration and digital literacy.',
    ],
    technologies: [
      'Community Leadership',
      'Communication',
      'Teamwork',
      'Event Management',
      'Networking',
    ],
  },
  {
    title: 'Web Development Intern',
    company: 'Prodigy InfoTech',
    location: 'Remote',
    period: 'Apr 2025 – May 2025',
    description:
      'Focused on front-end development and JavaScript-based logic to create interactive and user-centric web applications',
    achievements: [
      'Developed interactive web components using vanilla JavaScript and modern CSS frameworks.',
      'Implemented responsive designs ensuring optimal viewing experience across different devices.',
    ],
    technologies: [
     'HTML5',
     'CSS3',
     'JavaScript',
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-24 relative bg-muted/30">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Experience</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mt-4">
            Professional <span className="gradient-text">Journey</span>
          </h2>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-primary/20 ml-4 md:ml-8 pl-8 md:pl-12 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title + exp.company}
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative glass-card p-6 md:p-8 hover-lift group border border-white/5 hover:border-primary/30 transition-colors duration-300"
            >
              {/* Glowing Timeline Dot */}
              <div className="absolute -left-[41px] md:-left-[57px] top-10 w-4 h-4 bg-background border-2 border-primary rounded-full group-hover:bg-primary transition-colors duration-300 shadow-[0_0_10px_rgba(var(--primary),0.5)]" />

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Briefcase className="w-5 h-5" />
                    <span className="font-semibold text-lg">{exp.company}</span>
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-primary transition-colors duration-300">{exp.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm">
                    <span className="flex items-center gap-1.5 bg-background/50 px-3 py-1 rounded-full border border-white/5">
                      <MapPin className="w-4 h-4 text-primary/70" />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-1.5 bg-background/50 px-3 py-1 rounded-full border border-white/5">
                      <Calendar className="w-4 h-4 text-primary/70" />
                      {exp.period}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed bg-background/30 p-4 rounded-lg border border-white/5">{exp.description}</p>

              <ul className="space-y-3 mb-8">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                    <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs bg-secondary/10 text-secondary rounded-full border border-secondary/20 hover:bg-secondary hover:text-secondary-foreground transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
