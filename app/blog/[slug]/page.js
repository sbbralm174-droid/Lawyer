import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  Facebook, 
  Linkedin, 
  Mail, 
  Printer, 
  Tag, 
  Twitter, 
  User,
  ChevronRight,
  BookOpen,
  Share2
} from 'lucide-react'

// Mock blog posts data - in production, this would come from MDX files
const blogPosts = {
  'divorce-mediation-vs-litigation': {
    title: 'Divorce Mediation vs. Litigation: Choosing the Right Path for Your Situation',
    excerpt: 'Explore the key differences between mediation and litigation in divorce cases, and learn which approach might be best for your situation.',
    content: `## Understanding Your Options

When facing divorce, one of the most critical decisions you'll make is how to resolve your case. The two primary paths are **mediation** and **litigation**. Each approach has distinct characteristics, advantages, and considerations that can significantly impact your divorce experience and outcome.

### What is Divorce Mediation?

Mediation is a collaborative process where divorcing couples work with a neutral third-party mediator to reach mutually agreeable settlement terms. The mediator doesn't make decisions for you but facilitates communication and helps identify solutions.

**Key Characteristics of Mediation:**
- Voluntary and confidential process
- Focuses on collaborative problem-solving
- Parties retain control over decisions
- Typically faster and less expensive
- Preserves privacy and reduces conflict

### What is Divorce Litigation?

Litigation involves taking your divorce case to court, where a judge makes binding decisions about property division, child custody, support, and other issues.

**Key Characteristics of Litigation:**
- Formal court proceedings
- Adversarial process
- Judge makes final decisions
- Public court records
- Typically more time-consuming and expensive

## Comparative Analysis

### Cost Considerations

| Aspect | Mediation | Litigation |
|--------|-----------|------------|
| **Average Cost** | $3,000 - $7,000 | $15,000 - $30,000+ |
| **Time Frame** | 2-6 months | 1-3 years |
| **Attorney Fees** | Limited involvement | Extensive representation |
| **Additional Costs** | Mediator fees only | Expert witnesses, court costs, etc. |

### Control and Decision-Making

**Mediation Advantages:**
- You and your spouse control the outcome
- Flexible, creative solutions possible
- Can address unique family needs
- Better preservation of relationships

**Litigation Considerations:**
- Judge controls decisions based on legal standards
- Limited flexibility in outcomes
- Focus on legal rights rather than interests
- May damage co-parenting relationships

## When Mediation Works Best

Mediation tends to be most successful when:

1. **Both parties are willing to negotiate** in good faith
2. **Power balance** is relatively equal
3. **Communication** is possible, even if difficult
4. **Privacy** is a priority
5. **Preserving relationships** (especially for co-parenting) is important
6. **Cost control** is a significant concern

### Success Factors for Mediation
- Openness to compromise
- Full financial disclosure
- Focus on children's best interests
- Realistic expectations
- Willingness to separate emotions from decisions

## When Litigation May Be Necessary

Consider litigation when:

1. **Significant power imbalance** exists
2. **History of abuse** or domestic violence
3. **One party is hiding assets**
4. **Complex financial situations** requiring court intervention
5. **Complete impasse** on major issues
6. **Need for legal precedents** or formal rulings

### Protective Measures in Litigation
- Court orders for protection if needed
- Formal discovery processes
- Expert witness testimony
- Binding legal precedent
- Enforcement mechanisms

## Hybrid Approaches

Many divorces combine elements of both approaches:

### Collaborative Divorce
- Each party has their own attorney
- Team approach with financial and mental health professionals
- Agreement to avoid court
- Formalized process with specific protocols

### Limited Scope Representation
- Attorney assistance for specific tasks only
- Self-representation for other aspects
- Cost-effective middle ground
- Maintains some control while getting legal guidance

## Making the Right Choice

### Questions to Consider

1. **What is your relationship dynamic?** Can you communicate effectively?
2. **How complex are your assets?** Do you need formal discovery?
3. **What are your priorities?** Cost, time, privacy, control?
4. **How will this affect your children?** What's best for their emotional wellbeing?
5. **What's your emotional state?** Can you separate feelings from practical decisions?

### Consultation Steps

1. **Initial Assessment:** Meet with an attorney to understand your rights
2. **Mediation Evaluation:** Determine if mediation is viable
3. **Cost-Benefit Analysis:** Compare approaches for your specific situation
4. **Strategy Development:** Create a plan based on your goals and circumstances

## Practical Tips

### For Choosing Mediation:
- Research qualified mediators with family law experience
- Prepare financial documents in advance
- Set realistic goals and priorities
- Consider using individual attorneys for review

### For Facing Litigation:
- Gather and organize all financial documents
- Document important events and communications
- Understand court procedures and timelines
- Prepare for the emotional toll of court proceedings

## Conclusion

The choice between mediation and litigation isn't just about legal strategy—it's about what approach aligns with your values, priorities, and family situation. While mediation offers cost savings, privacy, and relationship preservation, litigation provides formal protections and binding resolutions when cooperation isn't possible.

Many successful divorces use elements of both approaches, starting with mediation and reserving litigation for specific unresolved issues. The key is making an informed decision based on your unique circumstances with guidance from experienced legal professionals.

**Remember:** Every divorce is unique. What worked for someone else may not be right for you. Take the time to understand both options thoroughly before deciding on your path forward.`,
    
    category: 'Family Law',
    readTime: '8 min',
    date: '2024-03-15',
    author: {
      name: 'James Mason',
      role: 'Principal Attorney',
      bio: 'Specializing in family law and complex litigation with 15+ years of experience.',
    },
    tags: ['Divorce', 'Mediation', 'Litigation', 'Family Law', 'Legal Strategy'],
    relatedPosts: [
      {
        slug: 'child-custody-guidelines',
        title: 'Understanding Child Custody Guidelines and Best Practices',
        category: 'Family Law',
        readTime: '10 min',
      },
      {
        slug: 'post-divorce-financial-planning',
        title: 'Financial Planning Strategies After Divorce',
        category: 'Financial Planning',
        readTime: '12 min',
      },
      {
        slug: 'co-parenting-agreements',
        title: 'Creating Effective Co-Parenting Agreements',
        category: 'Family Law',
        readTime: '7 min',
      },
    ],
  },
  // Add other blog posts similarly...
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }) {
  const post = blogPosts[params.slug]
  
  if (!post) {
    return {
      title: 'Article Not Found',
    }
  }
  
  return {
    title: `${post.title} | Mason Legal Blog`,
    description: post.excerpt,
    keywords: post.tags.join(', '),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author.name],
      tags: post.tags,
    },
  }
}

