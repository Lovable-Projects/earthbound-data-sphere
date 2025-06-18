"use client"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export default function Home() {
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
      <div className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Our Solutions</h1>
          <p className="text-xl md:text-2xl text-center max-w-4xl mx-auto leading-relaxed">
            Whether you're launching something new or optimizing what's already working, we deliver what your business
            needs to grow, adapt, and move faster.
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="bg-primary text-primary-foreground flex-grow">
        <div className="container mx-auto px-4 py-8 flex gap-8">
          {/* Table of Contents */}
          <nav className="sticky top-4 self-start p-4">
            <ul className="space-y-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => scrollToSection(section.id)}
                    className={cn(
                      "text-sm transition-colors pl-2 border-l-2",
                      activeSection === section.id
                        ? "text-[#022029] border-[#022029]"
                        : "text-[#02202999] hover:text-[#022029cc] border-transparent",
                    )}
                  >
                    {section.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Main Content */}
          <main className="flex-1">
            {/* Growth Solutions Section */}
            <section id="growth-solutions" className="py-24 mb-16">
              <h2 className="text-2xl font-bold mb-4">Growth Solutions</h2>

              <h3 className="text-xl font-semibold mb-4">High-Performance Marketing</h3>
              <p className="mb-6">
                You need more customers, more engagement, and more momentum. If your priority is to attract the right
                audience, convert consistently, and expand your market reach, our Growth Solutions are built for you. We
                deliver high-performance marketing strategy and execution that engineers demand, amplifies brand value,
                and accelerates customer acquisition.
              </p>

              <h4 className="text-lg font-semibold mb-4">Core Growth Solutions</h4>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div>
                  <h5 className="font-semibold">Performance Marketing & Paid Media</h5>
                  <p className="text-sm text-gray-600">High-ROI ads that convert.</p>
                </div>
                <div>
                  <h5 className="font-semibold">Social Media Marketing & Brand Engagement</h5>
                  <p className="text-sm text-gray-600">Build audience, spark action.</p>
                </div>
                <div>
                  <h5 className="font-semibold">Email Marketing & Marketing Automation</h5>
                  <p className="text-sm text-gray-600">Automate nurture, drive loyalty.</p>
                </div>
                <div>
                  <h5 className="font-semibold">Creative Solutions</h5>
                  <p className="text-sm text-gray-600">Visuals that get results.</p>
                </div>
                <div>
                  <h5 className="font-semibold">Conversion Rate Optimization (CRO)</h5>
                  <p className="text-sm text-gray-600">Test. Refine. Convert more.</p>
                </div>
                <div>
                  <h5 className="font-semibold">Search Engine Optimization (SEO) & Website Growth</h5>
                  <p className="text-sm text-gray-600">Rank higher. Grow faster.</p>
                </div>
                <div>
                  <h5 className="font-semibold">Website Solutions</h5>
                  <p className="text-sm text-gray-600">Seamless, scalable, conversion-ready.</p>
                </div>
              </div>

              <h4 className="text-lg font-semibold mb-4">Specialized Growth Solutions</h4>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div>
                  <h5 className="font-semibold">Deep Dive Audit & Strategic Insights</h5>
                  <p className="text-sm text-gray-600">Clarity through expert analysis.</p>
                </div>
                <div>
                  <h5 className="font-semibold">Analytics and Event Tracking Setup</h5>
                  <p className="text-sm text-gray-600">Track what matters, measure what works.</p>
                </div>
                <div>
                  <h5 className="font-semibold">Lead Generation & Funnel Strategy</h5>
                  <p className="text-sm text-gray-600">Build funnels that convert.</p>
                </div>
                <div>
                  <h5 className="font-semibold">Brand Architecture & Strategy</h5>
                  <p className="text-sm text-gray-600">Define, differentiate, scale.</p>
                </div>
                <div>
                  <h5 className="font-semibold">Content Strategy & Planning</h5>
                  <p className="text-sm text-gray-600">Structure content to drive growth.</p>
                </div>
                <div>
                  <h5 className="font-semibold">AI-Accelerated Content Production Pipelines</h5>
                  <p className="text-sm text-gray-600">Create more, faster, with precision.</p>
                </div>
                <div>
                  <h5 className="font-semibold">Executive Personal Branding & LinkedIn Marketing</h5>
                  <p className="text-sm text-gray-600">Elevate presence, grow influence.</p>
                </div>
              </div>

              <p className="text-center font-semibold text-lg mb-8">Ready to grow faster? Let's talk.</p>
            </section>

            {/* Strategic Solutions Section */}
            <section id="strategic-solutions" className="py-24 mb-16">
              <h2 className="text-2xl font-bold mb-4">Strategic Solutions</h2>

              <p className="mb-6">
                You need to improve efficiency, automate intelligently, and ensure operations scale without chaos. If
                you're navigating operational bottlenecks, automation gaps, or complex scaling challenges, our Strategic
                Solutions offer high-ROI tailored strategy and implementations that are built for precision,
                scalability, and efficiency. From workflow orchestration to platform optimization, we help you execute
                at the next level with minimal disruption.
              </p>

              <h4 className="text-lg font-semibold mb-4">Core Strategic Solutions</h4>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div>
                  <h5 className="font-semibold">Process & Workflow Automation</h5>
                  <p className="text-sm text-gray-600">Automate execution. Eliminate friction.</p>
                </div>
                <div>
                  <h5 className="font-semibold">Digital Systems Enablement</h5>
                  <p className="text-sm text-gray-600">Optimize platforms. Empower teams.</p>
                </div>
                <div>
                  <h5 className="font-semibold">Custom Solution Engineering</h5>
                  <p className="text-sm text-gray-600">Solve complex. Deliver fast.</p>
                </div>
                <div>
                  <h5 className="font-semibold">Enterprise Evolution & Strategic Transformation</h5>
                  <p className="text-sm text-gray-600">Reshape. Scale. Future-proof.</p>
                </div>
              </div>

              <h4 className="text-lg font-semibold mb-4">Solutions By Function</h4>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div>
                  <h5 className="font-semibold">Finance</h5>
                  <p className="text-sm text-gray-600">Automate reporting. Accelerate reconciliation.</p>
                </div>
                <div>
                  <h5 className="font-semibold">Human Resources</h5>
                  <p className="text-sm text-gray-600">Streamline onboarding. Simplify compliance workflows.</p>
                </div>
                <div>
                  <h5 className="font-semibold">Operations</h5>
                  <p className="text-sm text-gray-600">Unblock execution. Speed up critical workflows.</p>
                </div>
                <div>
                  <h5 className="font-semibold">Compliance & Governance</h5>
                  <p className="text-sm text-gray-600">Reduce risk. Ensure audit-ready control.</p>
                </div>
                <div>
                  <h5 className="font-semibold">Cross-Functional Leadership</h5>
                  <p className="text-sm text-gray-600">Align departments. Orchestrate complex delivery.</p>
                </div>
              </div>

              <p className="text-center font-semibold text-lg">Ready to move faster? Let's talk.</p>
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}
