import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi';

const Projects = () => {
  const projects = [
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
      gradient: 'from-blue-500 to-purple-600',
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
      gradient: 'from-green-500 to-teal-600',
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
      gradient: 'from-orange-500 to-red-600',
    },
    {
      title: 'Healthcare Application',
      description: 'Medical facility management system for patient records, appointments, and healthcare service delivery.',
      type: 'Freelance Project',
      technologies: ['Node.js', 'MongoDB', 'Vue.js', 'Express', 'Socket.io'],
      features: [
        'Patient record management',
        'Appointment scheduling',
        'Medical history tracking',
        'Real-time notifications',
      ],
      gradient: 'from-pink-500 to-purple-600',
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
      gradient: 'from-indigo-500 to-blue-600',
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
      gradient: 'from-yellow-500 to-orange-600',
    },
  ];

  return (
    <section id="projects" className="section-container bg-gray-50 dark:bg-gray-900/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
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
              className="glass rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              {/* Project Header with Gradient */}
              <div className={`h-40 bg-gradient-to-br ${project.gradient} p-6 flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                <FiCode className="text-white text-6xl opacity-20 absolute" />
                <span className="relative z-10 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold">
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
                        <span className="mt-1.5 w-1 h-1 bg-primary-500 rounded-full flex-shrink-0"></span>
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
                      className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
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
            className="inline-flex items-center space-x-2 px-8 py-3 glass hover:bg-primary-500 hover:text-white transition-all duration-300 rounded-lg font-semibold transform hover:scale-105"
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
