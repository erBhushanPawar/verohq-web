import {
  ArrowRight,
  CheckCircle,
  BarChart3,
  Target,
  Users,
  Zap,
} from "lucide-react";
import { Link as WaspRouterLink, routes } from "wasp/client/router";
import { Button } from "../client/components/ui/button";
import { Card, CardContent } from "../client/components/ui/card";
import Footer from "../landing-page/components/Footer";
import { footerNavigation } from "../landing-page/contentSections";

export default function ProductTeamsPage() {
  return (
    <div className="bg-background text-foreground">
      <main className="isolate">
        {/* Hero */}
        <div className="relative overflow-hidden pt-14">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-background to-background" />
          <div className="absolute right-0 top-0 -z-10 w-96 h-96 bg-gradient-to-bl from-primary/20 to-transparent rounded-full blur-3xl" />

          <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-8">
            <h1 className="text-4xl font-bold sm:text-5xl bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
              Product Teams Ship Faster with VeroHQ
            </h1>
            <p className="text-muted-foreground mx-auto mt-6 max-w-3xl text-lg leading-relaxed">
              From idea to launch, manage your product releases with clarity,
              confidence, and complete visibility. Stop chasing status updates.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Button size="lg" variant="default" asChild className="group hover:shadow-lg hover:shadow-primary/30 transition-all duration-300">
                <WaspRouterLink to={routes.SignupRoute.to}>
                  Start Free Trial <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </WaspRouterLink>
              </Button>
              <Button size="lg" variant="outline" asChild className="hover:bg-primary/10 hover:text-primary transition-all duration-300">
                <WaspRouterLink to={routes.PricingPageRoute.to}>
                  View Pricing
                </WaspRouterLink>
              </Button>
            </div>
          </div>
        </div>

        {/* Pain Points */}
        <div className="relative overflow-hidden py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-background to-background -z-10" />
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-foreground text-center text-3xl font-bold mb-12">
              Product Manager Challenges
            </h2>
            <div className="space-y-4">
              <PainPoint>"Engineering says we're on track, but we're not"</PainPoint>
              <PainPoint>"I can't get a straight answer on what's actually ready"</PainPoint>
              <PainPoint>"QA found critical bugs 2 days before launch"</PainPoint>
              <PainPoint>"Half my time is spent chasing status updates"</PainPoint>
              <PainPoint>"We have no data on why releases always slip"</PainPoint>
            </div>
          </div>
        </div>

        {/* Solutions */}
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <h2 className="text-foreground text-center text-3xl font-bold mb-16">
            Complete Product Release Visibility
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Solution
              icon={BarChart3}
              title="Real-Time Release Health"
              description="No more guessing if you're on track."
              items={[
                "Health Score Algorithm: 0-100%",
                "Blockers with severity tracking",
                "Test coverage percentage",
                "Schedule variance alerts",
              ]}
            />
            <Solution
              icon={Target}
              title="Feature Planning with AI"
              description="Let AI do the heavy lifting."
              items={[
                "AI generates phased release plans",
                "Automatic task breakdown",
                "Time and resource estimates",
                "Risk identification",
              ]}
            />
            <Solution
              icon={Zap}
              title="Smart Milestone Management"
              description="Gates that keep releases on track."
              items={[
                "Product requirements → Design → QA → Go/No-Go",
                "Multi-approver workflows",
                "Automated notifications",
                "Complete audit trails",
              ]}
            />
            <Solution
              icon={BarChart3}
              title="Data-Driven Insights"
              description="Make decisions with real data."
              items={[
                "Release metrics and trends",
                "Team velocity tracking",
                "Delay cause analysis",
                "Predictive estimations",
              ]}
            />
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-muted/50 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-foreground text-center text-3xl font-bold mb-12">
              Features for Product Managers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Feature title="Release Roadmap View" description="Visual timeline of releases with dependencies and team assignments" />
              <Feature title="Feature Prioritization" description="Score and rank features by impact, effort, and strategic alignment" />
              <Feature title="Burndown Charts" description="Real-time progress tracking with early warning indicators" />
              <Feature title="Smart Notifications" description="Get alerted only to blockers and at-risk milestones" />
              <Feature title="Release Notes Generation" description="AI automatically drafts release notes from completed tasks" />
              <Feature title="Stakeholder Updates" description="Automated digest emails keep executives informed" />
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <h2 className="text-foreground text-center text-3xl font-bold mb-12">
            Product Team Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <UseCase
              title="SaaS Platform Release"
              challenge="Quarterly releases consistently missed by 2-3 weeks"
              result="Last 4 releases hit target date ±2 days"
            />
            <UseCase
              title="Mobile App Launch"
              challenge="Coordinating iOS and Android with marketing"
              result="Simultaneous launch + zero critical post-launch bugs"
            />
            <UseCase
              title="Enterprise Feature"
              challenge="Complex compliance requirements"
              result="Passed regulatory audit with zero findings"
            />
            <UseCase
              title="Daily Releases"
              challenge="No visibility into feature readiness"
              result="Weekly releases hit target 96% of the time"
            />
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-muted/50 py-24">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-foreground text-center text-3xl font-bold mb-12">
              Loved by Product Managers
            </h2>
            <div className="space-y-6">
              <Testimonial
                quote="For the first time, I have complete visibility into what's actually happening in engineering."
                author="Lisa Chang, Head of Product at DataAnalytics"
              />
              <Testimonial
                quote="VeroHQ cut my status meeting time from 2 hours/day to zero. Everything I need is in the dashboard."
                author="Marcus Johnson, Senior PM at EduTech"
              />
              <Testimonial
                quote="The release health scoring is magic. I know exactly when to worry and when to relax."
                author="Priya Patel, Product Lead at HealthApp"
              />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <h2 className="text-foreground text-3xl font-bold">
            Launch Your Best Release Yet
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
            Join product teams who ship on time, every time.
          </p>
          <div className="mt-8 flex items-center justify-center gap-x-6">
            <Button size="lg" variant="default" asChild>
              <WaspRouterLink to={routes.SignupRoute.to}>
                Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
              </WaspRouterLink>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <WaspRouterLink to={routes.PricingPageRoute.to}>
                View Pricing
              </WaspRouterLink>
            </Button>
          </div>
        </div>
      </main>
      <Footer footerNavigation={footerNavigation} />
    </div>
  );
}

