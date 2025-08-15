import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Features = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const carouselRef = useRef(null)
  const intervalRef = useRef(null)

  const features = [
    {
      icon: '🚀',
      title: 'Entrega en 24h',
      description: 'Tu página web lista en menos de un día. Sin esperas, sin demoras.',
      color: 'from-blue-500 to-cyan-500',
      particles: 8,
      waveColor: 'from-blue-400/20 to-cyan-400/20'
    },
    {
      icon: '📱',
      title: '100% Responsive',
      description: 'Se ve perfecto en móviles, tablets y computadoras. Tus clientes te ven bien en cualquier dispositivo.',
      color: 'from-green-500 to-emerald-500',
      particles: 6,
      waveColor: 'from-green-400/20 to-emerald-400/20'
    },
    {
      icon: '🔍',
      title: 'SEO Optimizado',
      description: 'Aparece en Google y otros buscadores. Más visibilidad = más clientes.',
      color: 'from-purple-500 to-pink-500',
      particles: 7,
      waveColor: 'from-purple-400/20 to-pink-400/20'
    },
    {
      icon: '⚡',
      title: 'Velocidad Garantizada',
      description: 'Páginas súper rápidas que no hacen esperar a tus clientes.',
      color: 'from-orange-500 to-red-500',
      particles: 9,
      waveColor: 'from-orange-400/20 to-red-400/20'
    },
    {
      icon: '🎨',
      title: 'Diseño Profesional',
      description: 'Interfaces modernas y atractivas que generan confianza y conversiones.',
      color: 'from-indigo-500 to-blue-500',
      particles: 8,
      waveColor: 'from-indigo-400/20 to-blue-400/20'
    },
    {
      icon: '🛡️',
      title: 'Seguridad Total',
      description: 'Protección SSL, backups automáticos y hosting seguro incluido.',
      color: 'from-teal-500 to-green-500',
      particles: 6,
      waveColor: 'from-teal-400/20 to-green-400/20'
    }
  ]

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % features.length)
      }, 4000)
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isAutoPlaying, features.length])

  const handleCardClick = (index) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000) // Resume auto-play after 10 seconds
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % features.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length)
  }

  // Particle component for floating effects
  const Particle = ({ index, total, color, delay }) => (
    <motion.div
      className={`absolute w-2 h-2 rounded-full ${color}`}
      animate={{
        x: [0, 20, -20, 0],
        y: [0, -20, 20, 0],
        scale: [1, 1.2, 0.8, 1],
        opacity: [0.3, 0.8, 0.3]
      }}
      transition={{
        duration: 4 + index * 0.5,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut"
      }}
      style={{
        left: `${20 + (index * 80) / total}%`,
        top: `${30 + Math.sin(index) * 20}%`
      }}
    />
  )

  // Wave effect component
  const WaveEffect = ({ color, delay }) => (
    <motion.div
      className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${color}`}
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0, 0.3, 0]
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut"
      }}
    />
  )

  return (
    <section id="features" className="section-padding bg-white/20 backdrop-blur-2xl overflow-hidden">
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
             ¿Por qué elegir{' '}
             <span className="text-gradient">mis servicios</span>?
           </h2>
           <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
             Diseño web profesional que convierte visitantes en clientes. 
             Cada característica está pensada para maximizar tus ventas.
           </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative mb-16">
          {/* Navigation Arrows - Hidden on mobile */}
          <motion.button
            onClick={prevSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="hidden md:block absolute left-2 lg:left-4 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 lg:w-12 lg:h-12 bg-white/20 backdrop-blur-2xl border border-white/30 rounded-full flex items-center justify-center text-gray-700 hover:text-corporate-primary transition-all duration-300 shadow-2xl"
          >
            <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>

          <motion.button
            onClick={nextSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="hidden md:block absolute right-2 lg:right-4 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 lg:w-12 lg:h-12 bg-white/20 backdrop-blur-2xl border border-white/30 rounded-full flex items-center justify-center text-gray-700 hover:text-corporate-primary transition-all duration-300 shadow-2xl"
          >
            <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>

          {/* Carousel */}
          <div className="relative overflow-hidden rounded-3xl">
            <motion.div
              ref={carouselRef}
              className="flex transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`
              }}
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-2 sm:px-4"
                  style={{ minWidth: '100%' }}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="max-w-4xl mx-auto"
                  >
                    <motion.div
                      whileHover={{ 
                        y: window.innerWidth < 768 ? 0 : -15,
                        rotateY: window.innerWidth < 768 ? 0 : 5,
                        transition: { duration: 0.4 }
                      }}
                      className="group relative bg-white/30 backdrop-blur-3xl rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-white/50 hover:border-corporate-primary/50 overflow-hidden cursor-pointer"
                      onClick={() => handleCardClick(index)}
                    >
                      {/* Wave Effects */}
                      <WaveEffect color={feature.waveColor} delay={0} />
                      <WaveEffect color={feature.waveColor} delay={1} />
                      <WaveEffect color={feature.waveColor} delay={2} />

                      {/* Floating Particles */}
                      {Array.from({ length: feature.particles }).map((_, particleIndex) => (
                        <Particle
                          key={particleIndex}
                          index={particleIndex}
                          total={feature.particles}
                          color={`bg-gradient-to-r ${feature.color}`}
                          delay={particleIndex * 0.2}
                        />
                      ))}

                      {/* Main Content */}
                      <div className="relative z-10 text-center">
                        {/* Icon with 3D effect */}
                        <motion.div
                          whileHover={{ 
                            rotateY: window.innerWidth < 768 ? 0 : 360,
                            scale: window.innerWidth < 768 ? 1.1 : 1.2,
                            transition: { duration: 0.8 }
                          }}
                          className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-4 sm:mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-500 text-3xl sm:text-4xl md:text-5xl mx-auto shadow-2xl`}
                        >
                          {feature.icon}
                        </motion.div>

                        {/* Title with gradient text */}
                        <motion.h3
                          whileHover={{ scale: window.innerWidth < 768 ? 1.02 : 1.05 }}
                          className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 group-hover:text-corporate-primary transition-colors duration-300"
                        >
                          {feature.title}
                        </motion.h3>

                        {/* Description */}
                        <motion.p
                          whileHover={{ scale: window.innerWidth < 768 ? 1.01 : 1.02 }}
                          className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto"
                        >
                          {feature.description}
                        </motion.p>

                        {/* Hover Glow Effect */}
                        <motion.div
                          className="absolute inset-0 rounded-3xl bg-gradient-to-br from-corporate-primary/20 to-corporate-light/20 backdrop-blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10 border border-corporate-primary/40"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                        />
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-4 sm:mt-6 md:mt-8 space-x-2 sm:space-x-3">
            {features.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => handleCardClick(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-corporate-primary scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-corporate-primary/90 to-corporate-deep/90 backdrop-blur-3xl rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 text-white border border-white/20 shadow-2xl">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
              ¿Listo para transformar tu negocio?
            </h3>
                         <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 md:mb-8 opacity-90 max-w-2xl mx-auto">
               Miles de negocios ya confían en mí. Tu turno es ahora.
             </p>
            <motion.a
              href="https://wa.me/2923659973?text=¡Hola! Quiero comenzar mi proyecto web con byAriel 🚀"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-corporate-primary font-bold text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300"
            >
              🚀 Comenzar proyecto!!
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features
