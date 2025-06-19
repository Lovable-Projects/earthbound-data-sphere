"use client"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Target,
  Users,
  Mail,
  Palette,
  TrendingUp,
  Search,
  Globe,
  BarChart3,
  Settings,
  FilterIcon as Funnel,
  Building,
  FileText,
  Zap,
  Linkedin,
  Cog,
  Database,
  Wrench,
  Briefcase,
  DollarSign,
  UserCheck,
  Activity,
  Shield,
  Network,
} from "lucide-react"

export default function TimelineSection() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: "-10% 0px -90% 0px" },
    )

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const sections = [
    { id: "growth-solutions", title: "Growth Solutions" },
    { id: "strategic-solutions", title: "Strategic Solutions" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section at the top */}
      <div className="bg-background py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-center text-primary">Our Solutions</h1>
          <p className="text-lg sm:text-xl md:text-2xl text-center max-w-4xl mx-auto leading-relaxed">
            Whether you're launching something new or optimizing what's already working, we deliver what your business
            needs to grow, adapt, and move faster.
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="bg-background text-foreground flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row gap-8">
          {/* Table of Contents - Hidden on mobile, sticky on desktop */}
          <nav className="hidden lg:block lg:sticky lg:top-24 lg:self-start p-4 lg:w-64">
            <ul className="space-y-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => scrollToSection(section.id)}
                    className={cn(
                      "text-sm transition-colors pl-2 border-l-2 w-full text-left",
                      activeSection === section.id
                        ? "text-primary border-primary dark:text-primary dark:border-primary"
                        : "text-muted-foreground hover:text-foreground border-transparent",
                    )}
                  >
                    {section.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Main Content */}
          <main className="flex-1 max-w-none">
            {/* Growth Solutions Section */}
            <section id="growth-solutions" className="py-8 mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Growth Solutions</h2>

              <h3 className="text-xl sm:text-2xl font-semibold mb-4">High-Performance Marketing</h3>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                You need more customers, more engagement, and more momentum. If your priority is to attract the right
                audience, convert consistently, and expand your market reach, our Growth Solutions are built for you. We
                deliver high-performance marketing strategy and execution that engineers demand, amplifies brand value,
                and accelerates customer acquisition.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold mb-4">Core Growth Solutions</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
                <div className="flex items-start gap-3 p-4 rounded-lg border bg-card">
                  <Target className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-foreground">Performance Marketing & Paid Media</h5>
                    <p className="text-sm text-muted-foreground">High-ROI ads that convert.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg border bg-card">
                  <Users className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-foreground">Social Media Marketing & Brand Engagement</h5>
                    <p className="text-sm text-muted-foreground">Build audience, spark action.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg border bg-card">
                  <Mail className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-foreground">Email Marketing & Marketing Automation</h5>
                    <p className="text-sm text-muted-foreground">Automate nurture, drive loyalty.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg border bg-card">
                  <Palette className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-foreground">Creative Solutions</h5>
                    <p className="text-sm text-muted-foreground">Visuals that get results.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg border bg-card">
                  <TrendingUp className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-foreground">Conversion Rate Optimization (CRO)</h5>
                    <p className="text-sm text-muted-foreground">Test. Refine. Convert more.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg border bg-card">
                  <Search className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-foreground">Search Engine Optimization (SEO) & Website Growth</h5>
                    <p className="text-sm text-muted-foreground">Rank higher. Grow faster.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg border bg-card">
                  <Globe className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-foreground">Website Solutions</h5>
                    <p className="text-sm text-muted-foreground">Seamless, scalable, conversion-ready.</p>
                  </div>
                </div>
              </div>

              <h4 className="text-lg sm:text-xl font-semibold mb-4">Specialized Growth Solutions</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
                <div className="flex items-start gap-3 p-4 rounded-lg border bg-card">
                  <BarChart3 className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-foreground">Deep Dive Audit & Strategic Insights</h5>
                    <p className="text-sm text-muted-foreground">Clarity through expert analysis.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg border bg-card">
                  <Settings className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-foreground">Analytics and Event Tracking Setup</h5>
                    <p className="text-sm text-muted-foreground">Track what matters, measure what works.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg border bg-card">
                  <Funnel className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-foreground">Lead Generation & Funnel Strategy</h5>
                    <p className="text-sm text-muted-foreground">Build funnels that convert.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg border bg-card">
                  <Building className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-foreground">Brand Architecture & Strategy</h5>
                    <p className="text-sm text-muted-foreground">Define, differentiate, scale.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg border bg-card">
                  <FileText className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-foreground">Content Strategy & Planning</h5>
                    <p className="text-sm text-muted-foreground">Structure content to drive growth.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg border bg-card">
                  <Zap className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-foreground">AI-Accelerated Content Production Pipelines</h5>
                    <p className="text-sm text-muted-foreground">Create more, faster, with precision.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg border bg-card">
                  <Linkedin className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-foreground">Executive Personal Branding & LinkedIn Marketing</h5>
                    <p className="text-sm text-muted-foreground">Elevate presence, grow influence.</p>
                  </div>
                </div>
              </div>

              <div className="text-center">
              <Button className="font-semibold text-lg mb-4" size="lg" asChild>
                  <a href="/contact">Ready to move faster? Let's talk.</a>
                </Button>
              </div>
            </section>

            {/* Strategic Solutions Section */}
            <section id="strategic-solutions" className="py-8 mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Strategic Solutions</h2>

              <p className="mb-6 text-muted-foreground leading-relaxed">
                You need to improve efficiency, automate intelligently, and ensure operations scale without chaos. If
                you're navigating operational bottlenecks, automation gaps, or complex scaling challenges, our Strategic
                Solutions offer high-ROI tailored strategy and implementations that are built for precision,
                scalability, and efficiency. From workflow orchestration to platform optimization, we help you execute
                at the next level with minimal disruption.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold mb-4">Core Strategic Solutions</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
                <div className="flex items-start gap-3 p-4 rounded-lg border bg-card">
                  <Cog className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-foreground">Process & Workflow Automation</h5>
                    <p className="text-sm text-muted-foreground">Automate execution. Eliminate friction.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg border bg-card">
                  <Database className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-foreground">Digital Systems Enablement</h5>
                    <p className="text-sm text-muted-foreground">Optimize platforms. Empower teams.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg border bg-card">
                  <Wrench className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-foreground">Custom Solution Engineering</h5>
                    <p className="text-sm text-muted-foreground">Solve complex. Deliver fast.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg border bg-card">
                  <Briefcase className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-foreground">Enterprise Evolution & Strategic Transformation</h5>
                    <p className="text-sm text-muted-foreground">Reshape. Scale. Future-proof.</p>
                  </div>
                </div>
              </div>

              <h4 className="text-lg sm:text-xl font-semibold mb-4">Solutions By Function</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
                <div className="flex items-start gap-3 p-4 rounded-lg border bg-card">
                  <DollarSign className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-foreground">Finance</h5>
                    <p className="text-sm text-muted-foreground">Automate reporting. Accelerate reconciliation.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg border bg-card">
                  <UserCheck className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-foreground">Human Resources</h5>
                    <p className="text-sm text-muted-foreground">Streamline onboarding. Simplify compliance workflows.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg border bg-card">
                  <Activity className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-foreground">Operations</h5>
                    <p className="text-sm text-muted-foreground">Unblock execution. Speed up critical workflows.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg border bg-card">
                  <Shield className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-foreground">Compliance & Governance</h5>
                    <p className="text-sm text-muted-foreground">Reduce risk. Ensure audit-ready control.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg border bg-card">
                  <Network className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-foreground">Cross-Functional Leadership</h5>
                    <p className="text-sm text-muted-foreground">Align departments. Orchestrate complex delivery.</p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button className="font-semibold text-lg mb-4" size="lg" asChild>
                  <a href="/contact">Ready to move faster? Let's talk.</a>
                </Button>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}