function PainPoint({ children }: { children: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="h-5 w-5 rounded-full bg-destructive flex-shrink-0 mt-0.5" />
      <p className="text-muted-foreground">{children}</p>
    </div>
  );
}

function Solution({
  icon: Icon,
  title,
  description,
  items,
}: {
  icon: any;
  title: string;
  description: string;
  items: string[];
}) {
  return (
    <div className="border border-border rounded-lg p-8">
      <div className="flex items-center gap-3 mb-3">
        <Icon className="text-primary h-6 w-6" />
        <h3 className="text-foreground text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-muted-foreground text-sm mb-4">{description}</p>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
            <CheckCircle className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Feature({ title, description }: { title: string; description: string }) {
  return (
    <Card className="transition-shadow hover:shadow-md">
      <CardContent className="p-6">
        <h3 className="text-foreground font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardContent>
    </Card>
  );
}

function UseCase({
  title,
  challenge,
  result,
}: {
  title: string;
  challenge: string;
  result: string;
}) {
  return (
    <div className="border border-border rounded-lg p-6">
      <h3 className="text-foreground font-semibold mb-3">{title}</h3>
      <p className="text-sm text-muted-foreground mb-2"><span className="font-medium">Challenge:</span> {challenge}</p>
      <p className="text-sm text-foreground"><span className="font-medium">Result:</span> {result}</p>
    </div>
  );
}

function Testimonial({ quote, author }: { quote: string; author: string }) {
  return (
    <div className="border-l-4 border-primary pl-6">
      <p className="text-foreground italic mb-2">"{quote}"</p>
      <p className="text-muted-foreground text-sm">— {author}</p>
    </div>
  );
}
