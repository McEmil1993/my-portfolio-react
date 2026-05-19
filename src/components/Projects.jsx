import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      title: 'Student Management System',
      description: 'Full-featured MERN stack student management platform with comprehensive assessment, attendance tracking, and schedule management capabilities.',
      type: 'Personal Project',
      technologies: ['React.js', 'Node.js', 'Express', 'MongoDB', 'JavaScript'],
      features: [
        'Student assessment with scoring system',
        'Attendance tracking and monitoring',
        'Schedule import and management',
        'Real-time data synchronization',
      ],
    },
    {
      title: 'Automated Student Clearance System',
      description: 'A comprehensive system for managing student clearance processes, automating approval workflows and document tracking.',
      type: 'Capstone Project',
      technologies: ['PHP', 'Laravel', 'MySQL', 'Bootstrap', 'JavaScript'],
      features: [
        'Automated clearance workflow',
        'Multi-department approval system',
        'Document tracking and management',
        'Real-time status updates',
      ],
    },
    {
      title: 'POS System for Pharmacy',
      description: 'Point of Sale system for Pharmacy with inventory management, sales tracking, and reporting features.',
      type: 'Professional Project',
      technologies: ['PHP', 'Laravel', 'MySQL', 'Vue.js', 'Tailwind CSS'],
      features: [
        'Real-time inventory tracking',
        'Sales and transaction management',
        'Customer management system',
        'Automated reporting and analytics',
      ],
    },
    {
      title: 'School Management System',
      description: 'Complete school management solution covering student enrollment, attendance, grades, and administrative tasks.',
      type: 'Freelance Project',
      technologies: ['PHP', 'Laravel', 'MySQL', 'Vue.js', 'Bootstrap'],
      features: [
        'Student enrollment and registration',
        'Attendance tracking system',
        'Grade management and report cards',
        'Parent and teacher portals',
      ],
    },
    {
      title: 'Healthcare Application',
      description: 'Medical facility management system for patient records, appointments, and healthcare service delivery.',
      type: 'Freelance Project',
      technologies: ['Android Studio', 'Java', 'MySQL'],
      features: [
        'Patient record management',
        'Appointment scheduling',
        'Medical history tracking',
        'Real-time notifications',
      ],
    },
    {
      title: 'Inventory Management System',
      description: 'Robust inventory tracking system with real-time stock monitoring, supplier management, and automated reordering.',
      type: 'Freelance Project',
      technologies: ['PHP', 'CodeIgniter', 'MySQL', 'JavaScript', 'jQuery'],
      features: [
        'Real-time stock monitoring',
        'Supplier and vendor management',
        'Purchase order automation',
        'Low stock alerts and reports',
      ],
    },
    {
      title: 'Digital Advertising Platform',
      description: 'Full-stack advertising management platform with campaign tracking, analytics, and client management.',
      type: 'Professional Project',
      technologies: ['Node.js', 'TypeScript', 'MongoDB', 'Vue.js', 'Docker'],
      features: [
        'Campaign management dashboard',
        'Real-time analytics and reporting',
        'Client portal and billing',
        'Automated deployment with CI/CD',
      ],
    },
  ];

  return (
    <section id="projects" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="accent-text">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work and key projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-lg overflow-hidden hover:border-primary-300 dark:hover:border-primary-800 transition-colors duration-200 group"
            >
              {/* Project Header */}
              <div className="h-32 bg-gray-100 dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 p-6 flex items-center justify-between">
                <FiCode className="text-primary-700 dark:text-primary-300 text-3xl" />
                <span className="px-3 py-1 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-semibold">
                  {project.type}
                </span>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-xs text-gray-600 dark:text-gray-400 flex items-start space-x-2">
                        <span className="mt-1.5 w-1 h-1 bg-primary-700 dark:bg-primary-400 rounded-full flex-shrink-0"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/McEmil1993"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-3 glass hover:border-primary-300 dark:hover:border-primary-800 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200 rounded-lg font-semibold"
          >
            <FiGithub size={24} />
            <span>View More on GitHub</span>
            <FiExternalLink size={18} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
