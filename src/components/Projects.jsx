import { useState } from 'react';
import { motion } from 'framer-motion';
import {
	FaReact,
	FaNodeJs,
	FaPhp,
	FaExternalLinkAlt,
	FaGlobe,
	FaSpinner,
} from 'react-icons/fa';
import { SiSocketdotio, SiMysql, SiJquery, SiNextdotjs } from 'react-icons/si';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Projects() {
	const STEP = 4;
	const [limit, setLimit] = useState(STEP);
	const [loading, setLoading] = useState(false);

	const handleLoadMore = () => {
		setLoading(true);
		setTimeout(() => {
			setLimit((prev) => prev + STEP);
			setLoading(false);
		}, 100); // จำลองโหลด 1.2 วินาที (ปรับได้)
	};

	const projects = [
		{
			title: 'Restaurant Realtime System (GPS)',
			tech: [
				<FaReact key="r" />,
				<FaNodeJs key="n" />,
				<SiSocketdotio key="s" />,
			],
			desc: 'Real-time restaurant and GPS tracking system built with Socket.IO and Node.js. Displays live kitchen orders and location updates in real time.',
			image: '/images/restaurant-system.jpg',
			demo: 'https://restaurant-realtime.vercel.app',
			github: 'https://github.com/warrnone/restaurant-realtime',
			demoLabel: 'Visit GPS Website',
		},
		{
			title: 'Promotion Management Module',
			tech: [<FaPhp key="p" />, <SiMysql key="m" />, <SiJquery key="j" />],
			desc: 'Dynamic module for creating, scheduling, and managing restaurant promotions with a smooth jQuery-based admin interface.',
			image: '/images/promotion-module.jpg',
			demo: 'https://promotion-admin.vercel.app',
			github: 'https://github.com/warrnone/promotion-module',
			demoLabel: 'Live Demo',
		},
		{
			title: 'Santhiya Shuttle GPS Realtime Tracker',
			tech: [
				<FaReact key="r" />,
				<FaNodeJs key="n" />,
				<SiSocketdotio key="s" />,
			],
			desc: 'Live GPS tracking system for Santhiya Resorts’ shuttle vans — built with Node.js and Socket.IO for real-time location monitoring directly within the portfolio.',
			image: '/images/santhiya-gps-tracker.jpg',
			iframe: 'https://www.santhiya.com/shuttle-service/', // ฝัง live map หรือระบบจริง
			demo: 'https://www.santhiya.com/shuttle-service/',
			demoLabel: 'View Live Shuttle GPS',
			github: '',
		},
		{
			title: 'Santhiya Resorts & Spas — Official Website',
			tech: [
				<SiNextdotjs key="next" />,
				<FaReact key="r" />,
				<FaGlobe key="g" />,
			],
			desc: 'Luxury beachfront resort website built with Next.js and React, designed for smooth performance and elegant presentation with interactive gallery sections.',
			images: [
				'/images/main_slide_syy.jpeg',
				'/images/main_slide_snt.jpeg',
				'/images/main_slide_stkc.jpeg',
				'/images/main_slide_spn.jpeg',
			],
			demo: 'https://santhiya.com/',
			demoLabel: 'Visit Resort Website',
		},
		{
			title: 'Santhiya Resorts & Spas — Official Website',
			tech: [
				<SiNextdotjs key="next" />,
				<FaReact key="r" />,
				<FaGlobe key="g" />,
			],
			desc: 'Luxury beachfront resort website built with Next.js and React, designed for smooth performance and elegant presentation with interactive gallery sections.',
			images: [
				'/images/main_slide_syy.jpeg',
				'/images/main_slide_snt.jpeg',
				'/images/main_slide_stkc.jpeg',
				'/images/main_slide_spn.jpeg',
			],
			demo: 'https://santhiya.com/',
			demoLabel: 'Visit Resort Website',
		},
		{
			title: 'Santhiya Resorts & Spas — Official Website',
			tech: [
				<SiNextdotjs key="next" />,
				<FaReact key="r" />,
				<FaGlobe key="g" />,
			],
			desc: 'Luxury beachfront resort website built with Next.js and React, designed for smooth performance and elegant presentation with interactive gallery sections.',
			images: [
				'/images/main_slide_syy.jpeg',
				'/images/main_slide_snt.jpeg',
				'/images/main_slide_stkc.jpeg',
				'/images/main_slide_spn.jpeg',
			],
			demo: 'https://santhiya.com/',
			demoLabel: 'Visit Resort Website',
		},
		{
			title: 'Santhiya Resorts & Spas — Official Website',
			tech: [
				<SiNextdotjs key="next" />,
				<FaReact key="r" />,
				<FaGlobe key="g" />,
			],
			desc: 'Luxury beachfront resort website built with Next.js and React, designed for smooth performance and elegant presentation with interactive gallery sections.',
			images: [
				'/images/main_slide_syy.jpeg',
				'/images/main_slide_snt.jpeg',
				'/images/main_slide_stkc.jpeg',
				'/images/main_slide_spn.jpeg',
			],
			demo: 'https://santhiya.com/',
			demoLabel: 'Visit Resort Website',
		},
		{
			title: 'Santhiya Resorts & Spas — Official Website',
			tech: [
				<SiNextdotjs key="next" />,
				<FaReact key="r" />,
				<FaGlobe key="g" />,
			],
			desc: 'Luxury beachfront resort website built with Next.js and React, designed for smooth performance and elegant presentation with interactive gallery sections.',
			images: [
				'/images/main_slide_syy.jpeg',
				'/images/main_slide_snt.jpeg',
				'/images/main_slide_stkc.jpeg',
				'/images/main_slide_spn.jpeg',
			],
			demo: 'https://santhiya.com/',
			demoLabel: 'Visit Resort Website',
		},
	];

	return (
		<section
			id="projects"
			className="py-24 px-6 text-center transition-colors duration-500 bg-gray-50 dark:bg-gray-950"
		>
			{/* Section Header */}
			<motion.h2
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className="text-4xl font-bold mb-12 text-sky-500 dark:text-sky-400"
			>
				Featured Projects
			</motion.h2>

			{/* Project Cards */}
			<div className="grid sm:grid-cols-2 gap-10 max-w-6xl mx-auto">
				{projects.slice(0, limit).map((proj, i) => (
					<motion.div
						key={i}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: i * 0.2 }}
						whileHover={{ scale: 1.02 }}
						className="relative overflow-hidden group rounded-xl shadow-md border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/60 backdrop-blur-lg hover:shadow-sky-500/20 transition-all duration-500"
					>
						{/* 🖼️ ถ้ามีรูป */}
						{proj.images && (
							<div className="h-48 md:h-64 overflow-hidden rounded-t-2xl">
								<Swiper
									modules={[Navigation, Pagination, Autoplay]}
									slidesPerView={1}
									loop={true}
									pagination={{ clickable: true }}
									autoplay={{ delay: 3500, disableOnInteraction: false }}
									className="w-full h-full"
								>
									{proj.images.map((src, idx) => (
										<SwiperSlide key={idx}>
											<img
												src={src}
												alt={`${proj.title} ${idx + 1}`}
												className="w-full h-full object-cover"
											/>
										</SwiperSlide>
									))}
								</Swiper>
							</div>
						)}

						{/* 🌐 ถ้ามี iframe */}
						{proj.iframe && (
							<div className="h-[360px] overflow-hidden rounded-t-xl border-b border-gray-300 dark:border-gray-700">
								<iframe
									src={proj.iframe}
									title={proj.title}
									width="100%"
									height="100%"
									className="border-0"
									loading="lazy"
								></iframe>
							</div>
						)}

						{/* 📄 เนื้อหาใน card */}
						<div className="p-4 text-left">
							<h3 className="text-lg font-semibold text-sky-600 dark:text-sky-400 mb-1">
								{proj.title}
							</h3>
							<p className="text-sm text-gray-600 dark:text-gray-300 mb-3 leading-relaxed line-clamp-3">
								{proj.desc}
							</p>

							{/* 🧠 Tech stack */}
							<div className="flex gap-2 text-xl text-sky-400 dark:text-sky-300 mb-3">
								{proj.tech}
							</div>

							{/* 🔗 ปุ่มลิงก์ */}
							<div className="flex flex-wrap gap-2">
								{proj.shuttle && (
									<a
										href={proj.shuttle}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-md text-white bg-sky-500 hover:bg-sky-600 transition-colors duration-300"
									>
										<FaExternalLinkAlt /> Shuttle
									</a>
								)}

								{proj.demo && (
									<a
										href={proj.demo}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-md text-white bg-emerald-500 hover:bg-emerald-600 transition-colors duration-300"
									>
										<FaExternalLinkAlt /> {proj.demoLabel || 'Demo'}
									</a>
								)}

								{proj.github && proj.github !== '' && (
									<a
										href={proj.github}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-md text-gray-700 dark:text-gray-200 border border-gray-400/40 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
									>
										<FaExternalLinkAlt /> GitHub
									</a>
								)}
							</div>
						</div>
					</motion.div>
				))}
			</div>

			{/* 🔘 ปุ่ม Load More Loading */}
			{limit < projects.length && (
				<div className="mt-10 text-center">
					<motion.button
						whileHover={{ scale: loading ? 1 : 1.05 }}
						whileTap={{ scale: 0.95 }}
						onClick={handleLoadMore}
						disabled={loading}
						className={`px-6 py-2 rounded-md text-white font-semibold transition-all 
							${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-sky-500 hover:bg-sky-600'}`}
					>
						{loading ? (
							<span className="inline-flex items-center gap-2">
								<FaSpinner className="animate-spin" /> Loading...
							</span>
						) : (
							'Load More'
						)}
					</motion.button>
				</div>
			)}
		</section>
	);
}
