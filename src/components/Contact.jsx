import { motion } from 'framer-motion';
import {
	FaEnvelope,
	FaLinkedin,
	FaGithub,
	FaFacebook,
	FaPhoneAlt,
} from 'react-icons/fa';

export default function Contact() {
	return (
		<section
			id="contact"
			className="
        relative py-28 px-6 md:px-12 text-center
        text-gray-800 dark:text-gray-200
        transition-colors duration-500 overflow-hidden
      "
		>
			{/* 🌈 Background gradient glow */}
			<div className="absolute inset-0 -z-10 bg-gradient-to-br from-sky-50 via-white to-blue-100 dark:from-[#0a192f] dark:via-gray-950 dark:to-gray-900" />
			<div className="absolute top-1/3 left-1/2 w-[700px] h-[700px] bg-sky-400/20 blur-[160px] rounded-full -translate-x-1/2 opacity-30 pointer-events-none" />

			{/* ===== Header ===== */}
			<motion.h2
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent"
			>
				Get In Touch
			</motion.h2>

			<motion.p
				initial={{ opacity: 0, y: 10 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.1, duration: 0.6 }}
				className="text-lg text-gray-700 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed mb-14"
			>
				Let’s connect and build something great together! Whether it’s
				collaboration, consulting, or just a chat about tech — I’d love to hear
				from you.
			</motion.p>

			{/* ===== Contact Card ===== */}
			<motion.div
				initial={{ opacity: 0, scale: 0.9 }}
				whileInView={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.6 }}
				viewport={{ once: true }}
				className="
          max-w-md mx-auto p-[2px] rounded-2xl
          bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500
          shadow-[0_0_25px_rgba(56,189,248,0.3)]
        "
			>
				<div
					className="
            bg-white/80 dark:bg-gray-900/80
            backdrop-blur-xl rounded-2xl p-10 flex flex-col items-center
            shadow-inner
          "
				>
					<FaEnvelope className="text-5xl text-sky-500 mb-4 drop-shadow-sm" />
					<h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
						Let’s Talk
					</h3>

					{/* 📧 Email */}
					<motion.a
						whileHover={{ scale: 1.05 }}
						transition={{ type: 'spring', stiffness: 200 }}
						href="mailto:warrnone.saesee@gmail.com"
						className="
              inline-block px-6 py-3 rounded-full text-lg font-semibold
              text-white bg-gradient-to-r from-sky-500 to-blue-600
              hover:from-sky-400 hover:to-blue-500
              shadow-md hover:shadow-sky-500/40 transition-all
            "
					>
						warrnone.saesee@gmail.com
					</motion.a>

					{/* ☎️ Phone */}
					<p className="mt-6 text-lg text-gray-700 dark:text-gray-400 flex items-center gap-2">
						<FaPhoneAlt className="text-sky-500" /> 087-4647350
					</p>

					{/* 🌐 Social Links */}
					<div className="flex items-center justify-center gap-8 mt-8 text-3xl">
						{/* GitHub */}
						<motion.a
							whileHover={{ scale: 1.15, rotate: 3 }}
							href="https://github.com/warrnone"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-600 dark:text-gray-300 hover:text-sky-500 transition-all"
						>
							<FaGithub />
						</motion.a>

						{/* LinkedIn */}
						<motion.a
							whileHover={{ scale: 1.15, rotate: -3 }}
							href="https://linkedin.com/in/warrnone"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-600 dark:text-gray-300 hover:text-sky-500 transition-all"
						>
							<FaLinkedin />
						</motion.a>

						{/* Facebook */}
						<motion.a
							whileHover={{ scale: 1.15, rotate: 3 }}
							href="https://facebook.com/warrnone.saesee"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-600 dark:text-gray-300 hover:text-sky-500 transition-all"
						>
							<FaFacebook />
						</motion.a>
					</div>
				</div>
			</motion.div>

			{/* 🌙 Fade into Footer (soft blend) */}
			<div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-900/70 via-gray-900/30 to-transparent dark:from-gray-950/80 dark:via-gray-900/40 dark:to-transparent pointer-events-none" />
		</section>
	);
}
