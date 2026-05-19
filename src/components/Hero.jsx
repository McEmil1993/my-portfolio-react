import { FiGithub, FiMail, FiPhone, FiMapPin, FiDownload } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Hero = () => {
  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/McEmil1993', label: 'GitHub' },
    { icon: FiMail, href: 'mailto:markemildacoylo209@gmail.com', label: 'Email' },
    { icon: FiPhone, href: 'tel:9273367353', label: 'Phone' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary-700 dark:text-primary-300">
                Hello, I'm
              </p>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-950 dark:text-white">
                Mark Emil <span className="accent-text">Dacoylo</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 font-medium">
                Full Stack Developer / Server Admin
              </h2>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Versatile Web Developer and DevOps Engineer with expertise in CI/CD pipelines, 
              Docker, and system administration. Proficient in Node.js, PHP (Laravel, CodeIgniter), 
              Vue.js, and modern web technologies.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <FiMapPin className="text-primary-700 dark:text-primary-300" />
                <span>Purok 7 Balintawak, Talibon, Bohol 6325</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiMail className="text-primary-700 dark:text-primary-300" />
                <span>markemildacoylo209@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiPhone className="text-primary-700 dark:text-primary-300" />
                <span>9273367353</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg glass hover:border-primary-300 dark:hover:border-primary-700 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-8 py-3 bg-primary-700 hover:bg-primary-800 text-white rounded-lg font-semibold transition-colors duration-200 shadow-sm"
              >
                Hire Me
              </a>
              <a
                href="#projects"
                className="px-8 py-3 glass hover:border-primary-300 dark:hover:border-primary-700 rounded-lg font-semibold transition-colors duration-200"
              >
                View Work
              </a>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-[400px] md:h-[500px]">
              {/* Main image container */}
              <div className="relative glass rounded-lg overflow-hidden h-full">
                <img 
                  src="/emil.png" 
                  alt="Mark Emil Dacoylo" 
                  className="w-full h-full object-cover object-center"
                />
                
                {/* Overlay gradient for better text visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                
                {/* Stats overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex justify-center space-x-4">
                    <div className="bg-white/95 dark:bg-gray-950/95 border border-white/40 px-6 py-3 rounded-lg">
                      <div className="text-3xl font-bold text-primary-700 dark:text-primary-300">6+</div>
                      <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">Years Exp</div>
                    </div>
                    <div className="bg-white/95 dark:bg-gray-950/95 border border-white/40 px-6 py-3 rounded-lg">
                      <div className="text-3xl font-bold text-primary-700 dark:text-primary-300">50+</div>
                      <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">Projects</div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
