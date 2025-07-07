import React from 'react'
import { motion } from 'framer-motion'
import { FaRocket, FaInstagram, FaYoutube, FaHeart } from 'react-icons/fa'

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <footer className="bg-gradient-to-br from-secondary-800 via-secondary-900 to-primary-900 text-white">
      {/* Main Footer Content */}
      <motion.div
        className="section-padding"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="container-max">
          {/* AI 스터디 섹션 - 중앙 배치 */}
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <div className="flex items-center justify-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full flex items-center justify-center mr-3">
                <FaRocket className="text-white text-xl" />
              </div>
              <h3 className="text-2xl font-bold">AI 스터디</h3>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
              실전 AI 툴 활용법을 배우고 나만의 포트폴리오를 만들어보세요. 
              함께 성장하는 8주간의 여정이 기다리고 있습니다.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center space-x-8 py-6 border-t border-gray-700"
            variants={itemVariants}
          >
            <motion.a
              href="https://instagram.com/type_types"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-300 hover:text-white transition-colors duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaInstagram className="text-2xl mr-2" style={{ color: '#E4405F' }} />
              <span className="text-lg group-hover:text-white transition-colors duration-300">@type_types</span>
            </motion.a>
            
            <motion.a
              href="https://youtube.com/@type_types"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-300 hover:text-white transition-colors duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaYoutube className="text-2xl mr-2" style={{ color: '#FF0000' }} />
              <span className="text-lg group-hover:text-white transition-colors duration-300">@type_types</span>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-700 bg-gray-900/50">
        <div className="container-max">
          <div className="py-6 text-center">
            <motion.p
              className="text-gray-400 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              © 2025 AI 스터디. All rights reserved. Made with{' '}
              <motion.span
                className="text-red-500 inline-block"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
              >
                <FaHeart />
              </motion.span>
              {' '}for learners.
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 