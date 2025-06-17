import React from "react";
import { ContainerScroll, CardSticky } from "@/components/cards-stack"

const PROCESS_PHASES = [
  {
    id: "process-1",
    title: "Research and Analysis",
    description:
      "With your vision in mind, we enter the Research and Analysis phase. Here, we examine your competitors, industry trends, and user preferences. This informed approach ensures your website stands out and provides an excellent user experience.",
  },
  {
    id: "process-2",
    title: "Wireframing and Prototyping",
    description:
      "We move on to Wireframing and Prototyping, where we create skeletal representations of your website's pages. These visual indigoprints allow us to test and refine the user experience before diving into design.",
  },
  {
    id: "process-3",
    title: "Design Creation",
    description:
      "Now, it's time for the Design Creation phase. Our talented designers bring your vision to life. We focus on aesthetics, ensuring your website not only looks stunning but also aligns perfectly with your brand identity.",
  },
  {
    id: "process-4",
    title: "Development and Testing",
    description:
      "In the Development and Testing phase, our skilled developers turn designs into a fully functional website. Rigorous testing ensures everything works seamlessly, providing an exceptional user experience.",
  },
  {
    id: "process-5",
    title: "Launch and Support",
    description:
      "Our commitment continues beyond launch. We offer post-launch support to address questions, provide assistance, and ensure your website remains updated and optimized. The Website Design Process isn't just about creating a website; it's about crafting a digital experience that resonates, engages, and converts.",
  },
]

const Process = () => {
  return (
    <div className="container bg-background px-6 text-foreground xl:px-12 py-24">
      <div className="grid md:grid-cols-2 md:gap-8 xl:gap-12 items-start">
        <div className="md:sticky md:top-32 md:self-start md:h-fit py-12">
          <h5 className="text-xs uppercase tracking-wide text-primary">our process</h5>
          <h2 className="mb-6 mt-4 text-4xl font-bold tracking-tight">
            Planning your{" "}
            <span className="text-primary">project development</span> journey
          </h2>
          <p className="max-w-prose text-sm text-muted-foreground">
            Our journey begins with a deep dive into your vision. In the
            Discovery phase, we engage in meaningful conversations to grasp your
            brand identity, goals, and the essence you want to convey. This
            phase sets the stage for all that follows.
          </p>
        </div>
        <ContainerScroll className="space-y-8 py-12 min-h-[120vh] mt-16">
          {PROCESS_PHASES.map((phase, index) => (
            <CardSticky
              key={phase.id}
              index={index + 2}
              className="rounded-2xl border border-border p-8 shadow-md backdrop-blur-md bg-card text-card-foreground"
            >
              <div className="flex items-center justify-between gap-4">
                <h2 className="my-6 text-2xl font-bold tracking-tighter">
                  {phase.title}
                </h2>
                <h3 className="text-2xl font-bold text-primary">
                  {String(index + 1).padStart(2, "0")}
                </h3>
              </div>

              <p className="text-foreground">{phase.description}</p>
            </CardSticky>
          ))}
        </ContainerScroll>
      </div>
    </div>
  )
}
export { Process}
