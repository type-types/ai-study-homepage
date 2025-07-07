import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaPaperPlane, FaUser, FaEnvelope, FaPhone, FaGraduationCap, FaLightbulb } from 'react-icons/fa'

const ApplicationForm = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    background: '',
    motivation: '',
    experience: '',
    interests: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    alert('신청이 완료되었습니다! 곧 연락드리겠습니다.')
    setIsSubmitting(false)
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      background: '',
      motivation: '',
      experience: '',
      interests: ''
    })
  }

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
            📝 지금 신청하세요!
          </motion.h2>

          <motion.p
            className="text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto"
            variants={itemVariants}
          >
            AI 스터디에 참여하고 싶으신가요? 아래 양식을 작성해 주세요. 
            <br />
            <span className="text-primary-600 font-semibold">선착순 모집</span>이므로 서둘러 신청해주세요!
          </motion.p>

          {/* Application Form */}
          <motion.div
            className="max-w-4xl mx-auto"
            variants={itemVariants}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Name Field */}
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <FaUser className="inline mr-2 text-primary-600" />
                    이름 *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="이름을 입력해주세요"
                  />
                </motion.div>

                {/* Email Field */}
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <FaEnvelope className="inline mr-2 text-primary-600" />
                    이메일 *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="이메일을 입력해주세요"
                  />
                </motion.div>

                {/* Phone Field */}
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <FaPhone className="inline mr-2 text-primary-600" />
                    연락처
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="연락처를 입력해주세요"
                  />
                </motion.div>

                {/* Background Field */}
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <FaGraduationCap className="inline mr-2 text-primary-600" />
                    배경 *
                  </label>
                  <select
                    name="background"
                    value={formData.background}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">선택해주세요</option>
                    <option value="student">학생</option>
                    <option value="developer">개발자</option>
                    <option value="designer">디자이너</option>
                    <option value="entrepreneur">창업자</option>
                    <option value="professional">직장인</option>
                    <option value="other">기타</option>
                  </select>
                </motion.div>
              </div>

              {/* Motivation Field */}
              <motion.div className="mb-6" variants={itemVariants}>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <FaLightbulb className="inline mr-2 text-primary-600" />
                  참여 동기 *
                </label>
                <textarea
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="이 스터디에 참여하고 싶은 이유를 알려주세요"
                />
              </motion.div>

              {/* Experience Field */}
              <motion.div className="mb-6" variants={itemVariants}>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  AI/개발 경험
                </label>
                <textarea
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="AI나 개발 관련 경험이 있다면 간단히 적어주세요 (없어도 괜찮습니다)"
                />
              </motion.div>

              {/* Interests Field */}
              <motion.div className="mb-8" variants={itemVariants}>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  관심 주제
                </label>
                <textarea
                  name="interests"
                  value={formData.interests}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="스터디에서 다루고 싶은 주제나 만들고 싶은 것이 있다면 적어주세요"
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div
                className="text-center"
                variants={itemVariants}
              >
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn-primary text-lg px-12 py-4 relative overflow-hidden ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                  whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                >
                  <span className="flex items-center justify-center">
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        신청 중...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="mr-2" />
                        신청하기
                      </>
                    )}
                  </span>
                </motion.button>
              </motion.div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="mt-12 text-center"
            variants={itemVariants}
          >
            <div className="bg-white rounded-xl p-6 shadow-lg inline-block">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">문의사항이 있으신가요?</h3>
              <p className="text-gray-600">
                언제든지 연락해주세요! 빠른 답변을 드리겠습니다.
              </p>
              <div className="mt-4 text-primary-600 font-semibold">
                📧 study@example.com | 📞 010-1234-5678
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ApplicationForm 