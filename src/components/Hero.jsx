import { FiGithub, FiMail, FiPhone, FiMapPin, FiDownload } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Hero = () => {
  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/McEmil1993', label: 'GitHub' },
    { icon: FiMail, href: 'mailto:markemildacoylo209@gmail.com', label: 'Email' },
    { icon: FiPhone, href: 'tel:+639952788209', label: 'Phone' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-8 px-4">
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
              <p className="text-primary-500 dark:text-primary-400 font-semibold text-lg">
                Hello, I'm
              </p>
              <h1 className="text-5xl md:text-7xl font-bold">
                Mark Emil <span className="gradient-text">Dacoylo</span>
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
                <FiMapPin className="text-primary-500" />
                <span>Purok 7 Balintawak, Talibon, Bohol 6325</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiMail className="text-primary-500" />
                <span>markemildacoylo209@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiPhone className="text-primary-500" />
                <span>+639952788209</span>
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
                  className="p-3 rounded-lg glass hover:bg-primary-500 hover:text-white transition-all duration-300 transform hover:scale-110"
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
                className="px-8 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Hire Me
              </a>
              <a
                href="#projects"
                className="px-8 py-3 glass hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
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
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-purple-600/20 rounded-3xl blur-2xl"></div>
              
              {/* Main image container */}
              <div className="relative glass rounded-3xl overflow-hidden h-full">
                <img 
                  src="/emil.png" 
                  alt="Mark Emil Dacoylo" 
                  className="w-full h-full object-cover object-center"
                />
                
                {/* Overlay gradient for better text visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Stats overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex justify-center space-x-4">
                    <div className="glass px-6 py-3 rounded-lg backdrop-blur-md">
                      <div className="text-3xl font-bold gradient-text">6+</div>
                      <div className="text-sm text-white font-semibold">Years Exp</div>
                    </div>
                    <div className="glass px-6 py-3 rounded-lg backdrop-blur-md">
                      <div className="text-3xl font-bold gradient-text">50+</div>
                      <div className="text-sm text-white font-semibold">Projects</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-10 -left-10 w-20 h-20 bg-primary-400/30 rounded-full blur-xl animate-bounce-slow"></div>
              <div className="absolute bottom-10 -right-10 w-32 h-32 bg-purple-400/30 rounded-full blur-xl animate-bounce-slow delay-150"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
