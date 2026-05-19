import { FiGithub, FiMail } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="text-gray-600 dark:text-gray-400">
            <span>© {currentYear} Mark Emil Dacoylo.</span>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/McEmil1993"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors duration-200"
              aria-label="GitHub"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="mailto:markemildacoylo209@gmail.com"
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors duration-200"
              aria-label="Email"
            >
              <FiMail size={20} />
            </a>
          </div>
        </div>

        <div className="mt-4 text-center text-sm text-gray-500 dark:text-gray-500">
          <p>Full Stack Developer | DevOps Engineer | Server Administrator</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
