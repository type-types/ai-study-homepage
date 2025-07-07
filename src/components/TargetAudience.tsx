import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCheckCircle, FaUser, FaLightbulb, FaCode, FaRocket } from 'react-icons/fa'

const TargetAudience = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const targetAudience = [
    {
      text: "혼자 아이디어는 많은데 실행이 어려운 사람",
      icon: <FaLightbulb className="text-2xl" />,
      color: "from-yellow-400 to-orange-500"
    },
    {
      text: "제품을 만들고 싶은데 코딩/기획 둘 다 애매한 사람",
      icon: <FaCode className="text-2xl" />,
      color: "from-blue-400 to-purple-500"
    },
    {
      text: "GPT나 다양한 AI 툴을 써보고 싶지만 막막한 사람",
      icon: <FaRocket className="text-2xl" />,
      color: "from-green-400 to-blue-500"
    },
    {
      text: "빠르게 만들고 배포하는 감각을 실전으로 익히고 싶은 사람",
      icon: <FaUser className="text-2xl" />,
      color: "from-pink-400 to-red-500"
    },
    {
      text: "만들고 싶은 건 있는데, 어디서부터 시작할지 막막한 사람",
      icon: <FaLightbulb className="text-2xl" />,
      color: "from-indigo-400 to-purple-500"
    },
    {
      text: "GPT나 AI 툴을 써보고 싶지만 실전에 적용해본 적 없는 사람",
      icon: <FaCode className="text-2xl" />,
      color: "from-teal-400 to-blue-500"
    },
    {
      text: "기획은 할 줄 아는데, 혼자 구현/배포는 어려운 사람",
      icon: <FaRocket className="text-2xl" />,
      color: "from-purple-400 to-pink-500"
    },
    {
      text: "아이디어를 빠르게 실현하고 싶은 초기 창업자/개발자/디자이너",
      icon: <FaUser className="text-2xl" />,
      color: "from-orange-400 to-red-500"
    },
    {
      text: "재미있게 듣고, 가볍게 배우고, 실전 감각까지 얻고 싶은 사람",
      icon: <FaCheckCircle className="text-2xl" />,
      color: "from-green-400 to-teal-500"
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
            🧑‍💻 이런 사람에게 추천해요
          </motion.h2>

          {/* Target Audience Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {targetAudience.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg card-hover group relative overflow-hidden"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className="relative z-10 flex items-center justify-center w-16 h-16 mx-auto mb-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-white shadow-lg`}>
                    {item.icon}
                  </div>
                </div>

                {/* Text */}
                <div className="relative z-10">
                  <p className="text-gray-700 text-center leading-relaxed font-medium">
                    {item.text}
                  </p>
                </div>

                {/* Check Icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FaCheckCircle className="text-green-500 text-xl" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            className="mt-16 text-center"
            variants={itemVariants}
          >
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-primary-100">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                🎯 이 중 하나라도 해당되신다면?
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                이 스터디가 바로 여러분을 위한 것입니다!
              </p>
              <motion.button
                className="btn-primary text-lg px-8 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                지금 바로 신청하기 🚀
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default TargetAudience 