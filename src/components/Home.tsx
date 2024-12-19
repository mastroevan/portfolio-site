const Home = () => {
    return (
      <section
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/src/assets/hero-bg.jpg')", // Path to your background image
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
  
        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-2 text-center">
            EM Software Solutions
          </h1>
          <h2>
            By Evan Mastro
          </h2>
        </div>
      </section>
    );
  };
  
  export default Home;