import Image from 'next/image'
import Link from 'next/link'
import { 
  Award, 
  Calendar, 
  ChevronRight, 
  DollarSign, 
  FileText, 
  Home,
  Lock,
  BookOpen,
  Building,
  Filter, 
  Scale, 
  Search, 
  Shield, 
  Tag, 
  Users,
  Zap,
  Briefcase
} from 'lucide-react'

const caseStudies = [
  {
    id: 1,
    slug: 'high-asset-divorce-resolution',
    title: 'High-Asset Divorce Resolution',
    category: 'Family Law',
    client: 'Confidential Tech Executive',
    challenge: 'Complex division of $50M+ in assets including multiple businesses, international properties, and complex investments.',
    solution: 'Comprehensive forensic accounting, strategic negotiation, and creative settlement structuring.',
    result: 'Client retained primary business interests and favorable custody arrangement. 40% reduction in potential tax liabilities.',
    outcome: 'Multi-million dollar settlement preserving business continuity.',
    duration: '18 months',
    value: '$50M+',
    icon: Users,
    tags: ['Divorce', 'Asset Division', 'Business Valuation', 'Tax Planning'],
    featured: true,
  },
  {
    id: 2,
    slug: 'corporate-partnership-dispute',
    title: 'Corporate Partnership Dispute',
    category: 'Business Litigation',
    client: 'Mid-Sized Manufacturing Company',
    challenge: 'Founding partners in deadlock over company direction and profit distribution.',
    solution: 'Strategic mediation followed by structured buyout agreement with phased transition.',
    result: 'Peaceful separation allowing both parties to pursue independent ventures.',
    outcome: 'Business continuity maintained with minimal operational disruption.',
    duration: '9 months',
    value: '$12M',
    icon: Briefcase,
    tags: ['Partnership', 'Buyout', 'Mediation', 'Corporate Governance'],
    featured: true,
  },
  {
    id: 3,
    slug: 'estate-tax-minimization',
    title: 'Estate Tax Minimization Strategy',
    category: 'Estate Planning',
    client: 'Multi-Generational Family',
    challenge: '$75M estate facing significant tax burden threatening family legacy.',
    solution: 'Multi-generational trust structure with charitable giving components.',
    result: 'Estimated $15M in tax savings while preserving family control.',
    outcome: 'Legacy secured for future generations with philanthropic impact.',
    duration: '6 months',
    value: '$75M',
    icon: Shield,
    tags: ['Trusts', 'Tax Planning', 'Wealth Transfer', 'Charitable Giving'],
    featured: false,
  },
  {
    id: 4,
    slug: 'commercial-real-estate-dispute',
    title: 'Commercial Real Estate Contract Dispute',
    category: 'Real Estate Law',
    client: 'Commercial Property Developer',
    challenge: 'Breach of $25M development contract with multiple subcontractors.',
    solution: 'Aggressive litigation strategy combined with targeted settlement negotiations.',
    result: 'Full contract enforcement with additional damages awarded.',
    outcome: 'Project completion with enhanced profit margins.',
    duration: '14 months',
    value: '$25M',
    icon: Home,
    tags: ['Contract Law', 'Construction', 'Commercial Litigation', 'Damages'],
    featured: false,
  },
  {
    id: 5,
    slug: 'white-collar-criminal-defense',
    title: 'White-Collar Criminal Defense',
    category: 'Criminal Defense',
    client: 'Corporate Executive',
    challenge: 'Federal fraud charges carrying potential 10-year sentence.',
    solution: 'Comprehensive evidence review and strategic plea negotiations.',
    result: 'Charges reduced, sentence minimized to probation with restitution.',
    outcome: 'Client avoided prison, preserved professional reputation.',
    duration: '22 months',
    value: 'Priceless',
    icon: Lock,
    tags: ['Fraud Defense', 'Federal Court', 'Plea Negotiation', 'Probation'],
    featured: false,
  },
  {
    id: 6,
    slug: 'wrongful-termination-settlement',
    title: 'Wrongful Termination Class Action',
    category: 'Employment Law',
    client: 'Group of 45 Former Employees',
    challenge: 'Systematic age discrimination and wrongful termination practices.',
    solution: 'Class action certification followed by aggressive discovery.',
    result: '$8.5M settlement for affected employees.',
    outcome: 'Corporate policy reforms implemented.',
    duration: '16 months',
    value: '$8.5M',
    icon: Building,
    tags: ['Class Action', 'Discrimination', 'Settlement', 'Policy Reform'],
    featured: false,
  },
  {
    id: 7,
    slug: 'medical-malpractice-victory',
    title: 'Medical Malpractice Victory',
    category: 'Personal Injury',
    client: 'Medical Procedure Patient',
    challenge: 'Life-altering surgical error causing permanent disability.',
    solution: 'Expert medical testimony and comprehensive damages analysis.',
    result: '$12M jury verdict for lifetime care and lost earnings.',
    outcome: 'Client secured financial stability for ongoing medical needs.',
    duration: '3 years',
    value: '$12M',
    icon: Zap,
    tags: ['Medical Malpractice', 'Jury Trial', 'Expert Testimony', 'Damages'],
    featured: true,
  },
  {
    id: 8,
    slug: 'trademark-infringement-protection',
    title: 'Trademark Infringement Protection',
    category: 'Intellectual Property',
    client: 'Emerging Tech Startup',
    challenge: 'Major competitor infringing on patented technology.',
    solution: 'Cease and desist followed by licensing agreement negotiations.',
    result: 'Favorable licensing terms generating recurring revenue.',
    outcome: 'Market position protected with new revenue stream.',
    duration: '8 months',
    value: '$5M+ Licensing',
    icon: BookOpen,
    tags: ['Trademark', 'Patent', 'Licensing', 'Technology'],
    featured: false,
  },
]

