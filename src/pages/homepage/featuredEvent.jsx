import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Clock, MapPin, Users } from 'lucide-react'

const events = [
  {
    id: 1,
    title: 'CodeNinja Hackathon 2024',
    category: 'Hackathon',
    image: '/hackathon-coding-event.jpg',
    date: 'Dec 15-16, 2024',
    location: 'IIT Delhi',
    participants: '500+',
    badge: 'Featured',
  },
  {
    id: 2,
    title: 'Inter-College Sports Festival',
    category: 'Sports',
    image: '/sports-competition-college-festival.jpg',
    date: 'Dec 20-22, 2024',
    location: 'Delhi University',
    participants: '2000+',
    badge: 'Popular',
  },
  {
    id: 3,
    title: 'Cultural Fest Extravaganza',
    category: 'Cultural',
    image: '/cultural-festival-dance-music.jpg',
    date: 'Jan 5-7, 2025',
    location: 'DU South Campus',
    participants: '3000+',
    badge: 'Trending',
  },
]

export function FeaturedEvents() {
  return (
    <section id="events" className="w-full py-16 sm:py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Featured Events</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Browse exciting upcoming events from colleges across the region. Register now to secure your spot.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-primary-foreground">{event.badge}</Badge>
                </div>
              </div>

              <div className="flex-1 flex flex-col justify-between p-6">
                <div className="space-y-3">
                  <div className="inline-flex">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {event.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground hover:text-primary transition">
                    {event.title}
                  </h3>

                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      {event.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={16} />
                      {event.participants} registered
                    </div>
                  </div>
                </div>

                <Button className="w-full mt-6 bg-primary hover:bg-primary/90">
                  Register Now
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="text-base font-semibold">
            View All Events
          </Button>
        </div>
      </div>
    </section>
  )
}
