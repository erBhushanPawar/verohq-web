import {
  ArrowRight,
  CheckCircle,
  GitBranch,
  Layers,
  BarChart3,
  Clock,
  Shield,
  AlertCircle,
  Zap,
} from "lucide-react";
import { Link as WaspRouterLink, routes } from "wasp/client/router";
import { Button } from "../client/components/ui/button";
import { Card, CardContent } from "../client/components/ui/card";
import Footer from "../landing-page/components/Footer";
import { footerNavigation } from "../landing-page/contentSections";

export default function ReleaseManagementPage() {
  return (
    <div className="bg-background text-foreground">
      <main className="isolate">
        {/* Hero */}
        <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-8">
          <h1 className="text-4xl font-bold sm:text-5xl">
            Release Management That Scales
          </h1>
          <p className="text-muted-foreground mx-auto mt-6 max-w-3xl text-lg">
            From planning to production, manage complex multi-team releases with
            confidence and complete visibility. VeroHQ handles multi-phase
            lifecycles, cross-team coordination, and automated workflows.
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

        {/* Key Features */}
        <div className="bg-muted/50 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-foreground text-center text-3xl font-bold mb-16">
              Everything for Modern Release Management
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Feature
                icon={Layers}
                title="Multi-Phase Lifecycles"
                description="Track releases through Planning, In Progress, QA, Staging, Production, and Closed phases. Automated notifications and blocking conditions at each stage."
              />
              <Feature
                icon={Zap}
                title="AI-Powered Planning"
                description="AI analyzes your release scope and generates comprehensive task breakdowns. Get code summaries and risk identification automatically."
              />
              <Feature
                icon={GitBranch}
                title="Git Integration at Scale"
                description="GitHub, GitLab, Bitbucket. Link PRs to releases and tasks. Real-time sync of code changes with AI-generated release notes."
              />
              <Feature
                icon={BarChart3}
                title="Release Health Scoring"
                description="Intelligent health metrics (85-100% Green, 60-84% At Risk, 0-59% Critical). Historical trending to identify patterns."
              />
              <Feature
                icon={Clock}
                title="Multi-Repository Support"
                description="Perfect for monorepos and microservices. Track changes across dozens of repositories with unified impact analysis."
              />
              <Feature
                icon={Shield}
                title="Deployment Pipeline Tracking"
                description="Visualize DEV → STAGE → PRE_PROD → PROD. Track deployment status, CI/CD integration, and rollback procedures per environment."
              />
            </div>
          </div>
        </div>

        {/* Detailed Feature Sections */}
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          {/* Milestone Management */}
          <div className="mb-24">
            <h3 className="text-foreground text-2xl font-bold mb-4">
              Milestone Management & Approvals
            </h3>
            <p className="text-muted-foreground text-lg mb-8">
              Define critical gates in your release process. Pre-configured milestone types include Design Review, Code Complete, QA Signoff, Security Review, Go/No-Go Decision, and Production Deploy. Each supports multiple approvers, blocking conditions, file attachments, and complete audit trails.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-border rounded-lg p-6">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="text-primary h-5 w-5" />
                  <span className="font-semibold">Multiple Approvers</span>
                </div>
                <p className="text-muted-foreground text-sm">
                  Require approval from engineering, QA, product, security — all in one workflow.
                </p>
              </div>
              <div className="border border-border rounded-lg p-6">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="text-primary h-5 w-5" />
                  <span className="font-semibold">Blocking Conditions</span>
                </div>
                <p className="text-muted-foreground text-sm">
                  Prevent progression until all critical tests pass or all blockers are resolved.
                </p>
              </div>
              <div className="border border-border rounded-lg p-6">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="text-primary h-5 w-5" />
                  <span className="font-semibold">File Attachments</span>
                </div>
                <p className="text-muted-foreground text-sm">
                  Attach security reviews, design approvals, test reports, and change logs.
                </p>
              </div>
              <div className="border border-border rounded-lg p-6">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="text-primary h-5 w-5" />
                  <span className="font-semibold">Audit Trails</span>
                </div>
                <p className="text-muted-foreground text-sm">
                  Complete history of who approved what and when. Perfect for compliance.
                </p>
              </div>
            </div>
          </div>

          {/* Health Scoring */}
          <div className="mb-24">
            <h3 className="text-foreground text-2xl font-bold mb-4">
              Intelligent Release Health Scoring
            </h3>
            <p className="text-muted-foreground text-lg mb-8">
              Never guess if you're on track. VeroHQ calculates health scores based on schedule variance, blocker count, test coverage, code review status, and deployment pipeline health.
            </p>
            <div className="bg-muted/50 rounded-lg p-8 border border-border">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="font-semibold">Healthy</span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    85-100%: On schedule, no blockers, tests passing, QA approved
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <span className="font-semibold">At Risk</span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    60-84%: Minor delays, some blockers identified, coverage below target
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <span className="font-semibold">Critical</span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    0-59%: Significant delays, multiple blockers, failed tests
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mt-6 border-t border-border pt-6">
                Track health over time to identify patterns and improve future releases. Export reports for stakeholders.
              </p>
            </div>
          </div>

          {/* Deployment Pipeline */}
          <div className="mb-24">
            <h3 className="text-foreground text-2xl font-bold mb-4">
              Deployment Pipeline Tracking
            </h3>
            <p className="text-muted-foreground text-lg mb-8">
              Visualize your entire deployment flow from code to production. Track deployment status, timestamps, CI/CD integration status, and rollback procedures per environment.
            </p>
            <div className="overflow-hidden rounded-lg border border-border">
              <div className="bg-muted px-6 py-3 flex items-center gap-6 text-sm font-semibold">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span>DEV</span>
                </div>
                <div className="text-muted-foreground">→</div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span>STAGE</span>
                </div>
                <div className="text-muted-foreground">→</div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                  <span>PRE_PROD</span>
                </div>
                <div className="text-muted-foreground">→</div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full" />
                  <span>PROD</span>
                </div>
              </div>
              <div className="px-6 py-4 text-sm text-muted-foreground">
                Each environment shows: deployment timestamp, duration, CI/CD status, approvals required, rollback plan, and environment-specific configuration.
              </div>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="bg-muted/50 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-foreground text-center text-3xl font-bold mb-12">
              How VeroHQ Compares
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold">Feature</th>
                    <th className="text-center py-3 px-4 font-semibold">VeroHQ</th>
                    <th className="text-center py-3 px-4 font-semibold">Jira</th>
                    <th className="text-center py-3 px-4 font-semibold">Linear</th>
                    <th className="text-center py-3 px-4 font-semibold">Azure DevOps</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4">Multi-phase releases</td>
                    <td className="text-center py-3 px-4">✅ Full</td>
                    <td className="text-center py-3 px-4">⚠️ Limited</td>
                    <td className="text-center py-3 px-4">⚠️ Limited</td>
                    <td className="text-center py-3 px-4">✅ Full</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4">AI-powered planning</td>
                    <td className="text-center py-3 px-4">✅ Yes</td>
                    <td className="text-center py-3 px-4">❌ No</td>
                    <td className="text-center py-3 px-4">❌ No</td>
                    <td className="text-center py-3 px-4">❌ No</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4">Multi-repo tracking</td>
                    <td className="text-center py-3 px-4">✅ Yes</td>
                    <td className="text-center py-3 px-4">⚠️ Limited</td>
                    <td className="text-center py-3 px-4">❌ No</td>
                    <td className="text-center py-3 px-4">✅ Yes</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4">Health scoring</td>
                    <td className="text-center py-3 px-4">✅ Automated</td>
                    <td className="text-center py-3 px-4">❌ Manual</td>
                    <td className="text-center py-3 px-4">❌ Manual</td>
                    <td className="text-center py-3 px-4">⚠️ Basic</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4">Time tracking</td>
                    <td className="text-center py-3 px-4">✅ Built-in</td>
                    <td className="text-center py-3 px-4">⚠️ Plugin</td>
                    <td className="text-center py-3 px-4">❌ No</td>
                    <td className="text-center py-3 px-4">✅ Basic</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <h2 className="text-foreground text-center text-3xl font-bold mb-12">
            Real-World Use Cases
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <UseCase
              title="Enterprise SaaS Platform"
              challenge="Coordinating releases across 15 microservices with 8 teams."
              solution="Multi-repo tracking, cross-team dependencies, and automated deployment pipeline."
              result="50% reduction in release coordination time."
            />
            <UseCase
              title="Mobile App Development"
              challenge="Managing iOS and Android releases with rigorous QA requirements."
              solution="Test case management, QA signoff workflows, and release health scoring."
              result="60% fewer production bugs, 30% faster QA cycles."
            />
            <UseCase
              title="Regulated Industry"
              challenge="Compliance requirements for audit trails and approval workflows."
              solution="Comprehensive audit logging, multi-approver milestones, and security event tracking."
              result="Passed SOC 2 audit with zero findings."
            />
            <UseCase
              title="Startup Growth"
              challenge="Multiple releases per week without clear visibility into timeline."
              solution="AI-powered planning, health scoring, and automated status notifications."
              result="Weekly releases hit target date 96% of the time."
            />
          </div>
        </div>

        {/* CTA */}
        <div className="bg-muted/50 py-24">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-foreground text-3xl font-bold">
              Start Managing Releases Like an Enterprise
            </h2>
            <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
              See how VeroHQ can transform your release process.
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
        </div>
      </main>
      <Footer footerNavigation={footerNavigation} />
    </div>
  );
}

function Feature({
  icon: Icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) {
  return (
    <Card className="transition-shadow hover:shadow-md">
      <CardContent className="p-6">
        <div className="bg-primary/10 mb-4 inline-flex rounded-lg p-2">
          <Icon className="text-primary h-5 w-5" />
        </div>
        <h3 className="text-foreground text-lg font-semibold">{title}</h3>
        <p className="text-muted-foreground mt-2 text-sm leading-6">
          {description}
        </p>
      </CardContent>
    </Card>
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
      <h3 className="text-foreground font-semibold text-lg mb-4">{title}</h3>
      <div className="space-y-3 text-sm">
        <div>
          <span className="text-muted-foreground font-medium">Challenge: </span>
          <span className="text-muted-foreground">{challenge}</span>
        </div>
        <div>
          <span className="text-muted-foreground font-medium">Solution: </span>
          <span className="text-muted-foreground">{solution}</span>
        </div>
        <div className="pt-2 border-t border-border">
          <span className="text-foreground font-medium">Result: </span>
          <span className="text-foreground">{result}</span>
        </div>
      </div>
    </div>
  );
}
