import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ArrowLeft, 
  Calendar, 
  CheckCircle, 
  ChevronRight, 
  DollarSign, 
  FileText, 
  Home, 
  Lock, 
  Shield, 
  Tag, 
  Users,
  Zap,
  Briefcase,
  Building,
  BookOpen
} from 'lucide-react'

// Mock data - in production, this would come from a CMS or database
const caseStudies = {
  'high-asset-divorce-resolution': {
    id: 1,
    title: 'High-Asset Divorce Resolution',
    category: 'Family Law',
    client: 'Confidential Tech Executive',
    challenge: `The client, a successful tech entrepreneur, faced a complex divorce involving over $50 million in assets. The marital estate included multiple technology businesses, international real estate holdings, complex investment portfolios, and significant intellectual property rights. The primary challenges included:
    
• Accurate valuation of rapidly growing technology companies
• Division of international assets across multiple jurisdictions
• Protection of business continuity during divorce proceedings
• Minimization of tax liabilities on asset transfers
• Custody arrangements for two minor children`,
    
    solution: `We implemented a multi-faceted strategy that combined forensic accounting, strategic negotiation, and creative legal structuring:

1. **Comprehensive Forensic Analysis**
   - Engaged specialized valuation experts for technology companies
   - Conducted international asset tracing
   - Analyzed tax implications of various division scenarios

2. **Strategic Negotiation Framework**
   - Developed phased negotiation approach
   - Created multiple settlement scenarios with clear trade-offs
   - Implemented confidentiality protocols to protect business interests

3. **Creative Settlement Structure**
   - Structured settlement to preserve business continuity
   - Implemented phased asset transfers to minimize tax impact
   - Established trusts for children's education and future needs

4. **Child-Centered Approach**
   - Developed parenting plan prioritizing stability
   - Coordinated with child psychologists for optimal arrangements
   - Created communication protocols between households`,
    
    result: `The settlement achieved exceptional outcomes across all key areas:

**Asset Division**
• Client retained 100% ownership of primary technology business
• Equitable division of remaining assets preserving liquidity
• 40% reduction in potential capital gains tax liabilities

**Business Continuity**
• Zero disruption to business operations
• Confidentiality maintained throughout proceedings
• No negative impact on investor relations

**Family Stability**
• Joint custody arrangement with clear parenting schedule
• Education trusts established for children
• Successful co-parenting communication structure established

**Financial Outcome**
• Multi-million dollar settlement preserving client's financial security
• Structured payments minimizing immediate tax burden
• Long-term financial planning integrated into settlement`,
    
    outcome: 'The client successfully navigated a complex high-asset divorce while preserving business interests, minimizing tax liabilities, and establishing a stable foundation for the family\'s future.',
    
    duration: '18 months',
    value: '$50M+',
    icon: Users,
    tags: ['High-Net-Worth Divorce', 'Asset Division', 'Business Valuation', 'Tax Planning', 'Child Custody'],
    
    keyAchievements: [
      'Preserved $25M+ business valuation',
      '40% tax liability reduction',
      'Zero business disruption',
      'Successful parenting plan implementation',
    ],
    
    legalTeam: [
      { name: 'James Mason', role: 'Lead Attorney', focus: 'Strategy & Negotiation' },
      { name: 'Sarah Chen', role: 'Associate Attorney', focus: 'Financial Analysis' },
      { name: 'Michael Rodriguez', role: 'Paralegal', focus: 'Document Management' },
    ],
    
    expertConsultants: [
      'Forensic Accounting Firm',
      'Business Valuation Specialists',
      'Tax Planning Advisors',
      'Child Psychologists',
    ],
    
    timeline: [
      { month: 'Month 1-3', activity: 'Initial assessment and discovery', milestone: 'Comprehensive asset inventory completed' },
      { month: 'Month 4-6', activity: 'Valuation and analysis', milestone: 'Tax optimization strategy developed' },
      { month: 'Month 7-12', activity: 'Negotiation phase', milestone: 'Preliminary settlement agreement reached' },
      { month: 'Month 13-15', activity: 'Final settlement structuring', milestone: 'Detailed parenting plan finalized' },
      { month: 'Month 16-18', activity: 'Implementation and closure', milestone: 'All assets successfully transferred' },
    ],
    
    lessonsLearned: [
      'Early expert engagement is critical for accurate valuations',
      'Phased negotiations reduce complexity and emotional strain',
      'Creative settlement structures can achieve multiple objectives simultaneously',
      'Child-focused approaches lead to more sustainable outcomes',
    ],
  },
  // Add other case studies similarly...
}

