import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';

const Experience = () => {
  const experiences = [
    {
      title: 'Web Developer / Server Admin',
      company: 'Ground-Link Digital Advertising Services',
      location: 'Central Luzon, Philippines',
      period: 'Dec 2022 – Aug 2024',
      type: 'Full-time',
      responsibilities: [
        'Creating online websites for fullstack developer',
        'Manage server and deploy system',
        'Using PHP Laravel, CodeIgniter 4, Node.js with PM2, Vue.js, TypeScript',
        'Implementing RabbitMQ, Redis, Nginx, MariaDB, Docker, Git, MongoDB',
        'Building REST APIs and Bash scripts for patching',
        'GitLab runner CI/CD pipeline implementation',
        'Nginx ModSecurity configuration for web security',
        'Docker deployment and container orchestration',
        'IPTables configuration for Ubuntu security',
        'Maldet for scanning malware and troubleshooting',
      ],
      technologies: ['Laravel', 'CodeIgniter', 'Node.js', 'Vue.js', 'Docker', 'CI/CD', 'Nginx', 'MongoDB'],
    },
    {
      title: 'Software Developer',
      company: 'Pharmacy',
      location: 'Talibon, Bohol',
      period: 'Jan 2022 – Jun 2022',
      type: 'Full-time',
      responsibilities: [
        'Creating POS (Point of Sale) system and maintenance',
        'Using PHP Laravel and MySQL for database management',
        'Implementing inventory management features',
        'Building sales tracking and reporting systems',
      ],
      technologies: ['PHP', 'Laravel', 'MySQL', 'POS System'],
    },
    {
      title: 'Web Developer / Software Engineer',
      company: 'Freelancer (Remote)',
      location: 'Remote',
      period: 'Jun 2019 – Jan 2022',
      type: 'Freelance',
      responsibilities: [
        'Developed custom Inventory Management System',
        'Built comprehensive School Management System',
        'Created Healthcare Application for medical facilities',
        'Provided ongoing maintenance and support for client applications',
      ],
      technologies: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'Vue.js'],
    },
  ];

  return (
    <section id="experience" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and key achievements
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-500 to-purple-600"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
                } md:w-1/2`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-auto md:right-0 md:transform md:translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-gray-900 z-10 top-6"></div>

                {/* Content Card */}
                <div className="ml-8 md:ml-0 glass p-6 rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className={`flex items-center space-x-2 mb-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <span className="px-3 py-1 bg-primary-500/10 text-primary-500 rounded-full text-sm font-medium">
                      {exp.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    {exp.title}
                  </h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className={`flex items-center space-x-2 text-gray-600 dark:text-gray-400 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <FiBriefcase size={16} />
                      <span className="font-semibold">{exp.company}</span>
                    </div>
                    
                    <div className={`flex items-center space-x-2 text-gray-600 dark:text-gray-400 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <FiMapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                    
                    <div className={`flex items-center space-x-2 text-gray-600 dark:text-gray-400 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <FiCalendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <ul className={`space-y-2 mb-4 text-gray-600 dark:text-gray-400 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-sm flex items-start space-x-2">
                        <span className={`mt-1.5 w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0 ${index % 2 === 0 ? 'md:order-2' : ''}`}></span>
                        <span className="flex-1">{resp}</span>
                      </li>
                    ))}
                  </ul>

                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
