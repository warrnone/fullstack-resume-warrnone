import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
	return (
		<footer
			className="
        relative py-6 md:py-8
        bg-gray-100 dark:bg-gray-950
        border-t border-gray-200 dark:border-gray-800
        text-gray-700 dark:text-gray-400
        transition-colors duration-500
        overflow-hidden
      "
		>
			{/* 💫 Subtle Glow Background */}
			<div className="absolute top-0 left-1/2 w-[400px] h-[200px] bg-sky-400/10 blur-[80px] -translate-x-1/2 pointer-events-none" />

			{/* ✨ Content */}
			<motion.div
				initial={{ opacity: 0, y: 10 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className="
          max-w-6xl mx-auto px-6 flex flex-col md:flex-row
          items-center justify-between gap-4 text-center md:text-left relative z-10
        "
			>
				{/* 👨🏻‍💻 Left: Signature Line (New Design) */}
				<p className="text-center text-xs sm:text-sm text-gray-600 dark:text-gray-400 flex flex-col sm:flex-row items-center justify-center gap-2 leading-relaxed">
					<span>
						© {new Date().getFullYear()} —{' '}
						<span className="font-semibold text-gray-700 dark:text-gray-200">
							Warrnone Saesee
						</span>
					</span>
					<span>📍 Phuket, Thailand</span>
					<span>💻 Building high-performance web apps & seamless UX</span>
				</p>
			</motion.div>

			{/* 🌈 Top Gradient Blend */}
			<div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-transparent via-gray-100/30 to-gray-100 dark:from-transparent dark:via-gray-950/30 dark:to-gray-950 pointer-events-none" />
		</footer>
	);
}
