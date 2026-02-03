import {
  ArrowRight,
  CheckCircle,
  GitBranch,
  Zap,
  Code,
  Slack,
  AlertCircle,
  BarChart3,
} from "lucide-react";
import { Link as WaspRouterLink, routes } from "wasp/client/router";
import { Button } from "../client/components/ui/button";
import { Card, CardContent } from "../client/components/ui/card";
import Footer from "../landing-page/components/Footer";
import { footerNavigation } from "../landing-page/contentSections";

export default function IntegrationsPage() {
  return (
    <div className="bg-background text-foreground">
      <main className="isolate">
        {/* Hero */}
        <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-8">
          <h1 className="text-4xl font-bold sm:text-5xl">
            Integrations That Just Work
          </h1>
          <p className="text-muted-foreground mx-auto mt-6 max-w-3xl text-lg">
            Connect VeroHQ with your existing tools in minutes. Native support
            for the platforms you already use every day. 107 API endpoints,
            webhooks, and OAuth 2.0.
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

        {/* Integration Categories */}
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <h2 className="text-foreground text-center text-3xl font-bold mb-16">
            Your Workflow, Supercharged
          </h2>

          {/* Git & Version Control */}
          <div className="mb-24">
            <h3 className="text-foreground text-2xl font-bold mb-8">
              Git & Version Control
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Integration
                name="GitHub"
                description="Full bidirectional sync. Auto PR-to-task linking, branch creation, status updates."
                time="2 min setup"
              />
              <Integration
                name="GitLab"
                description="Self-managed and Cloud support. Merge request tracking, pipeline integration."
                time="3 min setup"
              />
              <Integration
                name="Bitbucket"
                description="Cloud & Server support. Pull request sync, build status, branch permissions."
                time="3 min setup"
              />
            </div>
          </div>

          {/* Project Management */}
          <div className="mb-24">
            <h3 className="text-foreground text-2xl font-bold mb-8">
              Project Management
            </h3>
            <div className="border border-border rounded-lg p-8 bg-muted/50">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <AlertCircle className="text-primary h-8 w-8" />
                </div>
                <div>
                  <h4 className="text-foreground font-semibold mb-2">Jira Bidirectional Sync</h4>
                  <p className="text-muted-foreground mb-4">
                    Keep your Jira investment. Two-way sync ensures teams on different tools stay aligned. Import 1,000 issues in ~30 minutes.
                  </p>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <div>✓ Issue status sync (Jira ↔ VeroHQ)</div>
                    <div>✓ Comments and attachments</div>
                    <div>✓ Custom field mapping</div>
                    <div>✓ Workflow synchronization</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AI & Automation */}
          <div className="mb-24">
            <h3 className="text-foreground text-2xl font-bold mb-8">
              AI & Automation
            </h3>
            <div className="border border-border rounded-lg p-8 bg-muted/50">
              <h4 className="text-foreground font-semibold mb-4">Google Gemini</h4>
              <p className="text-muted-foreground mb-4">
                Powering VeroHQ's AI features. Pre-configured for all users.
              </p>
              <div className="text-sm text-muted-foreground space-y-1">
                <div>✓ Task and subtask generation</div>
                <div>✓ Test case creation</div>
                <div>✓ Code summarization</div>
                <div>✓ Release planning</div>
              </div>
              <div className="mt-4 border-t border-border pt-4 text-xs text-muted-foreground">
                <p><span className="text-primary">Usage Limits:</span> Free: 100/mo | Professional: 1,000/mo | Enterprise: Unlimited</p>
              </div>
            </div>
          </div>

          {/* Notifications & Communication */}
          <div className="mb-24">
            <h3 className="text-foreground text-2xl font-bold mb-8">
              Notifications & Communication
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Integration
                name="OneSignal"
                description="Web & mobile push notifications. Segment targeting, rich media, A/B testing."
                time="Pre-configured"
              />
              <Integration
                name="Mailgun"
                description="Reliable email delivery. Transactional, digest, and notification emails with templates."
                time="Pre-configured"
              />
            </div>
            <div className="mt-6 p-6 border border-border rounded-lg bg-background">
              <p className="text-sm text-muted-foreground">
                <span className="text-primary">Coming Soon:</span> Slack (Channel notifications, bot commands) and Microsoft Teams (Integration, adaptive cards)
              </p>
            </div>
          </div>

          {/* Storage & Infrastructure */}
          <div className="mb-24">
            <h3 className="text-foreground text-2xl font-bold mb-8">
              Storage & Infrastructure
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Integration
                name="AWS S3"
                description="Secure encrypted file storage. Attachment uploads, CDN integration."
                time="Pre-configured"
              />
              <Integration
                name="Redis"
                description="High-performance caching. Job queue, session storage, real-time features."
                time="Pre-configured"
              />
              <Integration
                name="PostgreSQL"
                description="Reliable data storage. ACID compliance, full-text search, automated backups."
                time="Pre-configured"
              />
            </div>
          </div>
        </div>

        {/* API & Webhooks */}
        <div className="bg-muted/50 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-foreground text-center text-3xl font-bold mb-12">
              Build Custom Integrations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-border rounded-lg p-6 bg-background">
                <Code className="text-primary h-8 w-8 mb-3" />
                <h3 className="text-foreground font-semibold mb-2">REST API</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  107 endpoints for complete control. Bearer token (JWT) authentication.
                </p>
                <p className="text-xs text-primary font-mono">Rate Limits:</p>
                <p className="text-xs text-muted-foreground">Free: 1K/hr | Pro: 10K/hr | Enterprise: Custom</p>
              </div>
              <div className="border border-border rounded-lg p-6 bg-background">
                <Zap className="text-primary h-8 w-8 mb-3" />
                <h3 className="text-foreground font-semibold mb-2">Webhooks</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Real-time event notifications. 40+ event types supported.
                </p>
                <p className="text-xs text-muted-foreground">task.created, task.updated, release.status_changed, test.executed, and more</p>
              </div>
              <div className="border border-border rounded-lg p-6 bg-background">
                <AlertCircle className="text-primary h-8 w-8 mb-3" />
                <h3 className="text-foreground font-semibold mb-2">OAuth 2.0</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Secure authorization. Multiple flows supported.
                </p>
                <p className="text-xs text-muted-foreground">Authorization Code, Client Credentials, Refresh Token flows</p>
              </div>
            </div>
            <div className="mt-12 text-center">
              <Button variant="outline" asChild>
                <WaspRouterLink to={routes.SignupRoute.to}>
                  View API Documentation
                </WaspRouterLink>
              </Button>
            </div>
          </div>
        </div>

        {/* Roadmap */}
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <h2 className="text-foreground text-center text-3xl font-bold mb-12">
            Coming Soon
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-border rounded-lg p-6">
              <p className="text-primary font-semibold text-sm mb-4">Q2 2024</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>💬 Slack - Channel notifications & commands</li>
                <li>📅 Google Calendar - Milestone sync</li>
                <li>🎨 Figma - Design file linking</li>
                <li>📧 Microsoft Teams - Enterprise communication</li>
              </ul>
            </div>
            <div className="border border-border rounded-lg p-6">
              <p className="text-primary font-semibold text-sm mb-4">Q3-Q4 2024</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>📊 Tableau - Advanced analytics</li>
                <li>🐛 Sentry - Error tracking</li>
                <li>📈 Datadog - Performance monitoring</li>
                <li>🔐 Okta - Enterprise SSO</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-muted-foreground text-sm">
              Missing an integration? <Button variant="link" size="sm" asChild>
                <WaspRouterLink to={routes.ContactRoute.to}>Request one</WaspRouterLink>
              </Button>
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-muted/50 py-24">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-foreground text-3xl font-bold">
              Connect Your Tools Today
            </h2>
            <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
              Start integrating VeroHQ with your existing workflow in minutes.
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

function Integration({
  name,
  description,
  time,
}: {
  name: string;
  description: string;
  time: string;
}) {
  return (
    <Card className="transition-shadow hover:shadow-md">
      <CardContent className="p-6">
        <h3 className="text-foreground font-semibold mb-2">{name}</h3>
        <p className="text-muted-foreground text-sm mb-3">{description}</p>
        <p className="text-primary text-xs font-medium">{time}</p>
      </CardContent>
    </Card>
  );
}
