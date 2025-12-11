import BlogCard from '@/components/BlogCard'
import Link from 'next/link'
import { 
  Calendar, 
  ChevronRight, 
  Clock, 
  FileText, 
  Filter, 
  Search, 
  Tag, 
  TrendingUp,
  User
} from 'lucide-react'

// Mock blog posts data - in production, this would come from MDX files
const blogPosts = [
  {
    slug: 'divorce-mediation-vs-litigation',
    title: 'Divorce Mediation vs. Litigation: Choosing the Right Path',
    excerpt: 'Explore the key differences between mediation and litigation in divorce cases, and learn which approach might be best for your situation.',
    category: 'Family Law',
    readTime: '8 min',
    date: '2024-03-15',
    author: 'James Mason',
    tags: ['Divorce', 'Mediation', 'Litigation', 'Family Law'],
    featured: true,
  },
  {
    slug: 'estate-planning-mistakes',
    title: '7 Common Estate Planning Mistakes and How to Avoid Them',
    excerpt: 'Learn about the most frequent errors people make in estate planning and practical strategies to ensure your legacy is protected.',
    category: 'Estate Planning',
    readTime: '10 min',
    date: '2024-03-10',
    author: 'Sarah Chen',
    tags: ['Estate Planning', 'Wills', 'Trusts', 'Legacy'],
    featured: true,
  },
  {
    slug: 'business-partnership-agreements',
    title: 'Essential Clauses Every Business Partnership Agreement Should Include',
    excerpt: 'Protect your business partnership with these crucial contractual provisions that can prevent disputes and ensure smooth operations.',
    category: 'Business Law',
    readTime: '12 min',
    date: '2024-03-05',
    author: 'James Mason',
    tags: ['Business Law', 'Partnership', 'Contracts', 'Corporate'],
    featured: false,
  },
  {
    slug: 'tenant-rights-guide',
    title: 'A Comprehensive Guide to Tenant Rights and Landlord Responsibilities',
    excerpt: 'Understand your rights as a tenant and learn what landlords are legally required to provide in residential rental situations.',
    category: 'Real Estate',
    readTime: '15 min',
    date: '2024-02-28',
    author: 'Michael Rodriguez',
    tags: ['Tenant Rights', 'Real Estate', 'Landlord', 'Housing'],
    featured: false,
  },
  {
    slug: 'intellectual-property-protection',
    title: 'How to Protect Your Intellectual Property: A Startup Guide',
    excerpt: 'Step-by-step guide for entrepreneurs on securing patents, trademarks, and copyrights for their innovative ideas and products.',
    category: 'Intellectual Property',
    readTime: '14 min',
    date: '2024-02-22',
    author: 'Sarah Chen',
    tags: ['Intellectual Property', 'Startups', 'Patents', 'Trademarks'],
    featured: false,
  },
  {
    slug: 'criminal-record-expungement',
    title: 'Expungement Explained: Clearing Your Criminal Record',
    excerpt: 'Learn about the expungement process, eligibility requirements, and how clearing your record can impact your future opportunities.',
    category: 'Criminal Law',
    readTime: '9 min',
    date: '2024-02-18',
    author: 'James Mason',
    tags: ['Criminal Law', 'Expungement', 'Record Clearing', 'Legal Rights'],
    featured: false,
  },
  {
    slug: 'employment-discrimination-laws',
    title: 'Understanding Employment Discrimination Laws: What Every Employee Should Know',
    excerpt: 'Comprehensive overview of federal and state employment discrimination laws and how to recognize and address workplace discrimination.',
    category: 'Employment Law',
    readTime: '11 min',
    date: '2024-02-12',
    author: 'Sarah Chen',
    tags: ['Employment Law', 'Discrimination', 'Workplace Rights', 'HR'],
    featured: false,
  },
  {
    slug: 'personal-injury-claims-process',
    title: 'The Personal Injury Claims Process: From Accident to Settlement',
    excerpt: 'Detailed walkthrough of what to expect when filing a personal injury claim, including timelines, documentation, and settlement negotiations.',
    category: 'Personal Injury',
    readTime: '13 min',
    date: '2024-02-05',
    author: 'James Mason',
    tags: ['Personal Injury', 'Claims Process', 'Accidents', 'Settlement'],
    featured: false,
  },
]

