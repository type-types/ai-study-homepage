import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaAward, FaMobile, FaRocket, FaUsers, FaCode, FaLightbulb } from 'react-icons/fa'

const InstructorProfile = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const capabilities = [
    {
      icon: <FaLightbulb className="text-2xl" />,
      title: "제품 기획",
      description: "GPT, 노션, 피그마를 이용한 간단한 제품 기획",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <FaCode className="text-2xl" />,
      title: "AI 개발",
      description: "Cursor를 이용한 각종 제품 개발",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: <FaUsers className="text-2xl" />,
      title: "팀 운영",
      description: "현재 앱 개발 팀에서 기획/운영 담당",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <FaMobile className="text-2xl" />,
      title: "앱 배포",
      description: "구글 플레이스토어, 앱스토어 앱 배포 경험",
      color: "from-pink-500 to-red-500"
    },
    {
      icon: <FaRocket className="text-2xl" />,
      title: "웹 배포",
      description: "Vercel/GitHub로 완성된 제품 배포",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: <FaAward className="text-2xl" />,
      title: "코칭",
      description: "기획서/페이지 피드백 및 구조화 코칭",
      color: "from-purple-500 to-pink-500"
    }
  ]

  const achievements = [
    {
      title: "2025 ICT 아이디어 사업화 선정",
      description: "앱 개발을 통해 사업화 프로그램 선정",
      year: "2025"
    },
    {
      title: "창업 관련 대회 3곳 진행 중",
      description: "소셜벤처, U300, 2025 아이디어 사업화",
      year: "진행중"
    },
    {
      title: "정기 세션 운영 경험",
      description: "매주 세션 형태로 팀 운영 및 진행",
      year: "현재"
    }
  ]

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="section-padding bg-gradient-to-br from-secondary-50 to-primary-50">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Section Title */}
          <motion.h2 className="section-title" variants={itemVariants}>
            🧩 스터디장 역량
          </motion.h2>

          {/* Introduction */}
          <motion.div
            className="bg-white rounded-xl p-8 shadow-lg mb-12 text-center"
            variants={itemVariants}
          >
            <div className="w-24 h-24 bg-gradient-to-r from-primary-600 to-primary-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaUsers className="text-white text-3xl" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">실전 경험을 바탕으로 한 안내</h3>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              현재 앱 개발 팀에서 기획/운영을 맡고 있으며, 매주 세션 느낌으로 진행하고 있어서 
              이번 스터디도 비슷한 느낌으로 진행하고자 합니다.
            </p>
          </motion.div>

          {/* Capabilities Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg card-hover group relative overflow-hidden"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${capability.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className="relative z-10 mb-4">
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${capability.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {capability.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-primary-700 transition-colors duration-300">
                    {capability.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Achievements Section */}
          <motion.div
            className="bg-white rounded-xl p-8 shadow-lg mb-12"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">🏆 주요 성과</h3>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="flex items-center p-4 bg-gradient-to-r from-gray-50 to-primary-50 rounded-lg"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {achievement.year}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{achievement.title}</h4>
                    <p className="text-gray-600 text-sm">{achievement.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Key Message */}
          <motion.div
            className="bg-gradient-to-r from-primary-600 to-primary-800 text-white rounded-xl p-8 text-center"
            variants={itemVariants}
          >
            <FaLightbulb className="text-4xl mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">무엇보다 중요한 것</h3>
            <p className="text-lg leading-relaxed max-w-2xl mx-auto">
              <strong className="text-yellow-300">혼자 만드는 데서 생기는 막막함을 줄이는 방향 제시</strong>
              <br />
              "무엇을 만들어야 하는가?"에 대한 답을 함께 찾아갑니다.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default InstructorProfile 