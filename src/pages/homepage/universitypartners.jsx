import { Card } from '@/components/ui/card'

const universities = [
  { name: 'IIT Delhi', icon: '🏛️' },
  { name: 'Delhi University', icon: '📚' },
  { name: 'Jamia Millia', icon: '🎓' },
  { name: 'IP University', icon: '🏫' },
  { name: 'Ashoka University', icon: '✨' },
  { name: 'BITS Pilani', icon: '🔬' },
]

export function UniversityPartners() {
  return (
    <section id="partners" className="w-full py-16 sm:py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-12 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Trusted by Leading Universities</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join 100+ institutions already using CampusEventHub to host and manage their events.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {universities.map((uni, index) => (
            <Card
              key={index}
              className="flex items-center justify-center p-6 hover:shadow-md transition-all duration-300 border-border/50 hover:border-primary/30 cursor-pointer"
            >
              <div className="text-center">
                <div className="text-3xl mb-2">{uni.icon}</div>
                <p className="text-sm font-semibold text-foreground text-center">{uni.name}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
