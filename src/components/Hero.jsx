import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Hero = () => {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Simular carga del sitio web
    const timer = setTimeout(() => {
      setShowContent(true)
    }, 2500) // 2.5 segundos para el efecto cortina

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* Curtain Effect con Logo */}
      <AnimatePresence>
        {!showContent && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-50 bg-gradient-to-br from-[#000437] via-[#061191] to-[#101FCD] flex items-center justify-center"
          >
            {/* Logo Container */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ 
                scale: [0, 1.2, 1],
                rotate: [-180, 0],
                y: [0, -20, 0]
              }}
              transition={{ 
                duration: 2,
                ease: "easeOut"
              }}
              className="text-center"
            >
                             {/* Logo byAriel */}
               <div className="w-32 h-32 bg-gradient-to-br from-[#70B5FF] to-[#3E90E8] rounded-full flex items-center justify-center mb-6 shadow-2xl overflow-hidden p-2">
                 <img 
                   src="/byAriel.jpg" 
                   alt="byAriel Logo" 
                   className="w-full h-full object-cover rounded-full"
                 />
               </div>
              
              {/* Loading Text */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="text-white text-xl font-medium"
              >
                Cargando tu futuro digital...
              </motion.div>
              
              {/* Loading Bar */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1.5, duration: 1 }}
                className="mt-4 h-1 bg-gradient-to-r from-[#70B5FF] to-[#3E90E8] rounded-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Content */}
      <AnimatePresence>
        {showContent && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id="home" 
            className="relative min-h-screen bg-gradient-to-br from-[#000437] via-[#061191] to-[#101FCD] overflow-hidden"
          >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              {/* Floating Geometric Shapes */}
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.2, 1],
                  x: [0, 50, 0],
                  y: [0, -30, 0]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute top-20 right-20 w-32 h-32 border-2 border-[#70B5FF]/30 rounded-full"
              />
              
              <motion.div
                animate={{
                  rotate: -360,
                  scale: [1, 1.3, 1],
                  x: [0, -40, 0],
                  y: [0, 50, 0]
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute bottom-20 left-20 w-24 h-24 border-2 border-[#3E90E8]/30 rounded-lg rotate-45"
              />

              {/* Matrix-like Code Rain Effect */}
              <div className="absolute inset-0 opacity-10">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [-100, window.innerHeight + 100]
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                      ease: "linear"
                    }}
                    className="absolute text-[#70B5FF] text-sm font-mono"
                    style={{
                      left: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 2}s`
                    }}
                  >
                    {Math.random() > 0.5 ? '1' : '0'}
                  </motion.div>
                ))}
              </div>

              {/* Gradient Orbs */}
              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#70B5FF]/20 to-[#3E90E8]/20 rounded-full blur-3xl"
              />
              
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.5, 0.2]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-[#3E90E8]/20 to-[#101FCD]/20 rounded-full blur-3xl"
              />
            </div>

            <div className="container-custom relative z-20 pt-8 md:pt-16">
              <div className="text-center max-w-5xl mx-auto px-4">
                
                                 {/* Animated Badge */}
                 <motion.div
                   initial={{ opacity: 0, y: -50, scale: 0.5 }}
                   animate={{ opacity: 1, y: 0, scale: 1 }}
                   transition={{ delay: 0.5, duration: 0.8, type: "spring", bounce: 0.4 }}
                   className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-[#70B5FF]/10 to-[#3E90E8]/10 backdrop-blur-xl border border-[#70B5FF]/30 text-[#70B5FF] text-sm font-medium mb-8 shadow-2xl shadow-[#70B5FF]/20"
                 >
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-3 h-3 bg-[#70B5FF] rounded-full mr-3"
                  />
                  ✨ ¡Transforma tu negocio hoy!
                </motion.div>

                {/* Main Heading with Typing Effect */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 1, type: "spring" }}
                  className="mb-8"
                >
                  <motion.h1
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                  >
                    Tu negocio{' '}
                    <motion.span
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.5, duration: 0.8, type: "spring", bounce: 0.6 }}
                      className="text-gradient-custom"
                    >
                      en línea
                    </motion.span>
                  </motion.h1>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8, duration: 0.8 }}
                    className="text-3xl md:text-4xl lg:text-5xl text-[#70B5FF] font-medium"
                  >
                    en 24 horas
                  </motion.div>
                </motion.div>

                {/* Animated Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.1, duration: 0.8 }}
                  className="text-xl md:text-2xl text-[#70B5FF]/80 mb-12 max-w-3xl mx-auto leading-relaxed"
                >
                  Diseño web profesional, landing pages atractivas y páginas para promocionar tus productos. 
                  <span className="font-semibold text-[#70B5FF]"> Aumenta tus ventas</span> con presencia digital.
                </motion.p>

                {/* Animated Stats Grid */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.4, duration: 0.8 }}
                  className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-3xl mx-auto"
                >
                  {[
                    { number: '24h', label: 'Entrega', icon: '⚡' },
                    { number: '100%', label: 'Responsive', icon: '📱' },
                    { number: 'SEO', label: 'Optimizado', icon: '🔍' },
                    { number: '24/7', label: 'Online', icon: '🌐' }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0, rotate: -180 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ delay: 2.7 + index * 0.1, duration: 0.6, type: "spring" }}
                      whileHover={{ 
                        scale: 1.1, 
                        y: -10,
                        rotate: [0, -5, 5, 0]
                      }}
                                             className="text-center bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-2xl hover:shadow-[#70B5FF]/30 transition-all duration-300 hover:bg-white/10"
                    >
                      <div className="text-3xl mb-2">{stat.icon}</div>
                      <div className="text-3xl md:text-4xl font-bold text-[#70B5FF] mb-2">
                        {stat.number}
                      </div>
                      <div className="text-sm text-white/80 font-medium">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Animated CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 3.2, duration: 0.8 }}
                  className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
                >
                                     <motion.button
                     whileHover={{ 
                       scale: 1.1, 
                       y: -5,
                       boxShadow: "0 20px 40px rgba(112, 181, 255, 0.4)"
                     }}
                     whileTap={{ scale: 0.95 }}
                     className="bg-gradient-to-r from-[#70B5FF]/90 to-[#3E90E8]/90 backdrop-blur-xl border border-white/30 text-white font-bold text-xl px-10 py-5 rounded-2xl shadow-2xl hover:shadow-[#70B5FF]/50 transition-all duration-300 transform"
                   >
                     🚀 Comenzar proyecto
                   </motion.button>
                  
                                     <motion.button
                     whileHover={{ 
                       scale: 1.1, 
                       y: -5,
                       boxShadow: "0 20px 40px rgba(62, 144, 232, 0.4)"
                     }}
                     whileTap={{ scale: 0.95 }}
                     className="bg-white/10 backdrop-blur-xl border-2 border-[#70B5FF]/50 text-[#70B5FF] hover:bg-[#70B5FF]/20 hover:border-[#70B5FF] font-bold text-xl px-10 py-5 rounded-2xl shadow-2xl transition-all duration-300 transform"
                   >
                     📱 Ver ejemplos
                   </motion.button>
                </motion.div>

                {/* Animated Trust Indicators */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 3.5, duration: 0.8 }}
                  className="flex flex-wrap justify-center items-center gap-8 text-sm text-white/70"
                >
                  {[
                    { icon: '✅', text: 'Garantía de satisfacción' },
                    { icon: '🛠️', text: 'Soporte técnico incluido' },
                    { icon: '☁️', text: 'Hosting incluido' }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 3.8 + index * 0.1, duration: 0.6 }}
                      whileHover={{ scale: 1.05, x: 5 }}
                      className="flex items-center hover:text-[#70B5FF] transition-colors duration-300"
                    >
                      <span className="mr-2 text-lg">{item.icon}</span>
                      {item.text}
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Animated Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4, duration: 0.8 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-8 h-12 border-2 border-[#70B5FF] rounded-full flex justify-center"
              >
                <motion.div
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-4 bg-[#70B5FF] rounded-full mt-2"
                />
              </motion.div>
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  )
}

export default Hero
