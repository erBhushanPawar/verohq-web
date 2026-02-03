import {
  ArrowRight,
  CheckCircle,
  GitBranch,
  Layers,
  Clock,
  Shield,
  AlertCircle,
  FileText,
} from "lucide-react";
import { Link as WaspRouterLink, routes } from "wasp/client/router";
import { Button } from "../client/components/ui/button";
import { Card, CardContent } from "../client/components/ui/card";
import Footer from "../landing-page/components/Footer";
import { footerNavigation } from "../landing-page/contentSections";

export default function TaskManagementPage() {
  return (
    <div className="bg-background text-foreground">
      <main className="isolate">
        {/* Hero */}
        <div className="relative overflow-hidden pt-14">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-background to-background" />
          <div className="absolute right-0 top-0 -z-10 w-96 h-96 bg-gradient-to-bl from-primary/20 to-transparent rounded-full blur-3xl" />

          <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-8">
            <h1 className="text-4xl font-bold sm:text-5xl bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
              Task Management That Actually Works
            </h1>
            <p className="text-muted-foreground mx-auto mt-6 max-w-3xl text-lg leading-relaxed">
              Hierarchical tasks, unlimited subtasks, built-in time tracking, and
              AI-powered automation — all in one place. Break down complexity at
              any level without artificial limits.
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
              Beyond Basic To-Do Lists
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Feature
                icon={FileText}
                title="Human-Readable Task IDs"
                description="MOBILE-123, BACKEND-456, QA-789. Intuitive references for commits, PRs, and team discussions. No more meaningless numbers."
              />
              <Feature
                icon={Layers}
                title="Unlimited Subtask Hierarchy"
                description="Break down complex features to any depth. Each subtask maintains independent status, time estimates, assignees, and priorities."
              />
              <Feature
                icon={Clock}
                title="Built-In Time Tracking"
                description="Log hours as you work. Automatic variance calculation between estimated and actual time. Team-wide velocity insights."
              />
              <Feature
                icon={AlertCircle}
                title="AI-Enhanced Descriptions"
                description="Let AI write better task descriptions with acceptance criteria, technical notes, and edge cases identified automatically."
              />
              <Feature
                icon={GitBranch}
                title="Task Dependencies"
                description="Visualize blocking relationships. Know what's blocked by what. Automated notifications when blockers resolve."
              />
              <Feature
                icon={Shield}
                title="Approval Workflows"
                description="Enforce quality gates. Configure single or multi-approver requirements with role-based approvers and rejection comments."
              />
            </div>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          {/* Task ID System */}
          <div className="mb-24">
            <h3 className="text-foreground text-2xl font-bold mb-4">
              Customizable Task ID System
            </h3>
            <p className="text-muted-foreground text-lg mb-8">
              Every task gets a human-readable ID based on your project prefix. Use these IDs in commits, pull requests, chat, and anywhere else in your workflow.
            </p>
            <div className="bg-muted/50 rounded-lg p-8 border border-border font-mono text-sm">
              <div className="space-y-2 text-muted-foreground">
                <div><span className="text-primary">MOBILE-123</span> User authentication system</div>
                <div><span className="text-primary">BACKEND-456</span> API endpoint implementation</div>
                <div><span className="text-primary">QA-789</span> Integration test suite</div>
                <div><span className="text-primary">DESIGN-321</span> UI mockup revisions</div>
              </div>
            </div>
          </div>

          {/* Subtask Hierarchy */}
          <div className="mb-24">
            <h3 className="text-foreground text-2xl font-bold mb-4">
              Unlimited Subtask Hierarchy
            </h3>
            <p className="text-muted-foreground text-lg mb-8">
              Structure your work at any granularity. Create subtasks of subtasks with full tracking at each level.
            </p>
            <div className="bg-muted/50 rounded-lg p-8 border border-border font-mono text-xs overflow-x-auto">
              <pre className="text-muted-foreground">
{`PROJ-100: User Authentication System
  ├─ PROJ-101: Design authentication flow
  │   ├─ PROJ-102: Create wireframes
  │   └─ PROJ-103: Design database schema
  ├─ PROJ-104: Implement OAuth integration
  │   ├─ PROJ-105: Set up Google OAuth
  │   ├─ PROJ-106: Set up GitHub OAuth
  │   └─ PROJ-107: Test OAuth flows
  └─ PROJ-108: Add 2FA support
      ├─ PROJ-109: TOTP implementation
      └─ PROJ-110: Recovery codes`}
              </pre>
            </div>
            <p className="text-muted-foreground text-sm mt-4">
              Each subtask inherits context but maintains independent status, time estimates, assignees, and priorities. Perfect for breaking down epic features into work packages.
            </p>
          </div>

          {/* Time Tracking */}
          <div className="mb-24">
            <h3 className="text-foreground text-2xl font-bold mb-4">
              Estimated vs. Actual Time Tracking
            </h3>
            <p className="text-muted-foreground text-lg mb-8">
              Stop context switching to log hours in a separate tool. Track time where you work. Build historical data to improve estimation accuracy.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-foreground font-semibold mb-4">For Individual Tasks</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                    <span>Set estimates at task creation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                    <span>Log actual hours as you work</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                    <span>Automatic variance calculation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                    <span>Burndown charts with accuracy</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-foreground font-semibold mb-4">Team-Wide Analytics</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                    <span>Overtime trends and patterns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                    <span>Estimation accuracy per engineer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                    <span>Team velocity over sprints</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                    <span>Predictive estimation for future work</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Dependencies */}
          <div className="mb-24">
            <h3 className="text-foreground text-2xl font-bold mb-4">
              Task Dependencies & Blocking
            </h3>
            <p className="text-muted-foreground text-lg mb-8">
              Know exactly what's blocking work. Visualize dependencies and get notified when blockers are resolved.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-border rounded-lg p-6">
                <h4 className="text-foreground font-semibold mb-2">Blocks</h4>
                <p className="text-muted-foreground text-sm">
                  This task blocks others from starting. Get notified when dependents are impacted.
                </p>
              </div>
              <div className="border border-border rounded-lg p-6">
                <h4 className="text-foreground font-semibold mb-2">Blocked By</h4>
                <p className="text-muted-foreground text-sm">
                  This task can't start until dependencies complete. Automatic notifications when unblocked.
                </p>
              </div>
              <div className="border border-border rounded-lg p-6">
                <h4 className="text-foreground font-semibold mb-2">Related To</h4>
                <p className="text-muted-foreground text-sm">
                  Loose associations for context. Track cross-project impacts without hard dependencies.
                </p>
              </div>
            </div>
          </div>

          {/* Jira Sync */}
          <div className="mb-24">
            <h3 className="text-foreground text-2xl font-bold mb-4">
              Jira Bidirectional Sync
            </h3>
            <p className="text-muted-foreground text-lg mb-8">
              Keep your existing Jira investment. Two-way sync ensures teams on different tools stay aligned.
            </p>
            <div className="bg-muted/50 rounded-lg p-8 border border-border">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-foreground font-semibold mb-4">What Syncs</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ Task status (Jira → VeroHQ)</li>
                    <li>✓ Comments and discussions</li>
                    <li>✓ Attachments and file uploads</li>
                    <li>✓ Custom field mapping</li>
                    <li>✓ Assignee changes</li>
                    <li>✓ Priority updates</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-foreground font-semibold mb-4">How It Works</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Configure once, sync automatically. Real-time updates keep data consistent. No manual intervention needed.
                  </p>
                  <Button size="sm" variant="outline" asChild>
                    <WaspRouterLink to={routes.SignupRoute.to}>
                      Enable Jira Sync
                    </WaspRouterLink>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Audit Trails */}
          <div className="mb-24">
            <h3 className="text-foreground text-2xl font-bold mb-4">
              Comprehensive Audit Trails
            </h3>
            <p className="text-muted-foreground text-lg mb-8">
              Complete transparency for compliance. Track every change: status updates, assignments, time logs, edits, uploads, and approvals.
            </p>
            <div className="bg-muted/50 rounded-lg p-8 border border-border font-mono text-xs space-y-2">
              <div className="text-muted-foreground">
                <span className="text-primary">[2024-01-15 14:32:18]</span> Sarah Chen changed status from "In Progress" → "Ready for Review"
              </div>
              <div className="text-muted-foreground">
                <span className="text-primary">[2024-01-15 14:35:42]</span> Mike Johnson added 3.5 hours (Actual Time)
              </div>
              <div className="text-muted-foreground">
                <span className="text-primary">[2024-01-15 15:12:03]</span> Emily Parker approved task
              </div>
              <div className="text-muted-foreground">
                <span className="text-primary">[2024-01-15 15:12:15]</span> System changed status from "Ready for Review" → "Done"
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-muted/50 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-foreground text-center text-3xl font-bold mb-12">
              Task Management Comparison
            </h2>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold">Feature</th>
                    <th className="text-center py-3 px-4 font-semibold">VeroHQ</th>
                    <th className="text-center py-3 px-4 font-semibold">Asana</th>
                    <th className="text-center py-3 px-4 font-semibold">Monday</th>
                    <th className="text-center py-3 px-4 font-semibold">ClickUp</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4">Hierarchical subtasks</td>
                    <td className="text-center py-3 px-4">✅ Unlimited</td>
                    <td className="text-center py-3 px-4">⚠️ 1 level</td>
                    <td className="text-center py-3 px-4">⚠️ 2 levels</td>
                    <td className="text-center py-3 px-4">✅ Unlimited</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4">Time tracking</td>
                    <td className="text-center py-3 px-4">✅ Built-in</td>
                    <td className="text-center py-3 px-4">❌ External</td>
                    <td className="text-center py-3 px-4">✅ Basic</td>
                    <td className="text-center py-3 px-4">✅ Basic</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4">AI descriptions</td>
                    <td className="text-center py-3 px-4">✅ Yes</td>
                    <td className="text-center py-3 px-4">❌ No</td>
                    <td className="text-center py-3 px-4">❌ No</td>
                    <td className="text-center py-3 px-4">❌ No</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4">Approval workflows</td>
                    <td className="text-center py-3 px-4">✅ Advanced</td>
                    <td className="text-center py-3 px-4">⚠️ Basic</td>
                    <td className="text-center py-3 px-4">⚠️ Basic</td>
                    <td className="text-center py-3 px-4">⚠️ Basic</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4">Audit trails</td>
                    <td className="text-center py-3 px-4">✅ Complete</td>
                    <td className="text-center py-3 px-4">⚠️ Limited</td>
                    <td className="text-center py-3 px-4">⚠️ Limited</td>
                    <td className="text-center py-3 px-4">⚠️ Limited</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4">Jira sync</td>
                    <td className="text-center py-3 px-4">✅ Bidirectional</td>
                    <td className="text-center py-3 px-4">❌ No</td>
                    <td className="text-center py-3 px-4">❌ No</td>
                    <td className="text-center py-3 px-4">⚠️ One-way</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <h2 className="text-foreground text-3xl font-bold">
            Experience Task Management Reimagined
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
            Start tracking work the way engineering teams deserve.
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
