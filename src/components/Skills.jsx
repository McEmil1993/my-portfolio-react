import { motion } from 'framer-motion';
import { 
  SiPhp, SiLaravel, SiNodedotjs, SiExpress, SiTypescript, SiJavascript, SiVuedotjs, 
  SiReact, SiNextdotjs, SiHtml5, SiCss3, SiBootstrap, SiTailwindcss,
  SiMysql, SiMongodb, SiRedis, SiNginx, SiDocker, SiGit, SiGitlab,
  SiAmazonwebservices, SiLinux, SiAndroid, SiPython, SiAwslambda,
  SiSocketdotio, SiFlutter, SiDotnet
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { TbBrandCSharp } from 'react-icons/tb';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Backend Development',
      color: 'from-blue-500 to-blue-600',
      skills: [
        { name: 'PHP Laravel', icon: SiLaravel, years: '6 years', level: 95 },
        { name: 'PHP CodeIgniter', icon: SiPhp, years: '6 years', level: 95 },
        { name: 'Node.js', icon: SiNodedotjs, years: '4 years', level: 90 },
        { name: 'Express.js', icon: SiExpress, years: '1 year', level: 80 },
        { name: 'TypeScript', icon: SiTypescript, years: '1 year', level: 80 },
        { name: 'Python Lambda', icon: SiPython, years: '2 years', level: 75 },
        { name: 'Java', icon: FaJava, years: '2 years', level: 70 },
        { name: 'C#', icon: TbBrandCSharp, years: '1 year', level: 50 },
        { name: 'VB.net', icon: SiDotnet, years: '1 year', level: 50 },
        { name: 'Socket.IO (Server)', icon: SiSocketdotio, years: '3 years', level: 70 },
      ],
    },
    {
      title: 'Frontend Development',
      color: 'from-purple-500 to-purple-600',
      skills: [
        { name: 'Vue.js', icon: SiVuedotjs, years: '3 years', level: 90 },
        { name: 'React', icon: SiReact, years: '2 years', level: 80 },
        { name: 'React Native', icon: SiReact, years: '2 years', level: 80 },
        { name: 'React Expo', icon: SiReact, years: '1 years', level: 80 },
        { name: 'Next.js', icon: SiNextdotjs, years: '1 year', level: 75 },
        { name: 'JavaScript', icon: SiJavascript, years: '6 years', level: 95 },
        { name: 'HTML5', icon: SiHtml5, years: '6 years', level: 95 },
        { name: 'CSS3', icon: SiCss3, years: '6 years', level: 90 },
        { name: 'Tailwind CSS', icon: SiTailwindcss, years: '2 years', level: 90 },
        { name: 'Bootstrap', icon: SiBootstrap, years: '5 years', level: 90 },
        { name: 'Socket.IO (Client)', icon: SiSocketdotio, years: '3 years', level: 70 },
      ],
    },
    {
      title: 'Database & Storage',
      color: 'from-green-500 to-green-600',
      skills: [
        { name: 'MySQL/MariaDB', icon: SiMysql, years: '6 years', level: 90 },
        { name: 'MongoDB', icon: SiMongodb, years: '2 years', level: 85 },
        { name: 'Redis', icon: SiRedis, years: '4 years', level: 85 },
      ],
    },
    {
      title: 'DevOps & Infrastructure',
      color: 'from-orange-500 to-orange-600',
      skills: [
        { name: 'Docker', icon: SiDocker, years: '4 years', level: 90 },
        { name: 'Nginx', icon: SiNginx, years: '4 years', level: 90 },
        { name: 'GitLab CI/CD', icon: SiGitlab, years: '4 years', level: 85 },
        { name: 'Git', icon: SiGit, years: '6 years', level: 95 },
        { name: 'AWS', icon: SiAmazonwebservices, years: '2 years', level: 75 },
        { name: 'Linux/Ubuntu', icon: SiLinux, years: '4 years', level: 90 },
      ],
    },
    {
      title: 'Mobile Development',
      color: 'from-pink-500 to-pink-600',
      skills: [
        { name: 'Android Studio', icon: SiAndroid, years: '3 years', level: 75 },
        { name: 'Flutter', icon: SiFlutter, years: 'Less than 1 year', level: 25 },
      ],
    },
  ];

  return (
    <section id="skills" className="section-container bg-gray-50 dark:bg-gray-900/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
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
              className="glass p-8 rounded-2xl"
            >
              <h3 className={`text-2xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
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
                    <div className="flex items-center space-x-4 p-4 rounded-xl bg-white dark:bg-gray-800 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
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
                            className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
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
