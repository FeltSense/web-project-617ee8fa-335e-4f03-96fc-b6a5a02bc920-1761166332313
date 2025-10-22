'use client'

import React, { useState } from 'react'

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <main className="min-h-screen bg-white">
      
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
          "Catalyst Creative Studio transformed our brand identity completely. Their strategic approach to our rebranding campaign resulted in a 240% increase in brand awareness within just three months."
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
          "The team at Catalyst Creative Studio doesn't just create campaigns—they create movements. Our social media engagement skyrocketed by 380% and we finally connected with our target audience authentically."
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
          "Working with Catalyst Creative Studio was a game-changer for our Q4 launch. Their creative vision and data-driven strategies helped us exceed our sales targets by 165%. Absolutely phenomenal work!"
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
          "Catalyst Creative Studio brought fresh perspective to our traditional financial services brand. Their innovative content strategy helped us reach millennials and Gen Z, expanding our customer base by 45%."
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
          "The ROI we've seen from our partnership with Catalyst Creative Studio is incredible. Their email marketing campaigns alone generated a 320% increase in conversions. They truly understand our audience."
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
          "As a startup, we needed to make every marketing dollar count. Catalyst Creative Studio delivered exceptional results on a lean budget. Their strategic guidance helped us secure Series A funding!"
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
            const monthly = document.getElementById('monthly-price');
            const annual = document.getElementById('annual-price');
            const badge = document.getElementById('save-badge');
            if (e.target.checked) {
              monthly.classList.add('hidden');
              annual.classList.remove('hidden');
              badge.classList.remove('hidden');
            } else {
              monthly.classList.remove('hidden');
              annual.classList.add('hidden');
              badge.classList.add('hidden');
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
      <h2 className="text-5xl font-bold text-white mb-4">Let's Create Something Amazing</h2>
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
        {/* Step 1: Contact Information */}
        <div className={`transition-all duration-500 ${currentStep === 1 ? 'block' : 'hidden'}`}>
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">👋 Nice to meet you!</h3>
              <p className="text-purple-200">Let's start with the basics</p>
            </div>
            
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                placeholder="John Doe"
                required
              />
              {errors.name && <p className="mt-1 text-sm text-red-300">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                placeholder="john@company.com"
                required
              />
              {errors.email && <p className="mt-1 text-sm text-red-300">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                placeholder="+1 (555) 123-4567"
                required
              />
              {errors.phone && <p className="mt-1 text-sm text-red-300">{errors.phone}</p>}
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                placeholder="Your Company"
              />
            </div>
          </div>
        </div>

        {/* Step 2: Project Details */}
        <div className={`transition-all duration-500 ${currentStep === 2 ? 'block' : 'hidden'}`}>
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">🎯 Tell us about your vision</h3>
              <p className="text-purple-200">What brings you to Catalyst Creative Studio?</p>
            </div>

            <div>
              <label htmlFor="serviceType" className="block text-sm font-medium text-white mb-2">
                Service Type *
              </label>
              <select
                id="serviceType"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                required
              >
                <option value="" className="bg-purple-900">Select a service</option>
                <option value="brand-strategy" className="bg-purple-900">Brand Strategy</option>
                <option value="digital-marketing" className="bg-purple-900">Digital Marketing</option>
                <option value="content-creation" className="bg-purple-900">Content Creation</option>
                <option value="social-media" className="bg-purple-900">Social Media Management</option>
                <option value="seo-sem" className="bg-purple-900">SEO & SEM</option>
                <option value="web-design" className="bg-purple-900">Web Design</option>
                <option value="video-production" className="bg-purple-900">Video Production</option>
                <option value="other" className="bg-purple-900">Other</option>
              </select>
              {errors.serviceType && <p className="mt-1 text-sm text-red-300">{errors.serviceType}</p>}
            </div>

            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-white mb-2">
                Project Budget *
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                required
              >
                <option value="" className="bg-purple-900">Select your budget range</option>
                <option value="5k-10k" className="bg-purple-900">$5,000 - $10,000</option>
                <option value="10k-25k" className="bg-purple-900">$10,000 - $25,000</option>
                <option value="25k-50k" className="bg-purple-900">$25,000 - $50,000</option>
                <option value="50k-100k" className="bg-purple-900">$50,000 - $100,000</option>
                <option value="100k+" className="bg-purple-900">$100,000+</option>
              </select>
              {errors.budget && <p className="mt-1 text-sm text-red-300">{errors.budget}</p>}
            </div>

            <div>
              <label htmlFor="timeline" className="block text-sm font-medium text-white mb-2">
                Desired Timeline *
              </label>
              <select
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                required
              >
                <option value="" className="bg-purple-900">When do you need this?</option>
                <option value="asap" className="bg-purple-900">ASAP (Within 1 month)</option>
                <option value="1-3-months" className="bg-purple-900">1-3 months</option>
                <option value="3-6-months" className="bg-purple-900">3-6 months</option>
                <option value="6-12-months" className="bg-purple-900">6-12 months</option>
                <option value="flexible" className="bg-purple-900">Flexible</option>
              </select>
              {errors.timeline && <p className="mt-1 text-sm text-red-300">{errors.timeline}</p>}
            </div>
          </div>
        </div>

        {/* Step 3: Project Description */}
        <div className={`transition-all duration-500 ${currentStep === 3 ? 'block' : 'hidden'}`}>
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">🚀 Let's make it happen!</h3>
              <p className="text-purple-200">Share your project details with us</p>
            </div>

            <div>
              <label htmlFor="projectDescription" className="block text-sm font-medium text-white mb-2">
                Project Description *
              </label>
              <textarea
                id="projectDescription"
                name="projectDescription"
                value={formData.projectDescription}
                onChange={handleInputChange}
                rows="6"
                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all resize-none"
                placeholder="Tell us about your goals, target audience, and what success looks like for you..."
                required
              ></textarea>
              {errors.projectDescription && <p className="mt-1 text-sm text-red-300">{errors.projectDescription}</p>}
            </div>

            <div>
              <label htmlFor="hearAboutUs" className="block text-sm font-medium text-white mb-2">
                How did you hear about Catalyst Creative Studio?
              </label>
              <select
                id="hearAboutUs"
                name="hearAboutUs"
                value={formData.hearAboutUs}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
              >
                <option value="" className="bg-purple-900">Select an option</option>
                <option value="google" className="bg-purple-900">Google Search</option>
                <option value="social-media" className="bg-purple-900">Social Media</option>
                <option value="referral" className="bg-purple-900">Referral</option>
                <option value="advertisement" className="bg-purple-900">Advertisement</option>
                <option value="event" className="bg-purple-900">Event/Conference</option>
                <option value="other" className="bg-purple-900">Other</option>
              </select>
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                id="newsletter"
                name="newsletter"
                checked={formData.newsletter}
                onChange={handleInputChange}
                className="mt-1 w-4 h-4 text-yellow-400 bg-white/10 border-white/30 rounded focus:ring-yellow-400 focus:ring-2"
              />
              <label htmlFor="newsletter" className="ml-3 text-sm text-white">
                Yes, I'd like to receive marketing insights and updates from Catalyst Creative Studio
              </label>
            </div>
          </div>
        </div>

        {/* Success Message */}
        {submitStatus === 'success' && (
          <div className="bg-green-500/20 border border-green-400 rounded-xl p-6 text-center">
            <div className="text-5xl mb-3">🎉</div>
            <h4 className="text-2xl font-bold text-white mb-2">Thank You!</h4>
            <p className="text-green-100">
              Your message has been received! Our team at Catalyst Creative Studio will reach out within 24 hours to discuss your project.
            </p>
          </div>
        )}

        {/* Error Message */}
        {submitStatus === 'error' && (
          <div className="bg-red-500/20 border border-red-400 rounded-xl p-6 text-center">
            <div className="text-4xl mb-3">⚠️</div>
            <h4 className="text-xl font-bold text-white mb-2">Oops! Something went wrong</h4>
            <p className="text-red-100 mb-4">{errorMessage}</p>
            <button
              type="button"
              onClick={() => setSubmitStatus('idle')}
              className="text-yellow-400 hover:text-yellow-300 underline"
            >
              Try again
            </button>
          </div>
        )}

        {/* Navigation Buttons */}
        {submitStatus === 'idle' && (
          <div className="flex justify-between items-center pt-6">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={handlePrevious}
                className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-300 border border-white/30"
              >
                ← Previous
              </button>
            ) : (
              <div></div>
            )}

            {currentStep < 3 ? (
              <button
                type="button"
                onClick={handleNext}
                className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-purple-900 font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Next Step →
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-purple-900 font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-purple-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  '🚀 Launch Your Project'
                )}
              </button>
            )}
          </div>
        )}
      </form>
    </div>

    {/* Trust Indicators */}
    <div className="mt-12 text-center">
      <p className="text-purple-200 text-sm mb-4">Trusted by 500+ brands worldwide</p>
      <div className="flex justify-center items-center space-x-8 text-white/40">
        <span className="text-xs">🔒 Secure & Confidential</span>
        <span className="text-xs">⚡ 24hr Response Time</span>
        <span className="text-xs">✨ Free Consultation</span>
      </div>
    </div>
  </div>

  <style jsx>{`
    @keyframes blob {
      0% { transform: translate(0px, 0px) scale(1); }
      33% { transform: translate(30px, -50px) scale(1.1); }
      66% { transform: translate(-20px, 20px) scale(0.9); }
      100% { transform: translate(0px, 0px) scale(1); }
    }
    .animate-blob {
      animation: blob 7s infinite;
    }
    .animation-delay-2000 {
      animation-delay: 2s;
    }
    .animation-delay-4000 {
      animation-delay: 4s;
    }
  `}</style>
