"use client"
import { motion } from "framer-motion"
import { ExternalLink, Code2, Zap, Layout, Layers } from"lucide-react"

const projects = [
  {
    title: "Events Planner Website",
    image: "angel.png",
    link: "https://angel-tcf.vercel.app",
    description:
      "An events planner website, showing all the services that the organization offers. Also allow direct contact to the customer support team.",
    icon: Layout,
  },
  {
    title: "College Website",
    image: "Edusity.png",
    link: "https://edisuty.vercel.app/",
    description: "A college website showing and advertising the courses that they offer",
    icon: Code2,
  },
  {
    title: "Construction Company Website",
    image: "const.png",
    link: "https://construction-lilac.vercel.app",
    description:
      "A construction company site with great UI showing the company overview, also allowing the direct contact to the company through email.",
    icon: Layers,
  },
  {
    title: "AI Startup Page",
    image: "ai.png",
    link: "https://ai-startup-five.vercel.app/",
    description: "An AI startup landing page with seamless UI and animations.",
    icon: Zap,
  },
]

function Projects() {
  return (
    <section id="services" className="relative w-full py-20 md:py-28 overflow-hidden">

      <div className="absolute inset-0 z-0">
        <img src="pic.png" className="w-full h-full object-cover brightness-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-950/80 to-gray-950"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">

        {/* GRID FIXED */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((p, i) => (
            <motion.a
              key={i}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative rounded-2xl overflow-hidden group h-[350px] cursor-pointer bg-gray-900/40"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              {/* Image with lower opacity */}
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

              {/* CONTENT */}
              <div className="absolute bottom-0 p-5 z-20">
                <div className="bg-green-500/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <p.icon className="text-green-500" size={22} />
                </div>

                <h3 className="text-xl font-bold text-success mb-1 font-mono">{p.title}</h3>
                <p className="text-gray-300 text-sm mb-3">{p.description}</p>

                <div className="flex items-center gap-2 text-green-500 group-hover:gap-4 transition-all">
                  <span className="font-mono text-xs">View Project</span>
                  <ExternalLink size={14} />
                </div>
              </div>

              {/* Border */}
              <div className="absolute inset-0 border border-green-500/20 rounded-2xl group-hover:border-green-500/40 transition-colors"></div>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 font-mono mb-6">Want to see more projects or discuss a new opportunity?</p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-green-500 hover:bg-green-600 text-black font-bold font-mono rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
