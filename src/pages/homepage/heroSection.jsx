import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-background to-background/80 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="inline-flex items-center gap-2 w-fit rounded-full bg-primary/10 px-4 py-2">
              <span className="text-xs font-semibold text-primary">✨ NEW PLATFORM</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-pretty">
                Connect Across Campus Events
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-xl">
                Discover exciting inter-college events, register for competitions, hackathons, cultural festivals, and workshops. Foster meaningful connections with students from different institutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-base font-semibold">
                Explore Events
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="text-base font-semibold">
                For Colleges
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8">
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <p className="text-sm text-muted-foreground">Active Events</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">50K+</div>
                <p className="text-sm text-muted-foreground">Students</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">100+</div>
                <p className="text-sm text-muted-foreground">Colleges</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/10">
            <img
              src="/students-at-college-event-celebrating.jpg"
              alt="Students enjoying campus events"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
