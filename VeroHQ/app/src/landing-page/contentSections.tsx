import { BlogUrl, DocsUrl } from "../shared/common";
import type { GridFeature } from "./components/FeaturesGrid";

export const features: GridFeature[] = [
  {
    name: "Real-time Analytics",
    description:
      "Track release progress, team velocity, and blockers with live dashboards. Make decisions based on data, not guesswork.",
    emoji: "📊",
    href: "/features",
    size: "medium",
  },
  {
    name: "Git Integration",
    description:
      "Connect GitHub, GitLab, or Bitbucket. Automatically track commits, PRs, and deployments tied to each release.",
    emoji: "🔗",
    href: "/features",
    size: "medium",
  },
  {
    name: "Team Collaboration",
    description:
      "Shared timelines, role-based assignments, and status updates keep everyone aligned across engineering, QA, and product.",
    emoji: "👥",
    href: "/features",
    size: "medium",
  },
  {
    name: "AI-Powered Insights",
    description:
      "Get intelligent recommendations on release risks, automated task breakdowns, and predictive timeline adjustments.",
    emoji: "🤖",
    href: "/features",
    size: "large",
  },
  {
    name: "Time Tracking",
    description:
      "Compare estimated vs. actual time per task. Improve planning accuracy over time with historical data.",
    emoji: "⏱️",
    href: "/features",
    size: "small",
  },
  {
    name: "Enterprise Security",
    description:
      "Bank-grade encryption, SSO, role-based access control, and SOC 2 / GDPR compliance built in.",
    emoji: "🔐",
    href: "/features",
    size: "small",
  },
  {
    name: "Release Planning",
    description:
      "Define milestones, set dependencies, and create release checklists. Know what needs to happen before every ship date.",
    emoji: "📋",
    href: "/features",
    size: "large",
  },
  {
    name: "Automated Workflows",
    description:
      "Trigger notifications, status updates, and deployments automatically when milestones are reached.",
    emoji: "⚡",
    href: "/features",
    size: "small",
  },
  {
    name: "Custom Reporting",
    description:
      "Build reports for stakeholders, track OKRs, and export release summaries in the format your team needs.",
    emoji: "📈",
    href: "/features",
    size: "small",
  },
];

export const testimonials = [
  {
    name: "Sarah Chen",
    role: "VP of Engineering @ ScaleOps",
    avatarSrc: undefined,
    socialUrl: "#",
    quote:
      "We went from missing 30% of our release deadlines to hitting 95% on time. VeroHQ gave us the visibility we were missing.",
  },
  {
    name: "Marcus Rodriguez",
    role: "CTO @ DevStream",
    avatarSrc: undefined,
    socialUrl: "#",
    quote:
      "The AI insights alone saved us from three potential release blockers last quarter. It pays for itself.",
  },
  {
    name: "Priya Sharma",
    role: "Engineering Manager @ CloudBase",
    avatarSrc: undefined,
    socialUrl: "#",
    quote:
      "My team finally has a single source of truth for release status. No more chasing updates across Slack, Jira, and GitHub.",
  },
];

export const faqs = [
  {
    id: 1,
    question: "What is VeroHQ?",
    answer:
      "VeroHQ is a release management platform that helps engineering teams plan, track, and ship software releases on time. It provides real-time dashboards, git integration, team collaboration tools, and AI-powered insights.",
    href: "/features",
  },
  {
    id: 2,
    question: "How does VeroHQ integrate with my existing tools?",
    answer:
      "VeroHQ connects directly with GitHub, GitLab, and Bitbucket to automatically track commits, pull requests, and deployments. It also integrates with Slack for notifications and supports webhooks for custom workflows.",
    href: "/features",
  },
  {
    id: 3,
    question: "Is there a free trial?",
    answer:
      "Yes. Every plan comes with a 14-day free trial — no credit card required. You can explore all features before committing.",
    href: "/pricing",
  },
  {
    id: 4,
    question: "What size teams is VeroHQ built for?",
    answer:
      "VeroHQ works for teams of 5 to 500+ engineers. The Starter plan is designed for small teams, Professional for growing organizations, and Enterprise for large companies with compliance requirements.",
    href: "/pricing",
  },
  {
    id: 5,
    question: "How is VeroHQ different from Jira or Linear?",
    answer:
      "Jira and Linear are great for issue tracking. VeroHQ is specifically built for release management — coordinating what ships, when it ships, and making sure nothing falls through the cracks between planning and deployment.",
    href: "/features",
  },
  {
    id: 6,
    question: "Is my data secure?",
    answer:
      "VeroHQ uses bank-grade encryption (AES-256), supports SSO and role-based access, and is SOC 2 Type II and GDPR compliant. Your code and release data never leave your control.",
    href: "/features",
  },
];

export const footerNavigation = {
  app: [
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "Documentation", href: DocsUrl },
    { name: "Blog", href: BlogUrl },
    { name: "Changelog", href: "/changelog" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Careers", href: "/careers" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

export const examples = [
  {
    name: "Release Dashboard",
    description:
      "Track every release across your organization with real-time status, progress bars, and risk indicators.",
    imageSrc: undefined,
    href: "/features",
  },
  {
    name: "Git Activity Feed",
    description:
      "See every commit, PR, and deployment tied to a release — automatically pulled from your repositories.",
    imageSrc: undefined,
    href: "/features",
  },
  {
    name: "Team Timeline",
    description:
      "Visualize who is working on what, when milestones are due, and where bottlenecks are forming.",
    imageSrc: undefined,
    href: "/features",
  },
  {
    name: "AI Risk Detection",
    description:
      "Get early warnings when a release is at risk of slipping, with actionable recommendations.",
    imageSrc: undefined,
    href: "/features",
  },
  {
    name: "Release Reports",
    description:
      "Generate stakeholder-ready summaries with velocity metrics, completion rates, and deployment history.",
    imageSrc: undefined,
    href: "/features",
  },
];
