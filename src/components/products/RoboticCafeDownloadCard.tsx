'use client'

import { motion } from 'framer-motion'
import { Download } from 'lucide-react'

export default function RoboticCafeDownloadCard() {
  return (
    <section className="bg-black py-20 px-6">
      <motion.div
        className="max-w-3xl mx-auto rounded-3xl px-10 py-14 text-center relative overflow-hidden"
        style={{ backgroundColor: '#635C52' }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-white font-bold text-3xl md:text-4xl leading-tight mb-8">
          Download our presentation with specifications and details
        </h2>

        <a
          href="#"
          className="inline-flex items-center gap-3 bg-white text-[#635C52] font-bold text-base px-10 py-4 rounded-full hover:bg-gray-100 transition-colors shadow-lg"
        >
          <Download size={20} />
          Download Presentation
        </a>
      </motion.div>
    </section>
  )
}
