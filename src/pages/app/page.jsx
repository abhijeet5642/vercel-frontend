import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { FeaturedEvents } from '@/components/featured-events'
import { PlatformBenefits } from '@/components/platform-benefits'
import { UniversityPartners } from '@/components/university-partners'
import { CallToAction } from '@/components/call-to-action'
import { Footer } from '@/components/footer'

export const metadata = {
  title: 'CampusEventHub - Connect Through Events',
  description: 'Discover and participate in exciting inter-college events. Connect with students across multiple institutions through sports, hackathons, cultural fests, and workshops.',
}

export const Home=()=> {
  return (
    <main className="w-full">
      <Header />
      <HeroSection />
      <FeaturedEvents />
      <PlatformBenefits />
      <UniversityPartners />
      <CallToAction />
      <Footer />
    </main>
  )
}
