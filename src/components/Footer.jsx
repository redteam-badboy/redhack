"use client"
import {
  FaGithub,
  FaTwitter,
  FaLinkedinIn,
  FaDiscord,
  FaMapMarkerAlt,
  FaEnvelope,
  FaShieldAlt,
  FaLock,
} from "react-icons/fa"

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative w-full overflow-hidden bg-black">
      {/* Top Wave Separator */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-12 text-green-900/20"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-current"
          ></path>
        </svg>
      </div>

      {/* Newsletter Section */}
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-12">
        {/* <div className="bg-gradient-to-r from-black/60 via-green-500/20 to-black/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-green-500/20 shadow-lg shadow-green-500/5 mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 font-mono">Security Updates</h3>
              <p className="text-gray-300">
                Subscribe to my newsletter for the latest cybersecurity insights, vulnerability alerts, and security
                tips.
              </p>
            </div>
            <div>
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 bg-black/50 border border-green-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/50 text-white font-mono"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-green-600 text-white font-bold rounded-lg transition-all hover:bg-green-500 whitespace-nowrap font-mono flex items-center justify-center"
                >
                  <FaLock className="mr-2" size={14} /> Subscribe
                </button>
              </form>
            </div>
          </div>
        </div> */}

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: About */}
          <div>
            <div className="flex items-center mb-6">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mr-3">
                <span className="text-black font-bold text-lg">M</span>
              </div>
              <h3 className="text-xl font-bold text-green-500 font-mono">Makhosi Ncube</h3>
            </div>
            <p className="text-gray-400 mb-6">
              Junior ethical hacker specializing in penetration testing, vulnerability assessment, and security
              consulting. With expertise in MITRE ATT&CK Framework and Cyber Kill Chain methodology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-black/30 hover:bg-green-500/20 p-2.5 rounded-full transition-colors">
                <FaGithub className="text-green-500" size={16} />
              </a>
              <a href="#" className="bg-black/30 hover:bg-green-500/20 p-2.5 rounded-full transition-colors">
                <FaTwitter className="text-green-500" size={16} />
              </a>
              <a href="#" className="bg-black/30 hover:bg-green-500/20 p-2.5 rounded-full transition-colors">
                <FaLinkedinIn className="text-green-500" size={16} />
              </a>
              <a href="#" className="bg-black/30 hover:bg-green-500/20 p-2.5 rounded-full transition-colors">
                <FaDiscord className="text-green-500" size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 relative font-mono">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-green-500"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-gray-400 hover:text-green-500 transition-colors flex items-center">
                  <span className="mr-2 font-mono">›</span> Home
                </a>
              </li>
              <li>
                <a href="/#about" className="text-gray-400 hover:text-green-500 transition-colors flex items-center">
                  <span className="mr-2 font-mono">›</span> About Me
                </a>
              </li>
              <li>
                <a href="/#services" className="text-gray-400 hover:text-green-500 transition-colors flex items-center">
                  <span className="mr-2 font-mono">›</span> Security Services
                </a>
              </li>
              {/* <li>
                <a href="/#projects" className="text-gray-400 hover:text-green-500 transition-colors flex items-center">
                  <span className="mr-2 font-mono">›</span> Projects
                </a>
              </li>
              <li>
                <a href="/#blog" className="text-gray-400 hover:text-green-500 transition-colors flex items-center">
                  <span className="mr-2 font-mono">›</span> Security Blog
                </a>
              </li> */}
              <li>
                <a href="/#contact" className="text-gray-400 hover:text-green-500 transition-colors flex items-center">
                  <span className="mr-2 font-mono">›</span> Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 relative font-mono">
              Security Services
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-green-500"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="/#services" className="text-gray-400 hover:text-green-500 transition-colors flex items-center">
                  <span className="mr-2 font-mono">›</span> Penetration Testing
                </a>
              </li>
              <li>
                <a href="/#services" className="text-gray-400 hover:text-green-500 transition-colors flex items-center">
                  <span className="mr-2 font-mono">›</span> Vulnerability Assessment
                </a>
              </li>
              <li>
                <a href="/#services" className="text-gray-400 hover:text-green-500 transition-colors flex items-center">
                  <span className="mr-2 font-mono">›</span> Network Security
                </a>
              </li>
              <li>
                <a href="/#services" className="text-gray-400 hover:text-green-500 transition-colors flex items-center">
                  <span className="mr-2 font-mono">›</span> Red Team Operations
                </a>
              </li>
              <li>
                <a href="/#services" className="text-gray-400 hover:text-green-500 transition-colors flex items-center">
                  <span className="mr-2 font-mono">›</span> Security Consultation
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 relative font-mono">
              Contact
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-green-500"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-green-500 mt-1 mr-3" size={18} />
                <span className="text-gray-400">Remote & On-site Services Available</span>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="text-green-500 mt-1 mr-3" size={18} />
                <a
                  href="mailto:redhackevolutions@gmail.com"
                  className="text-gray-400 hover:text-green-500 transition-colors font-mono"
                >
                  redhackevolutions@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <FaShieldAlt className="text-green-500 mt-1 mr-3" size={18} />
                <span className="text-gray-400">Secure Communications Available</span>
              </li>
              <li className="flex items-start">
                <FaLock className="text-green-500 mt-1 mr-3" size={18} />
                <span className="text-gray-400 font-mono">PGP Key Available on Request</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-center md:text-left mb-4 md:mb-0">
              © {currentYear} Makhosi Ncube | Ethical Hacker & Security Specialist
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="#" className="text-gray-500 hover:text-green-500 transition-colors">
                Privacy Policy
              </a>
              <span className="text-gray-700">|</span>
              <a href="#" className="text-gray-500 hover:text-green-500 transition-colors">
                Terms of Service
              </a>
              <span className="text-gray-700">|</span>
              <a href="#" className="text-gray-500 hover:text-green-500 transition-colors">
                Security Disclosure
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <a
        href="#"
        className="fixed bottom-6 right-6 bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-green-500 transition-colors z-50"
        onClick={(e) => {
          e.preventDefault()
          window.scrollTo({ top: 0, behavior: "smooth" })
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </a>

      {/* Binary code floating elements */}
      <div className="absolute bottom-40 left-10 text-green-500/20 font-mono text-xs animate-float hidden lg:block">
        01001101 01100001 01101011 01101000 01101111 01110011 01101001
      </div>
      <div className="absolute top-40 right-10 text-green-500/20 font-mono text-xs animate-float hidden lg:block">
        01001110 01100011 01110101 01100010 01100101
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
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
    </footer>
  )
}

export default Footer
