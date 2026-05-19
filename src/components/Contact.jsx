import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiBriefcase, FiSend } from 'react-icons/fi';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const contactInfo = [
    {
      icon: FiMail,
      title: 'Email',
      value: 'markemildacoylo209@gmail.com',
      href: 'mailto:markemildacoylo209@gmail.com',
    },
    {
      icon: FiPhone,
      title: 'Phone',
      value: '9273367353',
      href: 'tel:9273367353',
    },
    {
      icon: FiMapPin,
      title: 'Location',
      value: 'Purok 7 Balintawak, Talibon, Bohol 6325',
      href: '#',
    },
    {
      icon: FiGithub,
      title: 'GitHub',
      value: 'github.com/McEmil1993',
      href: 'https://github.com/McEmil1993',
    },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create mailto link with form data
    const mailtoLink = `mailto:markemildacoylo209@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="accent-text">Touch</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Let's discuss your project or opportunity. I'm always open to new challenges!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                Contact Information
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Feel free to reach out through any of these channels. I typically respond within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 p-4 glass rounded-lg hover:border-primary-300 dark:hover:border-primary-800 transition-colors duration-200 group"
                >
                  <div className="w-14 h-14 rounded-lg bg-primary-50 dark:bg-primary-950 flex items-center justify-center text-primary-700 dark:text-primary-300">
                    <info.icon size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{info.title}</p>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Additional Info */}
            <div className="glass p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center space-x-2">
                <FiBriefcase className="text-primary-700 dark:text-primary-300" />
                <span>Available For</span>
              </h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary-700 dark:bg-primary-400 rounded-full"></span>
                  <span>Full-time opportunities</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary-700 dark:bg-primary-400 rounded-full"></span>
                  <span>Freelance projects</span>
                </li>
                {/* <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary-700 dark:bg-primary-400 rounded-full"></span>
                  <span>Technical consultations</span>
                </li> */}
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Contract work</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass p-8 rounded-lg space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-gray-900 dark:text-gray-100"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Your Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-gray-900 dark:text-gray-100"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-gray-900 dark:text-gray-100"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none text-gray-900 dark:text-gray-100"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-primary-700 hover:bg-primary-800 text-white rounded-lg font-semibold transition-colors duration-200 shadow-sm flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <FiSend />
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
