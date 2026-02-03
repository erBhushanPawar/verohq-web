import { BarChart3, Clock, GitBranch, Shield, Users, Zap } from "lucide-react";
import HighlightedFeature from "./components/HighlightedFeature";

export default function AIReady() {
  return (
    <HighlightedFeature
      name="Everything your release process needs"
      description="From the first commit to production deployment, VeroHQ tracks every step of your release lifecycle — so nothing falls through the cracks."
      highlightedComponent={<FeatureHighlightGrid />}
      direction="row-reverse"
    />
  );
}

const highlights = [
  {
    icon: BarChart3,
    title: "Live Dashboards",
    desc: "Real-time release health at a glance",
  },
  {
    icon: GitBranch,
    title: "Git-native",
    desc: "GitHub, GitLab, Bitbucket built in",
  },
  {
    icon: Users,
    title: "Cross-team",
    desc: "Engineering, QA, and product aligned",
  },
  {
    icon: Zap,
    title: "AI Insights",
    desc: "Risk detection before it's too late",
  },
  {
    icon: Clock,
    title: "Time Tracking",
    desc: "Estimated vs. actual, every sprint",
  },
  {
    icon: Shield,
    title: "Enterprise Ready",
    desc: "SSO, encryption, SOC 2 compliant",
  },
];

const FeatureHighlightGrid = () => {
  return (
    <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3">
      {highlights.map((item) => (
        <div
          key={item.title}
          className="border-border bg-background rounded-lg border p-4 transition-shadow hover:shadow-md"
        >
          <item.icon className="text-primary mb-2 h-5 w-5" />
          <p className="text-foreground text-sm font-semibold">{item.title}</p>
          <p className="text-muted-foreground text-xs">{item.desc}</p>
        </div>
      ))}
    </div>
  );
};
