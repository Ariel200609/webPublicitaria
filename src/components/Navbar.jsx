import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Home, 
  Star, 
  Wrench, 
  Palette, 
  Mail,
  Menu,
  X,
  Rocket
} from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Inicio', href: '#home', icon: Home },
    { name: 'Características', href: '#features', icon: Star },
    { name: 'Servicios', href: '#services', icon: Wrench },
    { name: 'Portafolio', href: '#portfolio', icon: Palette },
    { name: 'Contacto', href: '#contact', icon: Mail },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/10 backdrop-blur-3xl border-b border-white/20 shadow-2xl shadow-corporate-primary/30' 
          : 'bg-white/5 backdrop-blur-2xl border-b border-white/10'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="flex items-center space-x-3"
          >
            <div className="relative group">
              <div className="w-12 h-12 rounded-2xl overflow-hidden bg-gradient-to-br from-corporate-primary/80 to-corporate-light/80 backdrop-blur-xl border border-white/30 p-1 shadow-2xl shadow-corporate-primary/40 group-hover:shadow-corporate-primary/60 transition-all duration-500">
                <img 
                  src="/byAriel.jpg" 
                  alt="byAriel Logo" 
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              {/* Multiple Glow effects */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-corporate-primary/30 to-corporate-light/30 blur-2xl -z-10 group-hover:blur-3xl transition-all duration-500"></div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-corporate-primary/20 to-corporate-light/20 blur-xl -z-20 group-hover:blur-2xl transition-all duration-500"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-corporate-primary to-corporate-light bg-clip-text text-transparent">
                byAriel
              </span>
              <span className="text-xs text-gray-500 font-medium">Web Developer</span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => {
              const IconComponent = item.icon
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ y: -3, scale: 1.05 }}
                  className="group relative px-4 py-3 rounded-2xl transition-all duration-300"
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 text-gray-600 group-hover:text-corporate-primary transition-colors duration-300 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent />
                    </div>
                    <span className="text-gray-700 group-hover:text-corporate-primary font-medium transition-colors duration-300">
                      {item.name}
                    </span>
                  </div>
                  {/* Liquid glass hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-corporate-primary/10 to-corporate-light/10 backdrop-blur-xl rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10 border border-white/20"></div>
                  {/* Bottom line */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-corporate-primary to-corporate-light group-hover:w-3/4 transition-all duration-300 rounded-full"></div>
                </motion.a>
              )
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
                                          <motion.a
                                href="https://wa.me/2923659973?text=¡Hola! Quiero comenzar mi proyecto web con byAriel 🚀"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                                className="group relative inline-block px-8 py-3 bg-gradient-to-r from-corporate-primary/70 to-corporate-light/70 backdrop-blur-2xl border border-white/30 text-white font-semibold rounded-2xl shadow-2xl shadow-corporate-primary/50 hover:shadow-corporate-primary/70 transition-all duration-500 overflow-hidden"
                              >
                                <span className="relative z-10 flex items-center space-x-2">
                                  <Rocket className="w-5 h-5" />
                                  <span>Comenzar</span>
                                </span>
                                {/* Shine effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                {/* Multiple Glow effects */}
                                <div className="absolute inset-0 bg-gradient-to-r from-corporate-primary/30 to-corporate-light/30 blur-2xl -z-10 group-hover:blur-3xl transition-all duration-500"></div>
                                <div className="absolute inset-0 bg-gradient-to-r from-corporate-primary/20 to-corporate-light/20 blur-xl -z-20 group-hover:blur-2xl transition-all duration-500"></div>
                              </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="lg:hidden p-3 rounded-2xl bg-white/10 backdrop-blur-2xl border border-white/20 text-gray-700 hover:text-corporate-primary transition-all duration-300 shadow-lg"
          >
            <motion.div
              animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white/5 backdrop-blur-3xl border-t border-white/10 shadow-2xl"
            >
              <div className="px-6 py-8 space-y-4">
                {navItems.map((item, index) => {
                  const IconComponent = item.icon
                  return (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      initial={{ x: -30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      className="group flex items-center space-x-3 p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:border-corporate-primary/30 transition-all duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="w-6 h-6 text-gray-600 group-hover:text-corporate-primary transition-colors duration-300 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent />
                      </div>
                      <span className="text-gray-700 group-hover:text-corporate-primary font-medium transition-colors duration-300">
                        {item.name}
                      </span>
                    </motion.a>
                  )
                })}
                <motion.div
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: navItems.length * 0.1, duration: 0.4 }}
                  className="pt-4"
                >
                  <motion.a
                    href="https://wa.me/2923659973?text=¡Hola! Quiero comenzar mi proyecto web con byAriel 🚀"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-4 bg-gradient-to-r from-corporate-primary/70 to-corporate-light/70 backdrop-blur-2xl border border-white/30 text-white font-semibold rounded-2xl shadow-2xl hover:shadow-corporate-primary/50 transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <Rocket className="w-5 h-5" />
                      <span>Comenzar proyecto</span>
                    </div>
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navbar
