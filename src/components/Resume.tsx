import resume from "../../public/assets/evan-mastro-resume.pdf"

const Resume = () => {
  return (
    <section id="resume" className="py-16 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <h2 className="text-4xl font-bold mb-8 text-center">Resume</h2>

        {/* Embedded PDF */}
        <div className="flex justify-center mb-6">
            <iframe 
            src={resume}
            title="Evan Mastro Resume"
            className="w-full h-[700px] border-2 border-gray-300 rounded-lg shadow-md"></iframe>
        </div>

        {/* Download Button */}
        <div className="flex justify-center">
          <a
            href="/assets/evan-mastro-resume.pdf" // Same PDF path
            download="Evan_Mastro_Resume.pdf"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;