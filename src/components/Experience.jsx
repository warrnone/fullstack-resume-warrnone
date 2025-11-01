import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

export default function Experience() {
	const experiences = [
		{
			company: 'BOOKENGINE DOT COM (THAILAND) COMPANY LIMITED',
			role: 'Full Stack Developer',
			period: 'Jan 2025 – Present',
			desc: 'Developed real-time restaurant management and order tracking systems using PHP, Node.js, and React with Socket.IO and MySQL.',
		},
		{
			company: 'DAN-THAI EQUIPMENT COMPANY LIMITED',
			role: 'System Analyst (Short-term)',
			period: 'Oct – Dec 2022',
			desc: 'Responsible for overseeing and maintaining the airport’s PLC-controlled baggage conveyor system, supporting on-site monitoring, troubleshooting, and coordination with engineers to ensure smooth operations.',
		},
	];

	return (
		<section
			id="experience"
			className="relative py-28 px-6 md:px-12 text-gray-900 dark:text-gray-200 overflow-hidden"
		>
			{/* 🌈 Gradient background with layered lighting */}
			<div className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-100/30 via-white/60 to-blue-100/20 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900" />
			<div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 bg-sky-400/20 blur-[120px] rounded-full opacity-30 pointer-events-none" />

			{/* ===== Header ===== */}
			<motion.div
				initial={{ opacity: 0, y: 25 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7 }}
				viewport={{ once: true }}
				className="text-center mb-16"
			>
				<h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
					Experience
				</h2>
				<p className="text-gray-700 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
					My professional journey — from building scalable systems to crafting
					intuitive digital experiences.
				</p>
			</motion.div>

			{/* ===== Timeline ===== */}
			<div className="relative max-w-4xl mx-auto">
				{/* central timeline line */}
				<div className="absolute left-4 sm:left-1/2 h-full w-[2px] bg-gradient-to-b from-sky-400/70 to-blue-500/70 transform sm:-translate-x-1/2" />

				<div className="space-y-20 relative">
					{experiences.map((exp, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: i * 0.2, duration: 0.7 }}
							viewport={{ once: true }}
							className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
								i % 2 === 0
									? 'sm:flex-row-reverse sm:pl-12 sm:text-right'
									: 'sm:pr-12 sm:text-left'
							}`}
						>
							{/* glowing connector point */}
							<div
								className={`absolute left-[10px] sm:left-1/2 sm:-translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-sky-400 to-blue-500 shadow-[0_0_12px_rgba(56,189,248,0.7)]`}
							>
								<div className="absolute inset-0 rounded-full bg-sky-400 animate-ping opacity-40" />
							</div>

							{/* timeline card */}
							<div
								className={`relative mt-8 sm:mt-0 w-full sm:w-1/2 ${
									i % 2 === 0 ? 'sm:mr-auto' : 'sm:ml-auto'
								}`}
							>
								<motion.div
									whileHover={{ scale: 1.03, y: -4 }}
									transition={{ type: 'spring', stiffness: 200 }}
									className="
                    relative group p-[2px] rounded-2xl
                    bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400
                    shadow-[0_0_15px_rgba(56,189,248,0.3)]
                    hover:shadow-[0_0_25px_rgba(56,189,248,0.6)]
                    transition-all duration-500
                  "
								>
									<div
										className="
                      bg-white/90 dark:bg-gray-900/80
                      backdrop-blur-md rounded-2xl p-6
                      border border-white/20 dark:border-gray-700/40
                      transition-all duration-300
                    "
									>
										<div className="flex items-center justify-between mb-2">
											<h3 className="text-xl font-semibold text-sky-700 dark:text-sky-400 flex items-center gap-2">
												<FaBriefcase /> {exp.role}
											</h3>
											<span className="text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">
												{exp.period}
											</span>
										</div>

										<p className="text-gray-800 dark:text-gray-300 text-sm mb-2 font-medium">
											<strong className="text-blue-700 dark:text-blue-400">
												{exp.company}
											</strong>
										</p>
										<p className="text-gray-700 dark:text-gray-400 leading-relaxed text-sm md:text-base">
											{exp.desc}
										</p>
									</div>
								</motion.div>
							</div>
						</motion.div>
					))}
				</div>
			</div>

			{/* bottom divider glow */}
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ delay: 0.3, duration: 0.8 }}
				className="mt-24 h-[2px] w-48 mx-auto bg-gradient-to-r from-sky-500 to-blue-600 rounded-full shadow-[0_0_20px_rgba(56,189,248,0.5)]"
			/>
		</section>
	);
}
