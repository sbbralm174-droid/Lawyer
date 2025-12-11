'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Award, 
  Calendar, 
  ChevronLeft, 
  ChevronRight, 
  Filter, 
  Quote, 
  Search, 
  Star, 
  ThumbsUp,
  User,
  Video,
  Play,
  Pause
} from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Estate Planning Client',
    company: 'Johnson Family Trust',
    rating: 5,
    content: 'James handled our family trust with exceptional care and attention to detail. He made complex legal concepts easy to understand and provided peace of mind during a difficult time. His guidance was invaluable.',
    date: 'March 2024',
    category: 'Estate Planning',
    verified: true,
    video: false,
    avatar: '/images/testimonials/sarah-johnson.jpg',
    caseDetails: 'Multi-generational estate planning with complex asset distribution',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Business Owner',
    company: 'Tech Innovations Inc.',
    rating: 5,
    content: 'The team at Mason Legal helped us navigate a complex partnership dispute. Their strategic approach saved our business and secured a favorable settlement. Professional, responsive, and highly effective.',
    date: 'January 2024',
    category: 'Business Litigation',
    verified: true,
    video: true,
    avatar: '/images/testimonials/michael-chen.jpg',
    caseDetails: 'Partnership dissolution with $12M asset division',
  },
  {
    id: 3,
    name: 'Robert Williams',
    role: 'Family Law Client',
    company: 'Personal',
    rating: 5,
    content: 'During my divorce proceedings, James provided not only expert legal guidance but also emotional support. His dedication to achieving the best outcome for my children was remarkable. I can\'t recommend him enough.',
    date: 'December 2023',
    category: 'Family Law',
    verified: true,
    video: false,
    avatar: '/images/testimonials/robert-williams.jpg',
    caseDetails: 'High-asset divorce with child custody considerations',
  },
  {
    id: 4,
    name: 'Jessica Martinez',
    role: 'Real Estate Client',
    company: 'Commercial Property Developer',
    rating: 5,
    content: 'Exceptional service in our property acquisition. The attention to detail and proactive communication ensured a smooth transaction. Highly recommended for any real estate legal needs.',
    date: 'November 2023',
    category: 'Real Estate',
    verified: true,
    video: true,
    avatar: '/images/testimonials/jessica-martinez.jpg',
    caseDetails: '$25M commercial development contract negotiation',
  },
  {
    id: 5,
    name: 'David Park',
    role: 'Criminal Defense Client',
    company: 'Personal',
    rating: 5,
    content: 'When I faced serious charges, the Mason Legal team fought tirelessly for my rights. Their expertise and dedication resulted in charges being dismissed. They gave me my life back.',
    date: 'October 2023',
    category: 'Criminal Defense',
    verified: true,
    video: false,
    avatar: '/images/testimonials/david-park.jpg',
    caseDetails: 'Federal criminal defense with successful dismissal',
  },
  {
    id: 6,
    name: 'Amanda Wilson',
    role: 'Employment Law Client',
    company: 'Former Corporate Executive',
    rating: 5,
    content: 'I was wrongfully terminated after 15 years of service. Sarah Chen took my case and secured a settlement that exceeded my expectations. Professional, compassionate, and relentless.',
    date: 'September 2023',
    category: 'Employment Law',
    verified: true,
    video: false,
    avatar: '/images/testimonials/amanda-wilson.jpg',
    caseDetails: 'Wrongful termination with substantial settlement',
  },
  {
    id: 7,
    name: 'Thomas Reed',
    role: 'Personal Injury Client',
    company: 'Accident Victim',
    rating: 5,
    content: 'After a serious accident left me unable to work, James secured a settlement that ensures my family\'s financial future. The entire team showed genuine care throughout the process.',
    date: 'August 2023',
    category: 'Personal Injury',
    verified: true,
    video: true,
    avatar: '/images/testimonials/thomas-reed.jpg',
    caseDetails: 'Catastrophic injury case with $8.5M settlement',
  },
  {
    id: 8,
    name: 'Lisa Thompson',
    role: 'Intellectual Property Client',
    company: 'Startup Founder',
    rating: 5,
    content: 'Sarah helped us protect our innovative technology with comprehensive IP strategy. Her expertise saved us from potential infringement issues and positioned us for successful funding rounds.',
    date: 'July 2023',
    category: 'Intellectual Property',
    verified: true,
    video: false,
    avatar: '/images/testimonials/lisa-thompson.jpg',
    caseDetails: 'Patent portfolio development for tech startup',
  },
  {
    id: 9,
    name: 'Brian Miller',
    role: 'Business Law Client',
    company: 'Small Business Owner',
    rating: 5,
    content: 'From contract review to partnership agreements, Mason Legal has been our trusted legal partner for years. They understand small business challenges and provide practical, cost-effective solutions.',
    date: 'June 2023',
    category: 'Business Law',
    verified: true,
    video: false,
    avatar: '/images/testimonials/brian-miller.jpg',
    caseDetails: 'Ongoing corporate counsel and contract management',
  },
  {
    id: 10,
    name: 'Olivia Garcia',
    role: 'Family Law Client',
    company: 'Personal',
    rating: 5,
    content: 'The mediation process with Mason Legal transformed what could have been a contentious divorce into an amicable separation. Their skill in conflict resolution is exceptional.',
    date: 'May 2023',
    category: 'Family Law',
    verified: true,
    video: true,
    avatar: '/images/testimonials/olivia-garcia.jpg',
    caseDetails: 'Mediation-based divorce with successful co-parenting plan',
  },
  {
    id: 11,
    name: 'Kevin Roberts',
    role: 'Real Estate Investor',
    company: 'Roberts Properties',
    rating: 5,
    content: 'We\'ve worked with Mason Legal on multiple real estate transactions. Their due diligence and negotiation skills consistently deliver superior results. A true asset to our team.',
    date: 'April 2023',
    category: 'Real Estate',
    verified: true,
    video: false,
    avatar: '/images/testimonials/kevin-roberts.jpg',
    caseDetails: 'Portfolio of commercial real estate acquisitions',
  },
  {
    id: 12,
    name: 'Rachel Kim',
    role: 'Estate Administration Client',
    company: 'Personal',
    rating: 5,
    content: 'Handling my father\'s estate was overwhelming, but James guided us through probate with compassion and expertise. He made a difficult process manageable and fair for all siblings.',
    date: 'March 2023',
    category: 'Estate Planning',
    verified: true,
    video: false,
    avatar: '/images/testimonials/rachel-kim.jpg',
    caseDetails: 'Complex probate administration with multiple heirs',
  },
]