</section>

<script dangerouslySetInnerHTML={{__html: `
  (function() {
    const [currentStep, setCurrentStep] = React.useState(1);
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [submitStatus, setSubmitStatus] = React.useState('idle');
    const [errorMessage, setErrorMessage] = React.useState('');
    const [formData, setFormData] = React.useState({
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
    });
    const [errors, setErrors] = React.useState({});

    const handleInputChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
      if (errors[name]) {
        setErrors(prev => ({ ...prev, [name]: '' }));
      }
    };

    const validateStep = (step) => {
      const newErrors = {};
      
      if (step === 1) {
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
          newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          newErrors.email = 'Please enter a valid email';
        }
        if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
      }
      
      if (step === 2) {
        if (!formData.serviceType) newErrors.serviceType = 'Please select a service type';
        if (!formData.budget) newErrors.budget = 'Please select a budget range';
        if (!formData.timeline) newErrors.timeline = 'Please select a timeline';
      }
      
      if (step === 3) {
        if (!formData.projectDescription.trim()) {
          newErrors.projectDescription = 'Project description is required';
        } else if (formData.projectDescription.trim().length < 20) {
          newErrors.projectDescription = 'Please provide more details (at least 20 characters)';
        }
      }
      
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
      if (validateStep(currentStep)) {
        setCurrentStep(prev => Math.min(prev + 1, 3));
      }
    };

    const handlePrevious = () => {
      setCurrentStep(prev => Math.max(prev - 1, 1));
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      
      if (!validateStep(3)) return;
      
      setIsSubmitting(true);
      setSubmitStatus('idle');
      
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
        });

        if (!response.ok) {
          throw new Error('Failed to submit form');
        }

        setSubmitStatus('success');
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
        });
        setCurrentStep(1);
      } catch (error) {
        console.error('Form submission error:', error);
        setSubmitStatus('error');
        setErrorMessage('Unable to submit your form. Please try again or contact us directly at hello@catalystcreative.studio');
      } finally {
        setIsSubmitting(false);
      }
    };

    window.contactFormHandlers = {
      currentStep,
      setCurrentStep,
      isSubmitting,
      submitStatus,
      setSubmitStatus,
      errorMessage,
      formData,
      errors,
      handleInputChange,
      handleNext,
      handlePrevious,
      handleSubmit
    };
  })();
`}} />
      
      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-6">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
      {/* Brand */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-yellow-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-lg">C</span>
        </div>
        <span className="font-bold text-xl">Catalyst Creative Studio</span>
      </div>

      {/* Contact Info */}
      <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
        <a href="mailto:hello@catalystcreative.com" className="flex items-center gap-2 hover:text-pink-400 transition-colors">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
          </svg>
          hello@catalystcreative.com
        </a>
        <a href="tel:+15551234567" className="flex items-center gap-2 hover:text-pink-400 transition-colors">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
          </svg>
          (555) 123-4567
        </a>
      </div>

      {/* Social Links */}
      <div className="flex items-center gap-4">
        <a href="https://facebook.com" className="hover:text-pink-400 transition-colors" aria-label="Facebook">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </a>
        <a href="https://instagram.com" className="hover:text-pink-400 transition-colors" aria-label="Instagram">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>
        <a href="https://linkedin.com" className="hover:text-pink-400 transition-colors" aria-label="LinkedIn">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        <a href="https://twitter.com" className="hover:text-pink-400 transition-colors" aria-label="Twitter">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
          </svg>
        </a>
      </div>

      {/* Copyright */}
      <div className="text-sm text-gray-300">
        © {new Date().getFullYear()} Catalyst Creative Studio. All rights reserved.
      </div>
    </div>
  </div>
</footer>
    </main>
  )
}