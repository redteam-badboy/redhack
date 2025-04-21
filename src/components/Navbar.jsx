"use client"
import { useState, useEffect } from "react"
import { FaHome, FaUserSecret, FaShieldAlt, FaEnvelope, FaBars, FaTimes, FaLaptopCode } from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeLink, setActiveLink] = useState("/")
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const links = [
    {
      name: "Home",
      path: "/",
      icon: <FaHome className="mr-2" />,
    },
    {
      name: "About ",
      path: "/#about",
      icon: <FaUserSecret className="mr-2" />,
    },
    {
      name: "Services",
      path: "/#services",
      icon: <FaShieldAlt className="mr-2" />,
    },
    // {
    //   name: "Projects",
    //   path: "/#projects",
    //   icon: <FaLaptopCode className="mr-2" />,
    // },
    {
      name: "Contact",
      path: "/#contact",
      icon: <FaEnvelope className="mr-2" />,
    },
  ]

  const handleLinkClick = (path) => {
    setActiveLink(path)
    setIsOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}>
      <div className="w-[90%] max-w-7xl mx-auto">
        <div
          className={`
            w-full rounded-xl 
            backdrop-blur-xl 
            border border-green-500/20 
            shadow-lg shadow-green-900/10
            ${scrolled ? "bg-black/90" : "bg-black/70"}
            transition-all duration-300
        `}
        >
          <div className="flex items-center justify-between px-4 py-3">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mr-3">
                <span className="text-black font-bold text-lg">M</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl md:text-2xl font-bold text-green-500 font-mono">
                  Makhosi <span className="text-white">Ncube</span>
                </h1>
                <p className="text-xs text-green-500/80 -mt-1 font-mono">Ethical Hacker & Security Specialist</p>
              </div>
              <h1 className="text-xl font-bold text-green-500 font-mono sm:hidden">MN</h1>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {links.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`
                    relative px-4 py-2 rounded-lg 
                    font-medium transition-all duration-200
                    flex items-center
                    hover:bg-green-500/10
                    ${activeLink === link.path ? "text-green-400" : "text-green-500 hover:text-white"}
                  `}
                  onClick={() => handleLinkClick(link.path)}
                >
                  <a href={link.path} className="flex items-center font-mono">
                    {link.icon}
                    {link.name}
                  </a>
                  {activeLink === link.path && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-400 rounded-full"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.div>
              ))}

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ml-4 px-5 py-2 bg-gradient-to-r from-green-600 to-green-500 text-white font-medium rounded-lg shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-200 font-mono flex items-center"
              >
                <FaShieldAlt className="mr-2" /> Security Consultation
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg bg-green-500/10 text-green-500 hover:bg-green-500/20 transition-colors"
              >
                {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden"
              >
                <div className="px-4 py-3 space-y-2 border-t border-green-500/10">
                  {links.map((link) => (
                    <a
                      key={link.path}
                      href={link.path}
                      onClick={() => handleLinkClick(link.path)}
                      className={`
                        block px-3 py-2 rounded-lg 
                        font-medium transition-all duration-200
                        flex items-center
                        hover:bg-green-500/10
                        ${activeLink === link.path ? "text-green-400" : "text-green-500 hover:text-white"}
                      `}
                    >
                      {link.icon}
                      {link.name}
                    </a>
                  ))}
                  <button className="w-full mt-3 px-5 py-2 bg-gradient-to-r from-green-600 to-green-500 text-white font-medium rounded-lg shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-200 font-mono flex items-center justify-center">
                    <FaShieldAlt className="mr-2" /> Security Consultation
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Binary code floating elements */}
      <div className="absolute top-20 right-10 text-green-500/10 font-mono text-xs animate-float hidden lg:block">
        01001101 01100001 01101011 01101000 01101111 01110011 01101001
      </div>

      {/* Custom animations */}
      <style jsx>{`
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
    </nav>
  )
}
