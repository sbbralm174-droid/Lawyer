'use client'

import { useState } from 'react'
import { Calendar, Mail, Phone, User, Briefcase, Clock } from 'lucide-react'

export default function ContactForm({ onSuccess, isModal = false }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    caseType: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const caseTypes = [
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
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          consultationType: 'booked',
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          caseType: '',
          preferredDate: '',
          preferredTime: '',
          message: '',
        })
        
        if (onSuccess) {
          onSuccess()
        }
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={isModal ? '' : 'max-w-2xl mx-auto'}>
      {!isModal && (
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
            Schedule Your Consultation
          </h2>
          <p className="text-neutral-mid max-w-2xl mx-auto">
            Fill out the form below and we'll respond within 24 hours to schedule 
            your initial consultation.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
            <div className="relative">
              <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                name="caseType"
                value={formData.caseType}
                onChange={handleChange}
                required
                className="input-field pl-10 appearance-none"
              >
                <option value="">Select a case type</option>
                {caseTypes.map((type) => (
                  <option key={type} value={type.toLowerCase().replace(' ', '-')}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-neutral-dark mb-2">
              Preferred Date *
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="date"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                required
                className="input-field pl-10"
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-dark mb-2">
              Preferred Time *
            </label>
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
                required
                className="input-field pl-10 appearance-none"
              >
                <option value="">Select a time slot</option>
                {timeSlots.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-dark mb-2">
            Case Details *
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={isModal ? 4 : 6}
            className="input-field"
            placeholder="Briefly describe your legal situation, concerns, and objectives..."
          />
        </div>

        <div className="space-y-4">
          <div className="flex items-start">
            <input
              type="checkbox"
              id="consent"
              required
              className="h-4 w-4 text-primary rounded focus:ring-primary focus:ring-offset-0 mt-1"
            />
            <label htmlFor="consent" className="ml-3 text-sm text-neutral-mid">
              I consent to Mason Legal contacting me about my legal inquiry. 
              Your information is confidential and will not be shared.
            </label>
          </div>
          
          <div className="flex items-start">
            <input
              type="checkbox"
              id="attorney-client"
              required
              className="h-4 w-4 text-primary rounded focus:ring-primary focus:ring-offset-0 mt-1"
            />
            <label htmlFor="attorney-client" className="ml-3 text-sm text-neutral-mid">
              I understand that submitting this form does not create an attorney-client 
              relationship until a formal agreement is signed.
            </label>
          </div>
        </div>

        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary w-full py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Scheduling...' : 'Schedule Free Consultation'}
          </button>
        </div>

        {submitStatus === 'success' && (
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg animate-fade-in">
            <p className="text-green-700 font-medium">
              Thank you! Your consultation request has been submitted. 
              We'll contact you within 24 hours to confirm your appointment.
            </p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg animate-fade-in">
            <p className="text-red-700 font-medium">
              Something went wrong. Please try again or contact us directly at (555) 123-4567.
            </p>
          </div>
        )}

        {!isModal && (
          <p className="text-sm text-gray-500 text-center pt-4">
            By submitting this form, you agree to our Privacy Policy. 
            All consultations are confidential and protected by attorney-client privilege.
          </p>
        )}
      </form>
    </div>
  )
}