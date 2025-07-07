import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaClock, FaCalendarAlt, FaDiscord } from 'react-icons/fa'

const Schedule = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const scheduleData = [
    { week: '1회차', date: '7/9 (수)', content: '오리엔테이션 + 관심 주제 파악 + Cursor 개발환경 소개' },
    { week: '2회차', date: '7/16 (수)', content: 'TBD (1회차 이후 결정)' },
    { week: '3회차', date: '7/23 (수)', content: 'TBD' },
    { week: '4회차', date: '7/30 (수)', content: 'TBD' },
    { week: '5회차', date: '8/6 (수)', content: 'TBD' },
    { week: '6회차', date: '8/13 (수)', content: 'TBD' },
    { week: '7회차', date: '8/20 (수)', content: 'TBD' },
    { week: '8회차', date: '8/27 (수)', content: 'TBD' },
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
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
            ⏰ 시간 & 일정
          </motion.h2>

          {/* Key Info Cards */}
          <motion.div
            className="grid md:grid-cols-3 gap-6 mb-12"
            variants={containerVariants}
          >
            <motion.div
              className="bg-white rounded-xl p-6 shadow-lg card-hover"
              variants={itemVariants}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4 mx-auto">
                <FaClock className="text-primary-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-center mb-2">매주 수요일</h3>
              <p className="text-gray-600 text-center">저녁 22:00 ~ 23:00<br />(1시간)</p>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl p-6 shadow-lg card-hover"
              variants={itemVariants}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-accent-100 rounded-full mb-4 mx-auto">
                <FaCalendarAlt className="text-accent-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-center mb-2">총 8주간</h3>
              <p className="text-gray-600 text-center">2025년 7월 9일 ~<br />8월 27일</p>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl p-6 shadow-lg card-hover"
              variants={itemVariants}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-secondary-100 rounded-full mb-4 mx-auto">
                <FaDiscord className="text-secondary-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-center mb-2">온라인 디스코드</h3>
              <p className="text-gray-600 text-center">편리한 온라인<br />세션 진행</p>
            </motion.div>
          </motion.div>

          {/* Requirements Section */}
          <motion.div
            className="mb-12"
            variants={itemVariants}
          >
            <motion.div
              className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-8 border-2 border-orange-200"
              variants={itemVariants}
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-orange-800 mb-2">💳 참여 요구사항</h3>
                <p className="text-orange-700">스터디 참여를 위해 아래 사항이 필요합니다</p>
              </div>
              
              <div className="max-w-2xl mx-auto">
                <div className="bg-white rounded-lg p-6 shadow-md border border-orange-200">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                        <span className="text-orange-600 font-bold text-lg">C</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Cursor Pro 구독 필수</h4>
                      <div className="space-y-2 text-gray-700">
                        <p>• <span className="font-semibold">월 구독료:</span> $20/월 (현 환율 기준 약 28,000원)</p>
                        <p>• <span className="font-semibold">고급 함수 호출:</span> 별도 비용 (사용량에 비례 청구, 예: 월 8,000~16,000원 구독료 외 추가 결제)</p>
                        <p className="text-sm text-orange-600 mt-3">
                          ⚠️ <span className="font-semibold">중요:</span> 스터디에서 사용하는 AI 코딩 기능들을 실습하기 위해 Cursor Pro 구독이 반드시 필요합니다.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Schedule Table */}
          <motion.div
            className="bg-white rounded-xl shadow-lg overflow-hidden"
            variants={itemVariants}
          >
            <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white p-4">
              <h3 className="text-2xl font-bold text-center">📅 세부 일정표</h3>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">회차</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">날짜</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">내용</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {scheduleData.map((item, index) => (
                    <motion.tr
                      key={item.week}
                      className="hover:bg-gray-50 transition-colors duration-200"
                      variants={itemVariants}
                      custom={index}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                            <span className="text-primary-600 font-bold text-sm">{index + 1}</span>
                          </div>
                          <span className="text-sm font-medium text-gray-900">{item.week}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {item.date}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {item.content}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-yellow-700">
                    <span className="font-medium">📌 주의:</span> 참여자들의 관심 주제와 제안에 따라 매주 주제를 정해 진행합니다. 정해진 커리큘럼이 아니라, 함께 만들어가는 열린 세션입니다.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Schedule 