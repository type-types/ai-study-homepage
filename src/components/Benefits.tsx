import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGift, FaCode, FaRocket, FaGlobe, FaLightbulb, FaTools } from 'react-icons/fa'

const Benefits = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const benefits = [
    {
      icon: <FaCode className="text-3xl" />,
      title: "Cursor 중점 개발 방식",
      description: "AI 기반 코딩 툴을 활용한 효율적인 개발 방법을 익히고 실제 프로젝트에 적용해보세요",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: <FaRocket className="text-3xl" />,
      title: "기획부터 배포까지",
      description: "아이디어 구상부터 프로토타입 제작, 실제 배포까지 전체 과정을 직접 경험해보세요",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: <FaGlobe className="text-3xl" />,
      title: "나만의 웹사이트/도구",
      description: "실제로 작동하는 웹사이트나 도구를 만들어 포트폴리오로 활용할 수 있습니다",
      color: "from-green-500 to-teal-600"
    },
    {
      icon: <FaLightbulb className="text-3xl" />,
      title: "실행 자신감과 방향 감각",
      description: "스스로 제품을 만들 수 있는 자신감과 어떤 방향으로 나아가야 할지 감각을 기르세요",
      color: "from-yellow-500 to-orange-600"
    },
    {
      icon: <FaTools className="text-3xl" />,
      title: "최신 AI 툴 이해",
      description: "시중에 있는 최신 AI 툴들이 무엇인지, 어떻게 활용할 수 있는지 완전히 이해하게 됩니다",
      color: "from-indigo-500 to-blue-600"
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
            🎁 무엇을 얻어갈 수 있나?
          </motion.h2>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="group"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-gray-100 h-full card-hover relative overflow-hidden">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  {/* Icon */}
                  <div className="relative z-10 mb-4">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${benefit.color} flex items-center justify-center text-white shadow-lg mx-auto group-hover:scale-110 transition-transform duration-300`}>
                      {benefit.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-primary-700 transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Main Benefit Highlight */}
          <motion.div
            className="bg-gradient-to-r from-primary-600 to-primary-800 text-white rounded-xl p-8 text-center shadow-lg"
            variants={itemVariants}
          >
            <div className="flex items-center justify-center mb-6">
              <FaGift className="text-4xl mr-4" />
              <h3 className="text-3xl font-bold">핵심 혜택</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-xl font-semibold mb-4">🎯 실전 경험</h4>
                <p className="text-lg leading-relaxed">
                  단순히 이론을 배우는 것이 아니라, 실제로 무언가를 만들고 배포하는 
                  <strong className="text-yellow-300"> 완전한 경험</strong>을 얻게 됩니다.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-4">💡 방향 감각</h4>
                <p className="text-lg leading-relaxed">
                  앞으로 어떤 프로젝트를 진행하든 
                  <strong className="text-yellow-300"> 어디서부터 시작해야 할지</strong> 
                  명확한 방향을 잡을 수 있는 감각을 기르게 됩니다.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="mt-16 grid md:grid-cols-3 gap-8 text-center"
            variants={containerVariants}
          >
            <motion.div
              className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6"
              variants={itemVariants}
            >
              <div className="text-3xl font-bold text-primary-600 mb-2">8주</div>
              <div className="text-gray-700">체계적인 학습 기간</div>
            </motion.div>
            
            <motion.div
              className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-6"
              variants={itemVariants}
            >
              <div className="text-3xl font-bold text-green-600 mb-2">1:1</div>
              <div className="text-gray-700">개인 맞춤형 피드백</div>
            </motion.div>
            
            <motion.div
              className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6"
              variants={itemVariants}
            >
              <div className="text-3xl font-bold text-purple-600 mb-2">∞</div>
              <div className="text-gray-700">무제한 질문 & 지원</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Benefits 