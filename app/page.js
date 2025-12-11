import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import Link from 'next/link'
import { ArrowRight, Award, Shield, Users } from 'lucide-react'

const featuredServices = [
  {
    title: 'Family Law',
    description: 'Divorce, child custody, support agreements, and adoption proceedings with compassion and diligence.',
    icon: Users,
    href: '/practice/family-law',
  },
  {
    title: 'Estate Planning',
    description: 'Wills, trusts, powers of attorney, and probate administration to protect your legacy.',
    icon: Shield,
    href: '/practice/estate-planning',
  },
  {
    title: 'Business Litigation',
    description: 'Contract disputes, partnership disagreements, and corporate legal strategy for businesses.',
    icon: Award,
    href: '/practice/business-litigation',
  },
]

export default function HomePage() {
  return (
    <>
      <Hero />
      
      {/* Featured Services */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
              Expert Legal Services
            </h2>
            <p className="text-xl text-neutral-mid max-w-3xl mx-auto">
              Comprehensive legal solutions tailored to your unique needs, 
              delivered with expertise and personal attention.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/practice"
              className="inline-flex items-center text-primary font-semibold hover:text-primary-600 group"
            >
              View All Practice Areas
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-24 bg-neutral-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-neutral-mid max-w-3xl mx-auto">
              Hear from clients who have trusted us with their most important legal matters.
            </p>
          </div>
          
          <TestimonialsCarousel />
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Protect Your Rights?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Schedule a confidential consultation to discuss your legal needs 
              and discover how we can help you achieve the best possible outcome.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/booking"
                className="bg-white text-primary hover:bg-neutral-light px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300"
              >
                Book Free Consultation
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Contact Our Office
              </Link>
            </div>
            <p className="mt-8 text-primary-100">
              Call us directly: <a href="tel:+15551234567" className="font-semibold hover:text-white">(555) 123-4567</a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}