import React from 'react'
import { motion } from 'framer-motion'
import { FaRocket, FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa'

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
          {/* Top Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Logo & Description */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full flex items-center justify-center mr-3">
                  <FaRocket className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-bold">AI 스터디</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                실전 AI 툴 활용법을 배우고 나만의 포트폴리오를 만들어보세요. 
                함께 성장하는 8주간의 여정이 기다리고 있습니다.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold mb-4">빠른 링크</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#schedule" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">
                    📅 일정 확인
                  </a>
                </li>
                <li>
                  <a href="#goals" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">
                    🎯 스터디 목표
                  </a>
                </li>
                <li>
                  <a href="#benefits" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">
                    🎁 얻을 수 있는 것
                  </a>
                </li>
                <li>
                  <a href="#instructor" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">
                    🧩 스터디장 소개
                  </a>
                </li>
                <li>
                  <a href="#application" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">
                    📝 신청하기
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold mb-4">연락처</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <FaEnvelope className="text-primary-400 mr-3" />
                  <span className="text-gray-300">study@example.com</span>
                </div>
                <div className="flex items-center">
                  <FaPhone className="text-primary-400 mr-3" />
                  <span className="text-gray-300">010-1234-5678</span>
                </div>
                <div className="mt-4">
                  <p className="text-gray-300 text-sm">
                    언제든지 문의해주세요!<br />
                    빠른 시간 내에 답변드리겠습니다.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            className="text-center py-8 border-t border-gray-700"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold mb-4">🚀 지금 시작하세요!</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              AI의 힘을 활용해 당신의 아이디어를 현실로 만들어보세요. 
              8주 후, 완전히 다른 자신을 발견하게 될 것입니다.
            </p>
            <motion.button
              className="btn-primary text-lg px-8 py-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaRocket className="mr-2" />
              지금 신청하기
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center space-x-6 py-6 border-t border-gray-700"
            variants={itemVariants}
          >
            <motion.a
              href="#"
              className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-gray-300 hover:bg-primary-600 hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub className="text-xl" />
            </motion.a>
            <motion.a
              href="#"
              className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-gray-300 hover:bg-primary-600 hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin className="text-xl" />
            </motion.a>
            <motion.a
              href="#"
              className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-gray-300 hover:bg-primary-600 hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaEnvelope className="text-xl" />
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