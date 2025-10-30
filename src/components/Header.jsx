import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
	Button,
	Typography,
	Paper,
	IconButton,
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

export default function Header() {
	const [activeSection, setActiveSection] = useState('hero');
	const [openDrawer, setOpenDrawer] = useState(false);
	const [darkMode, setDarkMode] = useState(false);

	const menuItems = [
		'About',
		'Skills',
		'Experience',
		'Education',
		'Projects',
		'Contact',
	];

	// ✅ ใช้สำหรับ scroll spy
	useEffect(() => {
		const sections = document.querySelectorAll('section[id]');
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) setActiveSection(entry.target.id);
				});
			},
			{ threshold: 0.4 }
		);
		sections.forEach((section) => observer.observe(section));
		return () => observer.disconnect();
	}, []);

	// ✅ ใช้สำหรับเปลี่ยนเฉพาะพื้นหลัง (dark / light)
	useEffect(() => {
		document.body.classList.toggle('dark', darkMode);
	}, [darkMode]);

	return (
		<>
			<div className="fixed top-5 right-6 z-50 w-auto max-w-[90%] sm:max-w-none flex justify-end">
				<Paper
					elevation={6}
					sx={{
						display: 'flex',
						alignItems: 'center',
						gap: '1rem',
						px: { xs: 2, sm: 3 },
						py: { xs: 0.8, sm: 1.2 },
						borderRadius: '9999px',
						backgroundColor: '#0d47a1',
						color: '#fff',
						boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
						width: 'fit-content',
					}}
				>
					{/* โลโก้ */}
					<Typography
						variant="subtitle1"
						sx={{
							fontWeight: 700,
							color: 'white',
							letterSpacing: '0.5px',
						}}
					></Typography>

					{/* เมนูหลัก (แสดงเฉพาะจอใหญ่) */}
					<div className="hidden sm:flex items-center gap-5">
						{menuItems.map((item) => {
							const id = item.toLowerCase();
							const isActive = activeSection === id;

							return (
								<a
									key={id}
									href={`#${id}`}
									className={`
                    group relative text-sm font-medium transition-all duration-300
                    ${
											isActive
												? 'text-sky-300'
												: 'text-white hover:text-sky-200'
										}
                  `}
								>
									{item}
									<span
										className={`
                      absolute bottom-[-4px] left-0 w-full h-[2px] bg-sky-300 rounded-full 
                      transition-transform duration-300 
                      origin-center scale-x-0 group-hover:scale-x-100
                      ${isActive ? 'scale-x-100' : 'scale-x-0'}
                    `}
									></span>
								</a>
							);
						})}
					</div>

					{/* ปุ่ม Resume */}
					<motion.div whileHover={{ scale: 1.05 }} className="hidden sm:block">
						<Button
							variant="contained"
							size="small"
							sx={{
								backgroundColor: '#1976d2',
								borderRadius: '9999px',
								textTransform: 'none',
								fontWeight: 600,
								color: '#fff',
								px: 2,
								'&:hover': { backgroundColor: '#42a5f5' },
							}}
						>
							Resume
						</Button>
					</motion.div>

					{/* ปุ่ม Toggle Theme */}
					<IconButton
						onClick={() => setDarkMode((prev) => !prev)}
						sx={{
							color: '#fff',
							transition: '0.3s',
							'&:hover': { transform: 'scale(1.1)' },
						}}
					>
						{darkMode ? <LightModeIcon /> : <DarkModeIcon />}
					</IconButton>

					{/* Hamburger icon (เฉพาะมือถือ) */}
					<div className="sm:hidden">
						<IconButton
							onClick={() => setOpenDrawer(true)}
							sx={{ color: '#fff' }}
						>
							<MenuIcon />
						</IconButton>
					</div>
				</Paper>
			</div>

			{/* Drawer เมนูมือถือ */}
			<Drawer
				anchor="right"
				open={openDrawer}
				onClose={() => setOpenDrawer(false)}
				PaperProps={{
					sx: { width: '240px', backgroundColor: '#0d47a1', color: 'white' },
				}}
			>
				<div className="flex justify-between items-center px-4 py-3 border-b border-blue-900">
					<Typography variant="h6">Menu</Typography>
					<IconButton
						onClick={() => setOpenDrawer(false)}
						sx={{ color: '#fff' }}
					>
						<CloseIcon />
					</IconButton>
				</div>

				<List>
					{menuItems.map((item) => (
						<ListItem key={item} disablePadding>
							<ListItemButton
								component="a"
								href={`#${item.toLowerCase()}`}
								onClick={() => setOpenDrawer(false)}
							>
								<ListItemText
									primary={item}
									primaryTypographyProps={{
										fontWeight:
											activeSection === item.toLowerCase() ? 700 : 500,
										color:
											activeSection === item.toLowerCase()
												? '#90caf9'
												: 'white',
									}}
								/>
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Drawer>
		</>
	);
}
