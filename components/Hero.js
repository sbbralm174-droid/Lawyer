import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, Scale } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-neutral-light via-white to-primary/5">
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
              <Scale size={20} />
              <span className="font-semibold">Trusted Legal Excellence</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight">
              Expert Legal Counsel with{' '}
              <span className="text-primary">Integrity</span> & Precision
            </h1>
            
            <p className="text-xl text-neutral-mid max-w-2xl">
              With over 15 years of experience, we provide personalized legal solutions 
              that protect your rights and secure your future. Your success is our commitment.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/contact?book=true"
                className="btn-primary inline-flex items-center justify-center group"
              >
                Book Free Consultation
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/practice"
                className="btn-secondary inline-flex items-center justify-center"
              >
                View Practice Areas
              </Link>
            </div>
            
            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-neutral-mid">Years Experience</div>
              </div>
              <div className="h-12 w-px bg-gray-300" />
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-neutral-mid">Cases Resolved</div>
              </div>
              <div className="h-12 w-px bg-gray-300" />
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-neutral-mid">Client Satisfaction</div>
              </div>
            </div>
          </div>
          
          {/* Portrait */}
          <div className="relative">
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl opacity-50" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[3/4] relative">
                  <Image
                    src="/images/portrait.jpg"
                    alt="Attorney James Mason - Experienced Legal Counsel"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-8">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold">James Mason</h3>
                    <p className="text-primary-100">Principal Attorney</p>
                    <p className="text-sm mt-2 text-white/90">
                      Harvard Law School, Member of State Bar Association
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 -left-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-60 h-60 bg-accent/5 rounded-full blur-3xl" />
    </section>
  )
}