import Link from 'next/link'
import { Calendar, Clock, Tag, User, ChevronRight } from 'lucide-react'

export default function BlogCard({ post, featured = false, index = 0 }) {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    })
  }

  if (featured && index === 0) {
    return (
      <Link href={`/blog/${post.slug}`}>
        <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
          <div className="md:flex">
            {/* Featured Image */}
            <div className="md:w-2/5 relative">
              <div className="aspect-[4/3] md:aspect-auto md:h-full bg-gradient-to-br from-primary/20 to-accent/20" />
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center bg-white text-primary text-sm font-semibold px-3 py-1 rounded-full">
                  Featured
                </span>
              </div>
            </div>
            
            {/* Content */}
            <div className="md:w-3/5 p-8 md:p-10">
              <div className="flex items-center space-x-4 mb-4">
                <span className="inline-flex items-center bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <div className="flex items-center text-sm text-neutral-mid">
                  <Calendar className="w-4 h-4 mr-1" />
                  {formatDate(post.date)}
                </div>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-neutral-dark mb-4 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              
              <p className="text-lg text-neutral-mid mb-6 leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center text-sm text-neutral-mid">
                    <User className="w-4 h-4 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center text-sm text-neutral-mid">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime} read
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center text-xs bg-gray-100 text-neutral-mid px-2 py-1 rounded-full"
                  >
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center text-primary font-semibold group-hover:text-primary-600">
                Read Full Article
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="group bg-white rounded-xl border border-gray-200 hover:border-primary hover:shadow-lg transition-all duration-300 h-full">
        <div className="p-6">
          {/* Category & Date */}
          <div className="flex items-center justify-between mb-4">
            <span className="inline-flex items-center bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
              {post.category}
            </span>
            <div className="flex items-center text-xs text-neutral-mid">
              <Calendar className="w-3 h-3 mr-1" />
              {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
            </div>
          </div>
          
          {/* Title */}
          <h3 className="text-lg font-bold text-neutral-dark mb-3 group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h3>
          
          {/* Excerpt */}
          <p className="text-sm text-neutral-mid mb-4 line-clamp-3">
            {post.excerpt}
          </p>
          
          {/* Meta Info */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center text-sm text-neutral-mid">
              <User className="w-4 h-4 mr-1" />
              {post.author}
            </div>
            <div className="flex items-center text-sm text-neutral-mid">
              <Clock className="w-4 h-4 mr-1" />
              {post.readTime}
            </div>
          </div>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-xs bg-gray-100 text-neutral-mid px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
          
          {/* Read More */}
          <div className="pt-4 border-t border-gray-100">
            <div className="flex items-center text-primary font-medium text-sm group-hover:text-primary-600">
              Read Article
              <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}