'use client'

import React, { useState } from 'react'

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceType: '',
    budget: '',
    timeline: '',
    projectDescription: '',
    hearAboutUs: '',
    newsletter: false
  })
  const [errors, setErrors] = useState({})

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateStep = (step) => {
    const newErrors = {}
    
    if (step === 1) {
      if (!formData.name.trim()) newErrors.name = 'Name is required'
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required'
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email'
      }
      if (!formData.phone.trim()) newErrors.phone = 'Phone is required'
    }
    
    if (step === 2) {
      if (!formData.serviceType) newErrors.serviceType = 'Please select a service type'
      if (!formData.budget) newErrors.budget = 'Please select a budget range'
      if (!formData.timeline) newErrors.timeline = 'Please select a timeline'
    }
    
    if (step === 3) {
      if (!formData.projectDescription.trim()) {
        newErrors.projectDescription = 'Project description is required'
      } else if (formData.projectDescription.trim().length < 20) {
        newErrors.projectDescription = 'Please provide more details (at least 20 characters)'
      }
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 3))
    }
  }

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateStep(3)) return
    
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      const response = await fetch('https://deep-api-server-2moiw.kinsta.app/api/form-submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          company: formData.company || 'Catalyst Creative Studio',
          formType: 'Multi-Step Contact Form',
          submittedAt: new Date().toISOString()
        })
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        serviceType: '',
        budget: '',
        timeline: '',
        projectDescription: '',
        hearAboutUs: '',
        newsletter: false
      })
      setCurrentStep(1)
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      setErrorMessage('Unable to submit your form. Please try again or contact us directly at hello@catalystcreative.studio')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/60 via-black/40 to-transparent backdrop-blur-sm">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-20">
      {/* Logo */}
      <div className="flex items-center space-x-3 group">
        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <span className="text-white font-bold text-xl tracking-tight">
          Catalyst <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Creative Studio</span>
        </span>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-1">
        <a href="#home" className="text-white hover:text-purple-300 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-white/10">
          Home
        </a>
        <a href="#services" className="text-white hover:text-purple-300 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-white/10">
          Services
        </a>
        <a href="#about" className="text-white hover:text-purple-300 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-white/10">
          About
        </a>
        <a href="#pricing" className="text-white hover:text-purple-300 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-white/10">
          Pricing
        </a>
        <a href="#contact" className="ml-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105">
          Contact
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </div>

  {/* Mobile Menu */}
  <div className="md:hidden hidden bg-black/80 backdrop-blur-md border-t border-white/10">
    <div className="px-4 py-4 space-y-2">
      <a href="#home" className="block text-white hover:text-purple-300 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-white/10">
        Home
      </a>
      <a href="#services" className="block text-white hover:text-purple-300 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-white/10">
        Services
      </a>
      <a href="#about" className="block text-white hover:text-purple-300 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-white/10">
        About
      </a>
      <a href="#pricing" className="block text-white hover:text-purple-300 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-white/10">
        Pricing
      </a>
      <a href="#contact" className="block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-3 rounded-lg text-sm font-semibold text-center hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300">
        Contact
      </a>
    </div>
  </div>
