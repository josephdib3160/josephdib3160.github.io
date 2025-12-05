import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem('darkMode');
    return stored ? JSON.parse(stored) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-800'} min-h-screen transition-colors flex duration-300`}>

      <aside className={`${darkMode ? 'bg-gray-700' : 'bg-gray-200'} w-64 min-h-screen p-6 flex flex-col gap-4 shadow-xl`}>
<h2 className="text-2xl font-bold mb-4">Navigation</h2>
<button >Projects</button>
</aside>

<div className="flex-1">

  <header className={`${darkMode ? 'bg-gray-800' : 'bg-gray-900'} text-white text-center py-12 relative`}>
        <h1 className="text-4xl font-bold">Joseph Dib</h1>
        <p className="text-lg mt-2">Technical Solutions Engineer | Developer | Problem Solver</p>
        <nav className="mt-6 space-x-6">
          <a href="#about" className="hover:underline">About</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#skills" className="hover:underline">Skills</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="absolute top-6 right-6 bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded-full text-sm"
        >
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </header>
      {/* About Section */}
      <section id="about" className="mx-auto p-8">
        <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-400 pb-2">About Me</h2>
        <p>
          Hi! I’m Joseph Dib, a passionate developer who loves building efficient solutions
          and learning new technologies. I enjoy working with Java, SQL, and web technologies
          to create impactful projects.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className=" mx-auto p-8">
        <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-400 pb-2">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div whileHover={{ scale: 1.03 }} className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-2xl shadow-md`}>
            <h3 className="text-xl font-bold">Parking Reservation App</h3>
            <p className="mt-2">
              A React Native app that helps users find and reserve parking spots on a live map.
            </p>
            <a
              href="https://github.com/YOUR_USERNAME/parking-reservation-app"
              target="_blank"
              className="text-blue-400 mt-3 inline-block"
              rel="noreferrer"
            >
              View on GitHub
            </a>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-2xl shadow-md`}>
            <h3 className="text-xl font-bold">Portfolio Website</h3>
            <p className="mt-2">
              This personal website built with React, Tailwind CSS, and Framer Motion, hosted on GitHub Pages.
            </p>
            <a
              href="https://github.com/YOUR_USERNAME/portfolio"
              target="_blank"
              className="text-blue-400 mt-3 inline-block"
              rel="noreferrer"
            >
              View on GitHub
            </a>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className=" mx-auto p-8">
        <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-400 pb-2">Skills</h2>
        <ul className="flex flex-wrap gap-3">
          {['Java', 'SQL', 'React Native', 'HTML & CSS', 'Git & GitHub'].map(skill => (
            <li key={skill} className={`${darkMode ? 'bg-gray-800' : 'bg-white'} px-4 py-2 rounded-lg shadow-sm`}>
              {skill}
            </li>
          ))}
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" className=" mx-auto p-8">
        <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-400 pb-2">Contact</h2>
        <p>Email: <a href="mailto:josephdib3160@gmail.com" className="text-blue-400">josephdib3160@gmail.com</a></p>
        <p>GitHub: <a href="https://github.com/josephdib3160" className="text-blue-400" target="_blank" rel="noreferrer">@josephdib3160</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/joseph-dib-a680a2277/" className="text-blue-400" target="_blank" rel="noreferrer">LinkedIn Profile</a></p>
      </section>

      <footer className={`${darkMode ? 'bg-gray-800' : 'bg-gray-900'} text-white text-center py-4`}>
        <p>© 2025 Joseph Dib. All rights reserved.</p>
      </footer>
      </div>
    </div>
  );
}
