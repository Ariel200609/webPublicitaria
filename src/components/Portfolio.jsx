import React from 'react'
import { motion } from 'framer-motion'

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Página Web Completa',
      description: 'Sitio web profesional para concesionario de autos con diseño moderno y funcionalidades avanzadas',
      image: '/paginawebcompleta.jpg',
      category: 'E-commerce',
      technologies: ['React', 'Tailwind CSS', 'Responsive Design'],
      link: '#',
      features: ['Catálogo de productos', 'Sistema de consultas', 'Panel administrativo', 'SEO optimizado']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="portfolio" className="section-padding bg-gradient-to-br from-gray-50/30 to-gray-100/30 backdrop-blur-2xl">
      <div className="container-custom">
                 {/* Section Header */}
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="text-center mb-16"
         >
           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
             Mi{' '}
             <span className="text-gradient-corporate">Portafolio</span>
           </h2>
           <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
             Ejemplos reales de mi trabajo. Cada proyecto está diseñado con la más alta calidad 
             y pensado para generar resultados tangibles para tu negocio.
           </p>
           
           {/* Portfolio Personal Button */}
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="mb-8"
           >
             <motion.a
               href="https://ariel200609.github.io/PortfolioDeveloperAriel/"
               target="_blank"
               rel="noopener noreferrer"
               whileHover={{ scale: 1.05, y: -2 }}
               whileTap={{ scale: 0.95 }}
               className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-corporate-light/20 to-corporate-primary/20 backdrop-blur-xl border border-corporate-primary/30 text-corporate-primary font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:from-corporate-light/30 hover:to-corporate-primary/30"
             >
               <span>💼</span>
               <span>Ver mi Portfolio Personal</span>
               <span>→</span>
             </motion.a>
           </motion.div>
         </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="space-y-8"
            >
              {/* Project Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative group"
              >
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-cover"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-corporate-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-white/90">{project.description}</p>
                    </div>
                  </div>
                </div>
                
                {/* Floating Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="absolute -top-4 -right-4 bg-gradient-to-r from-corporate-primary to-corporate-light text-white px-4 py-2 rounded-full text-sm font-semibold shadow-2xl"
                >
                  {project.category}
                </motion.div>
              </motion.div>

              {/* Project Details */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Tecnologías utilizadas
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * index, duration: 0.4 }}
                        className="px-3 py-1 bg-white/30 backdrop-blur-3xl border border-white/50 rounded-full text-sm text-gray-700 font-medium shadow-lg"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Características principales
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * index, duration: 0.4 }}
                        className="flex items-center text-gray-600"
                      >
                        <span className="w-2 h-2 bg-corporate-primary rounded-full mr-3"></span>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                                 {/* CTA Button */}
                 <motion.a
                   href="https://ferradasautomotores.com"
                   target="_blank"
                   rel="noopener noreferrer"
                   whileHover={{ scale: 1.05, y: -2 }}
                   whileTap={{ scale: 0.95 }}
                   className="inline-block px-8 py-4 bg-gradient-to-r from-corporate-primary/90 to-corporate-light/90 backdrop-blur-xl border border-white/30 text-white font-semibold rounded-2xl shadow-2xl shadow-corporate-primary/30 hover:shadow-corporate-primary/50 transition-all duration-300"
                 >
                   Ver proyecto completo
                 </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mt-20"
        >
                     <div className="bg-gradient-to-r from-corporate-primary/15 to-corporate-light/15 backdrop-blur-3xl rounded-3xl p-8 md:p-12 border border-corporate-primary/30 shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              ¿Quieres un proyecto similar?
            </h3>
                         <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
               Puedo crear algo increíble para tu negocio. Cada proyecto es único 
               y diseñado específicamente para tus necesidades.
             </p>
            <motion.a
              href="https://wa.me/2923659973?text=¡Hola! Quiero un proyecto web similar al que veo en tu portafolio 🚀"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-gradient-to-r from-corporate-primary to-corporate-light text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-corporate-primary/40 transition-all duration-300"
            >
              🚀 Comenzar mi proyecto
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio
