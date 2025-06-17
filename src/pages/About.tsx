import React from 'react';
import { TrendingUp, Target, Users, Zap, ArrowRight, CheckCircle, Lightbulb, Search, Layers, Flag, Wrench, Cog, BarChart3, Eye, Repeat, Sparkles, Dribbble, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Spline from '@splinetool/react-spline';

const About: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'We focus on measurable outcomes that directly impact your bottom line and drive performance at speed and scale.'
    },
    {
      icon: Zap,
      title: 'Fast Execution',
      description: 'From strategy to implementation, we move at the speed of business with urgency and bias for action.'
    },
    {
      icon: Users,
      title: 'Partnership Approach',
      description: 'We work as an extension of your team, bringing the same high standards whether it\'s growth or operational challenges.'
    },
    {
      icon: CheckCircle,
      title: 'Quality Assured',
      description: 'Every solution is built for precision, scalability, and long-term success with world-class outcomes.'
    }
  ];

  const solvepathSteps = [
    {
      icon: Search,
      title: 'Identify',
      description: 'Problems & Opportunities'
    },
    {
      icon: Eye,
      title: 'Investigate',
      description: 'Root Causes & Dependencies'
    },
    {
      icon: Layers,
      title: 'Group',
      description: '& Prioritize'
    },
    {
      icon: Flag,
      title: 'Translate',
      description: 'Into Challenges'
    },
    {
      icon: Lightbulb,
      title: 'Develop',
      description: 'Approaches'
    },
    {
      icon: Wrench,
      title: 'Define',
      description: 'Solutions'
    }
  ];

  const executionSteps = [
    'Strategize', 'Plan', 'Implement', 'Execute', 'Oversee', 'Analyze', 'Understand', 'Optimize', 'Innovate'
  ];

  const deliverables = [
    {
      icon: Eye, // TODO: Change to a better icon
      title: 'Clarity Where Others Get Stuck',
      description: 'We surface the root causes, not just the symptoms. We don\'t stop until we\'ve built the plan.'
    },
    {
      icon: Cog, // TODO: Change to a better icon
      title: 'Execution That Fits',
      description: 'Strategy is only as good as what gets implemented. We build and deliver solutions that work in real life, not just on slides.'
    },
    {
      icon: TrendingUp,
      title: 'Momentum That Compounds',
      description: 'We are built for forward motion, iterative improvement, and long-term scale.'
    }
  ];

  const people = [
    {
      id: "person-1",
      name: "Syed Moinuddin",
      role: "Front End Developer",
      description:
        "Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
    },
  ];

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-8 md:py-16 mt-8 md:mt-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
            {/* Left: Text Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair text-foreground mb-4 lg:mb-6">
                We bring{' '}
                <span className="text-primary">growth</span>{' '}
                and{' '}
                <span className="text-primary">scale</span>{' '}
                to life
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-6 lg:mb-8 leading-relaxed">
                Perssonify was built around one simple idea: the right solution at the right time can change everything. We make the right solutions happen right now.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" asChild>
                  <a href="/contact">Start Your Journey<ArrowRight className="ml-2 w-4 h-4" /></a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="/growth-solutions">Explore Solutions</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="/blog">Read Our Blog</a>
                </Button>
              </div>
            </div>
            {/* Right: Spline Scene */}
            <div className="w-full lg:w-1/2 h-[250px] md:h-[300px] lg:h-[500px] mt-6 lg:mt-0">
              <Spline scene="https://prod.spline.design/ZzqJhoN-u-SVRju1/scene.splinecode" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-center">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6 dark:prose-invert">
              <p>
                We started in performance marketing and branding, where speed, efficiency, and ROI are non-negotiable—they're expected. As we worked with ambitious businesses to drive growth, we saw a deeper pattern: challenges beyond growth and marketing—like process gaps, operational slowdowns, and disconnected systems—were limiting performance.
              </p>
              <p>
                By solving what slowed growth, we unlocked new value, accelerated results, and expanded what growth achieved. The insight was simple but powerful: the same thinking that optimized campaigns could optimize companies.
              </p>
              <p>
                That shift didn't change who we are—it sharpened it. We still move with urgency. We still focus relentlessly on ROI. We still bring the same bias for action, comfort with high-stakes decisions, and clarity in fast-moving environments. And we still thrive where the pressure's high and the expectations even higher.
              </p>
              <p className="text-xl font-semibold text-foreground">
                What changed is how far we can go.
              </p>
              <p>
                We apply the same logic, structure, and high standards to solving both growth and operational challenges—independently or in tandem—so businesses can scale with confidence and adapt without friction. Whether we're streamlining how work gets done or accelerating how demand is created, we help businesses move faster and scale with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SolvePath Framework */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              How We Solve
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              At the heart of how we work, the SolvePath Framework ensures we're always solving the right things, the right way. The SolvePath Framework lets us turn problems and opportunities into actionable, measurable high-yield solutions that drive performance, at speed and at scale.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
            {solvepathSteps.map((step, index) => (
              <div key={step.title} className="text-center">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg" asChild>
              <a href="/about#solvepath">Learn More About SolvePath Framework<ArrowRight className="ml-2 w-4 h-4" /></a>
            </Button>
          </div>
        </div>
      </section>

      {/* Execution Model */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Perssonify Execution Model
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              But strategy only matters if it moves. So we built the Perssonify Execution model around it. This model turns insight into delivery, and delivery into improvement. It's a continuous loop that's built to move fast without breaking what matters.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-background">
              <div className="flex flex-wrap justify-center items-center gap-4">
                {executionSteps.map((step, index) => (
                  <React.Fragment key={step}>
                    <div className="flex items-center justify-center px-4 py-2 bg-primary/10 rounded-full">
                      <span className="text-primary font-semibold">{step}</span>
                    </div>
                    {index < executionSteps.length - 1 && (
                      <ArrowRight className="w-4 h-4 text-muted-foreground hidden sm:block" />
                    )}
                  </React.Fragment>
                ))}
              </div>
              <p className="text-center text-muted-foreground mt-6">
                Whether it's a campaign, a transformation, or an ecosystem rollout, this model ensures everything we implement works in context, adapts in real time, and gets better over time.
              </p>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" size="lg" asChild>
              <a href="/about#execution">Learn More About Our Execution Model<ArrowRight className="ml-2 w-4 h-4" /></a>
            </Button>
          </div>

          <div className="text-center mt-12 max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground">
              Together, the SolvePath Framework and our Execution Model are two sides of the same system:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Layers className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">One Creates Structure</h3>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">One Drives Momentum</h3>
              </div>
            </div>
            <p className="text-lg font-semibold text-foreground mt-6">
              Both are built to generate measurable results—fast.
            </p>
          </div>
        </div>
      </section>

      {/* Two Solution Families */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Two Solution Families Under One Roof
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Our two solution families are part of the same system, two complementary engines that help businesses scale what works and fix what doesn't. That integrated approach lets us expand and evolve our offerings across both tracks without losing speed, clarity, or control.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="h-full bg-background">
              <CardHeader>
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-playfair">Growth Solutions</CardTitle>
                <CardDescription className="text-lg font-semibold">
                  High-Performance Marketing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  High-performance growth marketing that drives demand, accelerates acquisition, 
                  and amplifies brand impact. If your priority is to attract the right audience, 
                  convert consistently, and expand your market reach, our Growth Solutions are built for you.
                </p>
                <Button className="w-full" asChild>
                  <a href="/growth-solutions">Learn More<ArrowRight className="ml-2 w-4 h-4" /></a>
                </Button>
              </CardContent>
            </Card>

            <Card className="h-full bg-background">
              <CardHeader>
                <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <Target className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-2xl font-playfair">Strategic Solutions</CardTitle>
                <CardDescription className="text-lg font-semibold">
                  Technology-Enhanced Operational Scaling
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  High-ROI business process enhancement that streamlines operations, automates intelligently, 
                  and scales with precision. We help you improve efficiency and ensure operations scale without chaos.
                </p>
                <Button className="w-full" asChild>
                  <a href="/strategic-solutions">Learn More<ArrowRight className="ml-2 w-4 h-4" /></a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              What We Deliver
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Across both Growth Solutions and Strategic Solutions, we use the same structured foundation. One that starts with understanding, adapts to context, and ends in execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {deliverables.map((item, index) => (
              <Card key={item.title} className="text-center h-full bg-background">
                <CardHeader>
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-playfair">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              How We Work
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our approach is built on partnership, precision, and proven results. As the needs of our clients have evolved, so have we. Our ability to think strategically, execute efficiently, and adapt intelligently is what keeps us relevant and makes us invaluable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={value.title} className="text-center h-full bg-background">
                <CardHeader>
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-playfair">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Meet the Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The team you'll be working with
            </p>
          </div>
          <div className="grid gap-y-12 gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
            {people.map((person) => (
              <div
                key={person.id}
                className="flex flex-col items-center bg-card border border-border rounded-2xl shadow-sm p-6 h-full transition-colors"
              >
                <Avatar className="mb-4 w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 shadow-md border-2 border-primary/30">
                  <AvatarImage src={person.avatar} />
                  <AvatarFallback>{person.name[0]}</AvatarFallback>
                </Avatar>
                <p className="font-semibold text-lg text-foreground text-center mt-2 mb-1">
                  {person.name}
                </p>
                <p className="text-primary text-sm font-medium mb-2 text-center">
                  {person.role}
                </p>
                <p className="text-sm text-muted-foreground text-center mb-3">
                  {person.description}
                </p>
                <div className="mt-auto flex gap-4">
                  <a href="#" aria-label="Github"><Github className="size-5 text-muted-foreground hover:text-primary transition-colors" /></a>
                  <a href="#" aria-label="Linkedin"><Linkedin className="size-5 text-muted-foreground hover:text-primary transition-colors" /></a>
                  <a href="#" aria-label="Dribbble"><Dribbble className="size-5 text-muted-foreground hover:text-primary transition-colors" /></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - clean, centered, no colored box */}
      <section className="pt-24 pb-8 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto">
              If you're looking for a partner that's just as focused on results as you are—one that works fast, thinks strategically, and makes complex things executable—Perssonify is built for that.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/contact">Get Started Today<ArrowRight className="ml-2 w-4 h-4" /></a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/growth-solutions">View Our Solutions</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;