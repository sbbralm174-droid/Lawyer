'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { 
  ArrowLeft,
  Calendar,
  CheckCircle,
  Clock,
  CreditCard,
  DollarSign,
  FileText,
  Lock,
  MapPin,
  Shield,
  Star,
  User,
  Users,
  Video,
  X,
  ChevronRight,
  Building,
  Mail,
  Phone,
  Briefcase
} from 'lucide-react'

const attorneys = [
  {
    id: 1,
    name: 'James Mason',
    title: 'Principal Attorney',
    expertise: ['Family Law', 'Complex Litigation', 'Business Law'],
    experience: '15+ years',
    rating: 5.0,
    consultations: '1,200+',
    avatar: '/images/attorneys/james-mason.jpg',
    bio: 'Specializes in high-stakes family law and complex business litigation. Harvard Law graduate.',
    availability: ['Mon', 'Wed', 'Fri'],
    consultationFee: '$300',
    videoConsultation: true,
    inPerson: true,
  },
  {
    id: 2,
    name: 'Sarah Chen',
    title: 'Senior Associate',
    expertise: ['Estate Planning', 'Intellectual Property', 'Employment Law'],
    experience: '8+ years',
    rating: 5.0,
    consultations: '800+',
    avatar: '/images/attorneys/sarah-chen.jpg',
    bio: 'Expert in estate planning and intellectual property law. Columbia Law School graduate.',
    availability: ['Tue', 'Thu', 'Sat'],
    consultationFee: '$250',
    videoConsultation: true,
    inPerson: true,
  },
  {
    id: 3,
    name: 'Michael Rodriguez',
    title: 'Associate Attorney',
    expertise: ['Real Estate', 'Criminal Defense', 'Personal Injury'],
    experience: '5+ years',
    rating: 4.9,
    consultations: '500+',
    avatar: '/images/attorneys/michael-rodriguez.jpg',
    bio: 'Focuses on real estate transactions and criminal defense. NYU Law graduate.',
    availability: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    consultationFee: '$200',
    videoConsultation: true,
    inPerson: true,
  },
]

const consultationTypes = [
  {
    id: 'initial',
    name: 'Initial Consultation',
    duration: '30 minutes',
    price: 'Free',
    description: 'Case evaluation and strategy discussion',
    features: ['Case assessment', 'Strategy overview', 'Fee explanation'],
    recommended: true,
  },
  {
    id: 'standard',
    name: 'Standard Consultation',
    duration: '60 minutes',
    price: '$250',
    description: 'Detailed case analysis and action plan',
    features: ['Comprehensive review', 'Legal strategy', 'Document analysis'],
    recommended: false,
  },
  {
    id: 'comprehensive',
    name: 'Comprehensive Review',
    duration: '90 minutes',
    price: '$350',
    description: 'In-depth analysis with multiple attorneys',
    features: ['Multiple attorney review', 'Risk assessment', 'Strategic roadmap'],
    recommended: false,
  },
]

const practiceAreas = [
  'Family Law',
  'Estate Planning',
  'Business Litigation',
  'Real Estate Law',
  'Criminal Defense',
  'Employment Law',
  'Personal Injury',
  'Intellectual Property',
  'Other',
]

const timeSlots = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
  '11:00 AM', '11:30 AM', '1:00 PM', '1:30 PM',
  '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
  '4:00 PM', '4:30 PM', '5:00 PM'
]

const processSteps = [
  {
    step: 1,
    title: 'Select Attorney',
    description: 'Choose the attorney best suited for your case',
  },
  {
    step: 2,
    title: 'Pick Date & Time',
    description: 'Select from available time slots',
  },
  {
    step: 3,
    title: 'Provide Details',
    description: 'Tell us about your legal matter',
  },
  {
    step: 4,
    title: 'Confirm Booking',
    description: 'Review and schedule your consultation',
  },
]

