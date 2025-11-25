"use client"
import { FaShieldAlt, FaGraduationCap, FaLaptopCode, FaUserSecret } from "react-icons/fa"
import { BiTargetLock, BiNetworkChart } from "react-icons/bi"
import { motion } from "framer-motion"

function AboutUs() {
  return (
    <section id="about" className="relative w-full py-20 md:py-28 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src="ui.webp" alt="Cybersecurity background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
        {/* Matrix-like overlay */}
        <div className="absolute inset-0 bg-[url('matrix-code.png')] opacity-10"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <div className="flex items-center justify-center mb-4">
              <div className="h-1 w-10 bg-green-500"></div>
              <p className="mx-4 text-green-500 font-mono tracking-wider">MY BACKGROUND</p>
              <div className="h-1 w-10 bg-green-500"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono">About Me</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
  Discover my journey in full-stack web development and my dedication to building
  secure, modern, and high-quality digital applications using industry-standard
  development practices and methodologies.
</p>

          </motion.div>
        </div>

        {/* Main Content - Two Columns */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image and Decorative Elements */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative mx-auto max-w-md">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-l-4 border-t-4 border-green-500"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-4 border-b-4 border-green-500"></div>

              {/* Profile Image with hexagonal clip path */}
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="ui.webp"
                  alt="Makhosi Ncube - Ethical Hacker"
                  className="w-full h-auto object-cover"
                />

                {/* Tech overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute inset-0 bg-[url('code-pattern.png')] opacity-20"></div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-green-500 text-black p-4 rounded-full shadow-lg">
                <FaShieldAlt size={32} />
              </div>
            </div>
          </motion.div>

          {/* Right Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
          <h3 className="text-3xl font-bold text-green-500 font-mono">
  Full-Stack Web Developer
</h3>

<p className="text-gray-300">
  I am Makhosi Ncube, a junior full-stack web developer with a passion for
  building modern, responsive, and user-friendly applications. I enjoy working
  with both front-end and back-end technologies to create clean, scalable, and
  well-structured solutions.
</p>

<p className="text-gray-300">
  With a strong foundation in HTML, CSS, JavaScript, and modern frameworks, React and Next.Js
  I focus on writing efficient code, improving UI/UX, and building applications
  that solve real-world problems. My goal is to continue growing as a developer
  while contributing to impactful an.d innovative software projects.
</p>


            {/* Key Features with Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex items-start">
                <div className="bg-green-500/20 p-3 rounded-lg mr-4">
                  <FaGraduationCap className="text-green-500" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white">BCS Certified</h4>
                  <p className="text-gray-400 text-sm">Trained in Latest Evolving Technologies</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-500/20 p-3 rounded-lg mr-4">
                  <BiTargetLock className="text-green-500" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white">Frond End Web Development</h4>
                  <p className="text-gray-400 text-sm">Simulating websites with great UI and UX</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-500/20 p-3 rounded-lg mr-4">
                  <BiNetworkChart className="text-green-500" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white">Back End Web Development</h4>
                  <p className="text-gray-400 text-sm">Advanced database and server configurations</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-500/20 p-3 rounded-lg mr-4">
                  <FaLaptopCode className="text-green-500" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white">Web Security & SEO</h4>
                  <p className="text-gray-400 text-sm">SEO optimised and secure channels implemented</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <a href="https://flowcv.com/resume/hikpkatkrpls"   target="blank" className="px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-mono rounded-md transition-all duration-300 hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] flex items-center justify-center">
                <FaUserSecret className="mr-2" size={18} />
               View My Resume
              </a>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 text-center"
        >
          <div className="bg-black/50 backdrop-blur-md p-6 rounded-lg border border-green-500/20">
            <h3 className="text-4xl font-bold text-green-500 mb-2">50+</h3>
            <p className="text-gray-300">Vulnerabilities Found</p>
          </div>

          <div className="bg-black/50 backdrop-blur-md p-6 rounded-lg border border-green-500/20">
            <h3 className="text-4xl font-bold text-green-500 mb-2">15+</h3>
            <p className="text-gray-300">Security Projects</p>
          </div>

          <div className="bg-black/50 backdrop-blur-md p-6 rounded-lg border border-green-500/20">
            <h3 className="text-4xl font-bold text-green-500 mb-2">3+</h3>
            <p className="text-gray-300">Years Experience</p>
          </div>

          <div className="bg-black/50 backdrop-blur-md p-6 rounded-lg border border-green-500/20">
            <h3 className="text-4xl font-bold text-green-500 mb-2">5</h3>
            <p className="text-gray-300">Security Certifications</p>
          </div>
        </motion.div> */}
      </div>

      {/* Binary code floating elements */}
      <div className="absolute bottom-10 left-10 text-green-500/30 font-mono text-xs animate-float hidden lg:block">
        01001101 01100001 01101011 01101000 01101111 01110011 01101001
      </div>
      <div className="absolute top-20 right-20 text-green-500/30 font-mono text-xs animate-float hidden lg:block">
        01001110 01100011 01110101 01100010 01100101
      </div>

      {/* Custom animations */}
      <style jsx>{`
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
        
        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

export default AboutUs
