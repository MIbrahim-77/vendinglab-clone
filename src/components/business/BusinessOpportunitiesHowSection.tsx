'use client'
import { motion } from 'framer-motion'

const items = [
  'Manufacturing Agreement',
  'Building the Cafe',
  'Location Search',
  'CafeXbot Ready for Your Investment Opportunities',
  'Location Selection',
  'Placement at Location',
  'App Access',
  'Monthly P&L',
  'Quarterly profit sharing',
]

export default function BusinessOpportunitiesHowSection() {
  return (
    <section
      style={{ backgroundColor: '#f0f0f0' }}
      className="py-16 px-8"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.h2
          style={{
            color: '#2d2d2d',
            fontWeight: 800,
            fontSize: '36px',
            textAlign: 'center',
            marginBottom: '40px',
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          How Our Business Opportunities Work?
        </motion.h2>

        {/* Two Column Layout */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '48px',
          }}
        >
          {/* LEFT: List */}
          <motion.div
            style={{ flex: '1.2' }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {items.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '16px 0',
                  borderBottom: '1px solid #d0d0d0',
                  cursor: 'pointer',
                }}
              >
                {/* Arrow */}
                <span
                  style={{
                    color: '#f5a623',
                    fontSize: '13px',
                    fontWeight: 700,
                    flexShrink: 0,
                  }}
                >
                  ▶
                </span>
                {/* Text */}
                <span
                  style={{
                    color: '#f5a623',
                    fontWeight: 700,
                    fontSize: '16px',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {item}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* RIGHT: Image */}
          <motion.div
            style={{ flex: 1 }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357424/xbot-Carnival-bot_wjm7bl.webp"
              alt="CafeXbot Carnival Bot"
              referrerPolicy="no-referrer"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                display: 'block',
              }}
            />
          </motion.div>
        </div>

      </div>
    </section>
  )
}
