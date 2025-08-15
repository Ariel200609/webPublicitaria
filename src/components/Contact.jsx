import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log('Form submitted:', formData)
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.')
    setFormData({ name: '', email: '', company: '', message: '' })
  }

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Ubicación',
      content: 'Bonifacio - Bahia Blanca, Argentina',
      color: 'from-corporate-primary to-corporate-deep'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      content: 'arielmontoya@gmail.com',
      color: 'from-corporate-secondary to-corporate-light'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'WhatsApp',
      content: '+54 9 2923-659973',
      color: 'from-corporate-light to-corporate-secondary'
    }
  ]

  return (
    <section id="contact" className="section-padding bg-white/20 backdrop-blur-2xl">
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
            ¿Listo para{' '}
            <span className="text-gradient">comenzar</span>?
          </h2>
                       <p className="text-xl text-gray-600 max-w-3xl mx-auto">
               Cuéntame sobre tu proyecto y te ayudaré a hacerlo realidad. 
               Estoy listo para convertir tus ideas en algo increíble.
             </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
                         className="bg-gray-50/30 backdrop-blur-3xl rounded-3xl p-8 lg:p-12 border border-white/50 shadow-2xl overflow-hidden"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Envíanos un mensaje
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre completo *
                  </label>
                                     <input
                     type="text"
                     id="name"
                     name="name"
                     value={formData.name}
                     onChange={handleChange}
                     required
                     className="w-full px-4 py-3 bg-white/20 backdrop-blur-xl border border-white/30 rounded-lg focus:ring-2 focus:ring-corporate-primary focus:border-corporate-primary/50 transition-all duration-300 placeholder-gray-500"
                     placeholder="Tu nombre"
                   />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                                     <input
                     type="email"
                     id="email"
                     name="email"
                     value={formData.email}
                     onChange={handleChange}
                     required
                     className="w-full px-4 py-3 bg-white/20 backdrop-blur-xl border border-white/30 rounded-lg focus:ring-2 focus:ring-corporate-primary focus:border-corporate-primary/50 transition-all duration-300 placeholder-gray-500"
                     placeholder="tu@email.com"
                   />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Empresa
                </label>
                                 <input
                   type="text"
                   id="company"
                   name="company"
                   value={formData.company}
                   onChange={handleChange}
                   className="w-full px-4 py-3 bg-white/20 backdrop-blur-xl border border-white/30 rounded-lg focus:ring-2 focus:ring-corporate-primary focus:border-corporate-primary/50 transition-all duration-300 placeholder-gray-500"
                   placeholder="Nombre de tu empresa"
                 />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje *
                </label>
                                 <textarea
                   id="message"
                   name="message"
                   value={formData.message}
                   onChange={handleChange}
                   required
                   rows={6}
                   className="w-full px-4 py-3 bg-white/20 backdrop-blur-xl border border-white/30 rounded-lg focus:ring-2 focus:ring-corporate-primary focus:border-corporate-primary/50 transition-all duration-300 resize-none placeholder-gray-500"
                   placeholder="Cuéntanos sobre tu proyecto..."
                 />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-corporate-primary/80 to-corporate-light/80 backdrop-blur-2xl border border-white/30 text-white font-semibold rounded-2xl shadow-2xl hover:shadow-corporate-primary/40 transition-all duration-300 text-lg"
              >
                Enviar mensaje
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Información de contacto
              </h3>
                           <p className="text-lg text-gray-600 leading-relaxed">
               Estoy aquí para ayudarte. No dudes en contactarme por cualquier 
               consulta sobre mis servicios o para discutir tu próximo proyecto.
             </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center text-white flex-shrink-0`}>
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {info.title}
                    </h4>
                    <p className="text-gray-600">
                      {info.content}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h4 className="font-semibold text-gray-900 mb-4">
                Síguenos en redes sociales
              </h4>
              <div className="flex space-x-4">
                {[
                  { name: 'Instagram', href: 'https://instagram.com/developerariel_', color: 'from-pink-500 to-pink-600', icon: '📷' },
                  { name: 'GitHub', href: 'https://github.com/Ariel200609', color: 'from-gray-700 to-gray-800', icon: '💻' },
                  { name: 'WhatsApp', href: 'https://wa.me/2923659973', color: 'from-green-500 to-green-600', icon: '📱' },
                  { name: 'Email', href: 'mailto:arielmontoya@gmail.com', color: 'from-blue-500 to-blue-600', icon: '✉️' }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${social.color} flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    <span className="text-lg">{social.icon}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
