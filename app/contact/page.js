'use client'

import { useState } from 'react'
import ContactForm from '@/components/ContactForm'
import Link from 'next/link'
import { 
  Calendar, 
  Clock, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Phone, 
  Shield,
  Users,
  X,
  CheckCircle,
  ChevronRight,
  Building,
  Globe,
  FileText
} from 'lucide-react'

const officeHours = [
  { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
  { day: 'Saturday', hours: '10:00 AM - 2:00 PM (By Appointment)' },
  { day: 'Sunday', hours: 'Emergency Consultations Only' },
]

const contactMethods = [
  {
    icon: Phone,
    title: 'Phone',
    details: '(555) 123-4567',
    description: 'Call for immediate assistance or to schedule',
    cta: 'Call Now',
    link: 'tel:+15551234567',
  },
  {
    icon: Mail,
    title: 'Email',
    details: 'contact@masonlegal.com',
    description: 'Response within 24 hours',
    cta: 'Send Email',
    link: 'mailto:contact@masonlegal.com',
  },
  {
    icon: MapPin,
    title: 'Office',
    details: '123 Justice Avenue, Suite 500',
    subdetails: 'New York, NY 10001',
    description: 'Parking available in adjacent garage',
    cta: 'Get Directions',
    link: 'https://maps.google.com/?q=123+Justice+Avenue+New+York+NY+10001',
  },
]

const emergencyContacts = [
  {
    type: 'After Hours Emergency',
    number: '(555) 234-5678',
    description: 'Available 24/7 for urgent legal matters',
  },
  {
    type: 'Legal Aid Referral',
    number: '(555) 345-6789',
    description: 'Free legal assistance referrals',
  },
]

const faqs = [
  {
    question: 'How quickly will I hear back after submitting the contact form?',
    answer: 'We respond to all contact form submissions within 24 hours during business days. For urgent matters, please call our office directly.',
  },
  {
    question: 'Do you offer free initial consultations?',
    answer: 'Yes, we offer a free 30-minute initial consultation to discuss your legal needs and determine how we can help you.',
  },
  {
    question: 'What information should I prepare for my consultation?',
    answer: 'Bring any relevant documents, identification, and a list of questions. For specific cases, we\'ll provide a detailed checklist after scheduling.',
  },
  {
    question: 'Are consultations confidential?',
    answer: 'Absolutely. All consultations are protected by attorney-client privilege from the moment you contact us.',
  },
  {
    question: 'Do you handle cases outside of New York?',
    answer: 'While based in New York, we\'re licensed in multiple states and can handle cases across state lines or refer you to trusted colleagues.',
  },
]

const teamMembers = [
  {
    name: 'James Mason',
    role: 'Principal Attorney',
    specialty: 'Family Law, Complex Litigation',
    email: 'jmason@masonlegal.com',
    phone: 'Ext. 101',
  },
  {
    name: 'Sarah Chen',
    role: 'Senior Associate',
    specialty: 'Estate Planning, IP Law',
    email: 'schen@masonlegal.com',
    phone: 'Ext. 102',
  },
  {
    name: 'Michael Rodriguez',
    role: 'Office Manager',
    specialty: 'Client Services, Scheduling',
    email: 'mrodriguez@masonlegal.com',
    phone: 'Ext. 103',
  },
]

export default function ContactPage() {
  const [isBookConsultation, setIsBookConsultation] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [activeFaq, setActiveFaq] = useState(null)

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index)
  }

  const handleFormSubmit = () => {
    setFormSubmitted(true)
    setIsBookConsultation(false)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-white to-accent/5 py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <MessageSquare className="w-5 h-5" />
              <span className="font-semibold">Contact Our Team</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-neutral-dark mb-6">
              Expert Legal <span className="text-primary">Support</span> When You Need It
            </h1>
            
            <p className="text-xl text-neutral-mid mb-8 max-w-3xl mx-auto leading-relaxed">
              Schedule a confidential consultation to discuss your legal needs. 
              Our experienced attorneys are ready to provide the guidance and representation you deserve.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsBookConsultation(true)}
                className="btn-primary inline-flex items-center justify-center group"
              >
                Book Free Consultation
                <Calendar className="ml-2 group-hover:scale-110 transition-transform" />
              </button>
              <a
                href="tel:+15551234567"
                className="btn-secondary inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </div>
          </div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </section>

      {/* Quick Contact Cards */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <a
                  key={index}
                  href={method.link}
                  target={method.link.startsWith('http') ? '_blank' : '_self'}
                  rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="group"
                >
                  <div className="bg-white rounded-xl border border-gray-200 p-6 hover:border-primary hover:shadow-lg transition-all duration-300 h-full">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors">
                        <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-bold text-neutral-dark mb-2">
                          {method.title}
                        </h3>
                        <div className="text-lg font-semibold text-primary mb-1">
                          {method.details}
                        </div>
                        {method.subdetails && (
                          <div className="text-neutral-mid text-sm mb-2">
                            {method.subdetails}
                          </div>
                        )}
                        <p className="text-sm text-neutral-mid mb-3">
                          {method.description}
                        </p>
                        <div className="flex items-center text-primary font-semibold text-sm">
                          {method.cta}
                          <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-neutral-card">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Form */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-3xl font-bold text-neutral-dark mb-2">
                      {isBookConsultation ? 'Book Your Consultation' : 'Send Us a Message'}
                    </h2>
                    <p className="text-neutral-mid">
                      {isBookConsultation 
                        ? 'Schedule your free 30-minute consultation with our legal team'
                        : 'Fill out the form below and we\'ll respond within 24 hours'
                      }
                    </p>
                  </div>
                  <div className="hidden md:block">
                    <Shield className="w-12 h-12 text-primary/20" />
                  </div>
                </div>

                {formSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-dark mb-4">
                      Thank You for Contacting Mason Legal
                    </h3>
                    <p className="text-lg text-neutral-mid mb-8 max-w-2xl mx-auto">
                      We've received your message and will contact you within 24 hours 
                      to schedule your consultation or discuss your legal matter.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button
                        onClick={() => setFormSubmitted(false)}
                        className="btn-primary px-8 py-3"
                      >
                        Send Another Message
                      </button>
                      <Link
                        href="/"
                        className="btn-secondary px-8 py-3"
                      >
                        Return to Home
                      </Link>
                    </div>
                  </div>
                ) : (
                  <ContactForm onSuccess={handleFormSubmit} />
                )}
              </div>

              {/* Emergency Contacts */}
              <div className="mt-8 bg-gradient-to-r from-red-50 to-red-100 border border-red-200 rounded-2xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-dark">
                      Emergency Legal Assistance
                    </h3>
                    <p className="text-red-700 text-sm">
                      Available 24/7 for urgent matters
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {emergencyContacts.map((contact, index) => (
                    <div key={index} className="bg-white rounded-lg p-4">
                      <div className="font-semibold text-neutral-dark mb-1">
                        {contact.type}
                      </div>
                      <div className="text-2xl font-bold text-red-600 mb-2">
                        {contact.number}
                      </div>
                      <div className="text-sm text-neutral-mid">
                        {contact.description}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-red-200">
                  <p className="text-sm text-red-700">
                    <strong>Note:</strong> For immediate police, fire, or medical emergencies, 
                    please call 911 first.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar Information */}
            <div className="lg:w-1/3">
              <div className="sticky top-24 space-y-8">
                {/* Office Hours */}
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center space-x-3 mb-6">
                    <Clock className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-bold text-neutral-dark">Office Hours</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {officeHours.map((hours, index) => (
                      <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
                        <div className="font-medium text-neutral-dark">
                          {hours.day}
                        </div>
                        <div className="text-primary font-semibold">
                          {hours.hours}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="flex items-center text-sm text-neutral-mid">
                      <Building className="w-4 h-4 mr-2" />
                      <span>Wheelchair accessible • Free parking available</span>
                    </div>
                  </div>
                </div>

                {/* Meet Our Team */}
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center space-x-3 mb-6">
                    <Users className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-bold text-neutral-dark">Direct Contacts</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {teamMembers.map((member, index) => (
                      <div key={index} className="p-4 bg-gray-50 rounded-lg hover:bg-primary/5 transition-colors">
                        <div className="font-bold text-neutral-dark">
                          {member.name}
                        </div>
                        <div className="text-sm text-primary font-semibold mb-1">
                          {member.role}
                        </div>
                        <div className="text-xs text-neutral-mid mb-2">
                          {member.specialty}
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <a
                            href={`mailto:${member.email}`}
                            className="text-primary hover:text-primary-600"
                          >
                            {member.email}
                          </a>
                          <span className="text-neutral-mid">{member.phone}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Map */}
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center space-x-3 mb-6">
                    <MapPin className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-bold text-neutral-dark">Our Location</h3>
                  </div>
                  
                  <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-primary/40 mx-auto mb-4" />
                      <p className="text-gray-600">Map Integration</p>
                      <p className="text-sm text-gray-500 mt-2">
                        Replace with Google Maps embed
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start">
                      <MapPin className="w-4 h-4 mt-0.5 mr-3 text-primary flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-neutral-dark">Address</div>
                        <div className="text-neutral-mid">
                          123 Justice Avenue, Suite 500<br />
                          New York, NY 10001
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Globe className="w-4 h-4 mr-3 text-primary flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-neutral-dark">Parking & Access</div>
                        <div className="text-neutral-mid">
                          Free garage parking • Wheelchair accessible
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <a
                    href="https://maps.google.com/?q=123+Justice+Avenue+New+York+NY+10001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full mt-6 btn-secondary text-center py-3"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-neutral-mid">
                Common questions about contacting and working with our firm
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition-colors text-left"
                  >
                    <span className="text-lg font-semibold text-neutral-dark">
                      {faq.question}
                    </span>
                    <div className="w-6 h-6 flex items-center justify-center">
                      <div className={`w-4 h-0.5 bg-gray-400 transition-transform ${
                        activeFaq === index ? 'rotate-90' : ''
                      }`} />
                      <div className="w-0.5 h-4 bg-gray-400 absolute transition-opacity ${
                        activeFaq === index ? 'opacity-0' : 'opacity-100'
                      }" />
                    </div>
                  </button>
                  
                  {activeFaq === index && (
                    <div className="p-6 pt-0">
                      <div className="pl-6 border-l-2 border-primary">
                        <p className="text-neutral-mid leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Before You Visit */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
                Preparing for Your Consultation
              </h2>
              <p className="text-xl text-neutral-mid max-w-3xl mx-auto">
                Helpful information to make your visit as productive as possible
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: FileText,
                  title: 'Documents to Bring',
                  items: [
                    'Government-issued ID',
                    'Relevant legal documents',
                    'Financial records',
                    'Correspondence related to your case',
                    'List of questions and concerns',
                  ],
                },
                {
                  icon: Clock,
                  title: 'What to Expect',
                  items: [
                    '30-minute initial consultation',
                    'Confidential discussion',
                    'Case assessment by attorney',
                    'Fee structure explanation',
                    'Next steps outline',
                  ],
                },
                {
                  icon: Shield,
                  title: 'Client Privacy',
                  items: [
                    'Attorney-client privilege applies',
                    'Secure document handling',
                    'Confidential case discussions',
                    'Secure digital communications',
                    'Discretion guaranteed',
                  ],
                },
              ].map((section, index) => {
                const Icon = section.icon
                return (
                  <div key={index} className="card hover:shadow-xl transition-shadow duration-300">
                    <Icon className="w-10 h-10 text-primary mb-6" />
                    <h3 className="text-xl font-bold text-neutral-dark mb-6">
                      {section.title}
                    </h3>
                    <ul className="space-y-3">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-neutral-mid">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Take the Next Step?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Contact us today to schedule your consultation and start working 
              towards a successful resolution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsBookConsultation(true)}
                className="bg-white text-primary hover:bg-neutral-light px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300"
              >
                Book Free Consultation
              </button>
              <a
                href="tel:+15551234567"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Call Now: (555) 123-4567
              </a>
            </div>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-primary-100 text-sm">
              <div>Free Initial Consultation</div>
              <div>Confidential Assessment</div>
              <div>Flexible Scheduling</div>
              <div>Virtual Meetings Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Modal */}
      {isBookConsultation && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="fixed inset-0 bg-black/50" onClick={() => setIsBookConsultation(false)} />
          
          <div className="relative min-h-screen flex items-center justify-center p-4">
            <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden">
              {/* Modal Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-neutral-dark">
                      Book Your Free Consultation
                    </h3>
                    <p className="text-neutral-mid">
                      30-minute confidential consultation with our legal team
                    </p>
                  </div>
                  <button
                    onClick={() => setIsBookConsultation(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>
              
              {/* Modal Content */}
              <div className="p-6">
                <ContactForm 
                  onSuccess={() => {
                    handleFormSubmit()
                    setIsBookConsultation(false)
                  }}
                  isModal={true}
                />
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center text-sm text-neutral-mid">
                    <Shield className="w-4 h-4 mr-2" />
                    <span>
                      All consultations are confidential and protected by attorney-client privilege
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}