export default function BlogPostPage({ params }) {
  const post = blogPosts[params.slug]
  
  if (!post) {
    notFound()
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    })
  }

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://masonlegal.com/blog/${params.slug}`)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://masonlegal.com/blog/${params.slug}`)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://masonlegal.com/blog/${params.slug}`)}`,
    email: `mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(`Check out this article: https://masonlegal.com/blog/${params.slug}`)}`,
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-white to-accent/5 py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-primary font-medium mb-8 hover:text-primary-600 group"
            >
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Link>
            
            <div className="mb-8">
              <span className="inline-flex items-center bg-primary/10 text-primary text-sm font-semibold px-4 py-2 rounded-full mb-4">
                {post.category}
              </span>
              
              <h1 className="text-3xl md:text-5xl font-bold text-neutral-dark mb-6 leading-tight">
                {post.title}
              </h1>
              
              <p className="text-xl text-neutral-mid mb-8 leading-relaxed">
                {post.excerpt}
              </p>
            </div>
            
            <div className="flex flex-wrap items-center justify-between gap-6 py-6 border-t border-b border-gray-200">
              {/* Author Info */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-neutral-dark">
                    {post.author.name}
                  </div>
                  <div className="text-sm text-neutral-mid">
                    {post.author.role}
                  </div>
                </div>
              </div>
              
              {/* Meta Info */}
              <div className="flex items-center space-x-6">
                <div className="flex items-center text-neutral-mid">
                  <Calendar className="w-5 h-5 mr-2" />
                  {formatDate(post.date)}
                </div>
                <div className="flex items-center text-neutral-mid">
                  <Clock className="w-5 h-5 mr-2" />
                  {post.readTime} read
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <article className="prose prose-lg max-w-none">
                  <div className="prose-headings:font-serif prose-headings:text-neutral-dark prose-p:text-neutral-mid prose-li:text-neutral-mid prose-strong:text-neutral-dark prose-table:text-sm">
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                  </div>
                </article>
                
                {/* Tags */}
                <div className="mt-12 pt-12 border-t border-gray-200">
                  <div className="flex items-center space-x-2 mb-4">
                    <Tag className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-neutral-dark">Topics</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Link
                        key={tag}
                        href={`/blog/tag/${tag.toLowerCase()}`}
                        className="inline-flex items-center text-sm bg-primary/10 text-primary px-3 py-1.5 rounded-full hover:bg-primary hover:text-white transition-colors"
                      >
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
                
                {/* Share Buttons */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="flex items-center space-x-2 mb-4">
                    <Share2 className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-neutral-dark">Share This Article</h3>
                  </div>
                  <div className="flex items-center space-x-4">
                    <a
                      href={shareLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                      aria-label="Share on Twitter"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                      href={shareLinks.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                      aria-label="Share on Facebook"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href={shareLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
                      aria-label="Share on LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={shareLinks.email}
                      className="w-10 h-10 bg-gray-600 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                      aria-label="Share via Email"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                    <button
                      onClick={() => window.print()}
                      className="w-10 h-10 bg-gray-600 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                      aria-label="Print Article"
                    >
                      <Printer className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Author Bio */}
                <div className="card">
                  <h3 className="text-xl font-bold text-neutral-dark mb-6">About the Author</h3>
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <div className="font-bold text-neutral-dark">
                        {post.author.name}
                      </div>
                      <div className="text-primary font-semibold text-sm mb-2">
                        {post.author.role}
                      </div>
                      <p className="text-sm text-neutral-mid">
                        {post.author.bio}
                      </p>
                    </div>
                  </div>
                  <Link
                    href="/about#team"
                    className="text-primary font-semibold text-sm hover:text-primary-600 inline-flex items-center"
                  >
                    Meet Our Full Team
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>

                {/* Table of Contents */}
                <div className="card">
                  <h3 className="text-xl font-bold text-neutral-dark mb-6">In This Article</h3>
                  <nav className="space-y-3">
                    {[
                      'Understanding Your Options',
                      'What is Divorce Mediation?',
                      'What is Divorce Litigation?',
                      'Comparative Analysis',
                      'Cost Considerations',
                      'When Mediation Works Best',
                      'When Litigation May Be Necessary',
                      'Hybrid Approaches',
                      'Making the Right Choice',
                      'Practical Tips',
                      'Conclusion'
                    ].map((item) => (
                      <a
                        key={item}
                        href={`#${item.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                        className="flex items-start text-sm text-neutral-mid hover:text-primary transition-colors group"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mt-1.5 mr-3 flex-shrink-0" />
                        <span className="group-hover:text-primary">{item}</span>
                      </a>
                    ))}
                  </nav>
                </div>

                {/* Related Articles */}
                <div className="card">
                  <h3 className="text-xl font-bold text-neutral-dark mb-6">Related Articles</h3>
                  <div className="space-y-4">
                    {post.relatedPosts.map((related) => (
                      <Link
                        key={related.slug}
                        href={`/blog/${related.slug}`}
                        className="flex items-start space-x-3 group"
                      >
                        <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium text-neutral-dark group-hover:text-primary line-clamp-2">
                            {related.title}
                          </h4>
                          <div className="flex items-center text-xs text-neutral-mid mt-1">
                            <BookOpen className="w-3 h-3 mr-1" />
                            {related.category} • {related.readTime}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-gradient-to-br from-primary to-primary-600 rounded-2xl p-6 text-white">
                  <BookOpen className="w-10 h-10 mb-4" />
                  <h4 className="text-xl font-bold mb-3">Stay Informed</h4>
                  <p className="text-primary-100 mb-6 text-sm">
                    Get legal insights and updates delivered to your inbox.
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
                    We respect your privacy. Unsubscribe anytime.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next/Previous Navigation */}
      <section className="py-16 bg-neutral-card">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Link
                href="#"
                className="group flex items-center p-6 bg-white rounded-xl border border-gray-200 hover:border-primary hover:shadow-lg transition-all duration-300"
              >
                <ArrowLeft className="w-5 h-5 mr-4 text-neutral-mid group-hover:text-primary" />
                <div>
                  <div className="text-sm text-neutral-mid mb-1">Previous Article</div>
                  <div className="font-semibold text-neutral-dark group-hover:text-primary line-clamp-2">
                    Understanding Child Custody Guidelines
                  </div>
                </div>
              </Link>
              
              <Link
                href="#"
                className="group flex items-center p-6 bg-white rounded-xl border border-gray-200 hover:border-primary hover:shadow-lg transition-all duration-300 text-right"
              >
                <div className="flex-grow">
                  <div className="text-sm text-neutral-mid mb-1">Next Article</div>
                  <div className="font-semibold text-neutral-dark group-hover:text-primary line-clamp-2">
                    Financial Planning Strategies After Divorce
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 ml-4 text-neutral-mid group-hover:text-primary" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Personalized Legal Advice?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              While our blog provides general information, every legal situation is unique. 
              Schedule a consultation for advice tailored to your specific circumstances.
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