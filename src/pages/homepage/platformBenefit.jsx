import { Card } from '@/components/ui/card'
import { Zap, Users, Calendar, Trophy } from 'lucide-react'

const benefits = [
  {
    icon: <Users className="h-8 w-8" />,
    title: 'Connect with Students',
    description: 'Network with passionate students from 100+ colleges and build meaningful connections across institutions.',
  },
  {
    icon: <Calendar className="h-8 w-8" />,
    title: 'Diverse Events',
    description: 'Explore a wide range of events including hackathons, sports, cultural festivals, and professional workshops.',
  },
  {
    icon: <Trophy className="h-8 w-8" />,
    title: 'Showcase Skills',
    description: 'Compete, showcase your talents, and gain recognition in a supportive inter-college community.',
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: 'Real-Time Updates',
    description: 'Stay informed with instant notifications about registrations, event schedules, and status updates.',
  },
]

export function PlatformBenefits() {
  return (
    <section id="benefits" className="w-full py-16 sm:py-24 lg:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-12 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Why Join CampusEventHub?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive platform designed to enhance your college experience through meaningful events and connections.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-shadow duration-300 border-border/50 hover:border-primary/30"
            >
              <div className="text-primary mb-4">{benefit.icon}</div>
              <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