</nav>
      
      {/* Hero Section */}
      <div className="relative min-h-screen bg-white overflow-hidden flex items-center justify-center px-6 py-20">
  {/* Subtle background accent */}
  <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-orange-50 to-transparent opacity-40 blur-3xl"></div>
  <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-amber-50 to-transparent opacity-30 blur-3xl"></div>
  
  {/* Main content container */}
  <div className="relative max-w-7xl mx-auto text-center">
    {/* Small eyebrow text */}
    <div className="mb-8">
      <span className="inline-block text-sm font-medium tracking-[0.3em] uppercase text-orange-600 bg-orange-50 px-6 py-2 rounded-full">
        Catalyst Creative Studio
      </span>
    </div>
    
    {/* HUGE typography focus */}
    <h1 className="text-[clamp(3rem,15vw,12rem)] font-black leading-[0.9] tracking-tighter mb-8">
      <span className="block text-gray-900">Ideas</span>
      <span className="block bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600 bg-clip-text text-transparent">Ignited</span>
    </h1>
    
    {/* Minimal description */}
    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
      We transform bold visions into breakthrough campaigns that captivate audiences and accelerate growth
    </p>
    
    {/* CTA buttons */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <button className="group relative px-8 py-4 bg-gray-900 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
        <span className="relative z-10">Start Your Project</span>
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </button>
      
      <button className="px-8 py-4 text-gray-900 font-semibold rounded-full border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300">
        View Our Work
      </button>
    </div>
    
    {/* Minimal stats or trust indicators */}
    <div className="mt-20 flex flex-wrap justify-center gap-12 text-center">
      <div>
        <div className="text-4xl font-bold text-gray-900">200+</div>
        <div className="text-sm text-gray-500 mt-1">Brands Ignited</div>
      </div>
      <div>
        <div className="text-4xl font-bold text-gray-900">$50M+</div>
        <div className="text-sm text-gray-500 mt-1">Revenue Generated</div>
      </div>
      <div>
        <div className="text-4xl font-bold text-gray-900">98%</div>
        <div className="text-sm text-gray-500 mt-1">Client Retention</div>
      </div>
    </div>
  </div>
  
  {/* Decorative minimal element */}
  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-gray-300 to-transparent"></div>
</div>
      
      {/* Services Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 py-24 overflow-hidden">
  {/* Background Pattern */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute inset-0" style={{
      backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
      backgroundSize: '40px 40px'
    }}></div>
  </div>

  <div className="container mx-auto px-4 relative z-10">
    {/* Section Header */}
    <div className="text-center mb-16">
      <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
        Catalyst Creative Studio <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-400">Services</span>
      </h2>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto">
        Award-winning creative work with a proven track record. Strategic thinking meets exceptional design.
      </p>
    </div>

    {/* Carousel Slider Container */}
    <div className="relative max-w-7xl mx-auto">
      {/* Carousel Track */}
      <div className="overflow-hidden rounded-3xl">
        <div className="flex gap-8 animate-[scroll_40s_linear_infinite] hover:[animation-play-state:paused]">
          {/* Service Card 1 - Branding & Identity */}
          <div className="min-w-[380px] bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center mb-6 transform hover:rotate-12 transition-transform">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Branding & Identity</h3>
            <p className="text-gray-300 mb-6">Full-service branding capabilities from concept to execution. We create memorable identities that resonate with your audience and drive results.</p>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-pink-400 rounded-full"></span>
                Logo & Visual Identity
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-pink-400 rounded-full"></span>
                Brand Strategy & Guidelines
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-pink-400 rounded-full"></span>
                Collaborative Process
              </li>
            </ul>
          </div>

          {/* Service Card 2 - Digital Marketing */}
          <div className="min-w-[380px] bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 transform hover:rotate-12 transition-transform">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Digital Marketing</h3>
            <p className="text-gray-300 mb-6">Results-driven digital strategies with measurable outcomes. Fast turnaround without compromising quality for diverse client portfolios.</p>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                Social Media Campaigns
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                SEO & Content Strategy
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                Performance Analytics
              </li>
            </ul>
          </div>

          {/* Service Card 3 - Creative Content */}
          <div className="min-w-[380px] bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 transform hover:rotate-12 transition-transform">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Creative Content</h3>
            <p className="text-gray-300 mb-6">Award-winning content creation by experienced specialists. Strategic thinking combined with exceptional design across all platforms.</p>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                Video Production & Motion
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                Photography & Art Direction
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                Copywriting & Storytelling
              </li>
            </ul>
          </div>

          {/* Service Card 4 - Web & Digital Design */}
          <div className="min-w-[380px] bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 transform hover:rotate-12 transition-transform">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Web & Digital Design</h3>
            <p className="text-gray-300 mb-6">Transparent, collaborative process delivering cutting-edge digital experiences. Proven track record with diverse client success stories.</p>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span>
                Website Design & Development
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span>
                UI/UX & User Experience
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span>
                E-commerce Solutions
              </li>
            </ul>
          </div>

          {/* Duplicate cards for seamless loop */}
          <div className="min-w-[380px] bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center mb-6 transform hover:rotate-12 transition-transform">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Branding & Identity</h3>
            <p className="text-gray-300 mb-6">Full-service branding capabilities from concept to execution. We create memorable identities that resonate with your audience and drive results.</p>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-pink-400 rounded-full"></span>
                Logo & Visual Identity
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-pink-400 rounded-full"></span>
                Brand Strategy & Guidelines
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-pink-400 rounded-full"></span>
                Collaborative Process
              </li>
            </ul>
          </div>

          <div className="min-w-[380px] bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 transform hover:rotate-12 transition-transform">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Digital Marketing</h3>
            <p className="text-gray-300 mb-6">Results-driven digital strategies with measurable outcomes. Fast turnaround without compromising quality for diverse client portfolios.</p>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                Social Media Campaigns
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                SEO & Content Strategy
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                Performance Analytics
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Gradient Overlays for Fade Effect */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-purple-900 to-transparent pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-blue-900 to-transparent pointer-events-none"></div>
    </div>

    {/* Bottom CTA */}
    <div className="text-center mt-16">
      <p className="text-gray-300 mb-6">Trusted by industry leaders. Let Catalyst Creative Studio elevate your brand.</p>
      <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-pink-500/50 transform hover:scale-105 transition-all duration-300">
        Start Your Project
      </button>
    </div>
  </div>

  <style jsx>{`
    @keyframes scroll {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(calc(-380px * 4 - 2rem * 4));
      }
    }
  `}</style>
