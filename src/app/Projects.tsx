import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-router";

export default function Projects() {
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem('darkMode');
    return stored ? JSON.parse(stored) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-800'} min-h-screen transition-colors flex duration-300`}>

      <aside className={`${darkMode ? 'bg-gray-950' : 'bg-gray-200'} w-64 min-h-screen p-6 flex flex-col gap-4 shadow-xl`}>
<h2 className="text-2xl font-bold mb-4">Navigation</h2>
<Link to="/" >Home</Link>
<Link to="/projects" >Projects</Link>
<Link to="/experience">Experience</Link>
<Link to="/education">Education</Link>
</aside>

<div className="flex-1">

  <header className={`${darkMode ? 'bg-gray-800' : 'bg-gray-900'} text-white text-center py-12 relative`}>
        <h1 className="text-4xl font-bold">Joseph Dib</h1>
        <p className="text-lg mt-2">Software Engineer</p>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="absolute top-6 right-6 bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded-full text-sm"
        >
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </header>
      {/* Projects Section */}
      <section id="projects" className="mx-auto p-8">
        <p>
          Below you will find more information about my projects.
        </p>
      </section>

      <section id="projects_list" className=" mx-auto p-8">
        <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-400 pb-2">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div whileHover={{ scale: 1.03 }} className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-2xl shadow-md`}>
            <h3 className="text-xl font-bold">Parking Reservation App</h3>
            <p className="mt-2">
              Worked in a team of 9 to build a mobile application using <b>React Native</b> that allows the user to see a real-time map of 
              parking spots in a parking garage as well as allow the user to make reservations for parking spots.
              The app also uses <b>Firebase</b> as its database, as well as <b>Python with OpenCV </b> for object detection.
            </p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-2xl shadow-md`}>
            <h3 className="text-xl font-bold">Portfolio Website</h3>
            <p className="mt-2">
              This personal portfolio website, built with <b>React and Tailwind CSS</b>, hosted on GitHub Pages.
            </p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-2xl shadow-md`}>
            <h3 className="text-xl font-bold">F1Tenth Autonomous Vehicle Program</h3>
            <p className="mt-2">
              Worked in a team of 4 to program an autonomous vehicle using ROS systems, <b>C++, Docker, and Python</b>. 
              The program accesses the components of the autonomous vehicle, such as the LIDAR, to follow
              a path around a course. The program is also capable of safely navigating the vehicle around obstacles in the path 
              and engaging Automatic Emergency Braking when needed. 
            </p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-2xl shadow-md`}>
            <h3 className="text-xl font-bold">Discord Bot</h3>
            <p className="mt-2">
              A small bot for the social media app Discord that is capable of playing music requested by a user.
              The bot also has additional commands, such as displaying server rules. 
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className=" mx-auto p-8">
        <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-400 pb-2">Contact</h2>
        <p>Email: <a href="mailto:josephdib3160@gmail.com" className="text-blue-400">josephdib3160@gmail.com</a></p>
        <p>GitHub: <a href="https://github.com/josephdib3160" className="text-blue-400" target="_blank" rel="noreferrer">@josephdib3160</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/joseph-dib-a680a2277/" className="text-blue-400" target="_blank" rel="noreferrer">@Joseph-Dib</a></p>
      </section>

      </div>
    </div>
  );
}
