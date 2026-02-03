import {
  BarChart3,
  Clock,
  GitBranch,
  LineChart,
  Lock,
  RefreshCw,
  Shield,
  Users,
  Zap,
} from "lucide-react";
import { Link as WaspRouterLink, routes } from "wasp/client/router";
import { Button } from "../client/components/ui/button";

const features = [
  {
    icon: BarChart3,
    name: "Real-time Analytics",
    description:
      "Track release progress, team velocity, and blockers with live dashboards. Drill into per-release metrics, see burndown charts, and identify patterns across your release history.",
    details: [
      "Release burndown and velocity charts",
      "Blocker detection with root cause tracking",
      "Historical trends across releases",
      "Custom metric widgets",
    ],
  },
  {
    icon: GitBranch,
    name: "Git Integration",
    description:
      "Connect GitHub, GitLab, or Bitbucket to automatically track every commit, pull request, and deployment tied to a release. No manual status updates — VeroHQ reads your repos.",
    details: [
      "GitHub, GitLab, Bitbucket support",
      "Automatic PR-to-release mapping",
      "Deployment tracking per environment",
      "Branch and tag monitoring",
    ],
  },
  {
    icon: Users,
    name: "Team Collaboration",
    description:
      "Shared timelines, role-based assignments, and real-time status updates keep engineering, QA, and product aligned. Everyone sees the same source of truth.",
    details: [
      "Role-based task assignments",
      "Shared release timelines",
      "Cross-team status visibility",
      "Comment threads on releases",
    ],
  },
  {
    icon: Zap,
    name: "AI-Powered Insights",
    description:
      "Get intelligent recommendations on release risks before they become problems. VeroHQ analyzes your release patterns and flags potential delays, bottlenecks, and scope creep.",
    details: [
      "Predictive risk scoring",
      "Automated task breakdown suggestions",
      "Timeline adjustment recommendations",
      "Scope creep detection",
    ],
  },
  {
    icon: Clock,
    name: "Time Tracking",
    description:
      "Compare estimated vs. actual time for every task and release. Build a data-driven understanding of how long things really take, and improve planning accuracy over time.",
    details: [
      "Estimated vs. actual time per task",
      "Sprint-level accuracy metrics",
      "Historical estimation calibration",
      "Time allocation reports",
    ],
  },
  {
    icon: Shield,
    name: "Enterprise Security",
    description:
      "Bank-grade encryption (AES-256), single sign-on (SSO), role-based access control, and compliance certifications. Your code and release data stay under your control.",
    details: [
      "AES-256 encryption at rest and in transit",
      "SSO with SAML and OIDC",
      "SOC 2 Type II and GDPR compliance",
      "Audit logs and access controls",
    ],
  },
  {
    icon: RefreshCw,
    name: "Automated Workflows",
    description:
      "Trigger Slack notifications, status transitions, and deployment gates automatically when milestones are reached. Define rules once and let VeroHQ handle the rest.",
    details: [
      "Milestone-triggered notifications",
      "Automatic status transitions",
      "Deployment approval gates",
      "Custom webhook integrations",
    ],
  },
  {
    icon: LineChart,
    name: "Custom Reporting",
    description:
      "Generate reports for stakeholders, track OKRs, and export release summaries. Build the views your team needs without leaving VeroHQ.",
    details: [
      "Stakeholder-ready summaries",
      "OKR and KPI tracking",
      "PDF and CSV export",
      "Scheduled report delivery",
    ],
  },
  {
    icon: Lock,
    name: "Release Planning",
    description:
      "Define milestones, set task dependencies, and create release checklists. Map out what needs to happen before every ship date — then track it through completion.",
    details: [
      "Milestone and dependency mapping",
      "Pre-release checklists",
      "Rollback planning",
      "Multi-release coordination",
    ],
  },
];

export default function Features() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Hero */}
      <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-8">
        <p className="text-primary mb-4 text-sm font-semibold uppercase tracking-wide">
          Features
        </p>
        <h1 className="text-4xl font-bold sm:text-5xl">
          Built for how engineering teams actually ship
        </h1>
        <p className="text-muted-foreground mx-auto mt-6 max-w-2xl text-lg">
          VeroHQ covers every stage of your release lifecycle — from planning
          through deployment. No gaps, no manual tracking, no surprises.
        </p>
      </div>

      {/* Feature Sections */}
      <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="space-y-24">
          {features.map((feature, idx) => (
            <div
              key={feature.name}
              className={`flex flex-col items-start gap-12 lg:flex-row ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1">
                <div className="bg-primary/10 mb-4 inline-flex rounded-lg p-2">
                  <feature.icon className="text-primary h-6 w-6" />
                </div>
                <h2 className="text-foreground text-2xl font-bold">
                  {feature.name}
                </h2>
                <p className="text-muted-foreground mt-4 text-lg leading-7">
                  {feature.description}
                </p>
              </div>
              <div className="flex-1">
                <ul className="space-y-3">
                  {feature.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3">
                      <div className="bg-primary mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full" />
                      <span className="text-muted-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="border-border border-t py-24 text-center">
        <h2 className="text-foreground text-3xl font-bold">
          See it in action
        </h2>
        <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-lg">
          Start a free trial and connect your first repository in under 5
          minutes.
        </p>
        <div className="mt-8 flex items-center justify-center gap-x-6">
          <Button size="lg" variant="default" asChild>
            <WaspRouterLink to={routes.SignupRoute.to}>
              Start Free Trial <span aria-hidden="true">&rarr;</span>
            </WaspRouterLink>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <WaspRouterLink to={routes.PricingPageRoute.to}>
              View Pricing
            </WaspRouterLink>
          </Button>
        </div>
      </div>
    </div>
  );
}
