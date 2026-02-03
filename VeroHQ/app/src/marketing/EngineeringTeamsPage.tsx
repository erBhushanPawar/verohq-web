import {
  ArrowRight,
  CheckCircle,
  GitBranch,
  Users,
  Zap,
  BarChart3,
  Shield,
  Clock,
} from "lucide-react";
import { Link as WaspRouterLink, routes } from "wasp/client/router";
import { Button } from "../client/components/ui/button";
import { Card, CardContent } from "../client/components/ui/card";
import Footer from "../landing-page/components/Footer";
import { footerNavigation } from "../landing-page/contentSections";

export default function EngineeringTeamsPage() {
  return (
    <div className="bg-background text-foreground">
      <main className="isolate">
        {/* Hero */}
        <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-8">
          <h1 className="text-4xl font-bold sm:text-5xl">
            Built for Engineering Teams Who Ship
          </h1>
          <p className="text-muted-foreground mx-auto mt-6 max-w-3xl text-lg">
            Stop wrestling with disconnected tools. VeroHQ gives engineering teams a unified platform for planning, building, and deploying great software.
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

        {/* Pain Points */}
        <div className="bg-muted/50 py-24">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-foreground text-center text-3xl font-bold mb-12">
              Sound Familiar?
            </h2>
            <div className="space-y-4">
              <PainPoint>Jira for tasks, TestRail for QA, spreadsheets for time tracking...</PainPoint>
              <PainPoint>I spend 2 hours/day in standups giving status updates</PainPoint>
              <PainPoint>We have no idea if we're on track for the release</PainPoint>
              <PainPoint>QA found bugs we could have caught earlier</PainPoint>
              <PainPoint>Half our time is wasted on manual planning tasks</PainPoint>
            </div>
            <p className="text-foreground text-center mt-8 text-lg font-semibold">
              There's a better way. ✨
            </p>
          </div>
        </div>

        {/* Solutions */}
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <h2 className="text-foreground text-center text-3xl font-bold mb-16">
            One Platform for the Entire Dev Lifecycle
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Solution
              icon={Zap}
              title="Plan Smarter"
              items={[
                "AI-powered release planning",
                "Break features into implementable tasks",
                "Realistic time estimates based on historical data",
                "Identify dependencies and potential blockers early",
              ]}
            />
            <Solution
              icon={GitBranch}
              title="Build Better"
              items={[
                "Link PRs directly to tasks and releases",
                "AI summaries of code changes in plain English",
                "Automatic status updates from CI/CD",
                "Branch creation with one click",
              ]}
            />
            <Solution
              icon={Clock}
              title="Test Thoroughly"
              items={[
                "Generate test cases automatically from requirements",
                "Track test execution across environments",
                "Enforce coverage gates before deployment",
                "Link bugs back to failed tests",
              ]}
            />
            <Solution
              icon={BarChart3}
              title="Deploy Confidently"
              items={[
                "Multi-environment pipeline tracking",
                "Release health scoring in real-time",
                "Get notified of deployment issues",
                "Coordinate cross-team releases",
              ]}
            />
          </div>
        </div>

        {/* Time Tracking Section */}
        <div className="bg-muted/50 py-24">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <h3 className="text-foreground text-2xl font-bold mb-6 text-center">
              Track Time That Actually Matters
            </h3>
            <p className="text-muted-foreground text-center mb-8">
              Log hours as you work, not in a separate tool. Get team velocity insights and improve estimation accuracy.
            </p>
            <div className="bg-background rounded-lg border border-border p-8">
              <div className="text-sm text-muted-foreground space-y-2">
                <div className="flex justify-between"><span>Sprint 23 Progress</span></div>
                <div className="flex justify-between"><span>Planned: 240 hours</span><span className="text-foreground">Actual: 267 hours (+11%)</span></div>
                <div className="flex justify-between"><span>Completion:</span><span className="text-foreground">82%</span></div>
                <div className="flex justify-between"><span>At-Risk Tasks:</span><span className="text-foreground">3</span></div>
                <div className="border-t border-border pt-2 mt-2">
                  <p className="text-primary">Historical Trend: Consistently 8-12% over estimate</p>
                  <p className="text-muted-foreground text-xs mt-1">Recommendation: Increase sprint planning buffer</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <h2 className="text-foreground text-center text-3xl font-bold mb-12">
            Real Engineering Team Scenarios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <UseCase
              title="Microservices Release"
              challenge="Coordinating releases across 15 microservices with 8 teams"
              solution="Multi-repo tracking, dependency visualization, automated deployment"
              result="50% reduction in release coordination time"
            />
            <UseCase
              title="Feature Branch Hell"
              challenge="15 active feature branches, merge conflicts, lost context"
              solution="Task-to-PR linking, AI code summaries, conflict detection"
              result="50% reduction in merge conflicts"
            />
            <UseCase
              title="QA Bottleneck"
              challenge="Constant interruptions asking about test status"
              solution="Real-time test dashboard, automated signoff, coverage gates"
              result="90% reduction in status check interruptions"
            />
            <UseCase
              title="Estimation Accuracy"
              challenge="Chronically missing deadlines due to underestimation"
              solution="Historical variance analysis, AI suggestions, granular tracking"
              result="Estimation accuracy improved from 60% to 89%"
            />
          </div>
        </div>

        {/* Integration Highlights */}
        <div className="bg-muted/50 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-foreground text-center text-3xl font-bold mb-12">
              Works With Your Stack
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-border rounded-lg p-6 bg-background">
                <h3 className="text-foreground font-semibold mb-3">GitHub/GitLab/Bitbucket</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Auto-link PRs to tasks</li>
                  <li>✓ Update task status automatically</li>
                  <li>✓ Generate code summaries</li>
                  <li>✓ Notify reviewers</li>
                </ul>
              </div>
              <div className="border border-border rounded-lg p-6 bg-background">
                <h3 className="text-foreground font-semibold mb-3">CI/CD Integration</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Post deployment status</li>
                  <li>✓ Block on test failures</li>
                  <li>✓ Webhook support</li>
                  <li>✓ Environment tracking</li>
                </ul>
              </div>
              <div className="border border-border rounded-lg p-6 bg-background">
                <h3 className="text-foreground font-semibold mb-3">Jira Migration</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Import existing issues</li>
                  <li>✓ Map custom fields</li>
                  <li>✓ Bidirectional sync</li>
                  <li>✓ 2-hour migration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <h2 className="text-foreground text-center text-3xl font-bold mb-12">
            Features Engineering Teams Love
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Feature title="Human-Readable Task IDs" description="BACKEND-456 makes way more sense than issue #12345" />
            <Feature title="Unlimited Subtask Hierarchy" description="Break down complex systems to any depth without limits" />
            <Feature title="AI Code Summaries" description="Understand massive PRs at a glance without reading everything" />
            <Feature title="Dependency Visualization" description="See critical path and what's blocking what" />
            <Feature title="Real-Time Collaboration" description="Comments, mentions, attachments all in context" />
            <Feature title="Complete Audit Trails" description="Every change tracked for debugging and retrospectives" />
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-muted/50 py-24">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-foreground text-center text-3xl font-bold mb-12">
              What Engineering Teams Say
            </h2>
            <div className="space-y-6">
              <Testimonial
                quote="VeroHQ eliminated 5 tools from our stack. Everything just works together."
                author="David Kim, Senior Engineer at PaymentPro"
              />
              <Testimonial
                quote="The AI task breakdown saves me 3-4 hours every sprint planning. Game changer."
                author="Rachel Martinez, Tech Lead at CloudScale"
              />
              <Testimonial
                quote="Finally, a tool that understands how real engineering teams work."
                author="James Wilson, Principal Engineer at DataFlow"
              />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <h2 className="text-foreground text-3xl font-bold">
            Ship Better Software, Starting Today
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
            Join thousands of engineering teams who have streamlined their development process.
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
  items,
}: {
  icon: any;
  title: string;
  items: string[];
}) {
  return (
    <div className="border border-border rounded-lg p-8">
      <div className="flex items-center gap-3 mb-6">
        <Icon className="text-primary h-6 w-6" />
        <h3 className="text-foreground text-xl font-semibold">{title}</h3>
      </div>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <CheckCircle className="text-primary h-4 w-4 mt-1 flex-shrink-0" />
            <span className="text-muted-foreground text-sm">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function UseCase({
  title,
  challenge,
  solution,
  result,
}: {
  title: string;
  challenge: string;
  solution: string;
  result: string;
}) {
  return (
    <div className="border border-border rounded-lg p-6">
      <h3 className="text-foreground font-semibold mb-4">{title}</h3>
      <div className="space-y-3 text-sm">
        <p><span className="text-muted-foreground font-medium">Challenge:</span> <span className="text-muted-foreground">{challenge}</span></p>
        <p><span className="text-muted-foreground font-medium">Solution:</span> <span className="text-muted-foreground">{solution}</span></p>
        <p className="border-t border-border pt-3"><span className="text-foreground font-medium">Result:</span> <span className="text-foreground">{result}</span></p>
      </div>
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

function Testimonial({ quote, author }: { quote: string; author: string }) {
  return (
    <div className="border-l-4 border-primary pl-6">
      <p className="text-foreground italic mb-2">"{quote}"</p>
      <p className="text-muted-foreground text-sm">— {author}</p>
    </div>
  );
}
