import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Server, Layout, Cog, Users } from 'lucide-react';

const expertise = [
  {
    icon: Server,
    title: 'Backend Development (Django)',
    description: 'Developing robust web applications using Django and Django REST Framework, building secure APIs, handling authentication, and managing databases. Experienced in designing structured backend systems that support scalable and maintainable applications.',
  },
  {
    icon: Layout,
    title: 'Frontend Development',
    description: 'Building responsive and modern user interfaces using HTML, CSS, JavaScript, and React.js, focusing on clean design, component-based architecture, and seamless user experience.',
  },
  {
    icon: Cog,
    title: 'Systems Development & Problem Solving',
    description: 'Designing and implementing end-to-end applications, from idea to deployment, with emphasis on functionality and real-world impact. Strong foundation in data structures and algorithms, applied in collaborative and time-constrained environments like hackathons.',
  },
  {
    icon: Users,
    title: 'Volunteer Experience & Leadership (G17)',
    description: 'Serving as a G17 Ambassador, engaging in community-driven and collaborative tech initiatives, supporting knowledge sharing and peer learning. Actively contributed to team-based environments, strengthening communication, leadership, and the ability to work effectively with diverse groups.',
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 relative">
      <div className="section-container" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">About Me</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            Full-Stack Developer
            <span className="gradient-text"></span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Computer Science student at Bahir Dar University (BiT) with a strong interest in building scalable and impactful software solutions. I focus on turning ideas into real-world applications through hands-on projects, hackathons, and collaborative development, while continuously improving my skills in backend systems and problem solving.
          </p>
        </motion.div>

        {/* Expertise grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {expertise.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-6 hover-lift group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