const categories = [
  { name: 'All Reviews', count: testimonials.length, value: 'all' },
  { name: 'Family Law', count: testimonials.filter(t => t.category === 'Family Law').length, value: 'Family Law' },
  { name: 'Business Law', count: testimonials.filter(t => t.category === 'Business Law' || t.category === 'Business Litigation').length, value: 'Business' },
  { name: 'Estate Planning', count: testimonials.filter(t => t.category === 'Estate Planning').length, value: 'Estate Planning' },
  { name: 'Real Estate', count: testimonials.filter(t => t.category === 'Real Estate').length, value: 'Real Estate' },
  { name: 'Criminal Defense', count: testimonials.filter(t => t.category === 'Criminal Defense').length, value: 'Criminal Defense' },
  { name: 'Employment Law', count: testimonials.filter(t => t.category === 'Employment Law').length, value: 'Employment Law' },
  { name: 'Personal Injury', count: testimonials.filter(t => t.category === 'Personal Injury').length, value: 'Personal Injury' },
  { name: 'Intellectual Property', count: testimonials.filter(t => t.category === 'Intellectual Property').length, value: 'Intellectual Property' },
]

const stats = [
  { label: 'Average Rating', value: '5.0', icon: Star },
  { label: 'Total Reviews', value: testimonials.length, icon: ThumbsUp },
  { label: 'Client Satisfaction', value: '98%', icon: Award },
  { label: 'Video Testimonials', value: testimonials.filter(t => t.video).length, icon: Video },
]

