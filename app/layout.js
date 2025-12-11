import './globals.css'
import { Inter, Playfair_Display } from 'next/font/google'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata = {
  title: 'Mason Legal | Expert Legal Counsel with Integrity',
  description: 'Experienced attorney specializing in family law, estate planning, and business litigation. Personalized legal solutions with a commitment to excellence.',
  // ... rest of the metadata remains same
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Existing script tag */}
      </head>
      <body className="font-sans text-neutral-mid bg-neutral-light min-h-screen flex flex-col">
        <ThemeProvider>
          <Navigation />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}