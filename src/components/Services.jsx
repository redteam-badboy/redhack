"use client"
import { motion } from "framer-motion"
import { FaShieldAlt, FaCode, FaLaptopCode, FaSearch, FaUserSecret } from "react-icons/fa"
import { BiNetworkChart } from "react-icons/bi"

function ServicesSection() {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="services" className="relative w-full py-20 md:py-28 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src="bg.webp" alt="Cybersecurity background" className="w-full h-full object-cover brightness-50" />
        <div className="absolute inset-0 bg-black/80"></div>
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
              <p className="mx-4 text-green-500 font-mono tracking-wider">MY EXPERTISE</p>
              <div className="h-1 w-10 bg-green-500"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono">Security Services</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Comprehensive cybersecurity solutions to identify vulnerabilities, strengthen defenses, and protect your
              digital assets from evolving threats.
            </p>
          </motion.div>
        </div>

        {/* Bento Grid Layout - Refactored for cybersecurity services */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-6 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Row 1: Two items */}
          {/* Penetration Testing - Spans 4 columns */}
          <motion.div
            className="md:col-span-4 rounded-2xl overflow-hidden relative group h-[400px]"
            variants={itemVariants}
          >
            <img
              src="pentest.webp"
              alt="Penetration testing service"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-90"></div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20">
              <div className="bg-green-500/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <FaLaptopCode className="text-green-500" size={24} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 font-mono">Penetration Testing</h3>
              <p className="text-gray-300 mb-4 max-w-lg">
                Authorized simulated attacks on your systems to identify security weaknesses before malicious actors can
                exploit them. Includes detailed reporting and remediation recommendations.
              </p>
              <div className="h-1 w-20 bg-green-500"></div>
            </div>

            {/* Border effect */}
            <div className="absolute inset-0 border border-green-500/20 rounded-2xl pointer-events-none z-10"></div>
          </motion.div>

          {/* Vulnerability Assessment - Spans 2 columns */}
          <motion.div
            className="md:col-span-2 rounded-2xl overflow-hidden relative group h-[400px]"
            variants={itemVariants}
          >
            <img
              src="vuln.webp"
              alt="Vulnerability assessment service"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-90"></div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <div className="bg-green-500/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <FaSearch className="text-green-500" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 font-mono">Vulnerability Assessment</h3>
              <p className="text-gray-300 mb-4">
                Systematic review of security weaknesses in your systems and applications, with prioritized
                recommendations for remediation.
              </p>
              <div className="h-1 w-20 bg-green-500"></div>
            </div>

            {/* Border effect */}
            <div className="absolute inset-0 border border-green-500/20 rounded-2xl pointer-events-none z-10"></div>
          </motion.div>

          {/* Row 2: Three items of equal width */}
          {/* Network Security - Spans 2 columns */}
          <motion.div
            className="md:col-span-2 rounded-2xl overflow-hidden relative group h-[350px]"
            variants={itemVariants}
          >
            <img
              src="net.png"
              alt="Network security service"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-90"></div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <div className="bg-green-500/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <BiNetworkChart className="text-green-500" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 font-mono">Network Security</h3>
              <p className="text-gray-300 mb-4">
                Comprehensive analysis of network infrastructure to identify misconfigurations, unauthorized access
                points, and potential attack vectors.
              </p>
              <div className="h-1 w-20 bg-green-500"></div>
            </div>

            {/* Border effect */}
            <div className="absolute inset-0 border border-green-500/20 rounded-2xl pointer-events-none z-10"></div>
          </motion.div>

          {/* Red Team Operations - Spans 2 columns */}
          <motion.div
            className="md:col-span-2 rounded-2xl overflow-hidden relative group h-[350px]"
            variants={itemVariants}
          >
            <img
              src="red.webp"
              alt="Red team operations service"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-90"></div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <div className="bg-green-500/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <FaUserSecret className="text-green-500" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 font-mono">Red Team Operations</h3>
              <p className="text-gray-300 mb-4">
                Advanced adversary simulation using real-world attack techniques to test your organization's detection
                and response capabilities.
              </p>
              <div className="h-1 w-20 bg-green-500"></div>
            </div>

            {/* Border effect */}
            <div className="absolute inset-0 border border-green-500/20 rounded-2xl pointer-events-none z-10"></div>
          </motion.div>

          {/* Security Consultation - Spans 2 columns */}
          <motion.div
            className="md:col-span-2 rounded-2xl overflow-hidden relative group h-[350px]"
            variants={itemVariants}
          >
            <img
              src="cos.jpg"
              alt="Security consultation service"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-90"></div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <div className="bg-green-500/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <FaShieldAlt className="text-green-500" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 font-mono">Security Consultation</h3>
              <p className="text-gray-300 mb-4">
                Expert guidance on security best practices, compliance requirements, and building a robust security
                program tailored to your organization.
              </p>
              <div className="h-1 w-20 bg-green-500"></div>
            </div>

            {/* Border effect */}
            <div className="absolute inset-0 border border-green-500/20 rounded-2xl pointer-events-none z-10"></div>
          </motion.div>
        </motion.div>

        {/* Featured Service - Full Width Highlight */}
        <motion.div
          className="mt-6 rounded-2xl overflow-hidden relative group h-[300px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <img
            src="comp.webp"
            alt="Complete security assessment service"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-12 max-w-3xl z-20">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono">
              Comprehensive Security Assessment
            </h3>
            <p className="text-gray-300 mb-6 text-lg">
              Get a complete evaluation of your organization's security posture using the MITRE ATT&CK framework and
              Cyber Kill Chain methodology. Identify vulnerabilities across your entire attack surface and receive a
              detailed roadmap for strengthening your defenses.
            </p>
            <div className="inline-block w-fit p-1 rounded-xl bg-gradient-to-r from-green-600 via-green-500 to-green-600">
              <a  href="/#contact" className="px-8 py-3 bg-black hover:bg-black/80 text-green-500 rounded-lg font-bold font-mono flex items-center">
                <FaCode className="mr-2" /> Request Assessment
              </a>
            </div>
          </div>

          {/* Border effect */}
          <div className="absolute inset-0 border border-green-500/20 rounded-2xl pointer-events-none z-10"></div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-1 rounded-xl bg-gradient-to-r from-green-600 via-green-500 to-green-600">
            <button className="px-8 py-3 bg-black hover:bg-black/80 text-green-500 rounded-lg font-bold font-mono flex items-center justify-center">
              <FaShieldAlt className="mr-2" /> Schedule a Security Consultation
            </button>
          </div>
          <p className="text-gray-400 mt-4 font-mono">
            Customized security solutions tailored to your organization's specific needs and threat landscape
          </p>
        </motion.div>
      </div>

      {/* Binary code floating elements */}
      <div className="absolute top-20 left-10 text-green-500/30 font-mono text-xs animate-float hidden lg:block">
        01001101 01100001 01101011 01101000 01101111 01110011 01101001
      </div>
      <div className="absolute bottom-40 right-10 text-green-500/30 font-mono text-xs animate-float hidden lg:block">
        01001110 01100011 01110101 01100010 01100101
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
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

export default ServicesSection
