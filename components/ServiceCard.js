import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function ServiceCard({ title, description, icon: Icon, href }) {
  return (
    <div className="card group hover:border-primary/20 hover:shadow-xl transition-all duration-500">
      <div className="mb-6">
        <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
          <Icon className="w-7 h-7 text-primary group-hover:text-white" />
        </div>
      </div>
      
      <h3 className="text-2xl font-semibold text-neutral-dark mb-4 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-neutral-mid mb-6 leading-relaxed">
        {description}
      </p>
      
      <Link
        href={href}
        className="inline-flex items-center text-primary font-semibold group/link"
      >
        Learn More
        <ArrowRight className="ml-2 w-5 h-5 group-hover/link:translate-x-1 transition-transform duration-300" />
      </Link>
    </div>
  )
}