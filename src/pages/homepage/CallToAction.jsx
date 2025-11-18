import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function CallToAction() {
  return (
    <section className="w-full py-16 sm:py-24 lg:py-32 bg-gradient-to-r from-primary/10 to-secondary/10 border-y border-border">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
            Ready to Join the Community?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Sign up today and start discovering amazing events, connecting with peers, and making the most of your college experience.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-base font-semibold">
            Get Started Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="text-base font-semibold">
            Learn More
          </Button>
        </div>

        <p className="text-sm text-muted-foreground">
          Join 50,000+ students already exploring events on CampusEventHub
        </p>
      </div>
    </section>
  )
}
