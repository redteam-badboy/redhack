"use client"
import { FaShieldAlt, FaTerminal, FaNetworkWired } from "react-icons/fa" // Changed icons to security-related ones
import { AiFillSafetyCertificate } from "react-icons/ai"

function Hero() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden pt-16">
      {" "}
      {/* Added pt-16 for navbar space */}
      {/* Dark Background Image with cyber overlay */}
      <div className="absolute inset-0 z-0">
        <img src="/hacker-hero.png" alt="Cybersecurity background" className="w-full h-full object-cover brightness-50" />
        <div className="absolute inset-0 bg-black/70"></div>
        {/* Matrix-like overlay */}
        <div className="absolute inset-0 bg-[url('/matrix-pattern.png')] opacity-20"></div>
      </div>
      {/* Content Container - adjusted for navbar */}
      <div className="relative z-10 container mx-auto px-4 min-h-screen flex flex-col md:flex-row items-center justify-between">
        {/* Left Content - Text and CTA */}
        <div className="w-full md:w-1/2 pt-24 md:pt-20 text-center md:text-left">
          {" "}
          {/* Increased top padding */}
          <div className="mb-2 flex items-center justify-center md:justify-start">
            <div className="h-1 w-10 bg-green-500 mr-2"></div>
            <p className="text-green-500 font-mono tracking-wider">RedHack Evolution</p>
            <div className="h-1 w-10 bg-green-500 ml-2"></div>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 font-mono">Makhosi Ncube</h1>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-green-500 mb-6 font-mono">
            Professional Web Developer
          </h1>
          <p className="text-gray-300 mb-8 max-w-lg mx-auto md:mx-0 font-light">
            A professional , fullstack web developer with strong foundation i JavaScript frameworks like React and Next.Js.Creating seamless user experiences with enticing UI.I use latest UI libraries including Daisy UI, Shadcn UI, Aceternity UI and many more.
          </p>
          {/* Service Features */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="flex items-center group">
              <FaShieldAlt className="text-green-500 mr-2 group-hover:text-green-400 transition-colors" size={24} />
              <span className="text-white group-hover:text-green-400 transition-colors">Fullstack Frameworks</span>
            </div>
            <div className="flex items-center group">
              <FaTerminal className="text-green-500 mr-2 group-hover:text-green-400 transition-colors" size={24} />
              <span className="text-white group-hover:text-green-400 transition-colors">Front End</span>
            </div>
            <div className="flex items-center group">
              <FaNetworkWired className="text-green-500 mr-2 group-hover:text-green-400 transition-colors" size={24} />
              <span className="text-white group-hover:text-green-400 transition-colors">Back End</span>
            </div>
            <div className="flex items-center group">
              <AiFillSafetyCertificate
                className="text-green-500 mr-2 group-hover:text-green-400 transition-colors"
                size={24}
              />
              <span className="text-white group-hover:text-green-400 transition-colors">Secure Websites</span>
            </div>
          </div>
          {/* CTA Buttons */}
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="btn bg-green-600 hover:bg-green-500 text-white border-none btn-lg">
              View Security Portfolio
            </button>
            <button className="btn btn-outline border-green-500 text-green-500 hover:bg-green-500 hover:text-black">
              Contact For Services
            </button>
          </div> */}
        </div>

        {/* Right Content - Profile Image */}
        <div className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center md:justify-end">
          <div className="relative w-full max-w-md lg:max-w-lg">
            {/* Hexagonal frame for profile image */}
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-l-4 border-t-4 border-green-500"></div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-r-4 border-b-4 border-green-500"></div>

              {/* Profile Image with hexagonal clip path */}
              <div
                className="relative overflow-hidden"
                style={{
                  clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  background: "linear-gradient(45deg, #10b981, #059669)",
                  padding: "5px",
                }}
              >
                <div
                  style={{
                    clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src="hero-h.jpg"
                    alt="Makhosi Ncube - Ethical Hacker"
                    className="w-full h-auto object-cover"
                  />
                  {/* Tech overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
                  <div className="absolute inset-0 bg-[url('/code-pattern.png')] opacity-20"></div>
                </div>
              </div>

              {/* Image Caption */}
              <div className="bg-black border border-green-500 text-green-500 font-mono py-2 px-4 absolute -bottom-5 left-1/2 transform -translate-x-1/2 rounded-full shadow-lg">
                Fullstack Developer
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Binary code floating elements */}
      <div className="absolute top-28 left-10 text-green-500/30 font-mono text-xs animate-pulse hidden lg:block">
        01001101 01100001 01101011 01101000 01101111 01110011 01101001
      </div>
      <div className="absolute bottom-20 right-10 text-green-500/30 font-mono text-xs animate-pulse hidden lg:block">
        01001110 01100011 01110101 01100010 01100101
      </div>
      {/* Custom animation for scanning effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 bg-gradient-to-b from-green-500/5 to-transparent"
          style={{
            animation: "scanEffect 3s linear infinite",
            transform: "translateY(-100%)",
          }}
        ></div>
      </div>
      {/* Custom animation styles */}
      <style jsx>{`
        @keyframes scanEffect {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }
        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  )
}

export default Hero
