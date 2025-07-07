import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaRocket, FaCode, FaBrain, FaArrowDown } from 'react-icons/fa'

const Hero = () => {
  const [typedText, setTypedText] = useState('')
  const fullText = 'AI 스터디 참가자 모집'
  
  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 150)
    
    return () => clearInterval(timer)
  }, [])

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  }

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-accent-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-secondary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-2000"></div>
      </div>

      {/* Floating Icons */}
      <motion.div
        className="absolute top-20 left-10 text-primary-400 opacity-20"
        animate={{ y: [-20, 20, -20], rotate: [0, 360, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <FaRocket size={40} />
      </motion.div>
      
      <motion.div
        className="absolute top-32 right-16 text-accent-400 opacity-20"
        animate={{ y: [20, -20, 20], rotate: [0, -360, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <FaCode size={35} />
      </motion.div>
      
      <motion.div
        className="absolute bottom-32 left-20 text-secondary-400 opacity-20"
        animate={{ y: [-15, 15, -15], rotate: [0, 180, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <FaBrain size={45} />
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        {/* Main Title with Typing Effect */}
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6"
          variants={fadeInUp}
        >
          <span className="gradient-text">
            {typedText}
            <span className="animate-pulse">|</span>
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-xl sm:text-2xl lg:text-3xl text-gray-700 mb-8 font-medium"
          variants={fadeInUp}
        >
          실전 AI 툴 활용법을 배우고 <br className="sm:hidden" />
          <span className="text-primary-600 font-bold">나만의 포트폴리오</span>를 만들어보세요
        </motion.p>

        {/* Key Points */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          variants={fadeInUp}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
            <span className="text-primary-600 font-semibold">📅 매주 수요일 22:00</span>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
            <span className="text-primary-600 font-semibold">🎯 총 8주간</span>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
            <span className="text-primary-600 font-semibold">💻 온라인 진행</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          variants={fadeInUp}
        >
          <motion.button
            className="btn-primary text-lg px-8 py-4 relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://forms.gle/vTTv1X5gmv2sKzSZ9', '_blank')}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10">지금 신청하기</span>
          </motion.button>
          
          <motion.button
            className="btn-secondary text-lg px-8 py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const nextSection = document.querySelector('section:nth-of-type(2)')
              if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          >
            자세히 보기
          </motion.button>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div
          className="flex justify-center mt-12"
          variants={fadeInUp}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              const nextSection = document.querySelector('section:nth-of-type(2)')
              if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          >
            <div className="relative w-12 h-12 bg-primary-400/20 rounded-full flex items-center justify-center hover:bg-primary-400/30 transition-colors duration-300">
              <FaArrowDown className="text-primary-400 text-xl" />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero 