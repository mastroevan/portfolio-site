import { useState } from "react";
import { FiMaximize2, FiX } from "react-icons/fi";

interface Project {
  title: string;
  description: string;
  image: string;
  github: string;
}

const projects: Project[] = [
  {
    title: "BlueSteel",
    description:
      "BlueSteel is a modern e-commerce platform for fashion clothing. Built with React for a dynamic frontend, Node.js and Express for a robust backend, and MongoDB for seamless data management, it delivers a responsive design, secure checkout, and smooth user experience.",
    image: "src/assets/ecommerce_proj.webp",
    github: "https://github.com/mastroevan/ProjectCatwalk-",
  },
  {
    title: "HelpMeOut",
    description:
      "HelpMeOut is a classifieds platform connecting construction contractors with local communities. Using React for the frontend and Node.js/Express for the backend, it focuses on intuitive navigation and streamlined interactions.",
    image: "src/assets/helpout-proj2.webp",
    github: "https://github.com/mastroevan/HelpMeOut",
  },
  {
    title: "EventEase",
    description:
      "EventEase is a user-friendly event sign-up app featuring registration, RSVP management, and confirmation tracking. Built with a clean HTML/CSS frontend and a Python Flask backend, it streamlines event organization and attendee management efficiently.",
    image: "src/assets/signup-proj3.webp",
    github: "https://github.com/mastroevan/Registration-Page",
  },
  {
    title: "BudgetBuddy",
    description:
      "BudgetBuddy is a real-time budgeting app designed for tracking expenses and savings goals. Leveraging React for a clean, interactive UI and Firebase for real-time data updates, it empowers users to manage their finances effectively.",
    image: "src/assets/budget.webp",
    github: "https://github.com/mastroevan/budget-tracker",
  },
  {
    title: "CapturePro",
    description:
      "CapturePro is a sleek product showcase website built with HTML, CSS, and JavaScript. It highlights the latest cutting-edge camera through visually engaging layouts, detailed specs, and user review integration.",
    image: "src/assets/camera_site.webp",
    github: "N/A",
  },
  {
    title: "Micro-Reddit",
    description:
      "Micro-Reddit is a Ruby-powered web app where users can create posts, engage in topic-based discussions, and build community. Built with Ruby on Rails, it demonstrates clean code, MVC architecture, and core Ruby principles.",
    image: "src/assets/mini-reddit-proj.webp",
    github: "https://github.com/mastroevan/micro-reddit",
  },
];

const Projects = () => {
  const [maximizedIndex, setMaximizedIndex] = useState<number | null>(null);

  const toggleMaximize = (index: number | null) => {
    setMaximizedIndex(index);
  };

  return (
    <section id="projects" className="py-16 bg-gray-100 text-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer"
            >
              {/* Maximize Button */}
              <button
                onClick={() => toggleMaximize(index)}
                className="absolute top-2 right-2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
              >
                <FiMaximize2 size={20} />
              </button>

              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              {/* Project Content */}
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {maximizedIndex !== null && (
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-80 z-50">
            <div className="relative bg-white rounded-lg max-w-4xl w-full p-6 shadow-2xl">
              {/* Close Button */}
              <button
                onClick={() => toggleMaximize(null)}
                className="absolute top-2 right-2 bg-black text-white rounded-full p-2 hover:bg-gray-700 transition"
              >
                <FiX size={20} />
              </button>

              {/* Project Image */}
              <img
                src={projects[maximizedIndex].image}
                alt={projects[maximizedIndex].title}
                className="w-full h-64 object-cover rounded"
              />

              {/* Project Content */}
              <div className="mt-4">
                <h3 className="text-2xl font-bold mb-2">
                  {projects[maximizedIndex].title}
                </h3>
                <p className="text-gray-700 mb-4">
                  {projects[maximizedIndex].description}
                </p>
                <a
                  href={projects[maximizedIndex].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