</section>
      
      {/* Testimonials Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-pink-50 py-24 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold text-gray-900 mb-4">
        What Our Clients Say
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Trusted by leading brands to deliver exceptional marketing results
      </p>
    </div>

    {/* 3x2 Grid Layout */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Testimonial 1 */}
      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-purple-100 hover:-translate-y-2">
        <div className="flex items-center mb-6">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
            alt="Sarah Mitchell"
            className="w-16 h-16 rounded-full object-cover border-4 border-purple-200"
          />
          <div className="ml-4">
            <h3 className="font-bold text-gray-900 text-lg">Sarah Mitchell</h3>
            <p className="text-purple-600 text-sm">CMO, TechVision Inc.</p>
          </div>
        </div>
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}
        </div>
        <p className="text-gray-700 leading-relaxed">
          &quot;Catalyst Creative Studio transformed our brand identity completely. Their strategic approach to our rebranding campaign resulted in a 240% increase in brand awareness within just three months.&quot;
        </p>
      </div>

      {/* Testimonial 2 */}
      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-pink-100 hover:-translate-y-2">
        <div className="flex items-center mb-6">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop"
            alt="Marcus Rodriguez"
            className="w-16 h-16 rounded-full object-cover border-4 border-pink-200"
          />
          <div className="ml-4">
            <h3 className="font-bold text-gray-900 text-lg">Marcus Rodriguez</h3>
            <p className="text-pink-600 text-sm">Founder, GreenLeaf Organics</p>
          </div>
        </div>
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}
        </div>
        <p className="text-gray-700 leading-relaxed">
          &quot;The team at Catalyst Creative Studio doesn&apos;t just create campaigns—they create movements. Our social media engagement skyrocketed by 380% and we finally connected with our target audience authentically.&quot;
        </p>
      </div>

      {/* Testimonial 3 */}
      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-purple-100 hover:-translate-y-2">
        <div className="flex items-center mb-6">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
            alt="Emily Chen"
            className="w-16 h-16 rounded-full object-cover border-4 border-purple-200"
          />
          <div className="ml-4">
            <h3 className="font-bold text-gray-900 text-lg">Emily Chen</h3>
            <p className="text-purple-600 text-sm">VP Marketing, Luxe Fashion</p>
          </div>
        </div>
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}
        </div>
        <p className="text-gray-700 leading-relaxed">
          &quot;Working with Catalyst Creative Studio was a game-changer for our Q4 launch. Their creative vision and data-driven strategies helped us exceed our sales targets by 165%. Absolutely phenomenal work!&quot;
        </p>
      </div>

      {/* Testimonial 4 */}
      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-pink-100 hover:-translate-y-2">
        <div className="flex items-center mb-6">
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop"
            alt="David Thompson"
            className="w-16 h-16 rounded-full object-cover border-4 border-pink-200"
          />
          <div className="ml-4">
            <h3 className="font-bold text-gray-900 text-lg">David Thompson</h3>
            <p className="text-pink-600 text-sm">CEO, Horizon Financial</p>
          </div>
        </div>
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}
        </div>
        <p className="text-gray-700 leading-relaxed">
          &quot;Catalyst Creative Studio brought fresh perspective to our traditional financial services brand. Their innovative content strategy helped us reach millennials and Gen Z, expanding our customer base by 45%.&quot;
        </p>
      </div>

      {/* Testimonial 5 */}
      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-purple-100 hover:-translate-y-2">
        <div className="flex items-center mb-6">
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop"
            alt="Jessica Park"
            className="w-16 h-16 rounded-full object-cover border-4 border-purple-200"
          />
          <div className="ml-4">
            <h3 className="font-bold text-gray-900 text-lg">Jessica Park</h3>
            <p className="text-purple-600 text-sm">Director, Wellness Hub</p>
          </div>
        </div>
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}
        </div>
        <p className="text-gray-700 leading-relaxed">
          &quot;The ROI we&apos;ve seen from our partnership with Catalyst Creative Studio is incredible. Their email marketing campaigns alone generated a 320% increase in conversions. They truly understand our audience.&quot;
        </p>
      </div>

      {/* Testimonial 6 */}
      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-pink-100 hover:-translate-y-2">
        <div className="flex items-center mb-6">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
            alt="Ryan Foster"
            className="w-16 h-16 rounded-full object-cover border-4 border-pink-200"
          />
          <div className="ml-4">
            <h3 className="font-bold text-gray-900 text-lg">Ryan Foster</h3>
            <p className="text-pink-600 text-sm">Co-Founder, StartupLab</p>
          </div>
        </div>
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}
        </div>
        <p className="text-gray-700 leading-relaxed">
          &quot;As a startup, we needed to make every marketing dollar count. Catalyst Creative Studio delivered exceptional results on a lean budget. Their strategic guidance helped us secure Series A funding!&quot;
        </p>
      </div>
    </div>
  </div>
