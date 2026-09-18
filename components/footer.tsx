import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Mail, MapPin, Phone, Clock, Award, Shield, Users } from "lucide-react"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"

const services = [
  { title: "Fire Detection & Alarm Systems", href: "/fire-detection-alarm-systems" },
  { title: "Fire Extinguisher Supply & Servicing", href: "/fire-extinguisher-supply-servicing" },
  { title: "Sprinkler & Suppression Systems", href: "/sprinkler-suppression-systems" },
  { title: "Fire Safety Training & Compliance", href: "/fire-safety-training-compliance" },
  { title: "Fire Equipment Maintenance Contracts", href: "/fire-equipment-maintenance-contracts" },
  { title: "Fire Hydrant Installation & Testing", href: "/fire-hydrant-installation-testing" },
]

const serviceAreas = [
  { name: "Johannesburg", href: "/service-areas/johannesburg" },
  { name: "Pretoria", href: "/service-areas/pretoria" },
  { name: "Kempton Park", href: "/service-areas/kempton-park" },
  { name: "Midrand", href: "/service-areas/midrand" },
  { name: "Sandton", href: "/service-areas/sandton" },
  { name: "Centurion", href: "/service-areas/centurion" },
]

const quickLinks = [
  { title: "About Us", href: "/about" },
  { title: "All Services", href: "/services" },
  { title: "Service Areas", href: "/service-areas" },
  { title: "Contact Us", href: "/contact" },
  { title: "Get a Quote", href: "/contact#quote" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      {/* Trust Badges */}
      <div className="border-b border-primary-foreground/10 bg-primary/95">
        <div className="container mx-auto px-4 py-8 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20">
                <Award className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-white">Certified Fire Technicians</h4>
                <p className="text-sm text-primary-foreground/70">Compliance documentation on every job</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20">
                <Shield className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-white">Insured Callouts</h4>
                <p className="text-sm text-primary-foreground/70">All work fully insured</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-white">Local Gauteng Team</h4>
                <p className="text-sm text-primary-foreground/70">Based in Kempton Park, serving all of Gauteng</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Company Info */}
          <div className="space-y-4 lg:col-span-2">
            <Link href="/" className="inline-block rounded-lg bg-white px-3 py-2 shadow-sm">
              <Image
                src="/logo-wordmark.svg"
                alt="Jero Fire Solutions"
                width={1000}
                height={300}
                className="h-9 w-auto"
                loading="lazy"
              />
            </Link>

            <p className="max-w-md text-sm leading-relaxed text-primary-foreground/80">
              Jero Fire Solutions is your certified partner for fire detection, alarm systems, extinguisher servicing, and suppression across Gauteng. Certified technicians, full compliance documentation, every job.
            </p>

            {/* Social Media Links */}
            <div>
              <h4 className="mb-3 text-sm font-semibold text-white">Follow Us</h4>

              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/jerofiresolutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/10 text-primary-foreground/70 transition-all hover:bg-accent hover:text-white"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>

                <a
                  href="https://www.instagram.com/jerofiresolutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/10 text-primary-foreground/70 transition-all hover:bg-accent hover:text-white"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>

                <a
                  href="https://wa.me/27781336684"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/10 text-primary-foreground/70 transition-all hover:bg-[#25D366] hover:text-white"
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                </a>
              </div>

              {/* Google Reviews */}
              <div className="mt-4">
                <a
                  href="https://www.google.com/search?q=Jero+Fire+Solutions+Gauteng+reviews"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary-foreground/10 px-4 py-2 text-sm text-primary-foreground/80 transition hover:bg-accent hover:text-white"
                  aria-label="Google Reviews"
                >
                  ⭐ ★★★★★ Google Reviews
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="inline-block text-sm text-primary-foreground/80 transition-colors hover:translate-x-1 hover:text-accent">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Our Services</h4>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="inline-block text-sm text-primary-foreground/80 transition-colors hover:translate-x-1 hover:text-accent">
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline">
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.google.com/maps?q=18+Profusa+Street+Aston+Manor+Kempton+Park+Gauteng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3"
                >
                  <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  <span className="text-sm text-primary-foreground/80 transition-colors group-hover:text-accent">
                    Kempton Park, Gauteng
                    <br />
                    Serving Johannesburg &amp; Pretoria
                  </span>
                </a>
              </li>

              <li>
                <a href="tel:+27781336684" className="group flex items-center gap-3">
                  <Phone className="h-5 w-5 flex-shrink-0 text-accent" />
                  <span className="text-sm text-primary-foreground/80 transition-colors group-hover:text-accent">+27 78 133 6684</span>
                </a>
              </li>

              <li>
                <a href="https://wa.me/27781336684" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3">
                  <WhatsAppIcon className="h-5 w-5 flex-shrink-0 text-accent" />
                  <span className="text-sm text-primary-foreground/80 transition-colors group-hover:text-accent">
                    WhatsApp: +27 78 133 6684
                  </span>
                </a>
              </li>

              <li>
                <a href="mailto:014@jerofiresolutions.co.za" className="group flex items-center gap-3">
                  <Mail className="h-5 w-5 flex-shrink-0 text-accent" />
                  <span className="text-sm text-primary-foreground/80 transition-colors group-hover:text-accent">
                    014@jerofiresolutions.co.za
                  </span>
                </a>
              </li>

              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                <div className="text-sm text-primary-foreground/80">
                  <div className="font-semibold text-white">Mon to Fri: 8:00 to 17:00</div>
                  <div className="text-accent">24 Hour Emergency Support</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Service Areas Bar */}
        <div className="mt-10 border-t border-primary-foreground/10 pt-8">
          <h4 className="mb-4 text-center text-sm font-bold uppercase tracking-wider text-white">Proudly Serving Gauteng</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {serviceAreas.map((area) => (
              <Link
                key={area.href}
                href={area.href}
                className="rounded-full bg-primary-foreground/10 px-4 py-1.5 text-sm text-primary-foreground/80 transition-all hover:bg-accent hover:text-white"
              >
                {area.name}
              </Link>
            ))}
            <Link href="/service-areas" className="rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-white hover:bg-accent/90">
              View All Areas →
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-8 md:flex-row">
          <p className="text-center text-sm text-primary-foreground/70 md:text-left">
            © {new Date().getFullYear()} Jero Fire Solutions. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/privacy-policy" className="text-sm text-primary-foreground/70 transition-colors hover:text-accent">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-sm text-primary-foreground/70 transition-colors hover:text-accent">
              Terms of Service
            </Link>
            <Link href="/sitemap.xml" className="text-sm text-primary-foreground/70 transition-colors hover:text-accent">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
