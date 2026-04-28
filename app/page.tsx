import {
  Smartphone,
  ShieldCheck,
  MapPin,
  Clock,
  Check,
  Phone,
  Mail,
  ArrowRight,
  MessageSquare,
  Wrench,
  ThumbsUp,
  Rocket,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { ContactForm } from "@/components/ContactForm";

const PHONE = "(404) 487-8839";
const PHONE_HREF = "tel:+14044878839";
const EMAIL = "Tolanigrowth@gmail.com";

export default function Page() {
  return (
    <main className="overflow-x-hidden">
      {/* Top bar */}
      <header className="border-b border-navy/10 bg-cream/80 backdrop-blur sticky top-0 z-40">
        <div className="container-page flex h-16 items-center justify-between">
          <a href="#top" className="flex items-center gap-2 font-bold text-navy">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-navy text-cream">T</span>
            <span>TolaniGrowth</span>
          </a>
          <a
            href={PHONE_HREF}
            className="hidden items-center gap-2 text-sm font-medium text-navy hover:text-accent sm:inline-flex"
          >
            <Phone className="h-4 w-4" />
            {PHONE}
          </a>
        </div>
      </header>

      {/* 1. HERO */}
      <section id="top" className="relative">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(255,122,69,0.10),transparent_60%),radial-gradient(40%_40%_at_90%_10%,rgba(15,27,51,0.06),transparent_60%)]"
        />
        <div className="container-page py-14 pb-12 sm:py-20">
          <div className="mx-auto max-w-3xl text-center animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white px-4 py-1.5 text-xs font-medium text-navy shadow-sm">
              <MapPin className="h-3.5 w-3.5 text-accent" />
              Snellville, GA · Serving metro Atlanta
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-navy sm:text-5xl md:text-6xl">
              Modern Websites for Local Businesses Across Metro Atlanta
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted sm:text-xl">
              Based in Snellville. Live in 5–7 days.
              <br className="hidden sm:block" /> No back-and-forth with a team. You work directly with me.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="#contact">
                Get a Free Demo of Your Site <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="#work" variant="secondary">
                See Examples
              </Button>
            </div>
            <p className="mt-6 text-sm text-muted">Currently taking 4 new projects this month.</p>
          </div>
        </div>
      </section>

      {/* 2. WHY */}
      <section className="bg-white py-12 sm:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Why your business needs a real website
            </h2>
            <p className="mt-3 text-muted">
              The first thing a customer does is look you up. Make sure they find something worth calling.
            </p>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Smartphone,
                title: "Customers check their phone first",
                body: "Most people Google your business before they call or walk in.",
              },
              {
                icon: ShieldCheck,
                title: "Look like a real business",
                body: "A Facebook page is not enough anymore. A real website builds trust.",
              },
              {
                icon: MapPin,
                title: "Show up on Google Maps",
                body: "A real website helps you rank when people search nearby.",
              },
              {
                icon: Clock,
                title: "Take bookings, calls, and orders 24/7",
                body: "Your website works while you sleep.",
              },
            ].map(({ icon: Icon, title, body }) => (
              <Card key={title} className="!p-4">
                <div className="grid h-8 w-8 place-items-center rounded-lg bg-accent/10 text-accent">
                  <Icon className="h-4 w-4" />
                </div>
                <h3 className="mt-3 text-base font-semibold text-navy">{title}</h3>
                <p className="mt-1 text-sm leading-snug text-muted">{body}</p>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button href="#contact" variant="secondary">
              Get a Free Demo <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* 3. PORTFOLIO */}
      <section id="work" className="py-12 sm:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">Recent work</h2>
            <p className="mt-3 text-muted">A few sites built for businesses around metro Atlanta.</p>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              {
                name: "Maple & Vine",
                type: "Local Restaurant — Snellville",
                blurb: "Menu, hours, and online reservations on one clean page.",
                gradient: "from-[#0F1B33] via-[#2A3A66] to-[#FF7A45]",
              },
              {
                name: "Lawrenceville Auto",
                type: "Auto Repair Shop — Lawrenceville",
                blurb: "Click-to-call, services, and a quick quote form up top.",
                gradient: "from-[#0B3B36] via-[#13524A] to-[#1F7A6B]",
              },
              {
                name: "Studio Duluth",
                type: "Hair Salon — Duluth",
                blurb: "Stylist bios, gallery, and an instant booking link.",
                gradient: "from-[#F5C9B5] via-[#E8A892] to-[#B8736A]",
              },
            ].map((p) => (
              <div key={p.name} className="group">
                <div
                  className={`relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br ${p.gradient}`}
                >
                  <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.4),transparent_50%)]" />
                  <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/95 p-3 shadow-md backdrop-blur transition-transform duration-300 group-hover:-translate-y-1">
                    <div className="flex items-center gap-2">
                      <div className="grid h-6 w-6 place-items-center rounded-md bg-navy text-[10px] font-bold text-white">
                        {p.name[0]}
                      </div>
                      <div className="text-xs font-semibold text-navy">{p.name}</div>
                    </div>
                  </div>
                </div>
                <h3 className="mt-4 text-base font-semibold text-navy">{p.name}</h3>
                <p className="text-sm font-medium text-accent">{p.type}</p>
                <p className="mt-1 text-sm leading-snug text-muted">{p.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHAT YOU GET */}
      <section className="bg-navy py-12 text-cream sm:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What you get</h2>
            <p className="mt-3 text-cream/70">Everything your site needs on day one. No upsells.</p>
          </div>
          <ul className="mx-auto mt-8 grid max-w-3xl gap-x-8 gap-y-3 sm:grid-cols-2">
            {[
              "Custom design built around your business",
              "Looks great on phones, tablets, and computers",
              "Contact form that emails you instantly",
              "Google Maps integration",
              "Click-to-call buttons",
              "Basic Google visibility setup",
              "Hosting and SSL security included",
              "Live in 5–7 days, guaranteed",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent text-white">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <span className="text-cream/95">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 text-center">
            <Button href="#contact">
              Get a Free Demo <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* 5. PRICING */}
      <section className="py-12 sm:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">Simple pricing</h2>
            <p className="mt-3 text-muted">Two ways to pay. Same site either way.</p>
          </div>

          <div className="mx-auto mt-8 grid max-w-4xl gap-5 md:grid-cols-2">
            <Card className="!p-5">
              <h3 className="text-xl font-bold text-navy">Pay Once</h3>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-4xl font-bold text-navy">$2,000</span>
                <span className="text-muted">one-time</span>
              </div>
              <p className="mt-1.5 text-sm text-muted">Own your site outright.</p>
              <Button href="#contact" className="mt-5 w-full">
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
            </Card>

            <Card className="!p-5">
              <h3 className="text-xl font-bold text-navy">Monthly Plan</h3>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-4xl font-bold text-navy">$200</span>
                <span className="text-muted">/month for 12 months</span>
              </div>
              <p className="mt-1.5 text-sm text-muted">No big upfront cost.</p>
              <Button href="#contact" className="mt-5 w-full">
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
            </Card>
          </div>

          <div className="mx-auto mt-5 max-w-4xl rounded-xl border border-navy/10 bg-white p-4">
            <p className="text-sm font-semibold text-navy">$150/month hosting & maintenance</p>
            <p className="mt-1 text-sm text-muted">
              Includes updates, backups, security, and small content changes.
            </p>
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-muted">
            Not the right fit for: enterprise companies, e-commerce stores with 100+ products, or
            custom software builds. Best for local service businesses, restaurants, and shops.
          </p>
        </div>
      </section>

      {/* 6. GUARANTEE */}
      <section className="py-10 sm:py-14">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy via-[#162244] to-navy p-10 text-cream sm:p-14">
            <div
              aria-hidden
              className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl"
            />
            <div className="relative max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-3 py-1 text-xs font-medium text-accent">
                <Sparkles className="h-3.5 w-3.5" />
                The guarantee
              </span>
              <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Live in 7 days, or you don&apos;t pay until your site is finished and ready to launch.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-cream/80">
                I handle everything. You only pay when you see your finished site, on your screen,
                ready to launch.
              </p>
              <div className="mt-8">
                <Button href="#contact">
                  Start Your Site <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PROCESS */}
      <section className="bg-white py-12 sm:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">How it works</h2>
            <p className="mt-3 text-muted">Four steps. About a week from start to live.</p>
          </div>
          <div className="mx-auto mt-8 flex max-w-3xl flex-col gap-4 lg:max-w-none lg:grid lg:grid-cols-4 lg:gap-8">
            {[
              { icon: MessageSquare, step: "01", title: "We talk", body: "Quick 15-minute call." },
              { icon: Wrench, step: "02", title: "I build", body: "Preview in 3–5 days." },
              { icon: ThumbsUp, step: "03", title: "You approve", body: "Small tweaks." },
              { icon: Rocket, step: "04", title: "We launch", body: "Live within 7 days." },
            ].map(({ icon: Icon, step, title, body }) => (
              <div
                key={step}
                className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-3"
              >
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-semibold tracking-[0.15em] text-muted">{step}</div>
                  <div className="mt-0.5 text-[15px] leading-snug">
                    <span className="font-semibold text-navy">{title}</span>
                    <span className="text-muted"> — {body}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. ABOUT */}
      <section className="py-12 sm:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto grid h-11 w-11 place-items-center rounded-full bg-accent/10 text-accent">
              <MapPin className="h-5 w-5" />
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl">About me</h2>
            <p className="mt-4 text-base leading-relaxed text-ink sm:text-lg">
              I&apos;m Tolani, based in Snellville. I help local business owners across metro
              Atlanta get a website that actually works, without the agency price or long
              timelines. Every site is built by me.
            </p>
            <div className="mt-6">
              <Button href="#contact">
                Let&apos;s Talk <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section id="contact" className="bg-white py-12 sm:py-20">
        <div className="container-page">
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-navy sm:text-4xl">
                Ready to see what your site could look like?
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                Tell me about your business. I&apos;ll build a free demo and show you what&apos;s
                possible. No pressure, no commitment.
              </p>
              <div className="mt-8 space-y-3 text-sm">
                <a
                  href={PHONE_HREF}
                  className="flex items-center gap-3 text-navy hover:text-accent"
                >
                  <Phone className="h-4 w-4" />
                  <span className="font-medium">Or call/text: {PHONE}</span>
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-3 text-navy hover:text-accent"
                >
                  <Mail className="h-4 w-4" />
                  <span className="font-medium">{EMAIL}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-navy/10 bg-cream p-6 sm:p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FOOTER */}
      <footer className="border-t border-navy/10 bg-navy py-12 text-cream">
        <div className="container-page">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-2 font-bold">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent text-white">
                  T
                </span>
                <span>TolaniGrowth</span>
              </div>
              <p className="mt-3 text-sm text-cream/70">
                Websites for local businesses, built by one person.
              </p>
            </div>
            <div className="text-sm">
              <p className="font-semibold">Service area</p>
              <p className="mt-2 text-cream/70">
                Proudly serving metro Atlanta — Gwinnett, Cobb, DeKalb, Fulton & North Georgia.
              </p>
            </div>
            <div className="text-sm">
              <p className="font-semibold">Get in touch</p>
              <a href={PHONE_HREF} className="mt-2 block text-cream/70 hover:text-accent">
                {PHONE}
              </a>
              <a href={`mailto:${EMAIL}`} className="block text-cream/70 hover:text-accent">
                {EMAIL}
              </a>
            </div>
          </div>
          <div className="mt-10 border-t border-cream/10 pt-6 text-xs text-cream/50">
            © {new Date().getFullYear()} TolaniGrowth. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