</section>
      
      {/* Pricing Section - Stripe Integration */}
      <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 py-24 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-5xl font-extrabold text-white mb-4">
        Catalyst Creative Studio Pricing
      </h2>
      <p className="text-xl text-purple-200 max-w-2xl mx-auto">
        Elevate your brand with our comprehensive marketing solutions
      </p>
    </div>

    {/* Toggle Switch */}
    <div className="flex items-center justify-center mb-12">
      <span className="text-lg font-semibold text-purple-200 mr-4">Monthly</span>
      <div className="relative">
        <input
          type="checkbox"
          id="billing-toggle"
          className="sr-only peer"
          onChange={(e) => {
            const monthly = document.getElementById('monthly-price')
            const annual = document.getElementById('annual-price')
            const badge = document.getElementById('save-badge')
            if (e.target.checked) {
              monthly.classList.add('hidden')
              annual.classList.remove('hidden')
              badge.classList.remove('hidden')
            } else {
              monthly.classList.remove('hidden')
              annual.classList.add('hidden')
              badge.classList.add('hidden')
            }
          }}
        />
        <label
          htmlFor="billing-toggle"
          className="flex items-center cursor-pointer w-16 h-8 bg-purple-700 rounded-full p-1 transition-all duration-300 peer-checked:bg-green-500"
        >
          <div className="w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 peer-checked:translate-x-8"></div>
        </label>
      </div>
      <span className="text-lg font-semibold text-purple-200 ml-4">Annual</span>
      <span id="save-badge" className="hidden ml-3 px-3 py-1 bg-green-500 text-white text-sm font-bold rounded-full animate-pulse">
        Save 20%
      </span>
    </div>

    {/* Pricing Card */}
    <div className="max-w-lg mx-auto">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300 border-4 border-purple-400">
        {/* Popular Badge */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center py-3 font-bold text-sm uppercase tracking-wider">
          ⭐ Most Popular for Marketing Agencies
        </div>

        <div className="p-8">
          {/* Plan Name */}
          <h3 className="text-3xl font-bold text-gray-900 mb-2 text-center">
            Creative Pro Plan
          </h3>
          <p className="text-gray-600 text-center mb-6">
            Everything you need to dominate your market
          </p>

          {/* Pricing */}
          <div className="text-center mb-8">
            <div id="monthly-price">
              <div className="flex items-center justify-center">
                <span className="text-5xl font-extrabold text-gray-900">$79</span>
                <span className="text-xl text-gray-600 ml-2">/month</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">Billed monthly</p>
            </div>
            <div id="annual-price" className="hidden">
              <div className="flex items-center justify-center">
                <span className="text-5xl font-extrabold text-gray-900">$63</span>
                <span className="text-xl text-gray-600 ml-2">/month</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Billed annually at $756 
                <span className="text-green-600 font-semibold ml-1">(Save $192!)</span>
              </p>
            </div>
          </div>

          {/* Features */}
          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700 font-medium">Unlimited brand strategy consultations</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700 font-medium">Custom social media content calendar</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700 font-medium">Professional graphic design assets</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700 font-medium">Advanced analytics & performance reports</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700 font-medium">Priority email & chat support</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700 font-medium">Campaign optimization & A/B testing</span>
            </li>
          </ul>

          {/* CTA Button */}
          <button
            onClick={() => window.location.href = 'https://buy.stripe.com/test_5kQ7sN0IX2Pqalc8WP0VO00'}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 px-8 rounded-xl hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
          >
            Start Growing with Catalyst Creative Studio
          </button>

          {/* Trust Indicators */}
          <div className="mt-6 flex items-center justify-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">Secure SSL</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-blue-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">Stripe Protected</span>
            </div>
          </div>

          <p className="text-center text-xs text-gray-500 mt-4">
            Cancel anytime. No hidden fees. Powered by Catalyst Creative Studio.
          </p>
        </div>
      </div>
    </div>

    {/* Additional Trust Section */}
    <div className="mt-12 text-center">
      <p className="text-purple-200 text-sm">
        🔒 Your payment information is secure and encrypted
      </p>
    </div>
  </div>
</div>
      
      {/* Contact Form - Supabase Integration */}
      <section className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 py-20 px-4 relative overflow-hidden">
  {/* Animated Background Elements */}
  <div className="absolute inset-0 opacity-20">
    <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
    <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
    <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
  </div>

  <div className="max-w-4xl mx-auto relative z-10">
    {/* Header */}
    <div className="text-center mb-12">
      <h2 className="text-5xl font-bold text-white mb-4">Let&apos;s Create Something Amazing</h2>
      <p className="text-xl text-purple-200">Tell us about your project in 3 simple steps</p>
    </div>

    {/* Multi-Step Form */}
    <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
              currentStep >= 1 ? 'bg-yellow-400 text-purple-900' : 'bg-white/20 text-white'
            }`}>
              1
            </div>
            <span className={`text-sm font-medium ${currentStep >= 1 ? 'text-yellow-400' : 'text-white/60'}`}>
              Your Info
            </span>
          </div>
          <div className={`flex-1 h-1 mx-4 rounded-full transition-all duration-300 ${
            currentStep >= 2 ? 'bg-yellow-400' : 'bg-white/20'
          }`}></div>
          <div className="flex items-center space-x-2">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
              currentStep >= 2 ? 'bg-yellow-400 text-purple-900' : 'bg-white/20 text-white'
            }`}>
              2
            </div>
            <span className={`text-sm font-medium ${currentStep >= 2 ? 'text-yellow-400' : 'text-white/60'}`}>
              Project Details
            </span>
          </div>
          <div className={`flex-1 h-1 mx-4 rounded-full transition-all duration-300 ${
            currentStep >= 3 ? 'bg-yellow-400' : 'bg-white/20'
          }`}></div>
          <div className="flex items-center space-x-2">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
              currentStep >= 3 ? 'bg-yellow-400 text-purple-900' : 'bg-white/20 text-white'
            }`}>
              3
            </div>
            <span className={`text-sm font-medium ${currentStep >= 3 ? 'text-yellow-400' : 'text-white/60'}`}>
              Launch
            </span>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">