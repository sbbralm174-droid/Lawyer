import ServiceCard from '@/components/ServiceCard'
import Link from 'next/link'
import { 
  ArrowRight, 
  BookOpen, 
  Briefcase, 
  Building, 
  Home, 
  Lock, 
  Scale, 
  Shield, 
  Users,
  Zap
} from 'lucide-react'

const practiceAreas = [
  {
    slug: 'family-law',
    title: 'Family Law',
    description: 'Compassionate legal guidance for divorce, child custody, support agreements, adoption, and domestic matters with sensitivity and expertise.',
    icon: Users,
    highlights: [
      'Divorce & Separation',
      'Child Custody & Support',
      'Prenuptial Agreements',
      'Adoption & Guardianship',
      'Domestic Violence Protection'
    ],
    ctaText: 'Family Law Consultation',
  },
  {
    slug: 'estate-planning',
    title: 'Estate Planning',
    description: 'Comprehensive estate planning solutions including wills, trusts, powers of attorney, and probate administration to protect your legacy.',
    icon: Shield,
    highlights: [
      'Wills & Living Trusts',
      'Probate Administration',
      'Power of Attorney',
      'Healthcare Directives',
      'Estate Tax Planning'
    ],
    ctaText: 'Plan Your Legacy',
  },
  {
    slug: 'business-litigation',
    title: 'Business Litigation',
    description: 'Strategic legal representation for business disputes, contract issues, partnership disagreements, and corporate governance matters.',
    icon: Briefcase,
    highlights: [
      'Contract Disputes',
      'Partnership Disagreements',
      'Business Torts',
      'Commercial Collections',
      'Corporate Governance'
    ],
    ctaText: 'Business Legal Support',
  },
  {
    slug: 'real-estate',
    title: 'Real Estate Law',
    description: 'Expert guidance for property transactions, disputes, zoning issues, landlord-tenant matters, and real estate development.',
    icon: Home,
    highlights: [
      'Property Transactions',
      'Landlord-Tenant Disputes',
      'Zoning & Land Use',
      'Title Issues',
      'Real Estate Development'
    ],
    ctaText: 'Real Estate Guidance',
  },
  {
    slug: 'criminal-defense',
    title: 'Criminal Defense',
    description: 'Aggressive defense representation for criminal charges, from misdemeanors to felonies, protecting your rights and freedom.',
    icon: Lock,
    highlights: [
      'DUI/DWI Defense',
      'Drug Crimes',
      'White Collar Crimes',
      'Assault & Violent Crimes',
      'Appeals & Post-Conviction'
    ],
    ctaText: 'Criminal Defense Help',
  },
  {
    slug: 'employment-law',
    title: 'Employment Law',
    description: 'Protecting employee rights and advising employers on compliance, discrimination claims, wrongful termination, and workplace issues.',
    icon: Building,
    highlights: [
      'Wrongful Termination',
      'Discrimination Claims',
      'Wage & Hour Disputes',
      'Employment Contracts',
      'Workplace Harassment'
    ],
    ctaText: 'Employment Law Advice',
  },
  {
    slug: 'personal-injury',
    title: 'Personal Injury',
    description: 'Dedicated representation for accident victims seeking compensation for injuries, medical expenses, and pain and suffering.',
    icon: Zap,
    highlights: [
      'Car Accidents',
      'Slip & Fall Injuries',
      'Medical Malpractice',
      'Workplace Injuries',
      'Product Liability'
    ],
    ctaText: 'Injury Case Evaluation',
  },
  {
    slug: 'intellectual-property',
    title: 'Intellectual Property',
    description: 'Protecting your innovations, trademarks, copyrights, and trade secrets through registration, licensing, and enforcement.',
    icon: BookOpen,
    highlights: [
      'Trademark Registration',
      'Copyright Protection',
      'Patent Applications',
      'IP Licensing',
      'Trade Secret Protection'
    ],
    ctaText: 'Protect Your IP',
  },
]

const stats = [
  { label: 'Years Experience', value: '15+' },
  { label: 'Practice Areas', value: '8+' },
  { label: 'Cases Resolved', value: '500+' },
  { label: 'Success Rate', value: '95%' },
]

const processSteps = [
  {
    number: '01',
    title: 'Initial Consultation',
    description: 'Free confidential case evaluation to understand your legal needs and goals.',
  },
  {
    number: '02',
    title: 'Case Strategy',
    description: 'Develop a tailored legal strategy with clear objectives and milestones.',
  },
  {
    number: '03',
    title: 'Legal Action',
    description: 'Execute the strategy through negotiation, mediation, or litigation.',
  },
  {
    number: '04',
    title: 'Resolution & Support',
    description: 'Achieve resolution and provide ongoing legal guidance as needed.',
  },
]

export const metadata = {
  title: 'Practice Areas | Comprehensive Legal Services',
  description: 'Expert legal services in family law, estate planning, business litigation, real estate, criminal defense, employment law, personal injury, and intellectual property.',
  keywords: 'legal services, practice areas, family law, estate planning, business litigation, real estate law',
  openGraph: {
    title: 'Practice Areas | Mason Legal',
    description: 'Comprehensive legal services across multiple practice areas with expert representation.',
  },
}

