'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { 
  Calendar,
  CheckCircle,
  Download,
  FileText,
  Mail,
  MapPin,
  Phone,
  Printer,
  Share2,
  User,
  Video
} from 'lucide-react'

export default function ConfirmationPage() {
  const params = useParams()
  const router = useRouter()
  const [booking, setBooking] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // In production, fetch booking details from API
    const fetchBooking = async () => {
      try {
        // Simulate API call
        setTimeout(() => {
          setBooking({
            id: params.id,
            name: 'John Smith',
            email: 'john@example.com',
            date: '2024-03-20',
            time: '10:00 AM',
            attorney: 'James Mason',
            type: 'Initial Consultation',
            mode: 'video',
            caseType: 'Family Law',
            status: 'confirmed',
          })
          setLoading(false)
        }, 1000)
      } catch (error) {
        console.error('Error fetching booking:', error)
        setLoading(false)
      }
    }

    fetchBooking()
  }, [params.id])

  const handlePrint = () => {
    window.print()
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Consultation Confirmation - Mason Legal',
          text: `Your consultation with Mason Legal is confirmed for ${booking.date} at ${booking.time}`,
          url: window.location.href,
        })
      } catch (error) {
        console.log('Sharing cancelled')
      }
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-neutral-mid">Loading your confirmation...</p>
        </div>
      </div>
    )
  }

  if (!booking) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-neutral-dark mb-4">Booking Not Found</h2>
          <p className="text-neutral-mid mb-6">The requested booking confirmation could not be found.</p>
          <Link href="/book-consultation" className="btn-primary">
            Book New Consultation
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-neutral-card">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Success Header */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
              Consultation Confirmed!
            </h1>
            <p className="text-xl text-neutral-mid">
              Your appointment has been scheduled. Check your email for details.
            </p>
          </div>

          {/* Booking Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
              <div>
                <div className="text-sm text-neutral-mid mb-2">Booking Reference</div>
                <div className="text-2xl font-bold text-primary">{booking.id}</div>
              </div>
              <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <button
                  onClick={handlePrint}
                  className="flex items-center text-primary hover:text-primary-600"
                >
                  <Printer className="w-5 h-5 mr-2" />
                  Print
                </button>
                <button
                  onClick={handleShare}
                  className="flex items-center text-primary hover:text-primary-600"
                >
                  <Share2 className="w-5 h-5 mr-2" />
                  Share
                </button>
                <Link
                  href={`/book-consultation?reschedule=${booking.id}`}
                  className="text-primary hover:text-primary-600 font-semibold"
                >
                  Reschedule
                </Link>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Appointment Details */}
              <div>
                <h3 className="text-lg font-bold text-neutral-dark mb-6">Appointment Details</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Calendar className="w-5 h-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <div className="text-sm text-neutral-mid">Date & Time</div>
                      <div className="font-semibold text-neutral-dark">
                        {new Date(booking.date).toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          month: 'long', 
                          day: 'numeric',
                          year: 'numeric'
                        })} at {booking.time}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <User className="w-5 h-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <div className="text-sm text-neutral-mid">Attorney</div>
                      <div className="font-semibold text-neutral-dark">{booking.attorney}</div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <FileText className="w-5 h-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <div className="text-sm text-neutral-mid">Consultation Type</div>
                      <div className="font-semibold text-neutral-dark">{booking.type}</div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    {booking.mode === 'video' ? (
                      <Video className="w-5 h-5 text-primary mr-3 mt-0.5" />
                    ) : (
                      <MapPin className="w-5 h-5 text-primary mr-3 mt-0.5" />
                    )}
                    <div>
                      <div className="text-sm text-neutral-mid">Meeting Type</div>
                      <div className="font-semibold text-neutral-dark">
                        {booking.mode === 'video' ? 'Video Consultation' : 'In-Person Meeting'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Client Information */}
              <div>
                <h3 className="text-lg font-bold text-neutral-dark mb-6">Your Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <User className="w-5 h-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <div className="text-sm text-neutral-mid">Name</div>
                      <div className="font-semibold text-neutral-dark">{booking.name}</div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <div className="text-sm text-neutral-mid">Email</div>
                      <div className="font-semibold text-neutral-dark">{booking.email}</div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <FileText className="w-5 h-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <div className="text-sm text-neutral-mid">Case Type</div>
                      <div className="font-semibold text-neutral-dark">{booking.caseType}</div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-5 h-5 text-primary mr-3 mt-0.5 flex items-center justify-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div>
                      <div className="text-sm text-neutral-mid">Status</div>
                      <div className="font-semibold text-green-600">Confirmed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Notes */}
            <div className="mt-8 pt-8 border-t">
              <h4 className="font-bold text-neutral-dark mb-4">Important Information</h4>
              <ul className="space-y-3 text-sm text-neutral-mid">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Check your email for the meeting link (video) or office directions (in-person)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Please arrive 10 minutes early for in-person meetings</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Bring identification and any relevant documents</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Cancellations must be made 24 hours in advance</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            <a
              href="/cal.ics" // In production, generate actual calendar file
              download={`consultation-${booking.id}.ics`}
              className="bg-white border-2 border-primary text-primary rounded-xl p-6 text-center hover:bg-primary/5 transition-colors"
            >
              <Download className="w-8 h-8 mx-auto mb-3" />
              <div className="font-semibold">Add to Calendar</div>
            </a>

            <a
              href={`mailto:contact@masonlegal.com?subject=Question about booking ${booking.id}`}
              className="bg-white border-2 border-primary text-primary rounded-xl p-6 text-center hover:bg-primary/5 transition-colors"
            >
              <Mail className="w-8 h-8 mx-auto mb-3" />
              <div className="font-semibold">Email Questions</div>
            </a>

            <a
              href="tel:+15551234567"
              className="bg-white border-2 border-primary text-primary rounded-xl p-6 text-center hover:bg-primary/5 transition-colors"
            >
              <Phone className="w-8 h-8 mx-auto mb-3" />
              <div className="font-semibold">Call for Help</div>
            </a>
          </div>

          {/* Next Steps */}
          <div className="bg-gradient-to-r from-primary to-primary-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">What Happens Next?</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold mb-4">1</div>
                <div className="font-semibold mb-2">Confirmation Email</div>
                <p className="text-primary-100 text-sm">
                  Detailed instructions will be sent to your email within 24 hours
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-4">2</div>
                <div className="font-semibold mb-2">Preparation</div>
                <p className="text-primary-100 text-sm">
                  Gather your documents and prepare questions for the consultation
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-4">3</div>
                <div className="font-semibold mb-2">Reminder</div>
                <p className="text-primary-100 text-sm">
                  You'll receive a reminder 24 hours before your appointment
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link
              href="/"
              className="btn-primary px-8 py-4"
            >
              Return to Home
            </Link>
            <p className="mt-6 text-neutral-mid">
              Need immediate assistance? Call us at <a href="tel:+15551234567" className="text-primary font-semibold">(555) 123-4567</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}