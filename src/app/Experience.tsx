import { useState, useEffect } from 'react';
import { Link } from "react-router";

export default function Experience() {
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
<Link to="/" >Home</Link>
<Link to="/projects" >Projects</Link>
<Link to="/experience">Experience</Link>
</aside>

<div className="flex-1">

  <header className={`${darkMode ? 'bg-gray-800' : 'bg-gray-900'} text-white text-center py-12 relative`}>
        <h1 className="text-4xl font-bold">Joseph Dib</h1>
        <p className="text-lg mt-2">Technical Solutions Engineer | Developer | Problem Solver</p>

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
          Hi! Experience will go here.
        </p>
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