const categories = [
  { name: 'All Articles', count: blogPosts.length, slug: 'all' },
  { name: 'Family Law', count: blogPosts.filter(p => p.category === 'Family Law').length, slug: 'family-law' },
  { name: 'Estate Planning', count: blogPosts.filter(p => p.category === 'Estate Planning').length, slug: 'estate-planning' },
  { name: 'Business Law', count: blogPosts.filter(p => p.category === 'Business Law').length, slug: 'business-law' },
  { name: 'Real Estate', count: blogPosts.filter(p => p.category === 'Real Estate').length, slug: 'real-estate' },
  { name: 'Criminal Law', count: blogPosts.filter(p => p.category === 'Criminal Law').length, slug: 'criminal-law' },
  { name: 'Employment Law', count: blogPosts.filter(p => p.category === 'Employment Law').length, slug: 'employment-law' },
  { name: 'Personal Injury', count: blogPosts.filter(p => p.category === 'Personal Injury').length, slug: 'personal-injury' },
  { name: 'Intellectual Property', count: blogPosts.filter(p => p.category === 'Intellectual Property').length, slug: 'intellectual-property' },
]

const popularTags = [
  'Legal Advice', 'Divorce', 'Business', 'Contracts', 'Rights', 
  'Litigation', 'Mediation', 'Planning', 'Startups', 'Employment'
]

const featuredPosts = blogPosts.filter(post => post.featured)

