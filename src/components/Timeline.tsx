import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaUsers, FaLightbulb, FaCode, FaRocket, FaPlug, FaExclamationTriangle, FaCog, FaCloud, FaPen, FaTerminal } from 'react-icons/fa'

const Timeline = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const timelineData = [
    {
      phase: "1주차",
      title: "오리엔테이션 & 관심 파악",
      description: "참가자들이 어떤 것에 관심이 있는지 공유하고 파악하는 시간",
      details: [
        "앞으로 다룰 수 있는 주제 목록 소개",
        "내가 잘하는 것들 + 최신 AI 툴 트렌드 짧게 소개",
        "할 것은 '그냥 재미있게 듣기'",
        "원하는 주제는 자유롭게 제안 가능"
      ],
      icon: <FaUsers className="text-2xl" />,
      color: "from-primary-500 to-primary-700"
    },
    {
      phase: "2~8주차",
      title: "주제 채워나가기 세션",
      description: "매주 하나씩, 관심 주제를 중심으로 세션 구성",
      details: [
        "내가 잘하는 분야 + 참여자 요청을 조합해서 진행",
        "매 세션마다 최신 AI 툴 사례나 실습 짧게 포함",
        "부담 없이 듣고, 내가 만들 수 있겠다는 감각 얻기",
        "정해진 커리큘럼이 아닌 함께 만들어가는 세션"
      ],
      icon: <FaLightbulb className="text-2xl" />,
      color: "from-accent-500 to-accent-700"
    }
  ]

  const exampleTopics = [
    {
      title: "OpenAI API 활용",
      description: "OpenAI API를 활용하여 뭔가 만들어보기",
      icon: <FaCode className="text-xl" />
    },
    {
      title: "멀티모달 AI 체험",
      description: "DALL·E나 TTS 등 멀티모달 AI 도구 체험",
      icon: <FaLightbulb className="text-xl" />
    },
    {
      title: "Cursor AI 코딩",
      description: "Cursor 툴에 대한 이해 및 AI 코딩 이해 및 실습",
      icon: <FaRocket className="text-xl" />
    },
    {
      title: "MCP 서버 연결",
      description: "각종 MCP 서버 연결해보기 (Context7, Figma talk to MCP 등)",
      icon: <FaPlug className="text-xl" />
    },
    {
      title: "바이브 코딩의 위험성",
      description: "바이브 코딩의 위험성 이해 (바이브 코딩은 위험헤!)",
      icon: <FaExclamationTriangle className="text-xl" />
    },
    {
      title: "Cursor 규칙 설정",
      description: "Cursor 규칙 설정 개념 이해하기",
      icon: <FaCog className="text-xl" />
    },
    {
      title: "Palentir API 활용",
      description: "Palentir API를 활용하여 뭔가 만들어보기",
      icon: <FaCode className="text-xl" />
    },
    {
      title: "Vercel 웹사이트 배포",
      description: "Vercel로 웹사이트 배포하기",
      icon: <FaCloud className="text-xl" />
    },
    {
      title: "Relume 화면 기획",
      description: "Relume으로 빠르게 화면 기획하기",
      icon: <FaPen className="text-xl" />
    },
    {
      title: "Gemini CLI",
      description: "터미널 기반 오픈소스 AI 에이전트로 설치 및 실습. Gemini 2.5 Pro 모델 활용 가능(1M 토큰 컨텍스트, 분당 60 요청, 일일 1000 요청 무료). 코드 작성, 디버그, 멀티모달 작업, Google Search 연동, MCP 기반 자동화 실험",
      icon: <FaTerminal className="text-xl" />
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const topicVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
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
            📚 8회차 동안 정확히 뭐해요?
          </motion.h2>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 w-1 h-full bg-gradient-to-b from-primary-200 to-accent-200 rounded-full"></div>
            
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                className="relative flex items-start mb-16 pl-20"
                variants={itemVariants}
              >
                {/* Timeline Node */}
                <div className="absolute left-2 top-6 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center border-4 border-primary-200 z-10">
                  <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-white`}>
                    {item.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <motion.div
                    className="bg-white rounded-xl p-6 shadow-lg border-2 border-gray-100 card-hover"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${item.color}`}>
                        {item.phase}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {item.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <span className="text-primary-500 mr-2 mt-1">•</span>
                          <span className="text-gray-700 text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Example Topics */}
          <motion.div
            className="mt-16 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-8"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
              📌 흥미로운 예시 주제들
            </h3>
            
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
              variants={containerVariants}
            >
              {exampleTopics.map((topic, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg p-4 shadow-md card-hover group"
                  variants={topicVariants}
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-primary-200 transition-colors duration-300">
                      <div className="text-primary-600 group-hover:text-primary-700 transition-colors duration-300">
                        {topic.icon}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-primary-700 transition-colors duration-300">
                        {topic.title}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {topic.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Timeline 