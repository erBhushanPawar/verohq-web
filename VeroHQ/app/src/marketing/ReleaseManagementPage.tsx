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
        <div className="relative overflow-hidden pt-14">
          {/* Gradient backgrounds */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-background to-background" />
          <div className="absolute right-0 top-0 -z-10 w-96 h-96 bg-gradient-to-bl from-primary/20 to-transparent rounded-full blur-3xl" />

          <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-8">
            <h1 className="text-4xl font-bold sm:text-5xl bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
              Release Management That Scales
            </h1>
            <p className="text-muted-foreground mx-auto mt-6 max-w-3xl text-lg leading-relaxed">
              From planning to production, manage complex multi-team releases with
              confidence and complete visibility. VeroHQ handles multi-phase
              lifecycles, cross-team coordination, and automated workflows.
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

        {/* Key Features */}
        <div className="relative overflow-hidden py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-background to-background -z-10" />

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
              <div className="group relative overflow-hidden border border-primary/20 rounded-lg p-6 bg-gradient-to-br from-primary/5 to-transparent hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="text-primary h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold group-hover:text-primary transition-colors duration-200">Multiple Approvers</span>
                </div>
                <p className="text-muted-foreground text-sm group-hover:text-foreground/80 transition-colors duration-200">
                  Require approval from engineering, QA, product, security — all in one workflow.
                </p>
              </div>
              <div className="group relative overflow-hidden border border-primary/20 rounded-lg p-6 bg-gradient-to-br from-primary/5 to-transparent hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="text-primary h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold group-hover:text-primary transition-colors duration-200">Blocking Conditions</span>
                </div>
                <p className="text-muted-foreground text-sm group-hover:text-foreground/80 transition-colors duration-200">
                  Prevent progression until all critical tests pass or all blockers are resolved.
                </p>
              </div>
              <div className="group relative overflow-hidden border border-primary/20 rounded-lg p-6 bg-gradient-to-br from-primary/5 to-transparent hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="text-primary h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold group-hover:text-primary transition-colors duration-200">File Attachments</span>
                </div>
                <p className="text-muted-foreground text-sm group-hover:text-foreground/80 transition-colors duration-200">
                  Attach security reviews, design approvals, test reports, and change logs.
                </p>
              </div>
              <div className="group relative overflow-hidden border border-primary/20 rounded-lg p-6 bg-gradient-to-br from-primary/5 to-transparent hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="text-primary h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold group-hover:text-primary transition-colors duration-200">Audit Trails</span>
                </div>
                <p className="text-muted-foreground text-sm group-hover:text-foreground/80 transition-colors duration-200">
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
            <div className="rounded-xl p-8 border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent shadow-lg shadow-primary/5">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="group hover:bg-green-500/10 rounded-lg p-4 transition-colors duration-200">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-green-500 group-hover:scale-150 transition-transform" />
                    <span className="font-semibold text-foreground">Healthy</span>
                  </div>
                  <p className="text-muted-foreground group-hover:text-green-700/80 text-sm transition-colors duration-200">
                    85-100%: On schedule, no blockers, tests passing, QA approved
                  </p>
                </div>
                <div className="group hover:bg-yellow-500/10 rounded-lg p-4 transition-colors duration-200">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-yellow-500 group-hover:scale-150 transition-transform" />
                    <span className="font-semibold text-foreground">At Risk</span>
                  </div>
                  <p className="text-muted-foreground group-hover:text-yellow-700/80 text-sm transition-colors duration-200">
                    60-84%: Minor delays, some blockers identified, coverage below target
                  </p>
                </div>
                <div className="group hover:bg-red-500/10 rounded-lg p-4 transition-colors duration-200">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-red-500 group-hover:scale-150 transition-transform" />
                    <span className="font-semibold text-foreground">Critical</span>
                  </div>
                  <p className="text-muted-foreground group-hover:text-red-700/80 text-sm transition-colors duration-200">
                    0-59%: Significant delays, multiple blockers, failed tests
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mt-6 border-t border-primary/10 pt-6">
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
            <div className="overflow-hidden rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent shadow-lg shadow-primary/5">
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 px-6 py-4 flex items-center gap-6 text-sm font-semibold border-b border-primary/10">
                <div className="flex items-center gap-2 group hover:scale-105 transition-transform cursor-default">
                  <div className="w-2 h-2 bg-green-500 rounded-full group-hover:shadow-lg group-hover:shadow-green-500/50 transition-shadow" />
                  <span className="text-foreground">DEV</span>
                </div>
                <div className="text-muted-foreground">→</div>
                <div className="flex items-center gap-2 group hover:scale-105 transition-transform cursor-default">
                  <div className="w-2 h-2 bg-green-500 rounded-full group-hover:shadow-lg group-hover:shadow-green-500/50 transition-shadow" />
                  <span className="text-foreground">STAGE</span>
                </div>
                <div className="text-muted-foreground">→</div>
                <div className="flex items-center gap-2 group hover:scale-105 transition-transform cursor-default">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full group-hover:shadow-lg group-hover:shadow-yellow-500/50 transition-shadow" />
                  <span className="text-foreground">PRE_PROD</span>
                </div>
                <div className="text-muted-foreground">→</div>
                <div className="flex items-center gap-2 group hover:scale-105 transition-transform cursor-default">
                  <div className="w-2 h-2 bg-muted-foreground rounded-full group-hover:shadow-lg group-hover:shadow-muted-foreground/50 transition-shadow" />
                  <span className="text-foreground">PROD</span>
                </div>
              </div>
              <div className="px-6 py-4 text-sm text-muted-foreground hover:text-foreground/80 transition-colors duration-200">
                Each environment shows: deployment timestamp, duration, CI/CD status, approvals required, rollback plan, and environment-specific configuration.
              </div>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="relative overflow-hidden py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-background to-background -z-10" />

          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-foreground text-center text-3xl font-bold mb-12">
              How VeroHQ Compares
            </h2>
            <div className="overflow-x-auto rounded-xl border border-primary/20 shadow-lg shadow-primary/5">
              <table className="w-full text-sm bg-gradient-to-b from-primary/5 to-background">
                <thead>
                  <tr className="border-b border-primary/20 bg-gradient-to-r from-primary/10 to-primary/5">
                    <th className="text-left py-4 px-4 font-semibold text-foreground">Feature</th>
                    <th className="text-center py-4 px-4 font-semibold text-primary">VeroHQ</th>
                    <th className="text-center py-4 px-4 font-semibold text-muted-foreground">Jira</th>
                    <th className="text-center py-4 px-4 font-semibold text-muted-foreground">Linear</th>
                    <th className="text-center py-4 px-4 font-semibold text-muted-foreground">Azure DevOps</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50 hover:bg-primary/5 transition-colors duration-200">
                    <td className="py-4 px-4 text-foreground">Multi-phase releases</td>
                    <td className="text-center py-4 px-4 text-green-600">✅ Full</td>
                    <td className="text-center py-4 px-4 text-yellow-600">⚠️ Limited</td>
                    <td className="text-center py-4 px-4 text-yellow-600">⚠️ Limited</td>
                    <td className="text-center py-4 px-4 text-green-600">✅ Full</td>
                  </tr>
                  <tr className="border-b border-border/50 hover:bg-primary/5 transition-colors duration-200">
                    <td className="py-4 px-4 text-foreground">AI-powered planning</td>
                    <td className="text-center py-4 px-4 text-green-600">✅ Yes</td>
                    <td className="text-center py-4 px-4 text-red-600">❌ No</td>
                    <td className="text-center py-4 px-4 text-red-600">❌ No</td>
                    <td className="text-center py-4 px-4 text-red-600">❌ No</td>
                  </tr>
                  <tr className="border-b border-border/50 hover:bg-primary/5 transition-colors duration-200">
                    <td className="py-4 px-4 text-foreground">Multi-repo tracking</td>
                    <td className="text-center py-4 px-4 text-green-600">✅ Yes</td>
                    <td className="text-center py-4 px-4 text-yellow-600">⚠️ Limited</td>
                    <td className="text-center py-4 px-4 text-red-600">❌ No</td>
                    <td className="text-center py-4 px-4 text-green-600">✅ Yes</td>
                  </tr>
                  <tr className="border-b border-border/50 hover:bg-primary/5 transition-colors duration-200">
                    <td className="py-4 px-4 text-foreground">Health scoring</td>
                    <td className="text-center py-4 px-4 text-green-600">✅ Automated</td>
                    <td className="text-center py-4 px-4 text-red-600">❌ Manual</td>
                    <td className="text-center py-4 px-4 text-red-600">❌ Manual</td>
                    <td className="text-center py-4 px-4 text-yellow-600">⚠️ Basic</td>
                  </tr>
                  <tr className="hover:bg-primary/5 transition-colors duration-200">
                    <td className="py-4 px-4 text-foreground">Time tracking</td>
                    <td className="text-center py-4 px-4 text-green-600">✅ Built-in</td>
                    <td className="text-center py-4 px-4 text-yellow-600">⚠️ Plugin</td>
                    <td className="text-center py-4 px-4 text-red-600">❌ No</td>
                    <td className="text-center py-4 px-4 text-green-600">✅ Basic</td>
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
        <div className="relative overflow-hidden py-24">
          <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 blur-3xl" />

          <div className="mx-auto max-w-4xl px-6 text-center relative rounded-2xl bg-gradient-to-br from-primary/5 border border-primary/20 p-12 shadow-lg">
            <h2 className="text-foreground text-3xl font-bold">
              Start Managing Releases Like an Enterprise
            </h2>
            <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg leading-relaxed">
              See how VeroHQ can transform your release process.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Button
                size="lg"
                variant="default"
                asChild
                className="group hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
              >
                <WaspRouterLink to={routes.SignupRoute.to}>
                  Start Free Trial <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </WaspRouterLink>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
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
    <Card className="group relative overflow-hidden border-primary/10 transition-all duration-300 hover:shadow-lg hover:border-primary/30 bg-gradient-to-br from-primary/5 to-transparent hover:from-primary/10">
      <CardContent className="p-6 relative z-10">
        <div className="bg-gradient-to-br from-primary to-primary/70 mb-4 inline-flex rounded-lg p-3 group-hover:scale-110 transition-transform duration-300">
          <Icon className="text-white h-5 w-5" />
        </div>
        <h3 className="text-foreground text-lg font-semibold group-hover:text-primary transition-colors duration-200">
          {title}
        </h3>
        <p className="text-muted-foreground group-hover:text-foreground/80 mt-3 text-sm leading-6 transition-colors duration-200">
          {description}
        </p>
      </CardContent>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
    <div className="group relative overflow-hidden border border-primary/20 rounded-xl p-6 bg-gradient-to-br from-primary/5 to-transparent hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
      {/* Animated background on hover */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/10 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-300 -z-10" />

      <h3 className="text-foreground font-semibold text-lg mb-4 group-hover:text-primary transition-colors duration-200 relative z-10">
        {title}
      </h3>
      <div className="space-y-3 text-sm relative z-10">
        <div className="group/item hover:bg-primary/10 rounded px-2 py-1 transition-colors duration-200">
          <span className="text-muted-foreground font-medium">Challenge: </span>
          <span className="text-muted-foreground group-hover/item:text-foreground transition-colors duration-200">
            {challenge}
          </span>
        </div>
        <div className="group/item hover:bg-primary/10 rounded px-2 py-1 transition-colors duration-200">
          <span className="text-muted-foreground font-medium">Solution: </span>
          <span className="text-muted-foreground group-hover/item:text-foreground transition-colors duration-200">
            {solution}
          </span>
        </div>
        <div className="pt-2 border-t border-primary/10 group/item hover:bg-primary/10 rounded px-2 py-1 transition-colors duration-200">
          <span className="text-foreground font-medium">Result: </span>
          <span className="text-primary font-medium">{result}</span>
        </div>
      </div>
    </div>
  );
}
