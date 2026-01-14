import { motion } from 'framer-motion';
import { FiCode, FiServer, FiGitBranch, FiDatabase } from 'react-icons/fi';

const About = () => {
  const highlights = [
    {
      icon: FiCode,
      title: 'Full Stack Development',
      description: 'Expert in PHP Laravel, Node.js, Vue.js, and modern web technologies',
    },
    {
      icon: FiServer,
      title: 'DevOps & System Admin',
      description: 'Skilled in Docker, CI/CD pipelines, Nginx, and server management',
    },
    {
      icon: FiGitBranch,
      title: 'Version Control',
      description: 'Proficient with Git, GitLab CI/CD, and collaborative development',
    },
    {
      icon: FiDatabase,
      title: 'Database Management',
      description: 'Experience with MySQL, MariaDB, MongoDB, and Redis',
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
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Passionate developer with a strong foundation in both development and deployment
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Description */}
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              I'm a <span className="text-primary-500 font-semibold">Full Stack Developer and DevOps Engineer</span> with 
              over 6 years of experience in web development and system administration. My expertise spans across 
              backend development with PHP Laravel and Node.js, frontend development with Vue.js, and infrastructure 
              management with Docker and CI/CD pipelines.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              I specialize in creating scalable web applications, implementing robust DevOps practices, and ensuring 
              high availability of services. My broad skill set allows me to streamline operations, drive efficiency, 
              and deliver high-quality solutions that contribute to team success.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="mt-1">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100">Education</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    BS in Information Technology in Software Engineering
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
                className="glass p-6 rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-primary-500/10 dark:bg-primary-500/20 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="text-primary-500 text-2xl" />
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
