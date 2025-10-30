import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaPhp } from "react-icons/fa";
import {
  SiTailwindcss,
  SiVite,
  SiMysql,
  SiCodeigniter,
  SiSocketdotio,
  SiArduino,
  SiBootstrap,
  SiMui,
  SiJquery,
} from "react-icons/si";
import { MdOutlineApi } from "react-icons/md";

export default function TechStack() {
  const frontend = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-sky-400" /> },
    { name: "Vite", icon: <SiVite className="text-yellow-400" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "Bootstrap 5", icon: <SiBootstrap className="text-purple-500" /> },
    { name: "Material UI", icon: <SiMui className="text-sky-500" /> },
    { name: "jQuery", icon: <SiJquery className="text-blue-600" /> },
  ];

  const backend = [
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "PHP", icon: <FaPhp className="text-indigo-400" /> },
    { name: "CodeIgniter 3", icon: <SiCodeigniter className="text-orange-500" /> },
    { name: "MySQL", icon: <SiMysql className="text-sky-500" /> },
    { name: "Socket.io", icon: <SiSocketdotio className="text-gray-400" /> },
    { name: "REST API", icon: <MdOutlineApi className="text-green-400" /> },
  ];

  const iot = [{ name: "Arduino", icon: <SiArduino className="text-cyan-400" /> }];

  return (
    <section
      id="skills"
      className="
        relative py-20 transition-colors duration-500
        bg-gradient-to-b from-white via-gray-50 to-white
        dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
      "
    >
      {/* ✨ Radial Glow Background */}
      <div className="
        absolute inset-0 
        bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.12),transparent_70%)]
        dark:bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.15),transparent_70%)]
        blur-3xl
      "></div>

      {/* 🧩 Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="
          relative text-4xl font-extrabold mb-12 text-transparent
          bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600
          tracking-wide text-left px-8 sm:px-16
        "
      >
        Tech Stack
      </motion.h2>

      {/* FRONTEND */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-14 px-8 sm:px-16"
      >
        <h3 className="text-2xl font-semibold text-sky-600 dark:text-sky-300 mb-6 text-left">
          Frontend
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {frontend.map((tech, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 250 }}
              className="
                flex flex-col items-center justify-center p-4 rounded-2xl border
                border-gray-200 dark:border-gray-700
                bg-white/70 dark:bg-gray-800/60
                backdrop-blur-md shadow-md hover:shadow-sky-400/30
                transition-all duration-300
              "
            >
              <div className="text-5xl mb-2">{tech.icon}</div>
              <span className="text-gray-800 dark:text-gray-200 text-sm font-medium">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* BACKEND */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-14 px-8 sm:px-16"
      >
        <h3 className="text-2xl font-semibold text-green-600 dark:text-green-400 mb-6 text-left">
          Backend
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {backend.map((tech, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 250 }}
              className="
                flex flex-col items-center justify-center p-4 rounded-2xl border
                border-gray-200 dark:border-gray-700
                bg-white/70 dark:bg-gray-800/60
                backdrop-blur-md shadow-md hover:shadow-green-400/30
                transition-all duration-300
              "
            >
              <div className="text-5xl mb-2">{tech.icon}</div>
              <span className="text-gray-800 dark:text-gray-200 text-sm font-medium">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* IOT */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="px-8 sm:px-16"
      >
        <h3 className="text-2xl font-semibold text-yellow-600 dark:text-yellow-400 mb-6 text-left">
          Hardware / IoT
        </h3>
        <div className="flex flex-wrap gap-6">
          {iot.map((tech, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 250 }}
              className="
                flex flex-col items-center justify-center p-4 rounded-2xl border
                border-gray-200 dark:border-gray-700
                bg-white/70 dark:bg-gray-800/60
                backdrop-blur-md shadow-md hover:shadow-yellow-400/40
                transition-all duration-300
              "
            >
              <div className="text-5xl mb-2">{tech.icon}</div>
              <span className="text-gray-800 dark:text-gray-200 text-sm font-medium">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
