import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

export default function Education() {
	const education = [
		{
			school: 'Walailak University',
			degree: 'Bachelor of Engineering in Computer Engineering',
			period: '2017 – 2021',
			image: '/images/IMG_6241.jpg',
			logo: '/images/wu-campus.png',
			desc: 'Built a strong foundation in computer science, software engineering, and web development. Experienced in real-world projects focusing on full-stack technologies and data engineering.',
		},
		{
			school: 'P.P.A.O. Bantaladnua (Wankroo 2502) School',
			degree: 'Science–Mathematics Program',
			period: '2014 – 2017',
			image: '/images/Ban.jpg',
			logo: '/images/Bantaladnua.jpg',
			desc: 'Specialized in science and mathematics, strengthening analytical thinking, problem-solving, and teamwork skills through academic competitions and projects.',
		},
	];

	return (
		<section
			id="education"
			className="relative py-28 px-6 md:px-12 bg-gradient-to-b from-white via-gray-50 to-sky-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-gray-900 dark:text-gray-200 overflow-hidden"
		>
			{/* ===== Header ===== */}
			<motion.div
				initial={{ opacity: 0, y: 25 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7 }}
				viewport={{ once: true }}
				className="text-center mb-20"
			>
				<h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
					Education
				</h2>
				<p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
					Academic milestones that shaped my technical mindset and creative
					discipline.
				</p>
			</motion.div>

			{/* ===== Timeline ===== */}
			<div className="relative max-w-5xl mx-auto">
				{/* 🧭 Central Vertical Line */}
				<div className="absolute left-6 sm:left-1/2 sm:-translate-x-1/2 top-0 w-[2px] h-full bg-gradient-to-b from-sky-400/50 via-blue-400/40 to-cyan-400/30" />

				<div className="space-y-24 relative">
					{education.map((edu, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: i * 0.2, duration: 0.8 }}
							viewport={{ once: true }}
							className={`relative flex flex-col sm:flex-row items-center gap-10 ${
								i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
							}`}
						>
							{/* 🌐 Timeline Node (Circle + Connector) */}
							<div className="absolute left-[5px] sm:left-1/2 sm:-translate-x-1/2 flex flex-col items-center z-10">
								<div className="w-5 h-5 rounded-full bg-gradient-to-br from-sky-400 to-blue-600 shadow-lg relative">
									<div className="absolute inset-0 rounded-full bg-sky-400 animate-ping opacity-40" />
								</div>
								{/* Connector line */}
								{i < education.length - 1 && (
									<div className="w-[2px] h-24 bg-gradient-to-b from-sky-400/30 to-blue-400/20 mt-1" />
								)}
							</div>

							{/* 🧠 Text Section */}
							<div
								className={`w-full sm:w-1/2 text-center ${
									i % 2 === 0 ? 'sm:text-left' : 'sm:text-right'
								} px-6`}
							>
								<div className="inline-block bg-white/80 dark:bg-gray-900/70 backdrop-blur-sm rounded-2xl p-6 shadow-md">
									<h3
										className={`text-xl font-semibold text-sky-700 dark:text-sky-400 flex items-center gap-2 ${
											i % 2 === 0
												? 'justify-center sm:justify-start'
												: 'justify-center sm:justify-end'
										}`}
									>
										<FaGraduationCap /> {edu.degree}
									</h3>
									<p className="text-gray-800 dark:text-gray-300 font-medium mt-1">
										{edu.school}
									</p>
									<p className="text-sm text-gray-500 dark:text-gray-500 mb-3">
										{edu.period}
									</p>
									<p className="text-gray-700 dark:text-gray-400 leading-relaxed text-sm md:text-[15px] line-clamp-4">
										{edu.desc}
									</p>
								</div>
							</div>

							{/* 🏫 Image Section */}
							<div className="w-full sm:w-1/2 px-6">
								<motion.div
									whileHover={{ scale: 1.03 }}
									transition={{ type: 'spring', stiffness: 200 }}
									className="relative overflow-hidden rounded-2xl shadow-xl group"
								>
									<motion.img
										src={edu.image}
										alt={edu.school}
										className="w-full h-56 object-cover brightness-90 dark:brightness-110 opacity-90 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
									/>

									{/* Overlay Gradient */}
									<div className="absolute inset-0 bg-gradient-to-tr from-sky-900/20 via-transparent to-transparent" />

									{/* Floating Logo */}
									{edu.logo && (
										<motion.div
											initial={{ opacity: 0, y: 10 }}
											whileInView={{ opacity: 1, y: 0 }}
											transition={{ duration: 0.5 }}
											className="absolute top-3 left-3 bg-white/90 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-2 shadow-lg border border-gray-200 dark:border-gray-700"
										>
											<img
												src={edu.logo}
												alt={`${edu.school} logo`}
												className="w-14 h-14 object-contain"
											/>
										</motion.div>
									)}
								</motion.div>
							</div>
						</motion.div>
					))}
				</div>
			</div>

			{/* 🌈 Bottom Divider Glow */}
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ delay: 0.3, duration: 0.8 }}
				className="mt-24 h-[2px] w-48 mx-auto bg-gradient-to-r from-sky-500 to-blue-600 rounded-full shadow-[0_0_20px_rgba(56,189,248,0.5)]"
			/>
		</section>
	);
}