export default function BookConsultationPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedAttorney, setSelectedAttorney] = useState(null)
  const [selectedType, setSelectedType] = useState('initial')
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [consultationMode, setConsultationMode] = useState('video') // 'video' or 'in-person'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    caseType: '',
    caseDetails: '',
    documents: [],
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [calendarOpen, setCalendarOpen] = useState(false)

  // Generate next 14 days for calendar
  const generateDates = () => {
    const dates = []
    const today = new Date()
    for (let i = 0; i < 14; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      dates.push(date)
    }
    return dates
  }

  const dates = generateDates()

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files)
    setFormData(prev => ({
      ...prev,
      documents: [...prev.documents, ...files.slice(0, 3)] // Limit to 3 files
    }))
  }

  const removeFile = (index) => {
    setFormData(prev => ({
      ...prev,
      documents: prev.documents.filter((_, i) => i !== index)
    }))
  }

  const handleNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/book-consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          attorney: selectedAttorney,
          type: selectedType,
          date: selectedDate,
          time: selectedTime,
          mode: consultationMode,
          ...formData,
        }),
      })

      if (response.ok) {
        const data = await response.json()
        // Redirect to confirmation page
        router.push(`/confirmation/${data.bookingId}`)
      } else {
        throw new Error('Booking failed')
      }
    } catch (error) {
      console.error('Booking error:', error)
      alert('Failed to book consultation. Please try again or call us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const calculateTotal = () => {
    const type = consultationTypes.find(t => t.id === selectedType)
    return type.price === 'Free' ? '$0' : type.price
  }

  const formatDate = (dateString) => {
    if (!dateString) return 'Select date'
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      month: 'long', 
      day: 'numeric',
      year: 'numeric'
    })
  }

  // Get available attorneys based on selected date
  const getAvailableAttorneys = () => {
    if (!selectedDate) return attorneys
    
    const selectedDay = new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'short' })
    return attorneys.filter(attorney => 
      attorney.availability.includes(selectedDay)
    )
  }

  const availableAttorneys = getAvailableAttorneys()

  return (
    <div className="min-h-screen bg-neutral-card">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <span className="font-serif text-xl font-bold text-primary">
                Mason Legal
              </span>
            </Link>
            
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-6">
                <div className="flex items-center text-neutral-mid">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="text-sm">30-min response time</span>
                </div>
                <div className="flex items-center text-neutral-mid">
                  <Shield className="w-4 h-4 mr-2" />
                  <span className="text-sm">100% Confidential</span>
                </div>
              </div>
              <a href="tel:+15551234567" className="text-primary font-semibold hover:text-primary-600">
                (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-6 py-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl md:text-3xl font-bold text-neutral-dark">
                Book Your Consultation
              </h1>
              <div className="text-sm text-neutral-mid">
                Step {currentStep} of 4
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              {processSteps.map((step) => (
                <div key={step.step} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    currentStep >= step.step
                      ? 'bg-primary text-white'
                      : 'bg-gray-200 text-gray-400'
                  }`}>
                    {currentStep > step.step ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      step.step
                    )}
                  </div>
                  <div className="ml-3 hidden md:block">
                    <div className={`text-sm font-medium ${
                      currentStep >= step.step ? 'text-neutral-dark' : 'text-gray-400'
                    }`}>
                      {step.title}
                    </div>
                    <div className="text-xs text-gray-500">{step.description}</div>
                  </div>
                  {step.step < 4 && (
                    <div className={`h-0.5 w-16 mx-4 ${
                      currentStep > step.step ? 'bg-primary' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                {/* Step 1: Select Attorney */}
                {currentStep === 1 && (
                  <div className="animate-fade-in">
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold text-neutral-dark mb-2">
                        Select Your Attorney
                      </h2>
                      <p className="text-neutral-mid">
                        Choose the attorney best suited for your legal matter
                      </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      {attorneys.map((attorney) => (
                        <div
                          key={attorney.id}
                          onClick={() => setSelectedAttorney(attorney.id)}
                          className={`border-2 rounded-xl p-6 cursor-pointer transition-all duration-300 ${
                            selectedAttorney === attorney.id
                              ? 'border-primary bg-primary/5'
                              : 'border-gray-200 hover:border-primary/50'
                          }`}
                        >
                          <div className="flex items-start space-x-4">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                              <User className="w-8 h-8 text-primary" />
                            </div>
                            <div className="flex-grow">
                              <div className="flex items-start justify-between">
                                <div>
                                  <h3 className="font-bold text-neutral-dark">
                                    {attorney.name}
                                  </h3>
                                  <div className="text-primary font-semibold text-sm">
                                    {attorney.title}
                                  </div>
                                </div>
                                <div className="flex items-center">
                                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                  <span className="ml-1 font-bold">{attorney.rating}</span>
                                </div>
                              </div>
                              
                              <div className="mt-3">
                                <div className="text-sm text-neutral-mid mb-2">
                                  <strong>Expertise:</strong> {attorney.expertise.join(', ')}
                                </div>
                                <div className="text-xs text-neutral-mid">
                                  <strong>Experience:</strong> {attorney.experience} • 
                                  <strong> Consultations:</strong> {attorney.consultations}
                                </div>
                              </div>
                              
                              <div className="mt-4 flex items-center justify-between">
                                <div className="text-primary font-bold">
                                  {attorney.consultationFee}
                                </div>
                                <div className="flex space-x-2">
                                  {attorney.videoConsultation && (
                                    <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
                                      <Video className="w-3 h-3 inline mr-1" />
                                      Video
                                    </span>
                                  )}
                                  {attorney.inPerson && (
                                    <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">
                                      <Building className="w-3 h-3 inline mr-1" />
                                      In-Person
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          {selectedAttorney === attorney.id && (
                            <div className="mt-4 pt-4 border-t border-gray-200">
                              <p className="text-sm text-neutral-mid">{attorney.bio}</p>
                              <div className="mt-3 flex items-center text-sm text-neutral-mid">
                                <Calendar className="w-4 h-4 mr-2" />
                                <span>Available: {attorney.availability.join(', ')}</span>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    
                    <div className="text-center mb-8">
                      <p className="text-neutral-mid mb-4">
                        Not sure which attorney to choose?
                      </p>
                      <button
                        onClick={() => {
                          setSelectedAttorney(null)
                          handleNextStep()
                        }}
                        className="text-primary font-semibold hover:text-primary-600"
                      >
                        Let us match you with the best attorney →
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 2: Date & Time */}
                {currentStep === 2 && (
                  <div className="animate-fade-in">
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold text-neutral-dark mb-2">
                        Select Date & Time
                      </h2>
                      <p className="text-neutral-mid">
                        Choose your preferred consultation date and time slot
                      </p>
                    </div>
                    
                    {/* Consultation Type */}
                    <div className="mb-8">
                      <h3 className="font-bold text-neutral-dark mb-4">Consultation Type</h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        {consultationTypes.map((type) => (
                          <div
                            key={type.id}
                            onClick={() => setSelectedType(type.id)}
                            className={`border-2 rounded-xl p-4 cursor-pointer transition-all duration-300 ${
                              selectedType === type.id
                                ? 'border-primary bg-primary/5'
                                : 'border-gray-200 hover:border-primary/50'
                            } ${type.recommended ? 'ring-2 ring-primary/20' : ''}`}
                          >
                            {type.recommended && (
                              <div className="text-xs bg-primary text-white px-2 py-1 rounded-full inline-block mb-2">
                                Most Popular
                              </div>
                            )}
                            <h4 className="font-bold text-neutral-dark mb-2">
                              {type.name}
                            </h4>
                            <div className="text-2xl font-bold text-primary mb-2">
                              {type.price}
                            </div>
                            <div className="text-sm text-neutral-mid mb-3">
                              {type.duration} • {type.description}
                            </div>
                            <ul className="space-y-1">
                              {type.features.map((feature, index) => (
                                <li key={index} className="flex items-center text-sm text-neutral-mid">
                                  <CheckCircle className="w-4 h-4 text-primary mr-2" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Consultation Mode */}
                    <div className="mb-8">
                      <h3 className="font-bold text-neutral-dark mb-4">Consultation Mode</h3>
                      <div className="flex space-x-4">
                        <button
                          onClick={() => setConsultationMode('video')}
                          className={`flex-1 flex items-center justify-center p-4 rounded-xl border-2 transition-all duration-300 ${
                            consultationMode === 'video'
                              ? 'border-primary bg-primary/5'
                              : 'border-gray-200 hover:border-primary/50'
                          }`}
                        >
                          <Video className="w-6 h-6 mr-3" />
                          <div className="text-left">
                            <div className="font-semibold text-neutral-dark">Video Consultation</div>
                            <div className="text-sm text-neutral-mid">Secure video call</div>
                          </div>
                        </button>
                        <button
                          onClick={() => setConsultationMode('in-person')}
                          className={`flex-1 flex items-center justify-center p-4 rounded-xl border-2 transition-all duration-300 ${
                            consultationMode === 'in-person'
                              ? 'border-primary bg-primary/5'
                              : 'border-gray-200 hover:border-primary/50'
                          }`}
                        >
                          <Building className="w-6 h-6 mr-3" />
                          <div className="text-left">
                            <div className="font-semibold text-neutral-dark">In-Person Meeting</div>
                            <div className="text-sm text-neutral-mid">At our office</div>
                          </div>
                        </button>
                      </div>
                    </div>

                    {/* Date Selection */}
                    <div className="mb-8">
                      <h3 className="font-bold text-neutral-dark mb-4">Select Date</h3>
                      <div className="grid grid-cols-7 gap-2">
                        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                          <div key={day} className="text-center text-sm font-medium text-neutral-mid py-2">
                            {day}
                          </div>
                        ))}
                        {dates.map((date) => {
                          const dateString = date.toISOString().split('T')[0]
                          const day = date.getDate()
                          const isToday = date.toDateString() === new Date().toDateString()
                          const isSelected = selectedDate === dateString
                          const isWeekend = date.getDay() === 0 || date.getDay() === 6
                          
                          return (
                            <button
                              key={dateString}
                              onClick={() => setSelectedDate(dateString)}
                              disabled={isWeekend}
                              className={`h-12 rounded-lg transition-all duration-300 ${
                                isSelected
                                  ? 'bg-primary text-white'
                                  : isWeekend
                                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                  : 'bg-gray-50 hover:bg-primary/10 hover:border-primary/50'
                              } ${isToday ? 'ring-2 ring-primary/50' : ''}`}
                            >
                              <div className="font-medium">{day}</div>
                              {isToday && (
                                <div className="text-xs">Today</div>
                              )}
                            </button>
                          )
                        })}
                      </div>
                    </div>

                    {/* Time Selection */}
                    {selectedDate && (
                      <div className="mb-8">
                        <h3 className="font-bold text-neutral-dark mb-4">Select Time</h3>
                        <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                          {timeSlots.map((time) => (
                            <button
                              key={time}
                              onClick={() => setSelectedTime(time)}
                              className={`py-3 rounded-lg border transition-all duration-300 ${
                                selectedTime === time
                                  ? 'bg-primary text-white border-primary'
                                  : 'border-gray-200 hover:border-primary hover:bg-primary/5'
                              }`}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Step 3: Your Details */}
                {currentStep === 3 && (
                  <div className="animate-fade-in">
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold text-neutral-dark mb-2">
                        Your Information
                      </h2>
                      <p className="text-neutral-mid">
                        Please provide your details and case information
                      </p>
                    </div>
                    
                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-neutral-dark mb-2">
                            Full Name *
                          </label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              className="input-field pl-10"
                              placeholder="John Smith"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-neutral-dark mb-2">
                            Email Address *
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              className="input-field pl-10"
                              placeholder="john@example.com"
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-neutral-dark mb-2">
                            Phone Number *
                          </label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              required
                              className="input-field pl-10"
                              placeholder="(123) 456-7890"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-neutral-dark mb-2">
                            Case Type *
                          </label>
                          <select
                            name="caseType"
                            value={formData.caseType}
                            onChange={handleInputChange}
                            required
                            className="input-field"
                          >
                            <option value="">Select a case type</option>
                            {practiceAreas.map((area) => (
                              <option key={area} value={area}>
                                {area}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-neutral-dark mb-2">
                          Case Details *
                        </label>
                        <textarea
                          name="caseDetails"
                          value={formData.caseDetails}
                          onChange={handleInputChange}
                          required
                          rows={6}
                          className="input-field"
                          placeholder="Please describe your legal situation, concerns, and what you hope to achieve..."
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-neutral-dark mb-2">
                          Upload Documents (Optional)
                        </label>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                          <input
                            type="file"
                            id="document-upload"
                            multiple
                            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                            onChange={handleFileUpload}
                            className="hidden"
                          />
                          <label
                            htmlFor="document-upload"
                            className="cursor-pointer inline-block"
                          >
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                              <FileText className="w-6 h-6 text-primary" />
                            </div>
                            <div className="text-neutral-dark font-medium mb-2">
                              Click to upload documents
                            </div>
                            <div className="text-sm text-neutral-mid">
                              PDF, DOC, JPG up to 10MB each (max 3 files)
                            </div>
                          </label>
                          
                          {formData.documents.length > 0 && (
                            <div className="mt-6 space-y-3">
                              {formData.documents.map((file, index) => (
                                <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                                  <div className="flex items-center">
                                    <FileText className="w-5 h-5 text-primary mr-3" />
                                    <div>
                                      <div className="font-medium text-sm">{file.name}</div>
                                      <div className="text-xs text-neutral-mid">
                                        {(file.size / 1024 / 1024).toFixed(2)} MB
                                      </div>
                                    </div>
                                  </div>
                                  <button
                                    type="button"
                                    onClick={() => removeFile(index)}
                                    className="text-red-500 hover:text-red-700"
                                  >
                                    <X className="w-5 h-5" />
                                  </button>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </form>
                  </div>
                )}

                {/* Step 4: Confirmation */}
                {currentStep === 4 && (
                  <div className="animate-fade-in">
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold text-neutral-dark mb-2">
                        Confirm Your Booking
                      </h2>
                      <p className="text-neutral-mid">
                        Review your consultation details before booking
                      </p>
                    </div>
                    
                    {/* Summary Card */}
                    <div className="bg-gray-50 rounded-xl p-6 mb-8">
                      <h3 className="font-bold text-neutral-dark mb-4">Consultation Summary</h3>
                      
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="text-neutral-mid">Attorney</div>
                          <div className="font-semibold text-neutral-dark">
                            {attorneys.find(a => a.id === selectedAttorney)?.name}
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="text-neutral-mid">Consultation Type</div>
                          <div className="font-semibold text-neutral-dark">
                            {consultationTypes.find(t => t.id === selectedType)?.name}
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="text-neutral-mid">Date & Time</div>
                          <div className="font-semibold text-neutral-dark">
                            {formatDate(selectedDate)} at {selectedTime}
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="text-neutral-mid">Mode</div>
                          <div className="font-semibold text-neutral-dark">
                            {consultationMode === 'video' ? 'Video Consultation' : 'In-Person Meeting'}
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="text-neutral-mid">Case Type</div>
                          <div className="font-semibold text-neutral-dark">
                            {formData.caseType}
                          </div>
                        </div>
                        
                        <div className="pt-4 border-t">
                          <div className="flex items-center justify-between text-lg">
                            <div className="font-bold text-neutral-dark">Total</div>
                            <div className="font-bold text-primary text-2xl">
                              {calculateTotal()}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Payment Method (if not free) */}
                    {selectedType !== 'initial' && (
                      <div className="mb-8">
                        <h3 className="font-bold text-neutral-dark mb-4">Payment Method</h3>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between p-4 border rounded-lg">
                            <div className="flex items-center">
                              <CreditCard className="w-6 h-6 text-primary mr-3" />
                              <div>
                                <div className="font-semibold text-neutral-dark">Credit Card</div>
                                <div className="text-sm text-neutral-mid">Pay securely online</div>
                              </div>
                            </div>
                            <div className="text-primary">
                              <ChevronRight className="w-5 h-5" />
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between p-4 border rounded-lg">
                            <div className="flex items-center">
                              <DollarSign className="w-6 h-6 text-primary mr-3" />
                              <div>
                                <div className="font-semibold text-neutral-dark">Pay at Office</div>
                                <div className="text-sm text-neutral-mid">Pay in person</div>
                              </div>
                            </div>
                            <div className="text-primary">
                              <ChevronRight className="w-5 h-5" />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {/* Terms and Conditions */}
                    <div className="mb-8">
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <input
                            type="checkbox"
                            id="terms"
                            required
                            className="h-4 w-4 text-primary rounded focus:ring-primary mt-1"
                          />
                          <label htmlFor="terms" className="ml-3 text-sm text-neutral-mid">
                            I agree to the Terms of Service and Privacy Policy. I understand that 
                            submitting this form does not create an attorney-client relationship 
                            until a formal agreement is signed.
                          </label>
                        </div>
                        
                        <div className="flex items-start">
                          <input
                            type="checkbox"
                            id="cancellation"
                            required
                            className="h-4 w-4 text-primary rounded focus:ring-primary mt-1"
                          />
                          <label htmlFor="cancellation" className="ml-3 text-sm text-neutral-mid">
                            I understand that cancellations must be made at least 24 hours in 
                            advance. Late cancellations may incur a fee.
                          </label>
                        </div>
                        
                        <div className="flex items-start">
                          <input
                            type="checkbox"
                            id="confidentiality"
                            required
                            className="h-4 w-4 text-primary rounded focus:ring-primary mt-1"
                          />
                          <label htmlFor="confidentiality" className="ml-3 text-sm text-neutral-mid">
                            I understand that all communications are confidential and protected 
                            by attorney-client privilege.
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-8 border-t border-gray-200">
                  {currentStep > 1 ? (
                    <button
                      type="button"
                      onClick={handlePreviousStep}
                      className="btn-secondary px-8 py-3"
                    >
                      <ArrowLeft className="w-5 h-5 mr-2 inline" />
                      Previous
                    </button>
                  ) : (
                    <Link
                      href="/contact"
                      className="btn-secondary px-8 py-3"
                    >
                      <ArrowLeft className="w-5 h-5 mr-2 inline" />
                      Back to Contact
                    </Link>
                  )}
                  
                  {currentStep < 4 ? (
                    <button
                      type="button"
                      onClick={handleNextStep}
                      disabled={
                        (currentStep === 1 && !selectedAttorney) ||
                        (currentStep === 2 && (!selectedDate || !selectedTime)) ||
                        (currentStep === 3 && (!formData.name || !formData.email || !formData.phone || !formData.caseType))
                      }
                      className="btn-primary px-8 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Continue
                      <ChevronRight className="w-5 h-5 ml-2 inline" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="btn-primary px-8 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Booking...' : 'Confirm Booking'}
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column - Summary & Info */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Attorney Summary */}
                {selectedAttorney && (
                  <div className="bg-white rounded-2xl shadow-lg p-6">
                    <h3 className="font-bold text-neutral-dark mb-4">Selected Attorney</h3>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <User className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-bold text-neutral-dark">
                          {attorneys.find(a => a.id === selectedAttorney)?.name}
                        </div>
                        <div className="text-sm text-primary">
                          {attorneys.find(a => a.id === selectedAttorney)?.title}
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => setCurrentStep(1)}
                      className="w-full text-primary font-semibold text-sm hover:text-primary-600"
                    >
                      Change Attorney
                    </button>
                  </div>
                )}

                {/* Consultation Details */}
                {(selectedDate || selectedTime || selectedType) && (
                  <div className="bg-white rounded-2xl shadow-lg p-6">
                    <h3 className="font-bold text-neutral-dark mb-4">Appointment Details</h3>
                    <div className="space-y-3">
                      {selectedType && (
                        <div className="flex justify-between">
                          <span className="text-neutral-mid">Type:</span>
                          <span className="font-semibold">
                            {consultationTypes.find(t => t.id === selectedType)?.name}
                          </span>
                        </div>
                      )}
                      {selectedDate && (
                        <div className="flex justify-between">
                          <span className="text-neutral-mid">Date:</span>
                          <span className="font-semibold">
                            {formatDate(selectedDate)}
                          </span>
                        </div>
                      )}
                      {selectedTime && (
                        <div className="flex justify-between">
                          <span className="text-neutral-mid">Time:</span>
                          <span className="font-semibold">{selectedTime}</span>
                        </div>
                      )}
                      {consultationMode && (
                        <div className="flex justify-between">
                          <span className="text-neutral-mid">Mode:</span>
                          <span className="font-semibold">
                            {consultationMode === 'video' ? 'Video Call' : 'In-Person'}
                          </span>
                        </div>
                      )}
                    </div>
                    <button
                      onClick={() => setCurrentStep(2)}
                      className="w-full mt-4 text-primary font-semibold text-sm hover:text-primary-600"
                    >
                      Change Details
                    </button>
                  </div>
                )}

                {/* Need Help Card */}
                <div className="bg-gradient-to-br from-primary to-primary-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-xl mb-3">Need Help Booking?</h3>
                  <p className="text-primary-100 mb-6">
                    Our team is here to assist you with the booking process.
                  </p>
                  <div className="space-y-4">
                    <a
                      href="tel:+15551234567"
                      className="flex items-center justify-center bg-white text-primary font-semibold py-3 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Call for Assistance
                    </a>
                    <a
                      href="mailto:contact@masonlegal.com"
                      className="flex items-center justify-center border-2 border-white text-white font-semibold py-3 rounded-lg hover:bg-white/10 transition-colors"
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      Email Us
                    </a>
                  </div>
                </div>

                {/* Security Badge */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Lock className="w-6 h-6 text-primary" />
                    <div>
                      <div className="font-bold text-neutral-dark">Secure Booking</div>
                      <div className="text-sm text-neutral-mid">Your information is protected</div>
                    </div>
                  </div>
                  <ul className="space-y-3 text-sm text-neutral-mid">
                    <li className="flex items-center">
                      <Shield className="w-4 h-4 text-primary mr-2" />
                      <span>256-bit SSL encryption</span>
                    </li>
                    <li className="flex items-center">
                      <Lock className="w-4 h-4 text-primary mr-2" />
                      <span>Confidential case details</span>
                    </li>
                    <li className="flex items-center">
                      <Users className="w-4 h-4 text-primary mr-2" />
                      <span>Attorney-client privilege</span>
                    </li>
                  </ul>
                </div>

                {/* In-Person Meeting Info */}
                {consultationMode === 'in-person' && (
                  <div className="bg-white rounded-2xl shadow-lg p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <Building className="w-6 h-6 text-primary" />
                      <div>
                        <div className="font-bold text-neutral-dark">Office Location</div>
                        <div className="text-sm text-neutral-mid">123 Justice Avenue, Suite 500</div>
                      </div>
                    </div>
                    <div className="space-y-3 text-sm text-neutral-mid">
                      <div className="flex items-start">
                        <MapPin className="w-4 h-4 text-primary mr-2 mt-0.5" />
                        <span>Free parking in adjacent garage</span>
                      </div>
                      <div className="flex items-start">
                        <Clock className="w-4 h-4 text-primary mr-2 mt-0.5" />
                        <span>Arrive 10 minutes early for check-in</span>
                      </div>
                      <div className="flex items-start">
                        <Users className="w-4 h-4 text-primary mr-2 mt-0.5" />
                        <span>Wheelchair accessible entrance</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Video Consultation Info */}
                {consultationMode === 'video' && (
                  <div className="bg-white rounded-2xl shadow-lg p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <Video className="w-6 h-6 text-primary" />
                      <div>
                        <div className="font-bold text-neutral-dark">Video Consultation</div>
                        <div className="text-sm text-neutral-mid">Secure video call</div>
                      </div>
                    </div>
                    <div className="space-y-3 text-sm text-neutral-mid">
                      <div className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5" />
                        <span>Zoom link will be emailed 24 hours before</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5" />
                        <span>Test your audio/video beforehand</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5" />
                        <span>Find a quiet, private location</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="container mx-auto px-6 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-bold text-neutral-dark mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><Link href="/contact" className="text-neutral-mid hover:text-primary">Contact Us</Link></li>
                  <li><Link href="/practice" className="text-neutral-mid hover:text-primary">Practice Areas</Link></li>
                  <li><Link href="/about" className="text-neutral-mid hover:text-primary">Our Team</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-neutral-dark mb-4">Support</h4>
                <ul className="space-y-2">
                  <li><a href="tel:+15551234567" className="text-neutral-mid hover:text-primary">(555) 123-4567</a></li>
                  <li><a href="mailto:contact@masonlegal.com" className="text-neutral-mid hover:text-primary">contact@masonlegal.com</a></li>
                  <li><Link href="/faq" className="text-neutral-mid hover:text-primary">FAQ</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-neutral-dark mb-4">Office Hours</h4>
                <ul className="space-y-2 text-neutral-mid">
                  <li>Mon-Fri: 9am-6pm</li>
                  <li>Sat: 10am-2pm</li>
                  <li>Sun: Emergency only</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t text-center text-neutral-mid text-sm">
              <p>© {new Date().getFullYear()} Mason Legal. All rights reserved.</p>
              <p className="mt-2">Attorney Advertising. Prior results do not guarantee a similar outcome.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}