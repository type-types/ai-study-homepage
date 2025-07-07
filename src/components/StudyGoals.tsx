import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaBullseye, FaTools, FaCogs, FaRocket } from 'react-icons/fa'

const StudyGoals = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const goals = [
    {
      icon: <FaTools className="text-3xl" />,
      title: "최신 AI 툴 이해",
      description: "시중에 나와있는 AI 툴들이 무엇이 있고 어떻게 쓸 수 있는지 이해하기"
    },
    {
      icon: <FaBullseye className="text-3xl" />,
      title: "구체화 감각 기르기",
      description: "원하는 제품을 어떻게 구체화하고 만들면 되는지 '방향을 잡는 감각' 갖기"
    },
    {
      icon: <FaCogs className="text-3xl" />,
      title: "OpenAI API 활용",
      description: "OpenAI API에 대한 이해 및 활용하여 실제 제품 만들기"
    },
    {
      icon: <FaRocket className="text-3xl" />,
      title: "포트폴리오 배포",
      description: "본인의 포트폴리오 사이트를 실제로 배포하기"
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
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Section Title */}
          <motion.h2 className="section-title" variants={itemVariants}>
            🎯 뭐하는 거에요?
          </motion.h2>

          {/* Main Goal */}
          <motion.div
            className="bg-gradient-to-r from-primary-600 to-primary-800 text-white rounded-xl p-8 mb-12 text-center"
            variants={itemVariants}
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              🎯 AI 활용 스터디의 가장 큰 목표
            </h3>
            <p className="text-xl sm:text-2xl font-medium">
              시중에 나와있는 AI 툴을 활용하는 법을 익혀보자
            </p>
          </motion.div>

          {/* Four Goals */}
          <motion.div
            className="grid md:grid-cols-2 gap-6 mb-12"
            variants={containerVariants}
          >
            {goals.map((goal, index) => (
              <motion.div
                key={index}
                className="bg-white border-2 border-gray-100 rounded-xl p-6 shadow-lg card-hover group"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-full mr-4 group-hover:bg-primary-200 transition-colors duration-300">
                    <div className="text-primary-600">
                      {goal.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {goal.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {goal.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Quote Box */}
          <motion.div
            className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-400 rounded-r-xl p-6 shadow-lg"
            variants={itemVariants}
          >
            <blockquote className="text-lg text-gray-700 italic text-center">
              <p className="mb-4">
                "AI 활용 스터디는 <span className="font-bold text-primary-600">무언가를 만드는 스터디가 아니라</span>, 
                <br className="hidden sm:block" />
                <span className="font-bold text-primary-600">'무언가를 만드는 방법을 배우는 스터디'</span> 입니다."
              </p>
              <p className="text-primary-600 font-semibold">
                가치를 창출하는 데 가치를 두실 수 있도록 길잡이가 되어드릴게요!
              </p>
            </blockquote>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default StudyGoals 