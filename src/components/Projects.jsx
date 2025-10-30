import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    { title: "Restaurant Realtime System", tech: "React, Node.js, Socket.io", desc: "Real-time dashboard for kitchen & table orders." },
    { title: "Promotion Management Module", tech: "PHP, MySQL, jQuery", desc: "Interactive promotion creation and scheduling UI." },
  ];

  return (
    <section id="projects" className="py-20 text-center">
      <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl font-bold mb-6 text-sky-400">
        Projects
      </motion.h2>
      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {projects.map((proj, i) => (
          <motion.div key={i} whileHover={{ scale: 1.03 }} className="bg-gray-800/70 p-5 rounded-lg border border-gray-700 shadow">
            <h3 className="text-xl font-semibold text-sky-400">{proj.title}</h3>
            <p className="text-gray-400">{proj.tech}</p>
            <p className="mt-2 text-gray-300">{proj.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