const categories = [
  { name: 'All Cases', count: caseStudies.length, icon: Scale },
  { name: 'Family Law', count: caseStudies.filter(c => c.category === 'Family Law').length, icon: Users },
  { name: 'Business Litigation', count: caseStudies.filter(c => c.category === 'Business Litigation').length, icon: Briefcase },
  { name: 'Estate Planning', count: caseStudies.filter(c => c.category === 'Estate Planning').length, icon: Shield },
  { name: 'Real Estate', count: caseStudies.filter(c => c.category === 'Real Estate Law').length, icon: Home },
  { name: 'Criminal Defense', count: caseStudies.filter(c => c.category === 'Criminal Defense').length, icon: Lock },
  { name: 'Employment Law', count: caseStudies.filter(c => c.category === 'Employment Law').length, icon: Building },
  { name: 'Personal Injury', count: caseStudies.filter(c => c.category === 'Personal Injury').length, icon: Zap },
  { name: 'Intellectual Property', count: caseStudies.filter(c => c.category === 'Intellectual Property').length, icon: BookOpen },
]

const stats = [
  { label: 'Cases Won', value: '95%', description: 'Success Rate' },
  { label: 'Client Satisfaction', value: '98%', description: '5-Star Reviews' },
  { label: 'Total Value', value: '$200M+', description: 'Client Recoveries' },
  { label: 'Years Experience', value: '15+', description: 'Collective Experience' },
]

