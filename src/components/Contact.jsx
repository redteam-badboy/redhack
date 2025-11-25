"use client"
import { useState } from "react"
import { FaEnvelope, FaUserCog, FaLaptopCode } from "react-icons/fa"
import { motion } from "framer-motion"

function ContactSection() {
  const [result, setResult] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setResult("Sending your message...")

    const formData = new FormData(event.target)
    formData.append("access_key", "951966d0-4c89-44d5-9994-141b01990e40")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        setResult("Message sent successfully! I'll get back to you soon.")
        event.target.reset()
      } else {
        setResult("Something went wrong. Please try again.")
      }
    } catch (error) {
      setResult("An error occurred. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative w-full py-20 md:py-28 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src="cos.jpg" alt="Background" className="w-full h-full object-cover brightness-50" />
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="absolute inset-0 bg-[url('grid.png')] opacity-10"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
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
              <p className="mx-4 text-green-500 font-mono tracking-wider">CONTACT</p>
              <div className="h-1 w-10 bg-green-500"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono">Get In Touch</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Whether you need a new website, a full-stack solution, system integration, or help bringing an idea to life — I’m ready to work with you.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-black/40 backdrop-blur-sm p-8 rounded-2xl border border-green-500/20"
          >
            <h3 className="text-2xl font-bold text-green-500 mb-6 font-mono">Send a Message</h3>

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
                    className="w-full px-4 py-3 bg-black/50 border border-green-500/30 rounded-lg focus:ring-2 focus:ring-green-500/50 text-white font-mono"
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
                    className="w-full px-4 py-3 bg-black/50 border border-green-500/30 rounded-lg focus:ring-2 focus:ring-green-500/50 text-white font-mono"
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
                  className="w-full px-4 py-3 bg-black/50 border border-green-500/30 rounded-lg text-white font-mono"
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
                  className="w-full px-4 py-3 bg-black/50 border border-green-500/30 rounded-lg focus:ring-2 focus:ring-green-500/50 text-white font-mono"
                >
                  <option value="" className="bg-gray-900">
                    Select service type
                  </option>
                  <option value="Web Development" className="bg-gray-900">Web Development</option>
                  <option value="Full Stack Application" className="bg-gray-900">Full-Stack Application</option>
                  <option value="UI/UX Design" className="bg-gray-900">UI/UX Design</option>
                  <option value="Website Redesign" className="bg-gray-900">Website Redesign</option>
                  <option value="System Integration" className="bg-gray-900">System Integration</option>
                  <option value="Consultation" className="bg-gray-900">Consultation</option>
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
                  className="w-full px-4 py-3 bg-black/50 border border-green-500/30 rounded-lg text-white font-mono resize-none"
                  placeholder="Describe your project or idea..."
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 bg-green-600 text-white font-bold rounded-lg transition-all hover:bg-green-500 disabled:opacity-70 flex items-center justify-center font-mono"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
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

          {/* Right Column */}
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
                Feel free to reach out through email or any preferred communication channel. I'm available for freelance
                work, collaborations, and full project development.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              <div className="flex items-start bg-black/40 p-6 rounded-xl border border-green-500/20">
                <div className="bg-green-500/20 p-3 rounded-full mr-4">
                  <FaEnvelope className="text-green-500" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Email</h4>
                  <a href="mailto:makhosin27@gmail.com" className="text-green-500 hover:underline font-mono">
                    makhosin27@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start bg-black/40 p-6 rounded-xl border border-green-500/20">
                <div className="bg-green-500/20 p-3 rounded-full mr-4">
                  <FaLaptopCode className="text-green-500" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Project Discussions</h4>
                  <p className="text-gray-400">Available for consultations</p>
                  <p className="text-green-500 font-mono">By appointment</p>
                </div>
              </div>

              <div className="flex items-start bg-black/40 p-6 rounded-xl border border-green-500/20">
                <div className="bg-green-500/20 p-3 rounded-full mr-4">
                  <FaUserCog className="text-green-500" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Social Platforms</h4>
                  <p className="text-gray-400">Connect for updates & collaboration</p>
                  <p className="text-green-500 font-mono">LinkedIn / GitHub</p>
                </div>
              </div>

              {/* Developer Console */}
              <div className="bg-black/70 p-4 rounded-xl border border-green-500/30 font-mono text-sm">
                <div className="flex items-center mb-2 border-b border-green-500/30 pb-2">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-green-500 text-xs">developer@portfolio:~$</span>
                </div>
                <div className="text-green-500 typing-effect">
                  <p>&gt; Initializing contact panel...</p>
                  <p>&gt; Ready for your message</p>
                  <p>&gt; Waiting for input...</p>
                  <p className="blink">_</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating decorative numbers */}
      <div className="absolute top-20 left-10 text-green-500/30 font-mono text-xs animate-float hidden lg:block">
        Modern Full-Stack Development
      </div>
      <div className="absolute bottom-40 right-10 text-green-500/30 font-mono text-xs animate-float hidden lg:block">
        React • Next.js • APIs • UI/UX
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .typing-effect p {
          overflow: hidden;
          white-space: nowrap;
          animation: typing 3.5s steps(40, end);
        }
        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }
        .blink {
          animation: blink-caret 0.75s step-end infinite;
        }
        @keyframes blink-caret {
          from, to { opacity: 0; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  )
}

export default ContactSection