export default function PracticePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-white to-accent/5 py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Scale className="w-5 h-5" />
              <span className="font-semibold">Expert Legal Representation</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-neutral-dark mb-6">
              Comprehensive <span className="text-primary">Legal Services</span>
            </h1>
            
            <p className="text-xl text-neutral-mid mb-8 max-w-3xl mx-auto leading-relaxed">
              Specialized legal expertise across multiple practice areas. Our attorneys 
              combine deep knowledge with personalized attention to achieve optimal outcomes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact?book=true"
                className="btn-primary inline-flex items-center justify-center group"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#process"
                className="btn-secondary inline-flex items-center justify-center"
              >
                Learn Our Process
              </Link>
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
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-neutral-mid font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Practice Areas */}
      <section className="py-20 bg-neutral-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
              Our Practice Areas
            </h2>
            <p className="text-xl text-neutral-mid max-w-3xl mx-auto">
              Each area is handled by attorneys with specialized expertise and 
              a track record of successful outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {practiceAreas.map((area) => (
              <div key={area.slug} className="group">
                <Link href={`/practice/${area.slug}`}>
                  <div className="card h-full hover:border-primary/20 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                    <div className="mb-6">
                      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <area.icon className="w-7 h-7 text-primary group-hover:text-white" />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-neutral-dark mb-4 group-hover:text-primary transition-colors">
                      {area.title}
                    </h3>
                    
                    <p className="text-neutral-mid mb-6 text-sm leading-relaxed">
                      {area.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-neutral-dark mb-3">
                        Key Services:
                      </h4>
                      <ul className="space-y-2">
                        {area.highlights.slice(0, 3).map((highlight, idx) => (
                          <li key={idx} className="flex items-center text-sm text-neutral-mid">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center text-primary font-semibold text-sm mt-auto pt-4 border-t border-gray-100">
                      <span>Learn More</span>
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
              Our Legal Process
            </h2>
            <p className="text-xl text-neutral-mid max-w-3xl mx-auto">
              A structured approach that ensures clarity, efficiency, and optimal results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="card text-center hover:shadow-xl transition-all duration-300">
                  <div className="text-5xl font-bold text-primary/10 mb-6">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-dark mb-4">
                    {step.title}
                  </h3>
                  <p className="text-neutral-mid">
                    {step.description}
                  </p>
                </div>
                
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-6">
                  Specialized <span className="text-primary">Expertise</span>
                </h2>
                <p className="text-lg text-neutral-mid mb-8 leading-relaxed">
                  Our attorneys bring specialized knowledge and experience to each case. 
                  We stay current with legal developments and leverage our expertise to 
                  provide strategic advantages.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Scale className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-dark mb-2">
                        Case-Specific Strategy
                      </h4>
                      <p className="text-neutral-mid">
                        Customized legal approaches based on the unique circumstances 
                        of each case and client goals.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-dark mb-2">
                        Collaborative Approach
                      </h4>
                      <p className="text-neutral-mid">
                        Working closely with clients through every step, ensuring 
                        clear communication and shared understanding.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-dark mb-2">
                        Ethical Excellence
                      </h4>
                      <p className="text-neutral-mid">
                        Maintaining the highest ethical standards while aggressively 
                        pursuing your legal objectives.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-neutral-dark mb-6">
                  Which Service Do You Need?
                </h3>
                
                <div className="space-y-6">
                  {practiceAreas.slice(0, 4).map((area) => (
                    <Link
                      key={area.slug}
                      href={`/practice/${area.slug}`}
                      className="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-primary hover:shadow-md transition-all duration-300 group"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors">
                          <area.icon className="w-5 h-5 text-primary group-hover:text-white" />
                        </div>
                        <span className="font-medium text-neutral-dark group-hover:text-primary">
                          {area.title}
                        </span>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-transform" />
                    </Link>
                  ))}
                  
                  <div className="pt-4 border-t">
                    <Link
                      href="/contact"
                      className="btn-primary w-full text-center py-4"
                    >
                      Not Sure? Get Personalized Advice
                    </Link>
                  </div>
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
                Common questions about our legal services and process
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  q: 'How much do your legal services cost?',
                  a: 'Our fees vary based on case complexity and practice area. We offer transparent pricing with options including hourly rates, flat fees, and contingency arrangements. During your initial consultation, we\'ll provide a clear fee estimate.',
                },
                {
                  q: 'How long does a typical case take?',
                  a: 'Case duration depends on many factors including complexity, court schedules, and whether settlement is possible. Some matters resolve in weeks, while complex litigation may take months or years. We\'ll provide a realistic timeline during our initial assessment.',
                },
                {
                  q: 'What should I bring to my initial consultation?',
                  a: 'Bring any relevant documents related to your case (contracts, court papers, correspondence, etc.), identification, and a list of questions. We\'ll guide you on specific documents needed for your particular situation.',
                },
                {
                  q: 'Do you offer payment plans?',
                  a: 'Yes, we work with clients to develop payment arrangements that accommodate their financial situation while ensuring quality representation. We discuss all financial arrangements upfront.',
                },
                {
                  q: 'What makes your firm different from others?',
                  a: 'We combine deep legal expertise with personalized attention. Our attorneys specialize in specific practice areas, we maintain open communication, and we\'re committed to achieving the best possible outcomes through strategic, ethical representation.',
                },
              ].map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer bg-white hover:bg-gray-50 transition-colors">
                      <span className="font-semibold text-neutral-dark text-lg">
                        {faq.q}
                      </span>
                      <div className="w-6 h-6 flex items-center justify-center">
                        <div className="w-5 h-0.5 bg-gray-400 group-open:rotate-90 transition-transform duration-300" />
                        <div className="w-0.5 h-5 bg-gray-400 absolute group-open:opacity-0 transition-opacity duration-300" />
                      </div>
                    </summary>
                    <div className="p-6 pt-0">
                      <p className="text-neutral-mid leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
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
                href="/contact?book=true"
                className="bg-white text-primary hover:bg-neutral-light px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300"
              >
                Book Free Consultation
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Call Now: (555) 123-4567
              </Link>
            </div>
            <p className="mt-8 text-primary-100 text-sm">
              Office hours: Monday-Friday 9am-5pm • Emergency consultations available
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}