import { Link as WaspRouterLink, routes } from "wasp/client/router";
import { Button } from "../client/components/ui/button";

const values = [
  {
    name: "Ship with confidence",
    description:
      "Every feature we build is in service of helping teams deliver software predictably. If it doesn't improve release outcomes, we don't build it.",
  },
  {
    name: "Transparency by default",
    description:
      "We believe the best engineering teams share context widely. VeroHQ is designed to make release status visible to everyone who needs it.",
  },
  {
    name: "Data over opinions",
    description:
      "Release decisions should be informed by real metrics — velocity, blockers, estimation accuracy — not gut feelings in a standup.",
  },
  {
    name: "Simple over complex",
    description:
      "Release management is hard enough. Our tools should reduce friction, not add layers of configuration and process.",
  },
];

const milestones = [
  { year: "2023", event: "Founded with a mission to fix broken release processes" },
  { year: "2024", event: "Launched public beta with GitHub integration" },
  { year: "2024", event: "Reached 1,000 engineering teams" },
  { year: "2025", event: "Added AI-powered insights and GitLab/Bitbucket support" },
  { year: "2025", event: "Surpassed 10,000 teams and achieved SOC 2 compliance" },
];

export default function About() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Hero */}
      <div className="relative overflow-hidden pt-14">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="absolute right-0 top-0 -z-10 w-96 h-96 bg-gradient-to-bl from-primary/20 to-transparent rounded-full blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-primary mb-4 text-sm font-semibold uppercase tracking-widest">
              About VeroHQ
            </p>
            <h1 className="text-4xl font-bold sm:text-5xl bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
              Release management shouldn't be the hardest part of shipping software
            </h1>
            <p className="text-muted-foreground mt-6 text-lg leading-relaxed">
              We started VeroHQ because we lived the problem. Missed deadlines,
              scattered status updates, releases that slipped because nobody had
              the full picture. We built the tool we wished existed.
            </p>
          </div>
        </div>
      </div>

      {/* Mission */}
      <div className="bg-muted/50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold">Our mission</h2>
            <p className="text-muted-foreground mt-4 text-lg leading-8">
              Give every engineering team the visibility and tools to ship
              software on time, every time. We believe release management is a
              solved problem — it just hasn't been productized well. VeroHQ
              changes that.
            </p>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <h2 className="text-2xl font-bold">What we believe</h2>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {values.map((value) => (
            <div key={value.name}>
              <h3 className="text-foreground text-lg font-semibold">
                {value.name}
              </h3>
              <p className="text-muted-foreground mt-2 leading-7">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-muted/50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold">Our journey</h2>
          <div className="mt-12 space-y-8">
            {milestones.map((milestone, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="text-primary w-16 flex-shrink-0 text-sm font-bold">
                  {milestone.year}
                </div>
                <div className="border-border flex-1 border-l pl-6">
                  <p className="text-muted-foreground">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <StatBlock value="10,000+" label="Engineering teams" />
          <StatBlock value="95%" label="On-time delivery rate" />
          <StatBlock value="40%" label="Faster release cycles" />
          <StatBlock value="99.9%" label="Platform uptime" />
        </div>
      </div>

      {/* CTA */}
      <div className="border-border border-t py-24 text-center">
        <h2 className="text-foreground text-3xl font-bold">
          Join the teams shipping on time
        </h2>
        <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-lg">
          Start your free trial and see why 10,000+ engineering teams trust
          VeroHQ.
        </p>
        <div className="mt-8 flex items-center justify-center gap-x-6">
          <Button size="lg" variant="default" asChild>
            <WaspRouterLink to={routes.SignupRoute.to}>
              Start Free Trial <span aria-hidden="true">&rarr;</span>
            </WaspRouterLink>
          </Button>
        </div>
      </div>
    </div>
  );
}

function StatBlock({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <p className="text-primary text-3xl font-bold">{value}</p>
      <p className="text-muted-foreground mt-1 text-sm">{label}</p>
    </div>
  );
}
