import { motion } from 'framer-motion';
import { FiCode, FiServer, FiGitBranch, FiDatabase } from 'react-icons/fi';

const About = () => {
  const objective =
    'Fullstack Developer and Server Administrator with solid experience in developing web applications, mobile applications, APIs, backend services, and database-driven systems. Skilled in designing practical solutions from frontend interfaces to backend logic, database structure, deployment setup, and server maintenance. Capable of handling projects from planning and development up to deployment, monitoring, and continuous improvement, with focus on usability, reliability, security, and long-term maintainability. Experienced in transforming manual workflows into organized digital systems that improve data tracking, reduce repetitive tasks, and support faster decision-making. Equipped with hands-on expertise in PHP Laravel, CodeIgniter, Node.js, Express JS, TypeScript, Python, Java, C#, VB.net, Vue.js, React, React Native, Next.js, JavaScript, HTML, CSS, Tailwind CSS, and Bootstrap to deliver scalable and maintainable software. Experienced in database management with MySQL/MariaDB, MongoDB, PostgreSQL, and Redis, as well as deployment automation, server configuration, and infrastructure management using Docker, Nginx, Apache, Git, GitLab CI/CD, GitHub CI/CD, AWS, and Linux/Ubuntu. Committed to building systems that are practical, easy to use, stable in production, and adaptable to future operational needs.';

  const highlights = [
    {
      icon: FiCode,
      title: 'Full Stack Development',
      description: 'Builds web applications, APIs, mobile apps, backend services, and frontend interfaces',
    },
    {
      icon: FiServer,
      title: 'DevOps & System Admin',
      description: 'Handles deployment, server configuration, monitoring, security, and maintenance',
    },
    {
      icon: FiGitBranch,
      title: 'Version Control',
      description: 'Uses Git, GitLab CI/CD, and GitHub CI/CD for organized and reliable delivery',
    },
    {
      icon: FiDatabase,
      title: 'Database Management',
      description: 'Designs and manages MySQL, MariaDB, PostgreSQL, MongoDB, and Redis databases',
    },
  ];

  return (
    <section id="about" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="accent-text">Me</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Passionate developer with a strong foundation in both development and deployment
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Description */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                Objectives
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                {objective}
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="mt-1">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100">Education</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    BS in Information Technology
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    Trinidad Municipal College (2018 - 2022)
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="mt-1">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100">Capstone Project</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Automated Student Clearance System using PHP Laravel and MySQL
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-lg hover:border-primary-300 dark:hover:border-primary-800 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-primary-50 dark:bg-primary-950 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="text-primary-700 dark:text-primary-300 text-2xl" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