export const metadata = {
  title: 'Case Studies | Legal Success Stories & Client Wins',
  description: 'Explore our track record of successful case resolutions across family law, business litigation, estate planning, and more. Real results from real clients.',
  keywords: 'legal case studies, success stories, client wins, litigation results, law firm portfolio',
  openGraph: {
    title: 'Case Studies | Mason Legal Success Stories',
    description: 'See how we\'ve helped clients achieve successful outcomes in complex legal matters.',
  },
}

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-white to-accent/5 py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Award className="w-5 h-5" />
              <span className="font-semibold">Proven Results</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-neutral-dark mb-6">
              Legal <span className="text-primary">Success Stories</span>
            </h1>
            
            <p className="text-xl text-neutral-mid mb-8 max-w-3xl mx-auto leading-relaxed">
              Real cases. Real results. Explore our portfolio of successful outcomes 
              across diverse legal challenges and practice areas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact?book=true"
                className="btn-primary inline-flex items-center justify-center group"
              >
                Schedule Strategy Session
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#featured-cases"
                className="btn-secondary inline-flex items-center justify-center"
              >
                View Featured Cases
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
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-neutral-dark font-semibold mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-neutral-mid">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cases */}
      <section id="featured-cases" className="py-20 bg-neutral-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
              Featured Case Studies
            </h2>
            <p className="text-xl text-neutral-mid max-w-3xl mx-auto">
              Highlighted success stories demonstrating our approach to complex legal challenges
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {caseStudies
              .filter(caseStudy => caseStudy.featured)
              .map((caseStudy) => {
                const Icon = caseStudy.icon
                return (
                  <div key={caseStudy.id} className="group">
                    <Link href={`/case-studies/${caseStudy.slug}`}>
                      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                        {/* Case Header */}
                        <div className="p-8 border-b border-gray-100">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-3">
                              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                                <Icon className="w-6 h-6 text-primary" />
                              </div>
                              <div>
                                <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                                  {caseStudy.category}
                                </span>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-primary">
                                {caseStudy.value}
                              </div>
                              <div className="text-xs text-neutral-mid">Case Value</div>
                            </div>
                          </div>
                          
                          <h3 className="text-2xl font-bold text-neutral-dark mb-4 group-hover:text-primary transition-colors">
                            {caseStudy.title}
                          </h3>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {caseStudy.tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="inline-flex items-center text-xs bg-gray-100 text-neutral-mid px-3 py-1 rounded-full"
                              >
                                <Tag className="w-3 h-3 mr-1" />
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Case Body */}
                        <div className="p-8">
                          <div className="grid md:grid-cols-3 gap-6 mb-6">
                            <div>
                              <div className="text-sm text-neutral-mid mb-1">Duration</div>
                              <div className="flex items-center font-semibold text-neutral-dark">
                                <Calendar className="w-4 h-4 mr-2 text-primary" />
                                {caseStudy.duration}
                              </div>
                            </div>
                            <div>
                              <div className="text-sm text-neutral-mid mb-1">Client</div>
                              <div className="font-semibold text-neutral-dark">
                                {caseStudy.client}
                              </div>
                            </div>
                            <div>
                              <div className="text-sm text-neutral-mid mb-1">Outcome</div>
                              <div className="font-semibold text-neutral-dark line-clamp-2">
                                {caseStudy.outcome}
                              </div>
                            </div>
                          </div>

                          <div className="space-y-4">
                            <div>
                              <h4 className="text-sm font-semibold text-neutral-dark mb-2">
                                The Challenge
                              </h4>
                              <p className="text-sm text-neutral-mid line-clamp-2">
                                {caseStudy.challenge}
                              </p>
                            </div>
                            
                            <div>
                              <h4 className="text-sm font-semibold text-neutral-dark mb-2">
                                Our Solution
                              </h4>
                              <p className="text-sm text-neutral-mid line-clamp-2">
                                {caseStudy.solution}
                              </p>
                            </div>
                          </div>

                          <div className="mt-6 pt-6 border-t border-gray-100">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center text-primary font-semibold group-hover:text-primary-600">
                                Read Full Case Study
                                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                              </div>
                              <div className="text-xs text-neutral-mid">
                                Confidentiality maintained
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                )
              })}
          </div>
        </div>
      </section>

      {/* Filter & All Cases */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar Filters */}
            <div className="lg:w-1/4">
              <div className="sticky top-24">
                <div className="mb-8">
                  <div className="flex items-center space-x-2 mb-6">
                    <Filter className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-bold text-neutral-dark">Filter Cases</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {categories.map((category) => {
                      const Icon = category.icon
                      return (
                        <button
                          key={category.name}
                          className="w-full flex items-center justify-between p-4 rounded-xl border border-gray-200 hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
                        >
                          <div className="flex items-center space-x-3">
                            <Icon className="w-5 h-5 text-neutral-mid group-hover:text-primary" />
                            <span className="font-medium text-neutral-dark group-hover:text-primary">
                              {category.name}
                            </span>
                          </div>
                          <span className="text-sm bg-gray-100 text-neutral-mid px-2 py-1 rounded group-hover:bg-primary group-hover:text-white">
                            {category.count}
                          </span>
                        </button>
                      )
                    })}
                  </div>
                </div>
                
                {/* Search */}
                <div className="mb-8">
                  <div className="flex items-center space-x-2 mb-4">
                    <Search className="w-5 h-5 text-primary" />
                    <h4 className="font-semibold text-neutral-dark">Search Cases</h4>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search case studies..."
                      className="w-full px-4 py-3 pl-10 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  </div>
                </div>
                
                {/* CTA Sidebar */}
                <div className="bg-gradient-to-br from-primary to-primary-600 rounded-2xl p-6 text-white">
                  <h4 className="text-xl font-bold mb-4">Need Similar Results?</h4>
                  <p className="text-primary-100 mb-6">
                    Schedule a consultation to discuss how we can achieve success in your case.
                  </p>
                  <Link
                    href="/contact?book=true"
                    className="block w-full bg-white text-primary text-center font-semibold py-3 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Book Strategy Session
                  </Link>
                </div>
              </div>
            </div>

            {/* All Cases Grid */}
            <div className="lg:w-3/4">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-neutral-dark mb-4">
                  All Case Studies
                </h2>
                <p className="text-neutral-mid">
                  Browse our complete portfolio of successful case resolutions
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {caseStudies.map((caseStudy) => {
                  const Icon = caseStudy.icon
                  return (
                    <div key={caseStudy.id} className="group">
                      <Link href={`/case-studies/${caseStudy.slug}`}>
                        <div className="bg-white rounded-xl border border-gray-200 hover:border-primary hover:shadow-lg transition-all duration-300 h-full">
                          <div className="p-6">
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                  <Icon className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                  <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded">
                                    {caseStudy.category}
                                  </span>
                                </div>
                              </div>
                              {caseStudy.featured && (
                                <span className="inline-flex items-center text-xs bg-accent/10 text-accent px-2 py-1 rounded">
                                  <Award className="w-3 h-3 mr-1" />
                                  Featured
                                </span>
                              )}
                            </div>
                            
                            <h3 className="text-lg font-bold text-neutral-dark mb-3 group-hover:text-primary transition-colors line-clamp-2">
                              {caseStudy.title}
                            </h3>
                            
                            <p className="text-sm text-neutral-mid mb-4 line-clamp-2">
                              {caseStudy.challenge}
                            </p>
                            
                            <div className="flex items-center justify-between mb-4">
                              <div className="flex items-center text-sm text-neutral-mid">
                                <Calendar className="w-4 h-4 mr-1" />
                                {caseStudy.duration}
                              </div>
                              <div className="text-sm font-semibold text-primary">
                                {caseStudy.value}
                              </div>
                            </div>
                            
                            <div className="flex flex-wrap gap-2 mb-4">
                              {caseStudy.tags.slice(0, 2).map((tag) => (
                                <span
                                  key={tag}
                                  className="text-xs bg-gray-100 text-neutral-mid px-2 py-1 rounded"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                            
                            <div className="pt-4 border-t border-gray-100">
                              <div className="flex items-center text-primary font-medium text-sm group-hover:text-primary-600">
                                View Details
                                <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  )
                })}
              </div>
              
              {/* Load More / Pagination */}
              <div className="mt-12 text-center">
                <button className="btn-secondary px-8 py-3">
                  Load More Cases
                </button>
                <p className="text-sm text-neutral-mid mt-4">
                  Showing {caseStudies.length} of {caseStudies.length} case studies
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Showcase */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
                Our Winning Strategy
              </h2>
              <p className="text-xl text-neutral-mid max-w-3xl mx-auto">
                The systematic approach that delivers consistent results across diverse legal challenges
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Deep Analysis',
                  description: 'Comprehensive case assessment identifying strengths, weaknesses, and strategic opportunities.',
                },
                {
                  step: '02',
                  title: 'Custom Strategy',
                  description: 'Tailored legal approach designed specifically for your unique circumstances and goals.',
                },
                {
                  step: '03',
                  title: 'Execution',
                  description: 'Precise implementation with attention to detail and proactive issue management.',
                },
                {
                  step: '04',
                  title: 'Optimal Resolution',
                  description: 'Pursuing the best possible outcome through negotiation, mediation, or litigation.',
                },
              ].map((step) => (
                <div key={step.step} className="text-center">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-neutral-dark mb-3">
                    {step.title}
                  </h3>
                  <p className="text-neutral-mid">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
                Client Perspectives
              </h2>
              <p className="text-xl text-neutral-mid">
                What our clients say about working with us
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  quote: "The team at Mason Legal turned what seemed like an impossible situation into a favorable outcome. Their strategic thinking and attention to detail were exceptional.",
                  author: "Former Business Litigation Client",
                  case: "Corporate Partnership Dispute",
                },
                {
                  quote: "During the most difficult time of my life, they provided not just legal expertise but genuine care and support. I felt protected every step of the way.",
                  author: "Family Law Client",
                  case: "High-Asset Divorce",
                },
                {
                  quote: "Their estate planning strategy saved our family millions in taxes and preserved our legacy exactly as we envisioned. Worth every penny.",
                  author: "Estate Planning Client",
                  case: "Multi-Generational Wealth Transfer",
                },
                {
                  quote: "When other firms said my case was too complex, Mason Legal developed a creative solution that achieved results beyond my expectations.",
                  author: "Real Estate Client",
                  case: "Commercial Development Dispute",
                },
              ].map((testimonial, index) => (
                <div key={index} className="card hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  <p className="text-lg text-neutral-dark italic mb-6">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="pt-6 border-t border-gray-100">
                    <div className="font-semibold text-neutral-dark">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-neutral-mid">
                      {testimonial.case}
                    </div>
                  </div>
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
            <Scale className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Let's discuss how we can achieve similar results for your legal matter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact?book=true"
                className="bg-white text-primary hover:bg-neutral-light px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300"
              >
                Schedule Confidential Review
              </Link>
              <a
                href="tel:+15551234567"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Call Now: (555) 123-4567
              </a>
            </div>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-primary-100 text-sm">
              <div>Free Case Evaluation</div>
              <div>Confidential Consultation</div>
              <div>No Obligation</div>
              <div>Flexible Payment Options</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}