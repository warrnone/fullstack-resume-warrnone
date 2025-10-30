import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="
        flex flex-col items-center justify-center text-center
        min-h-screen 
        bg-white dark:bg-[#0a1929] 
        text-gray-900 dark:text-gray-100
        transition-colors duration-500
      "
    >
      {/* รูปโปรไฟล์ */}
      <motion.img
        src="/profile.jpg"
        alt="ใส่รูป"
        className="w-40 h-40 rounded-full shadow-lg shadow-blue-500/50 border-4 border-blue-600 object-cover mb-6 hover:scale-105 transition"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />

      {/* ข้อความ */}
      <motion.h1
        className="text-4xl sm:text-5xl font-bold mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Warrnone Saesee
      </motion.h1>

      <motion.p
        className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-xl"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        Full Stack Developer | React • Node.js • PHP • MySQL
      </motion.p>

      {/* ปุ่ม CTA */}
      <motion.a
        href="#projects"
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-500 transition"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        View My Work
      </motion.a>
    </section>
  );
}
