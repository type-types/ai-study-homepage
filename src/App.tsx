import React from 'react'
import Hero from './components/Hero'
import Schedule from './components/Schedule'
import StudyGoals from './components/StudyGoals'
import ComparisonTable from './components/ComparisonTable'
import Timeline from './components/Timeline'
import TargetAudience from './components/TargetAudience'
import Benefits from './components/Benefits'
import InstructorProfile from './components/InstructorProfile'
import ApplicationForm from './components/ApplicationForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero />
      
      {/* Schedule Section */}
      <Schedule />
      
      {/* Study Goals Section */}
      <StudyGoals />
      
      {/* Comparison Table Section */}
      <ComparisonTable />
      
      {/* Timeline Section */}
      <Timeline />
      
      {/* Target Audience Section */}
      <TargetAudience />
      
      {/* Benefits Section */}
      <Benefits />
      
      {/* Instructor Profile Section */}
      <InstructorProfile />
      
      {/* Application Form Section */}
      <ApplicationForm />
      
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App 