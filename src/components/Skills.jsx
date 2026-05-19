import { motion } from 'framer-motion';
import { 
  SiPhp, SiLaravel, SiNodedotjs, SiExpress, SiTypescript, SiJavascript, SiVuedotjs, 
  SiReact, SiNextdotjs, SiHtml5, SiCss, SiBootstrap, SiTailwindcss,
  SiMysql, SiMongodb, SiPostgresql, SiRedis, SiNginx, SiApache, SiDocker, SiGit, SiGitlab,
  SiLinux, SiAndroid, SiPython,
  SiSocketdotio, SiFlutter, SiDotnet
} from 'react-icons/si';
import { FaAws, FaJava } from 'react-icons/fa';
import { TbBrandCSharp, TbLambda } from 'react-icons/tb';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Backend Development',
      skills: [
        { name: 'PHP Laravel', icon: SiLaravel, years: '6 years', level: 95 },
        { name: 'PHP CodeIgniter', icon: SiPhp, years: '6 years', level: 95 },
        { name: 'Node.js', icon: SiNodedotjs, years: '4 years', level: 90 },
        { name: 'Express JS', icon: SiExpress, years: '1 year', level: 80 },
        { name: 'TypeScript', icon: SiTypescript, years: '1 year', level: 80 },
        { name: 'Python Lambda', icon: TbLambda, years: '2 years', level: 75 },
        { name: 'Python', icon: SiPython, years: '3 years', level: 75 },
        { name: 'Java', icon: FaJava, years: '2 years', level: 70 },
        { name: 'C#', icon: TbBrandCSharp, years: '1 year', level: 50 },
        { name: 'VB.net', icon: SiDotnet, years: '1 year', level: 50 },
        { name: 'Socket.IO (Server)', icon: SiSocketdotio, years: '3 years', level: 70 },
      ],
    },
    {
      title: 'Frontend Development',
      skills: [
        { name: 'Vue.js', icon: SiVuedotjs, years: '3 years', level: 90 },
        { name: 'React', icon: SiReact, years: '2 years', level: 80 },
        { name: 'React Native', icon: SiReact, years: '2 years', level: 80 },
        { name: 'React Expo', icon: SiReact, years: '1 years', level: 80 },
        { name: 'Next.js', icon: SiNextdotjs, years: '1 year', level: 75 },
        { name: 'JavaScript', icon: SiJavascript, years: '6 years', level: 95 },
        { name: 'HTML5', icon: SiHtml5, years: '6 years', level: 95 },
        { name: 'CSS3', icon: SiCss, years: '6 years', level: 90 },
        { name: 'Tailwind CSS', icon: SiTailwindcss, years: '2 years', level: 90 },
        { name: 'Bootstrap', icon: SiBootstrap, years: '5 years', level: 90 },
        { name: 'Socket.IO (Client)', icon: SiSocketdotio, years: '3 years', level: 70 },
      ],
    },
    {
      title: 'Database & Storage',
      skills: [
        { name: 'MySQL/MariaDB', icon: SiMysql, years: '6 years', level: 90 },
        { name: 'MongoDB', icon: SiMongodb, years: '2 years', level: 85 },
        { name: 'PostgreSQL', icon: SiPostgresql, years: 'Less than 1 year', level: 25 },
        { name: 'Redis', icon: SiRedis, years: '4 years', level: 85 },
      ],
    },
    {
      title: 'DevOps & Infrastructure',
      skills: [
        { name: 'Docker', icon: SiDocker, years: '4 years', level: 90 },
        { name: 'Nginx', icon: SiNginx, years: '4 years', level: 90 },
        { name: 'Apache', icon: SiApache, years: '4 years', level: 90 },
        { name: 'GitLab CI/CD', icon: SiGitlab, years: '4 years', level: 85 },
        { name: 'Git', icon: SiGit, years: '6 years', level: 95 },
        { name: 'AWS', icon: FaAws, years: '2 years', level: 75 },
        { name: 'Linux/Ubuntu', icon: SiLinux, years: '4 years', level: 90 },
      ],
    },
    {
      title: 'Mobile Development',
      skills: [
        { name: 'Android Studio', icon: SiAndroid, years: '3 years', level: 75 },
        { name: 'Flutter', icon: SiFlutter, years: 'Less than 1 year', level: 25 },
      ],
    },
  ];

  return (
    <section id="skills" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="accent-text">Skills</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My technical expertise and proficiency across various technologies
          </p>
        </div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-950 dark:text-white">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="flex items-center space-x-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 hover:border-primary-300 dark:hover:border-primary-800 transition-colors duration-200">
                      <div className="w-12 h-12 rounded-lg bg-primary-50 dark:bg-primary-950 flex items-center justify-center text-primary-700 dark:text-primary-300">
                        <skill.icon size={24} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                          {skill.name}
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {skill.years}
                        </p>
                        <div className="mt-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="h-2 rounded-full bg-primary-700 dark:bg-primary-400"
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
