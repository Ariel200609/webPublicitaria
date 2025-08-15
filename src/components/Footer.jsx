import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { name: 'Acerca de', href: '#about' },
      { name: 'Nuestro equipo', href: '#team' },
      { name: 'Carreras', href: '#careers' },
      { name: 'Prensa', href: '#press' }
    ],
    services: [
      { name: 'Desarrollo Web', href: '#web-development' },
      { name: 'Aplicaciones', href: '#apps' },
      { name: 'E-commerce', href: '#ecommerce' },
      { name: 'Consultoría', href: '#consulting' }
    ],
    resources: [
      { name: 'Blog', href: '#blog' },
      { name: 'Documentación', href: '#docs' },
      { name: 'Tutoriales', href: '#tutorials' },
      { name: 'Soporte', href: '#support' }
    ],
    legal: [
      { name: 'Privacidad', href: '#privacy' },
      { name: 'Términos', href: '#terms' },
      { name: 'Cookies', href: '#cookies' },
      { name: 'Licencias', href: '#licenses' }
    ]
  }

  const socialLinks = [
    { name: 'Instagram', href: 'https://instagram.com/developerariel_', icon: '📷' },
    { name: 'GitHub', href: 'https://github.com/Ariel200609', icon: '💻' },
    { name: 'WhatsApp', href: 'https://wa.me/2923659973', icon: '📱' },
    { name: 'Email', href: 'mailto:arielmontoya@gmail.com', icon: '✉️' }
  ]

  return (
    <footer className="bg-gray-900/90 backdrop-blur-2xl text-white border-t border-white/10">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
                         className="lg:col-span-2 md:col-span-2"
          >
            <div className="flex items-center space-x-2 mb-6">
                             <div className="w-10 h-10 bg-gradient-to-br from-corporate-primary/80 to-corporate-light/80 backdrop-blur-xl rounded-lg overflow-hidden p-1 border border-white/20">
                                 <img 
                   src="byAriel.jpg" 
                   alt="byAriel Logo" 
                   className="w-full h-full object-cover rounded-lg"
                 />
              </div>
              <span className="text-2xl font-bold">byAriel</span>
            </div>
                         <p className="text-gray-400 mb-6 leading-relaxed">
               Construyendo el futuro digital. Soy un desarrollador apasionado 
               que crea soluciones web innovadoras y hermosas para empresas de todo el mundo.
             </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-gray-800 hover:bg-corporate-primary rounded-lg flex items-center justify-center text-white transition-all duration-300"
                >
                  <span className="text-sm font-semibold">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-6">Servicios</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-6">Recursos</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>



      {/* Bottom Footer */}
      <div className="border-t border-gray-800 py-8">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} byAriel. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              {footerLinks.legal.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
