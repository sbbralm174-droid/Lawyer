import Image from 'next/image'
import Link from 'next/link'
import { 
  Award, 
  BookOpen, 
  Briefcase, 
  Calendar, 
  CheckCircle, 
  ChevronRight, 
  Globe, 
  GraduationCap, 
  MapPin, 
  Shield,
  Users,
  Phone
} from 'lucide-react'

const qualifications = [
  {
    icon: GraduationCap,
    title: 'Harvard Law School',
    year: '2005',
    description: 'Juris Doctor, Magna Cum Laude',
  },
  {
    icon: Award,
    title: 'State Bar Association',
    year: '2006',
    description: 'Admitted to Practice, Member in Good Standing',
  },
  {
    icon: Shield,
    title: 'Specialized Certification',
    year: '2010',
    description: 'Certified in Family Law Mediation',
  },
  {
    icon: BookOpen,
    title: 'Continuing Education',
    year: 'Present',
    description: 'Annual Legal Education Requirements Exceeded',
  },
]

const timeline = [
  {
    year: '2005',
    title: 'Graduated Harvard Law',
    description: 'Graduated top 10% of class, Law Review Editor',
  },
  {
    year: '2006',
    title: 'Joined Prestigious Firm',
    description: 'Associate at Johnson & Associates, focused on corporate law',
  },
  {
    year: '2010',
    title: 'Established Mason Legal',
    description: 'Founded firm with focus on family law and estate planning',
  },
  {
    year: '2015',
    title: 'Expanded Practice Areas',
    description: 'Added business litigation and real estate law services',
  },
  {
    year: '2020',
    title: 'AV Preeminent Rating',
    description: 'Achieved highest peer-review rating from Martindale-Hubbell',
  },
  {
    year: '2023',
    title: '500+ Cases Resolved',
    description: 'Milestone of successful case resolutions reached',
  },
]

const values = [
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We uphold the highest ethical standards in every interaction and decision.',
  },
  {
    icon: Users,
    title: 'Client-Centered',
    description: 'Your needs and goals guide every aspect of our legal strategy.',
  },
  {
    icon: Briefcase,
    title: 'Excellence',
    description: 'We pursue mastery of the law and excellence in representation.',
  },
  {
    icon: Globe,
    title: 'Community',
    description: 'We\'re committed to serving and improving our local community.',
  },
]

