import { motion } from "framer-motion";
import { Card, CardContent, Typography } from "@mui/material";
import { FaCode, FaServer, FaCogs, FaLightbulb } from "react-icons/fa";

const SectionHeader = ({ title, subtitle }) => (
  <div className="text-center mb-16">
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-600 bg-clip-text text-transparent"
    >
      {title}
    </motion.h2>
    <motion.p
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.7 }}
      className="text-lg text-gray-700 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
    >
      {subtitle}
    </motion.p>
  </div>
);

const BulletPoint = ({ icon: Icon, text }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    transition={{ type: "spring", stiffness: 200 }}
    className="flex items-start gap-4"
  >
    <div className="flex-shrink-0 text-sky-500 mt-1">
      <Icon size={22} />
    </div>
    <Typography
      variant="body1"
      sx={{
        fontSize: "1.05rem",
        lineHeight: 1.8,
        color: "inherit",
      }}
    >
      {text}
    </Typography>
  </motion.div>
);

export default function About() {
  return (
    <section
      id="about"
      className="
        relative py-28 px-6 md:px-12 overflow-hidden
        text-gray-800 dark:text-gray-200
        transition-colors duration-500
      "
    >
      {/* 🌈 Gradient background adaptive */}
      <div className="
        absolute inset-0 -z-10
        bg-gradient-to-br from-sky-50 via-white to-blue-100
        dark:from-gray-900 dark:via-gray-950 dark:to-gray-900
        transition-all duration-500
      " />
      <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-sky-400/10 blur-[120px] rounded-full -translate-x-1/2 opacity-40 pointer-events-none" />

      {/* ===== Header ===== */}
      <SectionHeader
        title="About Me"
        subtitle="Full Stack Developer blending logic and creativity to deliver seamless, data-driven experiences."
      />

      {/* ===== Cards Grid ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* 👨🏻‍💻 Profile Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Card
            sx={{
              background:
                "linear-gradient(145deg, rgba(255,255,255,0.7), rgba(255,255,255,0.4))",
              border: "1px solid rgba(200,200,200,0.4)",
              borderRadius: "1.75rem",
              boxShadow:
                "0 4px 24px rgba(0,0,0,0.05), 0 0 0 1px rgba(255,255,255,0.05) inset",
              backdropFilter: "blur(14px)",
              transition: "background 0.4s ease",
              "&.MuiPaper-root": {
                background:
                  "linear-gradient(145deg, rgba(25,25,25,0.4), rgba(60,60,60,0.2))",
              },
            }}
            className="dark:bg-gray-800/70 dark:border-gray-700/40"
          >
            <CardContent className="p-10 md:p-12 text-left space-y-6">
              <Typography
                variant="body1"
                sx={{
                  fontSize: "1.15rem",
                  lineHeight: 1.9,
                  letterSpacing: "0.01em",
                  color: "inherit",
                }}
              >
                👋 Hi! I’m{" "}
                <span className="text-sky-600 dark:text-sky-400 font-semibold">
                  Warrnone Saesee
                </span>
                , a{" "}
                <strong className="text-sky-600 dark:text-sky-400">
                  Full Stack Developer
                </strong>{" "}
                from Thailand. My craft bridges frontend design and backend logic to
                create stable, efficient, and human-centered systems.
              </Typography>

              <Typography
                variant="body1"
                sx={{ fontSize: "1.15rem", lineHeight: 1.9, color: "inherit" }}
              >
                🚀 I’ve built a full restaurant management platform — connecting
                real-time kitchen tracking, order workflows, and promotion systems —
                optimizing daily operations for staff and customers.
              </Typography>

              <Typography
                variant="body1"
                sx={{ fontSize: "1.15rem", lineHeight: 1.9, color: "inherit" }}
              >
                🌱 Constantly improving through <strong>React</strong>,{" "}
                <strong>CodeIgniter</strong>, <strong>MySQL</strong>, and{" "}
                <strong>DevOps</strong> tools like <strong>Docker</strong> and{" "}
                <strong>PM2</strong>. My goal: build digital products that are both
                beautiful and performant.
              </Typography>
            </CardContent>
          </Card>
        </motion.div>

        {/* 📋 Highlights Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Card
            sx={{
              background:
                "linear-gradient(155deg, rgba(255,255,255,0.7), rgba(255,255,255,0.4))",
              border: "1px solid rgba(200,200,200,0.4)",
              borderRadius: "1.75rem",
              boxShadow:
                "0 4px 24px rgba(0,0,0,0.05), 0 0 0 1px rgba(255,255,255,0.05) inset",
              backdropFilter: "blur(14px)",
            }}
            className="dark:bg-gray-800/70 dark:border-gray-700/40"
          >
            <CardContent className="p-10 md:p-12 text-left space-y-8">
              <BulletPoint
                icon={FaCode}
                text={
                  <>
                    <strong>Technology Stack:</strong> Expert in{" "}
                    <strong>React, CodeIgniter, TailwindCSS,</strong> and{" "}
                    <strong>MySQL</strong> — building maintainable full-stack
                    systems.
                  </>
                }
              />
              <BulletPoint
                icon={FaServer}
                text={
                  <>
                    <strong>Performance Optimization:</strong> Reduced load times by{" "}
                    <span className="text-green-600 dark:text-green-400 font-semibold">
                      15%
                    </span>{" "}
                    through optimized SQL queries and modular frontend delivery.
                  </>
                }
              />
              <BulletPoint
                icon={FaCogs}
                text={
                  <>
                    <strong>Deployment Expertise:</strong> Familiar with{" "}
                    <strong>Docker, PM2</strong>, and{" "}
                    <strong>DevOps automation</strong> for smooth CI/CD pipelines.
                  </>
                }
              />
              <BulletPoint
                icon={FaLightbulb}
                text={
                  <>
                    <strong>Continuous Improvement:</strong> Dedicated to exploring
                    new tools that enhance productivity and code quality.
                  </>
                }
              />
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* ⚡ Divider */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-24 h-[2px] w-40 mx-auto bg-gradient-to-r from-sky-500 to-blue-600 rounded-full shadow-[0_0_10px_rgba(56,189,248,0.5)]"
      />
    </section>
  );
}
