import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import profileImage from "../public/assets/profile.webp"; // Replace with your image path

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-100 text-gray-800">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left - About Me Text */}
        <div>
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg leading-relaxed">
            I am a skilled Full Stack Software Engineer with over 4 years of
            experience delivering high-performance, scalable web applications.
            My expertise spans modern technologies like React, Node.js, and
            Python, alongside a strong foundation in system design, RESTful API
            development, and cloud deployments. At ANSOL, I developed innovative
            applications for the defense sector, improving data integration and
            automating processes. My work at Outlier.AI further solidified my
            passion for leveraging AI and data-driven solutions to create
            impactful user experiences.
            <br></br>
            <br></br>
            <br></br>
            Graduating from Hack Reactor’s immersive program deepened my
            understanding of software development and honed my ability to
            collaborate on complex, full-stack projects. Proficient in building
            interactive dashboards, predictive analytics applications, and
            scalable architectures, I am passionate about learning and
            problem-solving in an ever-evolving tech landscape. Whether it’s
            crafting user-friendly interfaces or designing robust back-end
            systems, I thrive in bringing ideas to life through code. I’m eager
            to connect and explore opportunities where I can contribute and grow
            as a software developer.
          </p>
          <div className="flex flex-col items-end gap-4 mt-4">
            <a
              href="https://github.com/mastroevan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-2xl text-gray-700 hover:text-black transition-transform hover:scale-110"
            >
              <FiGithub size={36} />
              <span className="font-semibold">GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/your-linkedin-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-2xl text-blue-700 hover:text-blue-500 transition-transform hover:scale-110"
            >
              <FiLinkedin size={36} />
              <span className="font-semibold">LinkedIn</span>
            </a>

            <a
              href="https://www.instagram.com/your-instagram-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-2xl text-pink-500 hover:text-pink-600 transition-transform hover:scale-110"
            >
              <FiInstagram size={36} />
              <span className="font-semibold">Instagram</span>
            </a>
          </div>
        </div>

        {/* Right - Image and Links */}
        <div className="flex flex-col items-end justify-center gap-12">
          {/* Image */}
          <img
            src={profileImage}
            alt="Evan Mastro"
            className="rounded-lg shadow-lg w-65 h-auto"
          />
          </div>


          {/* Links Section */}
          {/* <div className="flex flex-col items-end gap-4 mt-4">
            <a
              href="https://github.com/mastroevan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-2xl text-gray-700 hover:text-black transition-transform hover:scale-110"
            >
              <FiGithub size={36} />
              <span className="font-semibold">GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/your-linkedin-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-2xl text-blue-700 hover:text-blue-500 transition-transform hover:scale-110"
            >
              <FiLinkedin size={36} />
              <span className="font-semibold">LinkedIn</span>
            </a>

            <a
              href="https://www.instagram.com/your-instagram-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-2xl text-pink-500 hover:text-pink-600 transition-transform hover:scale-110"
            >
              <FiInstagram size={36} />
              <span className="font-semibold">Instagram</span>
            </a>
          </div> */}
        </div>
    </section>
  );
};

export default About;
