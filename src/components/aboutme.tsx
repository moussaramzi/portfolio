// AboutMe.jsx
export default function AboutMe() {
    return (
      <section id="about" className="py-16 text-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 flex justify-center">
            <img
              src="/your-profile.jpg" 
              alt="Profile"
              className="w-64 h-64 object-cover rounded-full border-4 border-blue-500 shadow-lg"
            />
          </div>
  
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-lg text-gray-400 max-w-xl mx-auto md:mx-0">
              I'm a passionate developer who loves building web applications with modern technologies. 
              I enjoy solving problems, learning new skills, and creating projects that really make a difference.
            </p>
          </div>
        </div>
      </section>
    );
  }
  