import {
  ArrowRight,
  Bell,
  Bot,
  CheckCircle,
  ClipboardCheck,
  Clock,
  GitBranch,
  Rocket,
  X,
} from "lucide-react";
import { Link as WaspRouterLink, routes } from "wasp/client/router";
import { Button } from "../client/components/ui/button";
import { Card, CardContent } from "../client/components/ui/card";
import { useAnalytics } from "../client/hooks/useAnalytics";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import { faqs, footerNavigation, testimonials } from "./contentSections";

export default function LandingPage() {
  return (
    <div className="bg-background text-foreground">
      <main className="isolate">
        <Hero />
        <TrustBar />
        <ProblemStatement />
        <SolutionOverview />
        <Differentiators />
        <FeatureHighlights />
        <Testimonials testimonials={testimonials} />
        <IntegrationShowcase />
        <FAQ faqs={faqs} />
        <ClosingCTA />
      </main>
      <Footer footerNavigation={footerNavigation} />
    </div>
  );
}

function TrustBar() {
  const companies = [
    "TechCorp",
    "DevStream",
    "CloudBase",
    "ScaleOps",
    "Nextera",
    "CodeVault",
  ];

  return (
    <div className="mx-auto my-16 max-w-4xl px-6 text-center">
      <p className="text-muted-foreground mb-8 text-sm font-semibold uppercase tracking-wide">
        Trusted by engineering teams at
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
        {companies.map((name) => (
          <span
            key={name}
            className="text-muted-foreground/50 text-lg font-bold tracking-tight"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProblemStatement() {
  const painPoints = [
    "Chasing task status updates across multiple tools",
    "Manual time tracking and variance analysis",
    "Disconnected QA processes and deployment tracking",
    "Release planning without historical insights",
    "Poor visibility into cross-team dependencies",
  ];

  return (
    <div className="bg-muted/50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-foreground text-3xl font-bold sm:text-4xl">
            The Release Management Challenge
          </h2>
          <p className="text-muted-foreground mt-6 text-lg">
            Engineering teams waste <span className="text-foreground font-semibold">30% of their time</span> on
            coordination overhead instead of building software.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-2xl space-y-4">
          {painPoints.map((point) => (
            <div key={point} className="flex items-start gap-3">
              <X className="mt-0.5 h-5 w-5 flex-shrink-0 text-destructive" />
              <p className="text-muted-foreground">{point}</p>
            </div>
          ))}
        </div>
        <p className="text-foreground mx-auto mt-8 max-w-2xl text-center text-lg font-semibold">
          The result? Missed deadlines, quality issues, and frustrated teams.
        </p>
      </div>
    </div>
  );
}

function SolutionOverview() {
  const solutions = [
    {
      icon: Rocket,
      title: "Release Management",
      description:
        "Multi-phase lifecycles, automated planning, and real-time health scoring for every release.",
      href: "/features",
    },
    {
      icon: Clock,
      title: "Time Tracking",
      description:
        "Built-in estimated vs. actual hour tracking with intelligent variance analysis.",
      href: "/features",
    },
    {
      icon: Bot,
      title: "AI Automation",
      description:
        "Persona-based AI generates tasks, test cases, and release plans tailored to your team.",
      href: "/features",
    },
    {
      icon: ClipboardCheck,
      title: "QA & Testing",
      description:
        "Comprehensive test management with coverage gates and automated signoff workflows.",
      href: "/features",
    },
    {
      icon: GitBranch,
      title: "Git Integration",
      description:
        "Native GitHub, GitLab, and Bitbucket support with AI-powered code summaries.",
      href: "/features",
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description:
        "Multi-channel delivery (push, email, in-app) with intelligent digest scheduling.",
      href: "/features",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-foreground text-3xl font-bold sm:text-4xl">
          One Platform. Complete Control.
        </h2>
        <p className="text-muted-foreground mt-6 text-lg">
          VeroHQ brings everything together in a single, intelligent workspace.
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {solutions.map((item) => (
          <Card key={item.title} className="transition-shadow hover:shadow-md">
            <CardContent className="p-6">
              <div className="bg-primary/10 mb-4 inline-flex rounded-lg p-2">
                <item.icon className="text-primary h-5 w-5" />
              </div>
              <h3 className="text-foreground text-lg font-semibold">
                {item.title}
              </h3>
              <p className="text-muted-foreground mt-2 text-sm leading-6">
                {item.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function Differentiators() {
  const comparisons = [
    { traditional: "Scattered across 5+ tools", vero: "Unified platform" },
    { traditional: "Manual time tracking", vero: "Automatic variance tracking" },
    { traditional: "Generic task lists", vero: "AI-generated subtasks with context" },
    { traditional: "Disconnected QA", vero: "Integrated test management" },
    { traditional: "Basic notifications", vero: "Multi-channel intelligent alerts" },
    { traditional: "Limited reporting", vero: "Real-time analytics & health scoring" },
  ];

  return (
    <div className="bg-muted/50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-foreground text-3xl font-bold sm:text-4xl">
            Why Teams Choose VeroHQ
          </h2>
        </div>
        <div className="mx-auto mt-16 max-w-3xl overflow-hidden rounded-lg border">
          <div className="bg-muted grid grid-cols-2 border-b px-6 py-3">
            <p className="text-muted-foreground text-sm font-semibold">
              Traditional Tools
            </p>
            <p className="text-primary text-sm font-semibold">VeroHQ</p>
          </div>
          {comparisons.map((row, idx) => (
            <div
              key={idx}
              className={`grid grid-cols-2 px-6 py-4 ${
                idx < comparisons.length - 1 ? "border-b" : ""
              }`}
            >
              <p className="text-muted-foreground text-sm">{row.traditional}</p>
              <p className="text-foreground text-sm font-medium">{row.vero}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FeatureHighlights() {
  const highlights = [
    {
      title: "Visual Release Pipeline",
      description:
        "Track releases across DEV, STAGE, PRE_PROD, and PROD with automated status updates and deployment monitoring.",
    },
    {
      title: "Intelligent Task Hierarchy",
      description:
        "Human-readable IDs (PROJ-123), unlimited subtasks, dependencies, and AI-enhanced descriptions.",
    },
    {
      title: "Comprehensive Testing",
      description:
        "Manage test cases, track execution, enforce coverage gates, and automate QA signoffs.",
    },
    {
      title: "AI-Powered Insights",
      description:
        "Configure AI personas for your industry and let VeroHQ generate tasks, tests, and summaries automatically.",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-foreground text-3xl font-bold sm:text-4xl">
          Features That Power Modern Teams
        </h2>
      </div>
      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
        {highlights.map((item) => (
          <div
            key={item.title}
            className="border-border rounded-lg border p-8 transition-shadow hover:shadow-md"
          >
            <h3 className="text-foreground text-lg font-semibold">
              {item.title}
            </h3>
            <p className="text-muted-foreground mt-3 leading-7">
              {item.description}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button variant="outline" asChild>
          <WaspRouterLink to={routes.FeaturesRoute.to}>
            See all features <ArrowRight className="ml-2 h-4 w-4" />
          </WaspRouterLink>
        </Button>
      </div>
    </div>
  );
}

function IntegrationShowcase() {
  const integrations = [
    "GitHub",
    "GitLab",
    "Bitbucket",
    "Jira",
    "Slack",
    "AWS S3",
    "PostgreSQL",
    "Redis",
  ];

  return (
    <div className="bg-muted/50 py-24">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <h2 className="text-foreground text-3xl font-bold sm:text-4xl">
          Integrates With Your Existing Workflow
        </h2>
        <div className="mx-auto mt-12 flex max-w-3xl flex-wrap items-center justify-center gap-6">
          {integrations.map((name) => (
            <div
              key={name}
              className="border-border bg-background rounded-lg border px-5 py-3 text-sm font-medium"
            >
              {name}
            </div>
          ))}
        </div>
        <p className="text-muted-foreground mt-8 text-sm">
          Connect your favorite tools in minutes with our robust API and webhook
          support.
        </p>
      </div>
    </div>
  );
}

function ClosingCTA() {
  const { trackSignupAttempt, trackPricingClick } = useAnalytics();

  return (
    <div className="mx-auto my-32 max-w-4xl px-6 text-center">
      <h2 className="text-foreground text-3xl font-bold sm:text-4xl">
        Ready to Transform Your Release Process?
      </h2>
      <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
        Start shipping faster with intelligent release management.
      </p>
      <div className="mt-8 flex items-center justify-center gap-x-6">
        <Button
          size="lg"
          variant="default"
          asChild
          onClick={() => trackSignupAttempt("landing_page_cta")}
        >
          <WaspRouterLink to={routes.SignupRoute.to}>
            Start Free Trial <span aria-hidden="true">&rarr;</span>
          </WaspRouterLink>
        </Button>
        <Button
          size="lg"
          variant="outline"
          asChild
          onClick={() => trackPricingClick("pricing_view_from_landing")}
        >
          <WaspRouterLink to={routes.PricingPageRoute.to}>
            Schedule Demo
          </WaspRouterLink>
        </Button>
      </div>
      <div className="text-muted-foreground mt-6 flex items-center justify-center gap-6 text-sm">
        <span className="flex items-center gap-1.5">
          <CheckCircle className="text-primary h-4 w-4" /> No credit card
          required
        </span>
        <span className="flex items-center gap-1.5">
          <CheckCircle className="text-primary h-4 w-4" /> 14-day free trial
        </span>
        <span className="flex items-center gap-1.5">
          <CheckCircle className="text-primary h-4 w-4" /> SOC 2 compliant
        </span>
      </div>
    </div>
  );
}
