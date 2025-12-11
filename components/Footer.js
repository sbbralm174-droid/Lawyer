import Link from 'next/link'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowUpRight,
  Scale
} from 'lucide-react'

const footerLinks = {
  'Practice Areas': [
    { name: 'Family Law', href: '/practice/family-law' },
    { name: 'Estate Planning', href: '/practice/estate-planning' },
    { name: 'Business Litigation', href: '/practice/business-litigation' },
    { name: 'Real Estate Law', href: '/practice/real-estate' },
    { name: 'Criminal Defense', href: '/practice/criminal-defense' },
  ],
  'Resources': [
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Privacy Policy', href: '/privacy' },
  ],
  'About Us': [
    { name: 'Our Team', href: '/about#team' },
    { name: 'Our Approach', href: '/about#approach' },
    { name: 'Success Stories', href: '/case-studies' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Careers', href: '/careers' },
  ],
}

const contactInfo = [
  {
    icon: MapPin,
    text: '123 Justice Avenue, Suite 500',
    subtext: 'New York, NY 10001',
  },
  {
    icon: Phone,
    text: '(555) 123-4567',
    subtext: 'Mon-Fri 9am-5pm',
  },
  {
    icon: Mail,
    text: 'contact@masonlegal.com',
    subtext: 'Response within 24 hours',
  },
]

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com/masonlegal', label: 'Facebook' },
  { icon: Twitter, href: 'https://twitter.com/masonlegal', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com/company/masonlegal', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com/masonlegal', label: 'Instagram' },
]

export default function Footer() {
  return (
    <footer className="bg-neutral-dark text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-6 group">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center group-hover:bg-primary-600 transition-colors duration-300">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold">Mason Legal</h3>
                <p className="text-sm text-gray-400">Trusted Legal Excellence</p>
              </div>
            </Link>
            <p className="text-gray-400 mb-8 max-w-xs">
              Providing expert legal counsel with integrity and dedication for over 15 years.
              Your success is our commitment.
            </p>
            
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <item.icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">{item.text}</p>
                    <p className="text-sm text-gray-400">{item.subtext}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-serif text-xl font-semibold mb-6 text-white">
                {category}
              </h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="flex items-center text-gray-400 hover:text-primary transition-colors duration-200 group"
                    >
                      <span>{link.name}</span>
                      <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-12" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-gray-400 text-sm">
            <p>
              © {new Date().getFullYear()} Mason Legal. All rights reserved.
              <span className="mx-2">•</span>
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <span className="mx-2">•</span>
              <Link href="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </p>
            <p className="mt-2 text-xs text-gray-500">
              Attorney Advertising. Prior results do not guarantee a similar outcome.
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-400">Follow Us:</span>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all duration-300 hover:scale-105"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Accreditation */}
        <div className="mt-8 pt-6 border-t border-gray-800">
          <div className="flex flex-wrap items-center justify-center gap-8 text-xs text-gray-500">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-primary/20 rounded flex items-center justify-center">
                <Scale className="w-3 h-3 text-primary" />
              </div>
              <span>Member of State Bar Association</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-primary/20 rounded flex items-center justify-center">
                <span className="text-primary font-bold text-xs">A+</span>
              </div>
              <span>BBB Accredited Business</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-primary/20 rounded flex items-center justify-center">
                <span className="text-primary font-bold text-xs">★</span>
              </div>
              <span>AV Preeminent® Rated</span>
            </div>
          </div>
        </div>

        {/* Map Embed */}
        <div className="mt-12 bg-gray-900 rounded-xl overflow-hidden">
          <div className="p-6">
            <h5 className="font-serif text-lg font-semibold mb-4">Our Office Location</h5>
            <div className="aspect-video bg-gray-800 rounded-lg relative">
              {/* Placeholder for Google Maps embed */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                  <p className="text-gray-400">Map integration available</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Replace with Google Maps embed code
                  </p>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              <strong>Parking:</strong> Available in adjacent garage
              <span className="mx-2">•</span>
              <strong>Accessibility:</strong> Wheelchair accessible entrance
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}