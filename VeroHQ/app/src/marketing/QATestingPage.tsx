import {
  ArrowRight,
  CheckCircle,
  TestTube,
  Target,
  AlertCircle,
  BarChart3,
  Shield,
  Zap,
} from "lucide-react";
import { Link as WaspRouterLink, routes } from "wasp/client/router";
import { Button } from "../client/components/ui/button";
import { Card, CardContent } from "../client/components/ui/card";
import Footer from "../landing-page/components/Footer";
import { footerNavigation } from "../landing-page/contentSections";

export default function QATestingPage() {
  return (
    <div className="bg-background text-foreground">
      <main className="isolate">
        {/* Hero */}
        <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-8">
          <h1 className="text-4xl font-bold sm:text-5xl">
            Quality Assurance, Built Right In
          </h1>
          <p className="text-muted-foreground mx-auto mt-6 max-w-3xl text-lg">
            Comprehensive test management, automated coverage gates, and
            AI-generated test cases — integrated into your release workflow.
            Stop juggling separate testing tools.
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
              Testing That Scales With Your Release
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Feature
                icon={TestTube}
                title="Test Case Management"
                description="Create, organize, and track test cases with priorities, types, and step-by-step procedures. Link tests to features and requirements."
              />
              <Feature
                icon={Zap}
                title="AI-Generated Test Cases"
                description="Provide a requirement and let AI generate comprehensive test cases covering happy path, edge cases, and error scenarios automatically."
              />
              <Feature
                icon={Target}
                title="Test Execution Tracking"
                description="Real-time test status tracking. PASSED, FAILED, BLOCKED, SKIPPED, IN_PROGRESS. Record actual results vs. expected with screenshots."
              />
              <Feature
                icon={BarChart3}
                title="Coverage Gates"
                description="Enforce quality standards automatically. Block deployments until test coverage meets thresholds. Real-time coverage dashboard."
              />
              <Feature
                icon={CheckCircle}
                title="QA Signoff Workflows"
                description="Multi-stage approval process: test execution, test lead review, QA manager approval. Full audit trail for compliance."
              />
              <Feature
                icon={Shield}
                title="Defect Linking"
                description="Create defects directly from failed tests. Link multiple test executions to the same defect. Track resolution status."
              />
            </div>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          {/* Test Management */}
          <div className="mb-24">
            <h3 className="text-foreground text-2xl font-bold mb-4">
              Full Test Lifecycle Management
            </h3>
            <p className="text-muted-foreground text-lg mb-8">
              Manage tests from creation through execution and closure. Organize by suite, tag by feature, and track ownership.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-border rounded-lg p-6">
                <h4 className="text-foreground font-semibold mb-4">Test Creation</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Title, description, preconditions</li>
                  <li>✓ Step-by-step procedures</li>
                  <li>✓ Expected results per step</li>
                  <li>✓ Priority levels (Critical → Low)</li>
                  <li>✓ Test type classification</li>
                </ul>
              </div>
              <div className="border border-border rounded-lg p-6">
                <h4 className="text-foreground font-semibold mb-4">Test Organization</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Group into logical suites</li>
                  <li>✓ Tag by feature/component</li>
                  <li>✓ Link to requirements & tasks</li>
                  <li>✓ Track ownership & responsibility</li>
                  <li>✓ Version control & history</li>
                </ul>
              </div>
            </div>
          </div>

          {/* AI Test Generation */}
          <div className="mb-24">
            <h3 className="text-foreground text-2xl font-bold mb-4">
              AI-Powered Test Case Generation
            </h3>
            <p className="text-muted-foreground text-lg mb-8">
              Provide a feature requirement and AI generates comprehensive test cases covering happy path, edge cases, and error scenarios.
            </p>
            <div className="bg-muted/50 rounded-lg p-8 border border-border">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-foreground font-semibold mb-4">You Provide</h4>
                  <div className="bg-background rounded p-4 font-mono text-sm text-muted-foreground">
                    <div>Feature: User Authentication</div>
                    <div>As a user, I want to log in</div>
                    <div>securely so that my data is</div>
                    <div>protected.</div>
                  </div>
                </div>
                <div>
                  <h4 className="text-foreground font-semibold mb-4">AI Generates</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>✓ Successful login test (Critical)</li>
                    <li>✓ Invalid password handling</li>
                    <li>✓ Account lockout scenarios</li>
                    <li>✓ Session timeout handling</li>
                    <li>✓ 2FA/MFA flows (+ 8 more)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Coverage Gates */}
          <div className="mb-24">
            <h3 className="text-foreground text-2xl font-bold mb-4">
              Automated Coverage Gates
            </h3>
            <p className="text-muted-foreground text-lg mb-8">
              Define quality standards once. VeroHQ enforces them automatically before deployment.
            </p>
            <div className="bg-muted/50 rounded-lg p-8 border border-border font-mono text-sm space-y-3">
              <div className="text-muted-foreground">
                <span className="text-primary">Release Deployment Conditions:</span>
              </div>
              <div className="text-muted-foreground ml-4 space-y-2">
                <div>✓ Overall test coverage: ≥ 80%</div>
                <div>✓ Critical tests passed: 100%</div>
                <div>✓ High priority tests passed: ≥ 95%</div>
                <div>✓ Blocker defects: 0</div>
              </div>
              <div className="border-t border-border pt-3 text-muted-foreground">
                <div><span className="text-primary">Coverage Calculation:</span></div>
                <div className="ml-4 mt-2 space-y-1 text-xs">
                  <div>Coverage = (Passed + Skipped) / Total Tests × 100%</div>
                  <div>Critical Coverage = Passed Critical / Total Critical × 100%</div>
                </div>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mt-4">
              Real-time coverage dashboard. Block release deployment if gates not met. Notify stakeholders when coverage drops below target.
            </p>
          </div>

          {/* Signoff Workflows */}
          <div className="mb-24">
            <h3 className="text-foreground text-2xl font-bold mb-4">
              QA Signoff Workflows
            </h3>
            <p className="text-muted-foreground text-lg mb-8">
              Structured approval process with multiple stages and stakeholders.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-border rounded-lg p-6">
                <div className="text-primary font-semibold mb-2">1. Test Execution</div>
                <p className="text-sm text-muted-foreground">
                  All tests executed in environment. Results documented. Coverage calculated.
                </p>
              </div>
              <div className="border border-border rounded-lg p-6">
                <div className="text-primary font-semibold mb-2">2. Test Lead Review</div>
                <p className="text-sm text-muted-foreground">
                  Review failed tests. Approve regressions as acceptable. Verify coverage gates.
                </p>
              </div>
              <div className="border border-border rounded-lg p-6">
                <div className="text-primary font-semibold mb-2">3. QA Manager Approval</div>
                <p className="text-sm text-muted-foreground">
                  Final signoff for environment. Risk assessment. Production readiness decision.
                </p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mt-6 bg-muted/50 rounded p-4">
              Approval tracking: who approved when, approval conditions, comments and concerns, revoke/reapprove capability, and complete audit trail.
            </p>
          </div>

          {/* Test Suites */}
          <div className="mb-24">
            <h3 className="text-foreground text-2xl font-bold mb-4">
              Test Suite Organization
            </h3>
            <p className="text-muted-foreground text-lg mb-8">
              Group tests logically for better management and execution.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-border rounded-lg p-6">
                <h4 className="text-foreground font-semibold mb-3">Suite Types</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><span className="text-primary">Regression Suite</span> - Full system validation</li>
                  <li><span className="text-primary">Smoke Suite</span> - Critical path testing</li>
                  <li><span className="text-primary">Feature Suite</span> - Feature-specific tests</li>
                  <li><span className="text-primary">Release Suite</span> - Pre-deployment tests</li>
                </ul>
              </div>
              <div className="border border-border rounded-lg p-6">
                <h4 className="text-foreground font-semibold mb-3">Suite Execution</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Run entire suite with one click</li>
                  <li>✓ Schedule automated runs</li>
                  <li>✓ Parallel execution tracking</li>
                  <li>✓ Suite-level reporting</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Environment Testing */}
          <div className="mb-24">
            <h3 className="text-foreground text-2xl font-bold mb-4">
              Environment-Specific Testing
            </h3>
            <p className="text-muted-foreground text-lg mb-8">
              Test in the right context. Track test executions per environment and identify environment-specific issues.
            </p>
            <div className="bg-muted/50 rounded-lg p-8 border border-border">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-primary font-semibold">DEV</div>
                  <p className="text-muted-foreground text-sm mt-1">Development Environment</p>
                </div>
                <div className="text-center">
                  <div className="text-primary font-semibold">STAGE</div>
                  <p className="text-muted-foreground text-sm mt-1">Staging Environment</p>
                </div>
                <div className="text-center">
                  <div className="text-primary font-semibold">PRE_PROD</div>
                  <p className="text-muted-foreground text-sm mt-1">Pre-Production Environment</p>
                </div>
                <div className="text-center">
                  <div className="text-primary font-semibold">PROD</div>
                  <p className="text-muted-foreground text-sm mt-1">Production Environment</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mt-6 border-t border-border pt-6">
                View test results side-by-side across environments to identify environment-specific bugs before they hit production.
              </p>
            </div>
          </div>
        </div>

        {/* Automation Tracking */}
        <div className="bg-muted/50 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-foreground text-center text-3xl font-bold mb-12">
              Track Automation Progress
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="border border-border rounded-lg p-8 space-y-6">
                <div>
                  <h3 className="text-foreground font-semibold mb-4">Automation Metadata</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ <span className="text-primary">Automatable Flag</span> - Is this test a candidate?</li>
                    <li>✓ <span className="text-primary">Automation Tool</span> - Selenium, Cypress, Playwright, etc.</li>
                    <li>✓ <span className="text-primary">Script Path</span> - Link to automation code</li>
                    <li>✓ <span className="text-primary">Last Run</span> - Timestamp and result</li>
                    <li>✓ <span className="text-primary">Priority</span> - Which to automate first</li>
                  </ul>
                </div>
                <div className="border-t border-border pt-6">
                  <h3 className="text-foreground font-semibold mb-4">Automation Coverage Example</h3>
                  <div className="bg-background rounded p-4 font-mono text-xs text-muted-foreground space-y-1">
                    <div>Total Test Cases: 450</div>
                    <div><span className="text-primary">Automatable:</span> 380 (84%)</div>
                    <div><span className="text-primary">Automated:</span> 285 (75% of automatable)</div>
                    <div><span className="text-primary">Manual Only:</span> 70 (16%)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Integration */}
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <h2 className="text-foreground text-center text-3xl font-bold mb-12">
            Seamless Integration with Development
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-border rounded-lg p-6">
              <h3 className="text-foreground font-semibold mb-3">Git Integration</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Link test cases to code changes</li>
                <li>✓ Trigger test runs from PR updates</li>
                <li>✓ Include test results in PR checks</li>
              </ul>
            </div>
            <div className="border border-border rounded-lg p-6">
              <h3 className="text-foreground font-semibold mb-3">CI/CD Integration</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Webhook triggers for automated runs</li>
                <li>✓ Post test results back to VeroHQ</li>
                <li>✓ Block deployments on test failures</li>
              </ul>
            </div>
            <div className="border border-border rounded-lg p-6">
              <h3 className="text-foreground font-semibold mb-3">Jira Integration</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Sync test cases with Jira issues</li>
                <li>✓ Update Jira status on test results</li>
                <li>✓ Link defects bidirectionally</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-muted/50 py-24">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-foreground text-3xl font-bold">
              Build Quality Into Your Process
            </h2>
            <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
              Stop treating QA as an afterthought. Start with VeroHQ.
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
