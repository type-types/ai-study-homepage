import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaArrowRight, FaCheck, FaTimes } from 'react-icons/fa'

const ComparisonTable = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const comparisonData = [
    {
      category: "방식",
      old: "이론 중심, 논문/강의",
      new: "실습 중심, 실행 방법 학습",
      icon: "📚"
    },
    {
      category: "내용",
      old: "머신러닝 개념, 수식, 모델 학습",
      new: "AI 툴을 활용한 제품화 과정 전체",
      icon: "🔧"
    },
    {
      category: "결과물",
      old: "이해, 발표, 코드 실습",
      new: "어떻게 만들 수 있는지에 대한 감각과 자신감",
      icon: "🎯"
    },
    {
      category: "대상",
      old: "개발자, 연구자",
      new: "아이디어를 실현하고 싶은 모든 사람",
      icon: "👥"
    },
    {
      category: "분위기",
      old: "학문적, 이론 중심",
      new: "가볍고 실용적, 실제 적용 중심",
      icon: "🌟"
    },
    {
      category: "목표",
      old: "AI를 이해하는 것",
      new: "AI로 무언가를 만드는 방법을 익히는 것",
      icon: "🚀"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Section Title */}
          <motion.h2 className="section-title" variants={itemVariants}>
            🔍 기존 AI 스터디 vs. 개편된 AI 스터디
          </motion.h2>

          <motion.p
            className="text-center text-gray-600 mb-12 text-lg"
            variants={itemVariants}
          >
            기존은 AI의 기저를 파악하는데 공을 들였다면, 이젠 시중에 나와 있는 고급 AI 툴을 파악하는데 공을 드릴 예정입니다.
          </motion.p>

          {/* Comparison Table */}
          <motion.div
            className="bg-white rounded-xl shadow-lg overflow-hidden"
            variants={itemVariants}
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-gray-100 to-gray-50">
                    <th className="px-6 py-4 text-left text-lg font-bold text-gray-900">구분</th>
                    <th className="px-6 py-4 text-left text-lg font-bold text-gray-700">기존 AI 스터디</th>
                    <th className="px-6 py-4 text-center text-lg font-bold text-primary-600">→</th>
                    <th className="px-6 py-4 text-left text-lg font-bold text-primary-600">개편된 AI 스터디</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {comparisonData.map((item, index) => (
                    <motion.tr
                      key={item.category}
                      className="hover:bg-gray-50 transition-colors duration-300"
                      variants={itemVariants}
                      custom={index}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <span className="text-2xl mr-3">{item.icon}</span>
                          <span className="font-semibold text-gray-900">{item.category}</span>
                        </div>
                      </td>
                      <motion.td
                        className="px-6 py-4 text-gray-600"
                        variants={slideInLeft}
                      >
                        <div className="flex items-center">
                          <FaTimes className="text-red-400 mr-2 flex-shrink-0" />
                          <span>{item.old}</span>
                        </div>
                      </motion.td>
                      <td className="px-6 py-4 text-center">
                        <motion.div
                          animate={{ x: [0, 10, 0] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <FaArrowRight className="text-primary-500 text-xl" />
                        </motion.div>
                      </td>
                      <motion.td
                        className="px-6 py-4 text-primary-700 font-medium"
                        variants={slideInRight}
                      >
                        <div className="flex items-center">
                          <FaCheck className="text-green-500 mr-2 flex-shrink-0" />
                          <span>{item.new}</span>
                        </div>
                      </motion.td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Key Highlight */}
          <motion.div
            className="mt-12 bg-gradient-to-r from-primary-600 to-primary-800 text-white rounded-xl p-8 text-center"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold mb-4">🎯 핵심 차이점</h3>
            <p className="text-lg mb-4">
              <span className="font-semibold">기존:</span> AI를 이해하는 것
            </p>
            <div className="text-3xl my-4">↓</div>
            <p className="text-lg">
              <span className="font-semibold">개편:</span> AI로 무언가를 만드는 방법을 익히는 것
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ComparisonTable 