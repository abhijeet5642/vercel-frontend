import Link from 'next/link'

export function Footer() {
  return (
    <footer className="w-full bg-foreground/5 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-sm font-bold text-primary-foreground">🎓</span>
              </div>
              <span className="text-lg font-bold text-foreground">CampusEventHub</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Connecting students and colleges through exciting events.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Platform</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition">Browse Events</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition">My Registrations</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition">Create Event</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">For Colleges</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition">Manage Events</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition">Analytics</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition">Pricing</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Company</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition">About Us</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition">Contact</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 CampusEventHub. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition">Twitter</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition">LinkedIn</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition">Instagram</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