export default function TestimonialsPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [autoplay, setAutoplay] = useState(true)
  const [currentVideo, setCurrentVideo] = useState(null)

  const itemsPerPage = 6

  // Filter testimonials
  const filteredTestimonials = testimonials.filter(testimonial => {
    const matchesCategory = activeCategory === 'all' || 
      (activeCategory === 'Business' ? 
        (testimonial.category === 'Business Law' || testimonial.category === 'Business Litigation') : 
        testimonial.category === activeCategory)
    
    const matchesSearch = searchQuery === '' || 
      testimonial.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      testimonial.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      testimonial.category.toLowerCase().includes(searchQuery.toLowerCase())

    return matchesCategory && matchesSearch
  })

  // Pagination
  const totalPages = Math.ceil(filteredTestimonials.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedTestimonials = filteredTestimonials.slice(startIndex, startIndex + itemsPerPage)

  const handlePageChange = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const renderStars = (rating) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
          />
        ))}
      </div>
    )
  }

  const openVideoModal = (testimonialId) => {
    setCurrentVideo(testimonialId)
    setAutoplay(false)
  }

  const closeVideoModal = () => {
    setCurrentVideo(null)
  }

  return (
    <div className="min-h-screen">
      {/* Video Modal */}
      {currentVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={closeVideoModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300"
            >
              Close
            </button>
            <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <Play className="w-16 h-16 mx-auto mb-4" />
                <p>Video testimonial would play here</p>
                <p className="text-sm text-gray-400 mt-2">Video integration placeholder</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-white to-accent/5 py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Quote className="w-5 h-5" />
              <span className="font-semibold">Client Experiences</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-neutral-dark mb-6">
              Client <span className="text-primary">Success Stories</span>
            </h1>
            
            <p className="text-xl text-neutral-mid mb-8 max-w-3xl mx-auto leading-relaxed">
              Hear directly from clients we've helped achieve successful outcomes 
              across diverse legal challenges and practice areas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact?book=true"
                className="btn-primary inline-flex items-center justify-center group"
              >
                Schedule Your Consultation
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#reviews"
                className="btn-secondary inline-flex items-center justify-center"
              >
                Browse All Reviews
              </a>
            </div>
          </div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center">
                  <Icon className="w-8 h-8 text-primary mx-auto mb-4" />
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-neutral-dark font-semibold">
                    {stat.label}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Testimonials Carousel */}
      <section className="py-20 bg-neutral-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
              Featured Client Stories
            </h2>
            <p className="text-xl text-neutral-mid max-w-3xl mx-auto">
              Real experiences from clients across various legal practice areas
            </p>
          </div>

          <div className="relative">
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.slice(0, 3).map((testimonial) => (
                <div key={testimonial.id} className="group">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                    {/* Testimonial Header */}
                    <div className="p-8">
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center space-x-4">
                          <div className="relative">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                              {testimonial.avatar ? (
                                <Image
                                  src={testimonial.avatar}
                                  alt={testimonial.name}
                                  width={64}
                                  height={64}
                                  className="rounded-full object-cover"
                                />
                              ) : (
                                <User className="w-8 h-8 text-primary" />
                              )}
                            </div>
                            {testimonial.verified && (
                              <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                                <span className="text-white text-xs">✓</span>
                              </div>
                            )}
                          </div>
                          <div>
                            <h3 className="font-bold text-neutral-dark">
                              {testimonial.name}
                            </h3>
                            <div className="text-sm text-primary font-semibold">
                              {testimonial.role}
                            </div>
                            <div className="text-xs text-neutral-mid">
                              {testimonial.company}
                            </div>
                          </div>
                        </div>
                        {testimonial.video && (
                          <button
                            onClick={() => openVideoModal(testimonial.id)}
                            className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors group/video"
                          >
                            <Play className="w-5 h-5 text-primary group-hover/video:text-white" />
                          </button>
                        )}
                      </div>
                      
                      {/* Rating */}
                      <div className="mb-6">
                        {renderStars(testimonial.rating)}
                        <div className="text-sm text-neutral-mid mt-2">
                          {testimonial.category} • {testimonial.date}
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="relative">
                        <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                        <p className="text-neutral-mid italic pl-4">
                          "{testimonial.content}"
                        </p>
                      </div>
                    </div>
                    
                    {/* Case Details Footer */}
                    <div className="px-8 py-6 bg-gray-50 border-t border-gray-100">
                      <div className="text-sm">
                        <div className="font-semibold text-neutral-dark mb-1">
                          Case Details:
                        </div>
                        <div className="text-neutral-mid">
                          {testimonial.caseDetails}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Reviews with Filter */}
      <section id="reviews" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar Filters */}
            <div className="lg:w-1/4">
              <div className="sticky top-24">
                {/* Search */}
                <div className="mb-8">
                  <div className="flex items-center space-x-2 mb-4">
                    <Search className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-bold text-neutral-dark">Search Reviews</h3>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search by name, practice area, or keywords..."
                      value={searchQuery}
                      onChange={(e) => {
                        setSearchQuery(e.target.value)
                        setCurrentPage(1)
                      }}
                      className="w-full px-4 py-3 pl-10 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  </div>
                </div>

                {/* Categories */}
                <div className="mb-8">
                  <div className="flex items-center space-x-2 mb-6">
                    <Filter className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-bold text-neutral-dark">Filter by Practice Area</h3>
                  </div>
                  
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.value}
                        onClick={() => {
                          setActiveCategory(category.value)
                          setCurrentPage(1)
                        }}
                        className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-300 ${
                          activeCategory === category.value
                            ? 'bg-primary text-white'
                            : 'border border-gray-200 hover:border-primary hover:bg-primary/5'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`w-3 h-3 rounded-full ${
                            activeCategory === category.value ? 'bg-white' : 'bg-primary'
                          }`} />
                          <span className={`font-medium ${
                            activeCategory === category.value ? 'text-white' : 'text-neutral-dark'
                          }`}>
                            {category.name}
                          </span>
                        </div>
                        <span className={`text-sm px-2 py-1 rounded ${
                          activeCategory === category.value
                            ? 'bg-white/20 text-white'
                            : 'bg-gray-100 text-neutral-mid'
                        }`}>
                          {category.count}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Auto-play Toggle */}
                <div className="card">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-semibold text-neutral-dark">Auto-play Videos</span>
                    <button
                      onClick={() => setAutoplay(!autoplay)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        autoplay ? 'bg-primary' : 'bg-gray-300'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          autoplay ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                  <p className="text-sm text-neutral-mid">
                    {autoplay ? 'Video testimonials will auto-play' : 'Click to play video testimonials'}
                  </p>
                </div>

                {/* CTA Sidebar */}
                <div className="mt-8 bg-gradient-to-br from-primary to-primary-600 rounded-2xl p-6 text-white">
                  <Quote className="w-10 h-10 mb-4" />
                  <h4 className="text-xl font-bold mb-3">Share Your Experience</h4>
                  <p className="text-primary-100 mb-6 text-sm">
                    We value your feedback. Share your experience working with us.
                  </p>
                  <Link
                    href="/contact?type=testimonial"
                    className="block w-full bg-white text-primary text-center font-semibold py-3 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Submit Your Review
                  </Link>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:w-3/4">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-neutral-dark mb-2">
                    All Client Reviews
                  </h2>
                  <p className="text-neutral-mid">
                    Showing {filteredTestimonials.length} of {testimonials.length} reviews
                    {activeCategory !== 'all' && ` in ${categories.find(c => c.value === activeCategory)?.name}`}
                  </p>
                </div>
                
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-neutral-mid">Sort by:</span>
                  <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:border-primary focus:outline-none">
                    <option>Most Recent</option>
                    <option>Highest Rated</option>
                    <option>Practice Area</option>
                  </select>
                </div>
              </div>

              {/* Reviews Grid */}
              {paginatedTestimonials.length > 0 ? (
                <>
                  <div className="grid md:grid-cols-2 gap-6">
                    {paginatedTestimonials.map((testimonial) => (
                      <div key={testimonial.id} className="group">
                        <div className="bg-white rounded-xl border border-gray-200 hover:border-primary hover:shadow-lg transition-all duration-300 h-full">
                          <div className="p-6">
                            {/* Header */}
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex items-center space-x-3">
                                <div className="relative">
                                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                    {testimonial.avatar ? (
                                      <Image
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        width={48}
                                        height={48}
                                        className="rounded-full object-cover"
                                      />
                                    ) : (
                                      <User className="w-6 h-6 text-primary" />
                                    )}
                                  </div>
                                  {testimonial.verified && (
                                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border border-white flex items-center justify-center">
                                      <span className="text-white text-[10px]">✓</span>
                                    </div>
                                  )}
                                </div>
                                <div>
                                  <h3 className="font-bold text-neutral-dark">
                                    {testimonial.name}
                                  </h3>
                                  <div className="text-xs text-primary font-semibold">
                                    {testimonial.role}
                                  </div>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="flex items-center justify-end mb-1">
                                  {renderStars(testimonial.rating)}
                                </div>
                                <div className="text-xs text-neutral-mid">
                                  {testimonial.date}
                                </div>
                              </div>
                            </div>

                            {/* Category Badge */}
                            <div className="mb-4">
                              <span className="inline-flex items-center text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                                {testimonial.category}
                              </span>
                              {testimonial.video && (
                                <span className="inline-flex items-center text-xs bg-accent/10 text-accent px-2 py-1 rounded ml-2">
                                  <Video className="w-3 h-3 mr-1" />
                                  Video
                                </span>
                              )}
                            </div>

                            {/* Content */}
                            <p className="text-sm text-neutral-mid mb-4 line-clamp-4">
                              "{testimonial.content}"
                            </p>

                            {/* Company/Case */}
                            {testimonial.company !== 'Personal' && (
                              <div className="text-xs text-neutral-mid mb-4">
                                <span className="font-medium">Case: </span>
                                {testimonial.caseDetails}
                              </div>
                            )}

                            {/* Actions */}
                            <div className="pt-4 border-t border-gray-100">
                              <div className="flex items-center justify-between">
                                <div className="text-primary font-medium text-sm">
                                  {testimonial.video ? (
                                    <button
                                      onClick={() => openVideoModal(testimonial.id)}
                                      className="flex items-center hover:text-primary-600"
                                    >
                                      <Play className="w-4 h-4 mr-2" />
                                      Watch Video Testimonial
                                    </button>
                                  ) : (
                                    'Full Review'
                                  )}
                                </div>
                                <ThumbsUp className="w-5 h-5 text-gray-300" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="mt-12 flex justify-center">
                      <nav className="flex items-center space-x-2">
                        <button
                          onClick={() => handlePageChange(currentPage - 1)}
                          disabled={currentPage === 1}
                          className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 hover:border-primary hover:bg-primary/5 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        
                        {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                          let pageNumber
                          if (totalPages <= 5) {
                            pageNumber = i + 1
                          } else if (currentPage <= 3) {
                            pageNumber = i + 1
                          } else if (currentPage >= totalPages - 2) {
                            pageNumber = totalPages - 4 + i
                          } else {
                            pageNumber = currentPage - 2 + i
                          }
                          
                          return (
                            <button
                              key={pageNumber}
                              onClick={() => handlePageChange(pageNumber)}
                              className={`w-10 h-10 flex items-center justify-center rounded-lg font-semibold transition-colors ${
                                currentPage === pageNumber
                                  ? 'bg-primary text-white'
                                  : 'border border-gray-300 hover:border-primary hover:bg-primary/5'
                              }`}
                            >
                              {pageNumber}
                            </button>
                          )
                        })}
                        
                        {totalPages > 5 && currentPage < totalPages - 2 && (
                          <>
                            <span className="px-2">...</span>
                            <button
                              onClick={() => handlePageChange(totalPages)}
                              className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 hover:border-primary hover:bg-primary/5"
                            >
                              {totalPages}
                            </button>
                          </>
                        )}
                        
                        <button
                          onClick={() => handlePageChange(currentPage + 1)}
                          disabled={currentPage === totalPages}
                          className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 hover:border-primary hover:bg-primary/5 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </nav>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-12">
                  <Quote className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-neutral-dark mb-2">
                    No testimonials found
                  </h3>
                  <p className="text-neutral-mid mb-6">
                    Try adjusting your search or filter criteria
                  </p>
                  <button
                    onClick={() => {
                      setActiveCategory('all')
                      setSearchQuery('')
                      setCurrentPage(1)
                    }}
                    className="text-primary font-semibold hover:text-primary-600"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Review Platforms */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
                Reviews Across Platforms
              </h2>
              <p className="text-xl text-neutral-mid max-w-3xl mx-auto">
                See what clients are saying about us on trusted review platforms
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  platform: 'Google Reviews',
                  rating: 5.0,
                  reviewCount: '48 reviews',
                  highlight: 'Excellent legal counsel with outstanding results',
                  icon: 'G',
                  color: 'bg-blue-500',
                },
                {
                  platform: 'Avvo',
                  rating: 5.0,
                  reviewCount: '32 reviews',
                  highlight: 'Superb rating with client choice awards',
                  icon: 'A',
                  color: 'bg-green-500',
                },
                {
                  platform: 'Martindale-Hubbell',
                  rating: 'AV Preeminent',
                  reviewCount: 'Peer Rated',
                  highlight: 'Highest possible rating for ethical standards',
                  icon: 'MH',
                  color: 'bg-purple-500',
                },
              ].map((platform) => (
                <div key={platform.platform} className="card text-center hover:shadow-xl transition-shadow duration-300">
                  <div className={`w-16 h-16 ${platform.color} rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6`}>
                    {platform.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-neutral-dark mb-2">
                    {platform.platform}
                  </h3>
                  
                  <div className="flex items-center justify-center mb-4">
                    {typeof platform.rating === 'number' ? (
                      <>
                        {renderStars(platform.rating)}
                        <span className="ml-2 text-2xl font-bold text-neutral-dark">
                          {platform.rating.toFixed(1)}
                        </span>
                      </>
                    ) : (
                      <span className="text-2xl font-bold text-accent">
                        {platform.rating}
                      </span>
                    )}
                  </div>
                  
                  <div className="text-neutral-mid mb-4">
                    {platform.reviewCount}
                  </div>
                  
                  <p className="text-sm text-neutral-mid italic">
                    "{platform.highlight}"
                  </p>
                  
                  <div className="mt-6">
                    <Link
                      href="#"
                      className="text-primary font-semibold text-sm hover:text-primary-600"
                    >
                      View on {platform.platform} →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Submit Review CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-primary to-primary-600 rounded-3xl p-12 text-center text-white">
              <Quote className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Share Your Experience
              </h2>
              <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                Your feedback helps us improve and helps others make informed decisions 
                about their legal representation.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
                <div className="bg-white/10 p-6 rounded-xl">
                  <div className="text-2xl font-bold mb-2">Write a Review</div>
                  <p className="text-primary-100 text-sm">
                    Share your story and help others facing similar legal challenges
                  </p>
                </div>
                <div className="bg-white/10 p-6 rounded-xl">
                  <div className="text-2xl font-bold mb-2">Record a Video</div>
                  <p className="text-primary-100 text-sm">
                    Tell your experience in your own words (optional and confidential)
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact?type=testimonial"
                  className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300"
                >
                  Submit Your Review
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
                >
                  Contact Us First
                </Link>
              </div>
              
              <p className="mt-8 text-primary-100 text-sm">
                All reviews are verified and may be featured on our website (with your permission)
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}