import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-router";

export default function Education() {
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
      {/* About Section */}
      <section id="about" className="mx-auto text-xl p-8">
        <p> I attended college at the <b> University of Nevada- Las Vegas </b> from <b>August 2021 - May 2025</b>.</p>
        <p> I graduated with a <b>Bachelor's of Science in Computer Science </b>and a GPA of <b>3.945 (Magna Cum Laude)</b>.</p>
        <p> Below you will find relevant courses. </p>

        
      </section>

      <section id="about" className="mx-auto p-8">

        <div className="grid md:grid-cols-3 gap-6">
          <motion.div whileHover={{ scale: 1.03 }} className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-2xl shadow-md`}>
            <h3 className="text-xl font-bold">Data Structures (CS302)</h3>
            <p className="mt-2">
              Observation of different sorting and searching models (such as stacks, queues, 
              and hashmaps) as well as their trade-offs and asymptotic complexity.
            </p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-2xl shadow-md`}>
            <h3 className="text-xl font-bold">Operating Systems (CS370)</h3>
            <p className="mt-2">
              Operating systems organization, sharing and allocation of system resources, protection mechanisms, 
              integration of system components, and multithreading.
            </p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-2xl shadow-md`}>
            <h3 className="text-xl font-bold">Introduction to Machine Learning (CS422)</h3>
            <p className="mt-2">
              Covers various machine learning algorithms for regression, 
              classification, clustering, and ensemble learning.
            </p>
          </motion.div>
        </div>

        <div className="my-8 grid md:grid-cols-3 gap-6">
          <motion.div whileHover={{ scale: 1.03 }} className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-2xl shadow-md`}>
            <h3 className="text-xl font-bold">Cloud Computing (CS442)</h3>
            <p className="mt-2">
              Exploration of cloud computing services, their use cases and applications, 
              and an overview of best practices including security, scalability, 
              and global infrastructure. Basics of Amazon AWS also covered.
            </p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-2xl shadow-md`}>
            <h3 className="text-xl font-bold">Database Management Systems (CS457)</h3>
            <p className="mt-2">
              Concepts and structures necessary for design and implementation of a database management system. 
              Survey of current database management systems and use of a DBMS.
            </p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-2xl shadow-md`}>
            <h3 className="text-xl font-bold">Autonomous Racing (CS489)</h3>
            <p className="mt-2">
              Programming an autonomous vehicle using ROS systems (C++, Docker), which will be capable of following walls, 
              navigating around obstacles, and engaging Automatic Emergency Braking when needed.
            </p>
          </motion.div>
        </div>

        <div className="my-8 grid md:grid-cols-1 gap-6">
          <motion.div whileHover={{ scale: 1.03 }} className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-2xl shadow-md`}>
            <h3 className="text-xl font-bold">Software Product Design 1 (CS472)</h3>
            <p className="mt-2">
              Current techniques in software design presented with emphasis on architecture first development. 
              Introduction to the processes involved in development. 
              Practice architectural design through a series of homework problems. 
              Students work in teams to prepare the architecture for a software product.
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