const categoryIcons = {
  'Family Law': Users,
  'Business Litigation': Briefcase,
  'Estate Planning': Shield,
  'Real Estate Law': Home,
  'Criminal Defense': Lock,
  'Employment Law': Building,
  'Personal Injury': Zap,
  'Intellectual Property': BookOpen,
}

export async function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }) {
  const caseStudy = caseStudies[params.slug]
  
  if (!caseStudy) {
    return {
      title: 'Case Study Not Found',
    }
  }
  
  return {
    title: `${caseStudy.title} Case Study | Mason Legal`,
    description: `How we successfully resolved ${caseStudy.title.toLowerCase()} achieving ${caseStudy.outcome}`,
    keywords: `${caseStudy.category.toLowerCase()}, case study, success story, ${caseStudy.tags.join(', ')}`,
    openGraph: {
      title: `${caseStudy.title} | Mason Legal Case Study`,
      description: caseStudy.outcome,
    },
  }
}

export default function CaseStudyDetailPage({ params }) {
  const caseStudy = caseStudies[params.slug]
  
  if (!caseStudy) {
    notFound()
  }
  
  const CategoryIcon = categoryIcons[caseStudy.category] || Users

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-white to-accent/5 py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <Link
              href="/case-studies"
              className="inline-flex items-center text-primary font-medium mb-8 hover:text-primary-600 group"
            >
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Case Studies
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                  <CategoryIcon className="w-5 h-5" />
                  <span className="font-semibold">{caseStudy.category}</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-6">
                  {caseStudy.title}
                </h1>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {caseStudy.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center text-sm bg-primary/10 text-primary px-3 py-1 rounded-full"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-primary mr-3" />
                    <div>
                      <div className="text-sm text-neutral-mid">Duration</div>
                      <div className="font-semibold text-neutral-dark">{caseStudy.duration}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <DollarSign className="w-5 h-5 text-primary mr-3" />
                    <div>
                      <div className="text-sm text-neutral-mid">Case Value</div>
                      <div className="font-semibold text-neutral-dark">{caseStudy.value}</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-neutral-dark mb-6">
                  Case Summary
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-neutral-dark mb-2">Client</h4>
                    <p className="text-neutral-mid">{caseStudy.client}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-neutral-dark mb-2">Outcome</h4>
                    <p className="text-neutral-mid">{caseStudy.outcome}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-neutral-dark mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {caseStudy.keyAchievements.map((achievement, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-neutral-mid">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                {/* The Challenge */}
                <div className="mb-16">
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mr-4">
                      <div className="text-2xl font-bold text-red-600">?</div>
                    </div>
                    <h2 className="text-3xl font-bold text-neutral-dark">The Challenge</h2>
                  </div>
                  
                  <div className="bg-red-50 rounded-2xl p-8 mb-8">
                    <p className="text-lg text-neutral-mid whitespace-pre-line">
                      {caseStudy.challenge}
                    </p>
                  </div>
                </div>

                {/* Our Solution */}
                <div className="mb-16">
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                      <div className="text-2xl font-bold text-primary">✓</div>
                    </div>
                    <h2 className="text-3xl font-bold text-neutral-dark">Our Solution</h2>
                  </div>
                  
                  <div className="bg-primary/5 rounded-2xl p-8 mb-8">
                    <p className="text-lg text-neutral-mid whitespace-pre-line">
                      {caseStudy.solution}
                    </p>
                  </div>
                  
                  {/* Timeline */}
                  <div className="mt-12">
                    <h3 className="text-2xl font-bold text-neutral-dark mb-8">Project Timeline</h3>
                    <div className="space-y-8">
                      {caseStudy.timeline.map((item, index) => (
                        <div key={index} className="flex">
                          <div className="flex-shrink-0 w-32">
                            <div className="font-semibold text-primary">{item.month}</div>
                          </div>
                          <div className="ml-8 pb-8 relative">
                            <div className="absolute -left-12 top-2 w-8 h-8 bg-primary rounded-full border-4 border-white" />
                            <div className="absolute -left-10 top-0 bottom-0 w-0.5 bg-gray-200" />
                            <h4 className="text-lg font-semibold text-neutral-dark mb-2">
                              {item.activity}
                            </h4>
                            <p className="text-neutral-mid">{item.milestone}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* The Result */}
                <div>
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                      <div className="text-2xl font-bold text-green-600">🏆</div>
                    </div>
                    <h2 className="text-3xl font-bold text-neutral-dark">The Result</h2>
                  </div>
                  
                  <div className="bg-green-50 rounded-2xl p-8">
                    <p className="text-lg text-neutral-mid whitespace-pre-line">
                      {caseStudy.result}
                    </p>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Legal Team */}
                <div className="card">
                  <h3 className="text-xl font-bold text-neutral-dark mb-6">Legal Team</h3>
                  <div className="space-y-6">
                    {caseStudy.legalTeam.map((member, index) => (
                      <div key={index} className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <div className="text-lg font-bold text-primary">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </div>
                        </div>
                        <div>
                          <div className="font-semibold text-neutral-dark">{member.name}</div>
                          <div className="text-sm text-primary">{member.role}</div>
                          <div className="text-xs text-neutral-mid">{member.focus}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Expert Consultants */}
                <div className="card">
                  <h3 className="text-xl font-bold text-neutral-dark mb-6">Expert Consultants</h3>
                  <ul className="space-y-3">
                    {caseStudy.expertConsultants.map((expert, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-neutral-mid">{expert}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Lessons Learned */}
                <div className="card">
                  <h3 className="text-xl font-bold text-neutral-dark mb-6">Lessons Learned</h3>
                  <div className="space-y-4">
                    {caseStudy.lessonsLearned.map((lesson, index) => (
                      <div key={index} className="flex">
                        <div className="flex-shrink-0 w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center mr-3">
                          <div className="text-sm font-bold text-accent">{index + 1}</div>
                        </div>
                        <p className="text-neutral-mid">{lesson}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Related Cases */}
                <div className="card">
                  <h3 className="text-xl font-bold text-neutral-dark mb-6">Similar Cases</h3>
                  <div className="space-y-4">
                    {[
                      { title: 'Business Partnership Dissolution', category: 'Business Litigation' },
                      { title: 'Complex Asset Division', category: 'Family Law' },
                      { title: 'International Estate Planning', category: 'Estate Planning' },
                    ].map((related, index) => (
                      <Link
                        key={index}
                        href="#"
                        className="flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:border-primary hover:shadow-sm transition-all duration-300 group"
                      >
                        <div>
                          <div className="font-medium text-neutral-dark group-hover:text-primary">
                            {related.title}
                          </div>
                          <div className="text-xs text-neutral-mid">{related.category}</div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-transform" />
                      </Link>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t">
                    <Link
                      href="/case-studies"
                      className="text-primary font-semibold hover:text-primary-600"
                    >
                      View All Cases →
                    </Link>
                  </div>
                </div>

                {/* CTA Card */}
                <div className="bg-gradient-to-br from-primary to-primary-600 rounded-2xl p-6 text-white">
                  <h4 className="text-xl font-bold mb-4">Facing Similar Challenges?</h4>
                  <p className="text-primary-100 mb-6 text-sm">
                    Let's discuss how we can achieve success in your case.
                  </p>
                  <Link
                    href="/contact?book=true"
                    className="block w-full bg-white text-primary text-center font-semibold py-3 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Schedule Strategy Session
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-20 bg-neutral-card">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-8">
              Ready to Achieve Your Own Success Story?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  title: 'Case Evaluation',
                  description: 'Free initial assessment of your legal situation',
                  icon: '📋',
                },
                {
                  title: 'Strategy Session',
                  description: 'Detailed discussion of potential approaches',
                  icon: '🎯',
                },
                {
                  title: 'Action Plan',
                  description: 'Customized roadmap for achieving your goals',
                  icon: '🗺️',
                },
              ].map((step, index) => (
                <div key={index} className="card text-center">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h3 className="text-xl font-bold text-neutral-dark mb-3">
                    {step.title}
                  </h3>
                  <p className="text-neutral-mid">{step.description}</p>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact?book=true"
                className="btn-primary px-8 py-4 text-lg"
              >
                Book Free Case Evaluation
              </Link>
              <a
                href="tel:+15551234567"
                className="btn-secondary px-8 py-4 text-lg"
              >
                Call: (555) 123-4567
              </a>
            </div>
            
            <p className="mt-8 text-neutral-mid text-sm">
              All consultations are confidential. No obligation to proceed.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}