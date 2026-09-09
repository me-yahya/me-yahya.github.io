import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Code2, ExternalLink, GraduationCap, Linkedin, Mail, MapPin, MessageCircle } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-end mb-6">
          <ThemeToggle />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 md:min-h-[600px]">
          <Card
            id="about"
            className="md:col-span-2 lg:col-span-2 md:row-span-2 p-6 bg-card border border-border relative overflow-hidden rounded-2xl shadow-none"
          >
            <div className="flex flex-col h-full relative z-10">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-primary font-sans">YM</span>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-card-foreground font-sans">Yahya Bin Masood</h1>
                  <p className="text-sm text-primary font-semibold font-sans">Software Engineer</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                    <MapPin className="w-4 h-4" />
                    <span className="font-sans">HITEC University Taxila</span>
                  </div>
                </div>
              </div>
              <div className="text-card-foreground leading-relaxed font-sans flex-1 text-sm space-y-3">
                <p>
                  Software Engineering undergraduate with hands-on experience building real client websites and digital
                  products, including work with Oxygen Plus AI. Skilled in HTML, CSS, JavaScript, WordPress, React,
                  Next.js, and Node.js, with a focus on clean, responsive, production-ready web experiences.
                </p>
                <p>
                  I help turn ideas into practical websites and web apps, from layout and frontend development to
                  deployment-ready project structure. I am open to more projects, freelance work, and collaborations
                  where I can contribute reliable software and continue expanding my experience.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="secondary" className="font-sans text-xs rounded-full">
                  Web Development
                </Badge>
                <Badge variant="secondary" className="font-sans text-xs rounded-full">
                  JavaScript
                </Badge>
                <Badge variant="secondary" className="font-sans text-xs rounded-full">
                  WordPress
                </Badge>
                <Badge variant="secondary" className="font-sans text-xs rounded-full">
                  React.js
                </Badge>
                <Badge variant="secondary" className="font-sans text-xs rounded-full">
                  Node.js
                </Badge>
                <Badge variant="secondary" className="font-sans text-xs rounded-full">
                  Next.js
                </Badge>
              </div>
            </div>
          </Card>

          <Card
            id="experience"
            className="md:col-span-2 p-6 bg-card border border-border relative overflow-hidden rounded-2xl shadow-none"
          >
            <div className="relative z-10">
              <h2 className="font-bold text-card-foreground mb-4 font-sans">Experience</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-card-foreground font-sans text-sm">Web Developer</h3>
                    <p className="text-xs text-muted-foreground font-sans">Oxygen Plus AI</p>
                    <p className="text-sm text-muted-foreground mt-2 font-sans">
                      Worked on modern web development projects for Oxygen Plus AI, creating responsive pages and
                      polished user-facing experiences with practical frontend implementation.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Code2 className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-card-foreground font-sans text-sm">Node.js & Next.js Development</h3>
                    <p className="text-xs text-muted-foreground font-sans">
                      Built and delivered Next.js apps with Node.js frameworks, handling frontend features, APIs, and
                      deployment-ready project structure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="md:col-span-1 p-6 bg-card border border-border relative overflow-hidden rounded-2xl shadow-none">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-5 h-5 text-primary" />
                <h2 className="font-semibold text-card-foreground font-sans">Education</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-card-foreground font-sans text-sm">BSc Software Engineering</h3>
                  <p className="text-xs text-muted-foreground font-sans">In Progress, 2023 - Present</p>
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground font-sans text-sm">HSSC Pre-Engineering</h3>
                  <p className="text-xs text-muted-foreground font-sans">Completed, 2021 - 2023</p>
                </div>
              </div>
            </div>
          </Card>

          <Card
            id="contact"
            className="md:col-span-1 p-6 bg-card border border-border relative overflow-hidden rounded-2xl shadow-none"
          >
            <div className="relative z-10">
              <h2 className="font-semibold text-card-foreground mb-4 font-sans">Connect</h2>
              <div className="space-y-3">
                <a
                  href="https://www.linkedin.com/in/me-yahya/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-card-foreground hover:text-primary hover:translate-x-1 transition-all duration-200"
                >
                  <Linkedin className="w-4 h-4" />
                  <span className="text-sm font-sans">LinkedIn</span>
                </a>
                <a
                  href="mailto:yahyabinmasood2004@gmail.com"
                  className="flex items-center gap-3 text-card-foreground hover:text-primary hover:translate-x-1 transition-all duration-200"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm font-sans">Email</span>
                </a>
                <a
                  href="https://wa.me/923351667799"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-card-foreground hover:text-primary hover:translate-x-1 transition-all duration-200"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-sm font-sans">WhatsApp</span>
                </a>
              </div>
            </div>
          </Card>

          <Card
            id="projects"
            className="md:col-span-2 lg:col-span-2 p-6 bg-card border border-border relative rounded-2xl shadow-none"
          >
            <div className="relative z-10">
              <h2 className="font-bold text-card-foreground mb-4 font-sans">Projects for Oxygen Plus AI</h2>
              <div className="space-y-5">
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-semibold text-card-foreground font-sans">QLD Car Hire</h3>
                    <a
                      href="https://qldcarhire.com.au/"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-border p-2 text-card-foreground transition-all duration-200 hover:bg-primary/10 hover:text-primary"
                      aria-label="Open QLD Car Hire"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2 font-sans">
                    Next.js car hire website built and delivered with Codex support, focused on service details and
                    responsive pages.
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="text-xs font-sans rounded-full">
                      Next.js
                    </Badge>
                    <Badge variant="outline" className="text-xs font-sans rounded-full">
                      Responsive Website
                    </Badge>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-semibold text-card-foreground font-sans">Melbourne Coffee Culture</h3>
                    <a
                      href="https://melbournecoffeeculture.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-border p-2 text-card-foreground transition-all duration-200 hover:bg-primary/10 hover:text-primary"
                      aria-label="Open Melbourne Coffee Culture"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2 font-sans">
                    Next.js coffee brand website designed and delivered with Codex help for a polished, mobile-friendly
                    web presence.
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="text-xs font-sans rounded-full">
                      Next.js
                    </Badge>
                    <Badge variant="outline" className="text-xs font-sans rounded-full">
                      Client Website
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <footer className="mt-12 text-center">
          <p className="text-muted-foreground text-sm font-sans">Yahya Bin Masood - Software Engineer</p>
        </footer>
      </div>
    </div>
  )
}
