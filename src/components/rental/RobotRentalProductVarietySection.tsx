'use client'
import { motion } from 'framer-motion'

const menuItems = [
  'Coffee Options',
  'Inclusions',
  'Technical Requirements',
  'Space Requirements',
]

const products = [
  {
    image: "https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357406/Coffee-Black-cup_wcekeq.webp",
    alt: "Arabica Coffee",
    title: "Perfectly Crafted Arabica Coffee",
    description: "Best equipment, Fresh Milk, Freshly ground 100% Arabica beans are there to guarantee that your event visitors will remember the coffee that they were served.",
  },
  {
    image: "https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357180/xbot-robotic-yogurt_lwhkw8.webp",
    alt: "Ice Cream Flavors",
    title: "Delicious Ice Cream Flavors",
    description: "Indulge in a plethora of flavors meticulously tailored to cater to local preferences. Our ice cream unit can deliver 2 tastes. The most popular choices are Vanilla and Chocolate.",
  },
  {
    image: "https://res.cloudinary.com/drqisyk9h/image/upload/q_auto/f_auto/v1779357181/xbot-sprinkles_o1ciuh.webp",
    alt: "Ice Cream Toppings",
    title: "Colorful Ice Cream Toppings",
    description: "CafeXbot Robot Rental usually includes 3 flavors of toppings of our choice. If you want anything special to delight your guests it can be added upon request.",
  },
]

export default function RobotRentalProductVarietySection() {
  return (
    <section
      style={{ backgroundColor: '#f0f0f0' }}
      className="py-16 px-8"
    >
      <div className="max-w-7xl mx-auto">

         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
         >
           <h2
             className="text-2xl md:text-3xl lg:text-4xl"
             style={{
               color: '#2d2d2d',
               fontWeight: 800,
               textAlign: 'center',
               marginBottom: '16px',
             }}
           >
             Exquisite Product Variety
           </h2>
           <p
             style={{
               color: '#555555',
               fontSize: '16px',
               textAlign: 'center',
               marginBottom: '56px',
             }}
           >
             Savor the essence of variety with our meticulously curated offerings
           </p>
         </motion.div>

         <div
           className="flex-col lg:flex-row"
           style={{
             display: 'flex',
             alignItems: 'flex-start',
             gap: '32px',
           }}
         >
           <motion.div
             className="w-full lg:w-auto"
             style={{ flex: '0 0 auto' }}
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
           >
              <div className="flex flex-wrap lg:flex-col gap-3 lg:gap-0 justify-center lg:justify-start">
              {menuItems.map((item, i) => (
               <div
                 key={item}
                 className={`px-3 py-2 lg:px-0 lg:py-4 ${i < menuItems.length - 1 ? 'lg:border-b lg:border-b-gray-300 lg:mb-5' : ''}`}
                 style={{
                   display: 'inline-flex',
                   alignItems: 'center',
                   gap: '10px',
                   cursor: 'pointer',
                   marginBottom: '0',
                   paddingBottom: '0',
                 }}
               >
                 <span
                   style={{
                     color: '#f5a623',
                     fontSize: '20px',
                     fontWeight: 700,
                     lineHeight: 1,
                   }}
                 >
                   ›
                 </span>
                 <span
                   style={{
                     color: '#f5a623',
                     fontWeight: 600,
                     fontSize: '14px',
                   }}
                 >
                   {item}
                 </span>
               </div>
             ))}
             </div>
           </motion.div>

           <motion.div
             className="w-full"
             style={{ flex: 1 }}
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
           >
             <div
               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
               style={{
                 backgroundColor: '#5c4a32',
                 borderRadius: '20px',
                 padding: '32px 24px',
                 gap: '16px',
               }}
             >
               {products.map((product, i) => (
                 <motion.div
                   key={product.title}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.5, delay: i * 0.15 }}
                   style={{
                     backgroundColor: 'rgba(255,255,255,0.08)',
                     borderRadius: '14px',
                     border: '1px solid rgba(255,255,255,0.15)',
                     padding: '24px 16px',
                     textAlign: 'center',
                     display: 'flex',
                     flexDirection: 'column',
                     alignItems: 'center',
                   }}
                 >
                   <img
                     src={product.image}
                     alt={product.alt}
                     referrerPolicy="no-referrer"
                     className="w-20 h-20 md:w-24 md:h-24"
                     style={{
                       objectFit: 'contain',
                       marginBottom: '20px',
                     }}
                   />
                  <h3
                    style={{
                      color: '#f5a623',
                      fontWeight: 700,
                      fontSize: '17px',
                      marginBottom: '12px',
                      textAlign: 'center',
                      lineHeight: 1.3,
                    }}
                  >
                    {product.title}
                  </h3>
                  <p
                    style={{
                      color: '#e0d5c8',
                      fontSize: '14px',
                      lineHeight: 1.6,
                      textAlign: 'center',
                    }}
                  >
                    {product.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