const teamMembers = [
  {
    name: 'James Mason',
    role: 'Principal Attorney',
    bio: 'With over 15 years of experience, James specializes in complex family law and estate planning cases.',
    education: 'Harvard Law School, JD',
    barAdmissions: 'New York, Massachusetts, Federal District Courts',
  },
  {
    name: 'Sarah Chen',
    role: 'Senior Associate',
    bio: 'Sarah focuses on business litigation and real estate law, bringing strategic insight to every case.',
    education: 'Columbia Law School, JD',
    barAdmissions: 'New York, New Jersey',
  },
  {
    name: 'Michael Rodriguez',
    role: 'Paralegal',
    bio: 'Michael manages case preparation and client communications with meticulous attention to detail.',
    education: 'Bachelor of Legal Studies',
    experience: '8 years in legal support',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-white to-accent/5 py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-neutral-dark mb-6">
              Our Commitment to <span className="text-primary">Legal Excellence</span>
            </h1>
            <p className="text-xl text-neutral-mid mb-8 max-w-3xl mx-auto leading-relaxed">
              For over 15 years, Mason Legal has been providing expert legal counsel 
              with integrity, compassion, and unwavering dedication to client success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact?book=true"
                className="btn-primary inline-flex items-center justify-center group"
              >
                Book Consultation
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/case-studies"
                className="btn-secondary inline-flex items-center justify-center"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-6">
                Our Mission & Philosophy
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-neutral-mid leading-relaxed">
                  At Mason Legal, we believe that exceptional legal service combines 
                  deep expertise with genuine understanding of each client's unique circumstances.
                </p>
                <p className="text-lg text-neutral-mid leading-relaxed">
                  Our philosophy is rooted in the principle that law should be a tool 
                  for empowerment—helping individuals and businesses navigate challenges 
                  and secure their futures with confidence.
                </p>
                <div className="flex items-start space-x-3 mt-8">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-neutral-dark">Client Success Focus</h4>
                    <p className="text-neutral-mid">
                      Every decision is measured against its impact on your success
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-neutral-dark">Transparent Communication</h4>
                    <p className="text-neutral-mid">
                      Clear, honest dialogue about strategy, costs, and expectations
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/images/office-interior.jpg"
                    alt="Mason Legal Office Interior"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold">Our Office</h3>
                    <p className="text-primary-100">Designed for Comfort and Confidentiality</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/10 rounded-full blur-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-20 bg-neutral-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
              Qualifications & Credentials
            </h2>
            <p className="text-xl text-neutral-mid max-w-3xl mx-auto">
              Backed by elite education, specialized training, and continuous professional development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {qualifications.map((qual, index) => (
              <div key={index} className="card text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <qual.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="inline-block bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded-full mb-4">
                  {qual.year}
                </div>
                <h3 className="text-xl font-semibold text-neutral-dark mb-2">
                  {qual.title}
                </h3>
                <p className="text-neutral-mid">{qual.description}</p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-neutral-mid font-medium">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-neutral-mid font-medium">Cases Resolved</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-neutral-mid font-medium">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-neutral-mid font-medium">Trial Successes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
              Our Journey of Excellence
            </h2>
            <p className="text-xl text-neutral-mid max-w-3xl mx-auto">
              A timeline of milestones and achievements in our commitment to legal excellence
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20" />
            
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="text-sm font-semibold text-primary mb-2">
                      {item.year}
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-dark mb-2">
                      {item.title}
                    </h3>
                    <p className="text-neutral-mid">{item.description}</p>
                  </div>
                </div>
                
                <div className="relative z-10">
                  <div className="w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg" />
                </div>
                
                <div className="w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-neutral-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-neutral-mid max-w-3xl mx-auto">
              The principles that guide every decision and action at Mason Legal
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card text-center hover:border-primary/20 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-dark mb-4">
                  {value.title}
                </h3>
                <p className="text-neutral-mid">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white" id="team">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-neutral-mid max-w-3xl mx-auto">
              Dedicated professionals committed to your legal success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="card hover:shadow-xl transition-all duration-300">
                <div className="aspect-square relative rounded-xl overflow-hidden mb-6">
                  <Image
                    src={`/images/team/team-${index + 1}.jpg`}
                    alt={member.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3 className="text-2xl font-bold text-neutral-dark mb-2">
                  {member.name}
                </h3>
                <div className="inline-block bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded-full mb-4">
                  {member.role}
                </div>
                <p className="text-neutral-mid mb-4">{member.bio}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2 text-neutral-mid">
                    <GraduationCap className="w-4 h-4" />
                    <span>{member.education}</span>
                  </div>
                  {member.barAdmissions && (
                    <div className="flex items-start space-x-2 text-neutral-mid">
                      <Briefcase className="w-4 h-4 mt-0.5" />
                      <span>{member.barAdmissions}</span>
                    </div>
                  )}
                  {member.experience && (
                    <div className="flex items-center space-x-2 text-neutral-mid">
                      <Calendar className="w-4 h-4" />
                      <span>{member.experience}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Community Commitment
              </h2>
              <p className="text-xl text-primary-100 mb-8 leading-relaxed">
                Beyond legal practice, we're dedicated to making a positive impact 
                in our community through pro bono work and civic engagement.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent" />
                  <span>Annual pro bono hours: 200+</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent" />
                  <span>Local legal education workshops</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent" />
                  <span>Board members for non-profit organizations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent" />
                  <span>Youth mentorship programs</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Recognition & Awards</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-accent" />
                  <span>AV Preeminent® Rating - Martindale-Hubbell</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-accent" />
                  <span>Super Lawyers® - Rising Stars (2015-2020)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-accent" />
                  <span>Best Lawyers in America® (2021-2024)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-accent" />
                  <span>Community Service Award - State Bar Association</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary to-primary-600 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Experience the Mason Legal difference. Schedule your consultation today.
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
                Contact Our Team
              </Link>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-primary-100">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <a href="tel:+15551234567" className="hover:text-white font-medium">
                  (555) 123-4567
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span>123 Justice Avenue, New York, NY 10001</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}