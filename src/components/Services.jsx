import React from 'react'
import { motion } from 'framer-motion'

const Services = () => {
  const services = [
    {
      name: 'Landing Page',
      description: 'Página de aterrizaje atractiva para convertir visitantes en clientes',
      price: 'Desde $299',
      features: ['Diseño mobile-first', 'SEO optimizado', 'Formularios de contacto', 'Entrega en 24h'],
      popular: false,
      color: 'from-blue-500 to-cyan-500',
      icon: '📱'
    },
    {
      name: 'Página Web Completa',
      description: 'Sitio web profesional con múltiples secciones y funcionalidades',
      price: 'Desde $399',
      features: ['2 o más páginas', 'Diseño responsive', 'Disponibilidad de 24/7', 'Dominio Incluido'],
      popular: true,
      color: 'from-primary-500 to-secondary-600',
      icon: '🌐'
    },
    {
      name: 'Proyecto Personalizado',
      description: 'Desarrollo web a medida según tus necesidades específicas',
      price: 'Consultar',
      features: ['Análisis de requerimientos', 'Diseño personalizado', 'Funcionalidades especiales', 'Soporte completo'],
      popular: false,
      color: 'from-purple-500 to-pink-500',
      icon: '✨'
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
    <section id="services" className="section-padding bg-white/20 backdrop-blur-2xl">
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
            Nuestros{' '}
            <span className="text-gradient">servicios web</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Soluciones web profesionales diseñadas para convertir visitantes en clientes. 
            Desde landing pages hasta proyectos personalizados a medida.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className={`relative group ${
                service.popular 
                  ? 'ring-2 ring-primary-500 scale-105' 
                  : ''
              }`}
            >
              {/* Popular Badge */}
              {service.popular && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                >
                  <div className="bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Más Popular
                  </div>
                </motion.div>
              )}

                             <div className="bg-white/30 backdrop-blur-3xl rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-white/50 hover:border-corporate-primary/50 h-full overflow-hidden">
                {/* Service Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 text-3xl`}>
                  {service.icon}
                </div>

                {/* Service Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                  {service.name}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Price */}
                <div className="text-3xl font-bold text-primary-600 mb-6">
                  {service.price}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                                 {/* CTA Button */}
                 <motion.a
                   href={`https://wa.me/2923659973?text=¡Hola! Quiero ${service.popular ? 'comenzar' : 'más información sobre'} ${service.name.toLowerCase()} con byAriel 🚀`}
                   target="_blank"
                   rel="noopener noreferrer"
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                   className={`inline-block w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                     service.popular
                       ? 'bg-primary-600 hover:bg-primary-700 text-white'
                       : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                   }`}
                 >
                   {service.popular ? 'Comenzar ahora' : 'Más información'}
                 </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
                     className="bg-gradient-to-r from-corporate-light/15 to-corporate-secondary/15 backdrop-blur-3xl rounded-3xl p-8 lg:p-12 text-center border border-corporate-light/30 shadow-2xl"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            ¿Necesitas algo personalizado?
          </h3>
                     <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
             Puedo crear soluciones web a medida para satisfacer 
             cualquier necesidad específica de tu negocio.
           </p>
                     <motion.a
             href="https://wa.me/2923659973?text=¡Hola! Quiero hablar sobre un proyecto personalizado con byAriel 🚀"
             target="_blank"
             rel="noopener noreferrer"
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             className="inline-block btn-primary text-lg px-8 py-4"
           >
             💬 Hablemos!!
           </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