export const metadata = {
  title: 'Legal Blog & Insights | Mason Legal',
  description: 'Expert legal insights, analysis, and practical advice on family law, estate planning, business law, and more from experienced attorneys.',
  keywords: 'legal blog, law articles, legal advice, attorney insights, legal updates',
  openGraph: {
    title: 'Legal Blog & Insights | Mason Legal',
    description: 'Expert legal insights and practical advice from experienced attorneys.',
  },
}

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-white to-accent/5 py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <FileText className="w-5 h-5" />
              <span className="font-semibold">Legal Insights</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-neutral-dark mb-6">
              Legal <span className="text-primary">Insights</span> & Updates
            </h1>
            
            <p className="text-xl text-neutral-mid mb-8 max-w-3xl mx-auto leading-relaxed">
              Expert analysis, practical advice, and latest developments in law. 
              Stay informed with insights from our experienced attorneys.
            </p>
            
            <div className="relative max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles, topics, or legal questions..."
                  className="w-full px-6 py-4 pl-14 rounded-2xl border border-gray-300 focus:border-primary focus:ring-4 focus:ring-primary/20 focus:outline-none shadow-sm"
                />
                <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 btn-primary py-2 px-6">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-2">
                Featured Articles
              </h2>
              <p className="text-neutral-mid">In-depth analysis on important legal topics</p>
            </div>
            <Link
              href="#all-articles"
              className="text-primary font-semibold hover:text-primary-600 flex items-center"
            >
              View All Articles
              <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {featuredPosts.map((post, index) => (
              <div key={post.slug} className={index === 0 ? 'lg:col-span-2' : ''}>
                <BlogCard 
                  post={post} 
                  featured={index === 0}
                  index={index}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles with Sidebar */}
      <section id="all-articles" className="py-20 bg-neutral-card">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-3/4">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-neutral-dark mb-4">
                  All Articles
                </h2>
                <p className="text-neutral-mid">
                  Browse our complete collection of legal insights and advice
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
              
              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <nav className="flex items-center space-x-2">
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 hover:border-primary hover:bg-primary/5 transition-colors">
                    <ChevronRight className="w-5 h-5 rotate-180" />
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white font-semibold">
                    1
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 hover:border-primary hover:bg-primary/5 transition-colors">
                    2
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 hover:border-primary hover:bg-primary/5 transition-colors">
                    3
                  </button>
                  <span className="px-2">...</span>
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 hover:border-primary hover:bg-primary/5 transition-colors">
                    8
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 hover:border-primary hover:bg-primary/5 transition-colors">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </nav>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/4">
              <div className="sticky top-24 space-y-8">
                {/* Categories */}
                <div className="card">
                  <div className="flex items-center space-x-2 mb-6">
                    <Filter className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-bold text-neutral-dark">Categories</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {categories.map((category) => (
                      <Link
                        key={category.slug}
                        href={`/blog/category/${category.slug}`}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <span className="font-medium text-neutral-dark group-hover:text-primary">
                          {category.name}
                        </span>
                        <span className="text-sm bg-gray-100 text-neutral-mid px-2 py-1 rounded group-hover:bg-primary group-hover:text-white">
                          {category.count}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Popular Tags */}
                <div className="card">
                  <div className="flex items-center space-x-2 mb-6">
                    <Tag className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-bold text-neutral-dark">Popular Topics</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map((tag) => (
                      <Link
                        key={tag}
                        href={`/blog/tag/${tag.toLowerCase()}`}
                        className="inline-flex items-center text-sm bg-gray-100 text-neutral-mid px-3 py-1.5 rounded-full hover:bg-primary hover:text-white transition-colors"
                      >
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-gradient-to-br from-primary to-primary-600 rounded-2xl p-6 text-white">
                  <FileText className="w-10 h-10 mb-4" />
                  <h4 className="text-xl font-bold mb-3">Stay Updated</h4>
                  <p className="text-primary-100 mb-6 text-sm">
                    Get the latest legal insights delivered to your inbox.
                  </p>
                  
                  <form className="space-y-3">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-4 py-3 rounded-lg text-neutral-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20"
                    />
                    <button
                      type="submit"
                      className="w-full bg-white text-primary font-semibold py-3 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      Subscribe
                    </button>
                  </form>
                  
                  <p className="text-xs text-primary-100 mt-4">
                    No spam. Unsubscribe anytime.
                  </p>
                </div>

                {/* Trending Articles */}
                <div className="card">
                  <div className="flex items-center space-x-2 mb-6">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-bold text-neutral-dark">Trending Now</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {blogPosts.slice(0, 3).map((post) => (
                      <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="flex items-start space-x-3 group"
                      >
                        <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium text-neutral-dark group-hover:text-primary line-clamp-2">
                            {post.title}
                          </h4>
                          <div className="flex items-center text-xs text-neutral-mid mt-1">
                            <Calendar className="w-3 h-3 mr-1" />
                            {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Author Spotlight */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
                Meet Our Authors
              </h2>
              <p className="text-xl text-neutral-mid max-w-3xl mx-auto">
                Experienced attorneys sharing their expertise and insights
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: 'James Mason',
                  role: 'Principal Attorney',
                  bio: 'Specializing in family law and complex litigation with 15+ years of experience.',
                  articles: '24 articles',
                  expertise: ['Family Law', 'Litigation', 'Business Law'],
                },
                {
                  name: 'Sarah Chen',
                  role: 'Senior Associate',
                  bio: 'Focuses on estate planning, intellectual property, and employment law matters.',
                  articles: '18 articles',
                  expertise: ['Estate Planning', 'IP Law', 'Employment Law'],
                },
                {
                  name: 'Michael Rodriguez',
                  role: 'Legal Analyst',
                  bio: 'Provides insights on real estate law, tenant rights, and regulatory compliance.',
                  articles: '12 articles',
                  expertise: ['Real Estate', 'Tenant Law', 'Compliance'],
                },
              ].map((author) => (
                <div key={author.name} className="card text-center hover:shadow-xl transition-shadow duration-300">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="w-10 h-10 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-neutral-dark mb-2">
                    {author.name}
                  </h3>
                  
                  <div className="text-primary font-semibold mb-4">
                    {author.role}
                  </div>
                  
                  <p className="text-neutral-mid mb-6">
                    {author.bio}
                  </p>
                  
                  <div className="mb-4">
                    <div className="text-sm text-neutral-mid mb-2">Expertise</div>
                    <div className="flex flex-wrap justify-center gap-2">
                      {author.expertise.map((exp) => (
                        <span
                          key={exp}
                          className="text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                        >
                          {exp}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <div className="text-sm text-neutral-mid">
                      {author.articles} published
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
            <FileText className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Have a Legal Question?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              While our blog provides general information, every legal situation is unique. 
              Get personalized advice for your specific circumstances.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact?book=true"
                className="bg-white text-primary hover:bg-neutral-light px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Ask a Legal Question
              </Link>
            </div>
            <p className="mt-8 text-primary-100 text-sm">
              All consultations are confidential • Free initial assessment available
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}