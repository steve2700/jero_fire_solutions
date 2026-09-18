import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, CheckCircle, Shield, Award, Star, Siren, Clock, FileCheck } from "lucide-react"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary" itemScope itemType="https://schema.org/Service">
      {/* Background Image with Optimized Loading */}
      {/* PLACEHOLDER: swap for a real Jero Fire Solutions site/technician photo */}
      <div className="absolute inset-0">
        <Image
          src="/fire-technician-servicing-extinguisher-gauteng.jpg"
          alt="Fire safety technician servicing fire protection equipment in Gauteng, Jero Fire Solutions"
          fill
          className="object-cover opacity-20"
          priority
          quality={75}
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-secondary/10 blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-accent/5 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container relative mx-auto px-4 py-10 lg:px-8 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Trust Badge with Rating */}
            <div className="mb-4 sm:mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-medium text-white backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-all shadow-lg">
              <Shield className="h-4 w-4 text-accent" aria-hidden="true" />
              <span className="hidden sm:inline">Gauteng's Trusted Fire Safety Partner</span>
              <span className="sm:hidden">Trusted in Gauteng</span>
              <div className="flex items-center gap-0.5 ml-2" itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
                <meta itemProp="ratingValue" content="5" />
                <meta itemProp="bestRating" content="5" />
                <meta itemProp="reviewCount" content="150" />
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-accent text-accent" aria-hidden="true" />
                ))}
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="mb-4 sm:mb-6 text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl" itemProp="name">
              <span className="block">We Keep Gauteng Protected.</span>
              <span className="block text-accent">Compliant. Certified. Ready.</span>
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2 text-primary-foreground/90">
                Detection, Suppression &amp; Compliance
              </span>
            </h1>

            {/* Description */}
            <p className="mb-6 sm:mb-8 text-pretty text-base sm:text-lg text-primary-foreground/80 md:text-xl max-w-2xl mx-auto lg:mx-0" itemProp="description">
              <strong className="text-white">Jero Fire Solutions</strong> delivers fire detection and alarm systems, extinguisher servicing, and sprinkler and suppression installation across{" "}
              <strong className="text-white">Johannesburg, Pretoria, Kempton Park</strong> and greater{" "}
              <strong className="text-white">Gauteng</strong>. Certified technicians, full compliance documentation.
            </p>

            {/* CTA Buttons — kept high and compact so all three are visible without scrolling on mobile */}
            <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="group bg-accent text-accent-foreground hover:bg-accent/90 shadow-xl shadow-accent/25 h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base font-semibold transition-all hover:scale-105"
              >
                <Link href="/contact" itemProp="url">
                  <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:animate-pulse" aria-hidden="true" />
                  Get Your Free Quote Today
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="group h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base font-semibold bg-[#25D366] text-white hover:bg-[#25D366]/90 shadow-xl shadow-[#25D366]/25 transition-all hover:scale-105"
              >
                <a href="https://wa.me/27781336684" target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="mr-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                  Chat on WhatsApp
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 bg-white/5 text-white hover:bg-white/10 backdrop-blur-sm h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base font-semibold transition-all hover:scale-105"
              >
                <Link href="/services">
                  Explore Our Services
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                </Link>
              </Button>
            </div>

            {/* Trust Indicators — hidden on small screens so the CTAs stay above the fold */}
            <div className="mt-8 hidden sm:flex flex-wrap justify-center gap-4 lg:justify-start">
              <div className="flex items-center gap-2.5 text-sm text-primary-foreground/90 bg-white/5 rounded-lg px-4 py-2 backdrop-blur-sm">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/20">
                  <CheckCircle className="h-4 w-4 text-accent" aria-hidden="true" />
                </div>
                <span className="font-medium">Certified Fire Technicians</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-primary-foreground/90 bg-white/5 rounded-lg px-4 py-2 backdrop-blur-sm">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/20">
                  <FileCheck className="h-4 w-4 text-accent" aria-hidden="true" />
                </div>
                <span className="font-medium">Compliance Documentation Provided</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-primary-foreground/90 bg-white/5 rounded-lg px-4 py-2 backdrop-blur-sm">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/20">
                  <Clock className="h-4 w-4 text-accent" aria-hidden="true" />
                </div>
                <span className="font-medium">24/7 Emergency Callout</span>
              </div>
            </div>

            {/* Quick Stats */}
            {/* PLACEHOLDER: confirm real experience/client numbers before launch */}
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-primary-foreground/70">
              <div className="flex items-center gap-2">
                <Siren className="h-4 w-4 text-accent" aria-hidden="true" />
                <span>Site assessments available on request</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCheck className="h-4 w-4 text-accent" aria-hidden="true" />
                <span>Every job leaves a compliance trail</span>
              </div>
            </div>
          </div>

          {/* Hero Images */}
          {/* PLACEHOLDER: swap all three images below for real Jero Fire Solutions photography */}
          <div className="relative hidden lg:block" itemProp="image" itemScope itemType="https://schema.org/ImageObject">
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10 transition-transform hover:scale-[1.02]">
                <Image
                  src="/fire-alarm-technician-installing-panel.jpg"
                  alt="Jero Fire Solutions technician installing a fire alarm panel in Gauteng"
                  fill
                  className="object-cover"
                  priority
                  quality={85}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  itemProp="contentUrl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
              </div>

              <div className="absolute -bottom-8 -left-8 aspect-square w-48 overflow-hidden rounded-2xl border-4 border-background shadow-xl ring-1 ring-white/10 transition-transform hover:scale-105">
                <Image
                  src="/fire-extinguisher-inspection-certification.jpg"
                  alt="Jero Fire Solutions technician inspecting and certifying a fire extinguisher"
                  fill
                  className="object-cover"
                  loading="lazy"
                  quality={80}
                  sizes="192px"
                />
              </div>

              <div className="absolute -bottom-4 -right-4 rounded-2xl bg-card p-6 shadow-2xl border border-border backdrop-blur-sm hover:scale-105 transition-transform">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent/80 shadow-lg">
                    <Award className="h-7 w-7 text-accent-foreground" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-card-foreground">6</p>
                    <p className="text-sm text-muted-foreground">Fire Safety Services</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 right-12 rounded-xl bg-secondary px-4 py-3 shadow-xl ring-1 ring-white/10 hover:scale-105 transition-transform">
                <p className="text-2xl font-bold text-secondary-foreground">10+</p>
                <p className="text-xs text-secondary-foreground/80">Years Experience</p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 border-t border-white/10 pt-10">
          <p className="text-center text-sm text-primary-foreground/60 mb-6 font-medium">
            Trusted by residential, commercial and industrial clients across Gauteng
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-8">
            <div className="flex items-center gap-2 text-white/90 bg-white/5 rounded-lg px-4 py-2 backdrop-blur-sm hover:bg-white/10 transition-all">
              <Shield className="h-5 w-5 text-accent" aria-hidden="true" />
              <span className="text-sm font-semibold">Certified Fire Technicians</span>
            </div>
            <div className="flex items-center gap-2 text-white/90 bg-white/5 rounded-lg px-4 py-2 backdrop-blur-sm hover:bg-white/10 transition-all">
              <CheckCircle className="h-5 w-5 text-accent" aria-hidden="true" />
              <span className="text-sm font-semibold">Certification on Completion</span>
            </div>
            <div className="flex items-center gap-2 text-white/90 bg-white/5 rounded-lg px-4 py-2 backdrop-blur-sm hover:bg-white/10 transition-all">
              <Shield className="h-5 w-5 text-accent" aria-hidden="true" />
              <span className="text-sm font-semibold">Insured Callouts</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hidden Structured Data for SEO */}
      <meta itemProp="provider" content="Jero Fire Solutions" />
      <meta itemProp="areaServed" content="Gauteng, Johannesburg, Pretoria, Kempton Park, Sandton, Centurion, Midrand" />
      <meta itemProp="serviceType" content="Fire Detection, Fire Alarm Systems, Extinguisher Servicing, Sprinkler and Suppression Systems, Fire Safety Compliance" />
    </section>
  )
}
