"use client"
import { useState } from "react"
import { FaEnvelope, FaLock, FaShieldAlt, FaUserSecret } from "react-icons/fa"
import { motion } from "framer-motion"

function ContactSection() {
  const [result, setResult] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setResult("Sending your message...")

    const formData = new FormData(event.target)
    formData.append("access_key", "b588cdcb-77f7-4b3f-a990-12fe2d5a4959") // Replace with your actual key

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        setResult("Message sent successfully! I'll be in touch soon.")
        event.target.reset()
      } else {
        console.log("Error", data)
        setResult("Something went wrong. Please try again.")
      }
    } catch (error) {
      console.log("Error", error)
      setResult("An error occurred. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative w-full py-20 md:py-28 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src="cos.jpg" alt="Cybersecurity background" className="w-full h-full object-cover brightness-50" />
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
              <p className="mx-4 text-green-500 font-mono tracking-wider">SECURE CHANNEL</p>
              <div className="h-1 w-10 bg-green-500"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono">Contact Me</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Need cybersecurity expertise? Reach out securely to discuss how I can help identify vulnerabilities and
              strengthen your security posture.
            </p>
          </motion.div>
        </div>

        {/* Contact Content - Two Columns */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-black/40 backdrop-blur-sm p-8 rounded-2xl border border-green-500/20"
          >
            <h3 className="text-2xl font-bold text-green-500 mb-6 font-mono">Send a Secure Message</h3>

            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-white font-medium block">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-green-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/50 text-white font-mono"
                    placeholder="Your name"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-white font-medium block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-green-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/50 text-white font-mono"
                    placeholder="Your email"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="text-white font-medium block">
                  Company/Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 bg-black/50 border border-green-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/50 text-white font-mono"
                  placeholder="Your company name"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="service_type" className="text-white font-medium block">
                  Service Required
                </label>
                <select
                  id="service_type"
                  name="service_type"
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-green-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/50 text-white font-mono"
                >
                  <option value="" className="bg-gray-900">
                    Select service type
                  </option>
                  <option value="Penetration Testing" className="bg-gray-900">
                    Penetration Testing
                  </option>
                  <option value="Vulnerability Assessment" className="bg-gray-900">
                    Vulnerability Assessment
                  </option>
                  <option value="Security Consultation" className="bg-gray-900">
                    Security Consultation
                  </option>
                  <option value="Red Team Exercise" className="bg-gray-900">
                    Red Team Exercise
                  </option>
                  <option value="Security Training" className="bg-gray-900">
                    Security Training
                  </option>
                  <option value="Other" className="bg-gray-900">
                    Other
                  </option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-white font-medium block">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-black/50 border border-green-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/50 text-white font-mono resize-none"
                  placeholder="Describe your security needs or concerns..."
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 bg-gradient-to-r from-green-600 to-green-500 text-white font-bold rounded-lg transition-all hover:from-green-500 hover:to-green-600 disabled:opacity-70 flex items-center justify-center font-mono"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Encrypting...
                    </>
                  ) : (
                    <>
                      <FaLock className="mr-2" /> Send Secure Message
                    </>
                  )}
                </button>

                {result && (
                  <div
                    className={`mt-4 p-3 rounded-lg text-center ${
                      result.includes("success") ? "bg-green-900/50 text-green-300" : "bg-red-900/50 text-red-300"
                    }`}
                  >
                    {result}
                  </div>
                )}
              </div>
            </form>
          </motion.div>

          {/* Right Column - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-green-500 mb-6 font-mono">Contact Information</h3>
              <p className="text-gray-300 mb-8">
                Have questions about cybersecurity or need professional assistance with your security needs? Reach out
                through any of these secure channels. I'm ready to help strengthen your digital defenses.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              <div className="flex items-start bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-green-500/20">
                <div className="bg-green-500/20 p-3 rounded-full mr-4">
                  <FaEnvelope className="text-green-500" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Email</h4>
                  <p className="text-gray-400">For secure communications</p>
                  <a href="mailto:redhackevolution@gmail.com" className="text-green-500 hover:underline font-mono">
                    redhackevolutions@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-green-500/20">
                <div className="bg-green-500/20 p-3 rounded-full mr-4">
                  <FaShieldAlt className="text-green-500" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Security Consultations</h4>
                  <p className="text-gray-400">Schedule a secure call</p>
                  <p className="text-green-500 font-mono">By appointment only</p>
                </div>
              </div>

              <div className="flex items-start bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-green-500/20">
                <div className="bg-green-500/20 p-3 rounded-full mr-4">
                  <FaUserSecret className="text-green-500" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Encrypted Messaging</h4>
                  <p className="text-gray-400">For sensitive communications</p>
                  <p className="text-green-500 font-mono">Signal/Telegram available on request</p>
                </div>
              </div>

              {/* Terminal-like element */}
              <div className="bg-black/70 backdrop-blur-sm p-4 rounded-xl border border-green-500/30 font-mono text-sm">
                <div className="flex items-center mb-2 border-b border-green-500/30 pb-2">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-green-500 text-xs">terminal@makhosi:~$</span>
                </div>
                <div className="text-green-500 typing-effect">
                  <p>&gt; Initiating secure connection...</p>
                  <p>&gt; Connection established</p>
                  <p>&gt; Awaiting your message...</p>
                  <p className="blink">_</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
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

        .typing-effect p {
          overflow: hidden;
          white-space: nowrap;
          margin: 0;
          animation: typing 3.5s steps(40, end);
        }

        .typing-effect p:nth-child(1) {
          animation-delay: 0s;
        }

        .typing-effect p:nth-child(2) {
          animation-delay: 1s;
        }

        .typing-effect p:nth-child(3) {
          animation-delay: 2s;
        }

        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        .blink {
          animation: blink-caret 0.75s step-end infinite;
        }

        @keyframes blink-caret {
          from,
          to {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  )
}

export default ContactSection
