import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
	return (
		<div
			className="
        min-h-screen
        bg-white dark:bg-[#0a1929]
        text-gray-800 dark:text-gray-200
        transition-colors duration-500
        overflow-x-hidden
        [&_*]:max-w-[100vw]
      "
		>
			<Header />

			<main className="w-full relative overflow-x-hidden">
				<Hero />
				<About />
				<Skills />
				<Experience />
				<Education />
				<Projects />
				<Contact />
				<Footer />
			</main>
			<BackToTop />
		</div>
	);
}
