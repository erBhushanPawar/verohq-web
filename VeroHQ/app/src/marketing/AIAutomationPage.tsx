import {
  ArrowRight,
  CheckCircle,
  Zap,
  Brain,
  Code,
  Sparkles,
  Lightbulb,
  Target,
} from "lucide-react";
import { Link as WaspRouterLink, routes } from "wasp/client/router";
import { Button } from "../client/components/ui/button";
import { Card, CardContent } from "../client/components/ui/card";
import Footer from "../landing-page/components/Footer";
import { footerNavigation } from "../landing-page/contentSections";

export default function AIAutomationPage() {
  return (
    <div className="bg-background text-foreground">
      <main className="isolate">
        {/* Hero */}
        <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-8">
          <h1 className="text-4xl font-bold sm:text-5xl">
            AI That Understands Your Team
          </h1>
          <p className="text-muted-foreground mx-auto mt-6 max-w-3xl text-lg">
            Persona-based AI that adapts to your industry, technical depth, and
            communication style. Powered by Google Gemini. Eliminate tedious
            planning and automate release work.
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
              AI That Helps, Not Hypes
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Feature
                icon={Brain}
                title="Persona-Based Configuration"
                description="4-slider system: Sophistication, Creativity, Formality, Technical Depth. AI adapts to your team's unique communication style."
              />
              <Feature
                icon={Code}
                title="Task Generation"
                description="Provide a feature description. AI breaks it into implementation tasks with time estimates, dependencies, and technical notes."
              />
              <Feature
                icon={Sparkles}
                title="Test Case Generation"
                description="From requirements, AI generates comprehensive test cases covering happy path, edge cases, and error scenarios automatically."
              />
              <Feature
                icon={Lightbulb}
                title="Code Summarization"
                description="Massive PRs with thousands of lines? Get plain-English summaries of code changes, impact analysis, and security implications."
              />
              <Feature
                icon={Target}
                title="Release Planning"
                description="AI creates phased release plans with milestones, timelines, risks, and mitigation strategies based on your project scope."
              />
              <Feature
                icon={Zap}
                title="Industry Context"
                description="Optimized for Financial, Healthcare, E-commerce, SaaS, Manufacturing, Gaming, Education, Mobile, Cybersecurity, AI/ML industries."
              />
            </div>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          {/* Persona Configuration */}
          <div className="mb-24">
            <h3 className="text-foreground text-2xl font-bold mb-4">
              Persona-Based AI Configuration
            </h3>
            <p className="text-muted-foreground text-lg mb-8">
              Customize AI behavior across 4 dimensions. Adjust sliders to match your team's unique style and then let AI learn over time.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-border rounded-lg p-6 space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-foreground font-semibold">Sophistication Level</h4>
                    <span className="text-primary text-sm font-mono">1-10</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Simple & straightforward → Complex & nuanced</p>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-foreground font-semibold">Creativity Level</h4>
                    <span className="text-primary text-sm font-mono">1-10</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Conservative → Novel & unconventional</p>
                </div>
              </div>
              <div className="border border-border rounded-lg p-6 space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-foreground font-semibold">Formality Level</h4>
                    <span className="text-primary text-sm font-mono">1-10</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Casual & friendly → Formal & corporate</p>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-foreground font-semibold">Technical Depth</h4>
                    <span className="text-primary text-sm font-mono">1-10</span>
                  </div>
                  <p className="text-sm text-muted-foreground">High-level → Deep technical specifications</p>
                </div>
              </div>
            </div>
            <div className="mt-8 bg-muted/50 rounded-lg p-6 border border-border">
              <h4 className="text-foreground font-semibold mb-4">Example Configurations</h4>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-4">
                  <div className="text-primary font-mono flex-shrink-0">Startup</div>
                  <div className="text-muted-foreground">
                    Sophistication: 6, Creativity: 9, Formality: 3, Technical: 8
                    <div className="text-xs mt-1 text-primary">→ Innovative, casual, technically deep</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-primary font-mono flex-shrink-0">Enterprise</div>
                  <div className="text-muted-foreground">
                    Sophistication: 8, Creativity: 4, Formality: 9, Technical: 6
                    <div className="text-xs mt-1 text-primary">→ Formal, conservative, sophisticated</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Industry Context */}
          <div className="mb-24">
            <h3 className="text-foreground text-2xl font-bold mb-4">
              Industry-Specific AI
            </h3>
            <p className="text-muted-foreground text-lg mb-8">
              AI is optimized for 10+ industries. Choose your industry and AI adds context-specific requirements and best practices.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-border rounded-lg p-4">
                <div className="font-semibold text-primary mb-1">🏦 Financial Services</div>
                <p className="text-sm text-muted-foreground">Compliance, security, audit trails, regulatory requirements</p>
              </div>
              <div className="border border-border rounded-lg p-4">
                <div className="font-semibold text-primary mb-1">🏥 Healthcare</div>
                <p className="text-sm text-muted-foreground">HIPAA, patient data, regulatory requirements, privacy</p>
              </div>
              <div className="border border-border rounded-lg p-4">
                <div className="font-semibold text-primary mb-1">🏪 E-commerce</div>
                <p className="text-sm text-muted-foreground">Customer experience, conversion, inventory, performance</p>
              </div>
              <div className="border border-border rounded-lg p-4">
                <div className="font-semibold text-primary mb-1">🎮 Gaming</div>
                <p className="text-sm text-muted-foreground">Performance, user engagement, monetization, latency</p>
              </div>
              <div className="border border-border rounded-lg p-4">
                <div className="font-semibold text-primary mb-1">🚀 SaaS</div>
                <p className="text-sm text-muted-foreground">Scalability, uptime, customer success, retention</p>
              </div>
              <div className="border border-border rounded-lg p-4">
                <div className="font-semibold text-primary mb-1">🔒 Cybersecurity</div>
                <p className="text-sm text-muted-foreground">Threat modeling, compliance, incident response</p>
              </div>
            </div>
            <div className="mt-8 bg-muted/50 rounded-lg p-6 border border-border">
              <h4 className="text-foreground font-semibold mb-3">Healthcare Example</h4>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-mono text-muted-foreground mb-2">Generic AI:</p>
                  <p className="text-sm text-muted-foreground italic">"Add user authentication"</p>
                </div>
                <div className="border-t border-border pt-3">
                  <p className="text-sm font-mono text-primary mb-2">Healthcare AI:</p>
                  <p className="text-sm text-muted-foreground italic">"Implement HIPAA-compliant user authentication with audit logging, MFA, and session timeout after 15 minutes of inactivity per compliance requirements."</p>
                </div>
              </div>
            </div>
          </div>

          {/* Task Generation */}
          <div className="mb-24">
            <h3 className="text-foreground text-2xl font-bold mb-4">
              Intelligent Task Generation
            </h3>
            <p className="text-muted-foreground text-lg mb-8">
              Provide a feature description. AI breaks it down into implementation tasks with time estimates and dependencies.
            </p>
            <div className="bg-muted/50 rounded-lg p-8 border border-border">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-foreground font-semibold mb-3">You Provide</h4>
                  <div className="bg-background rounded p-4 font-mono text-xs text-muted-foreground space-y-1">
                    <div>Feature: Shopping Cart System</div>
                  </div>
                </div>
                <div>
                  <h4 className="text-foreground font-semibold mb-3">AI Generates</h4>
                  <ul className="space-y-1 text-xs text-muted-foreground">
                    <li>✓ Database schema design (3h)</li>
                    <li>✓ Backend API endpoints (5h)</li>
                    <li>✓ Frontend components (4h)</li>
                    <li>✓ State management (2h)</li>
                    <li>✓ Testing suite (3h)</li>
                    <li className="text-primary font-semibold mt-2">Total: 17 hours</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Code Summarization */}
          <div className="mb-24">
            <h3 className="text-foreground text-2xl font-bold mb-4">
              AI-Powered Code Summaries
            </h3>
            <p className="text-muted-foreground text-lg mb-8">
              Massive pull requests with thousands of lines? Get plain-English summaries including impact analysis and security implications.
            </p>
            <div className="bg-muted/50 rounded-lg p-8 border border-border">
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-primary mb-2">Input:</p>
                  <p className="text-sm text-muted-foreground">254 files changed, 8,423 additions, 2,156 deletions</p>
                </div>
                <div className="border-t border-border pt-4">
                  <p className="text-sm font-semibold text-primary mb-2">AI Summary:</p>
                  <div className="text-xs text-muted-foreground space-y-2">
                    <p><span className="text-primary">What:</span> New payment processing system using Stripe</p>
                    <p><span className="text-primary">Key Changes:</span> Payment Service, Database Schema, API Endpoints, Frontend Components</p>
                    <p><span className="text-primary">Security:</span> PCI-compliant, no card data stored locally</p>
                    <p><span className="text-primary">Testing:</span> 47 new unit tests, 12 integration tests, 100% coverage</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Test Generation */}
          <div className="mb-24">
            <h3 className="text-foreground text-2xl font-bold mb-4">
              Intelligent Test Case Generation
            </h3>
            <p className="text-muted-foreground text-lg mb-8">
              Feature requirement → AI generates comprehensive test cases covering happy path, edge cases, and error scenarios.
            </p>
            <div className="bg-muted/50 rounded-lg p-8 border border-border">
              <div className="mb-4">
                <p className="text-sm font-semibold text-primary mb-2">Feature:</p>
                <p className="text-sm text-muted-foreground">"Users should be able to export their data in CSV format"</p>
              </div>
              <div className="border-t border-border pt-4">
                <p className="text-sm font-semibold text-primary mb-3">AI Generates 12 Test Cases:</p>
                <div className="text-xs text-muted-foreground space-y-1 grid grid-cols-2">
                  <div>✓ Empty dataset (High)</div>
                  <div>✓ Small dataset (Critical)</div>
                  <div>✓ Large dataset (Critical)</div>
                  <div>✓ Special characters (High)</div>
                  <div>✓ Unicode text (Medium)</div>
                  <div>✓ Date formatting (High)</div>
                  <div>✓ Concurrent exports (Medium)</div>
                  <div>✓ Download validation (Critical)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Release Planning */}
          <div className="mb-24">
            <h3 className="text-foreground text-2xl font-bold mb-4">
              Release Plan Generation
            </h3>
            <p className="text-muted-foreground text-lg mb-8">
              Provide release scope. AI creates phased release plans with milestones, risks, and mitigation strategies.
            </p>
            <div className="bg-muted/50 rounded-lg p-8 border border-border">
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-semibold text-primary mb-2">Input:</p>
                  <p className="text-muted-foreground">Mobile App v2.0 - Dark mode, Offline support, Push notifications - Target: March 15</p>
                </div>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-primary mb-3">AI Generates:</p>
                  <div className="text-muted-foreground space-y-2">
                    <div><span className="text-primary">Phase 1: Planning (2 weeks)</span></div>
                    <div><span className="text-primary">Phase 2: Development (6 weeks)</span> - Dark mode, Offline support, Notifications</div>
                    <div><span className="text-primary">Phase 3: Testing (3 weeks)</span></div>
                    <div><span className="text-primary">Phase 4: Deployment (1 week)</span> - Staged rollout 10% → 50% → 100%</div>
                    <div className="border-t border-border pt-2 mt-2">
                      <span className="text-primary">Risks:</span> App Store review delay, Offline sync complexity, Push permissions
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Customizable Prompts */}
          <div className="mb-24">
            <h3 className="text-foreground text-2xl font-bold mb-4">
              Customizable AI Prompts
            </h3>
            <p className="text-muted-foreground text-lg mb-8">
              Fine-tune AI behavior for your organization. Store prompts in the database with versioning, A/B testing, and organization-level overrides.
            </p>
            <div className="bg-muted/50 rounded-lg p-8 border border-border font-mono text-xs text-muted-foreground">
              <p className="text-primary font-semibold mb-3">Custom Prompt Example:</p>
              <div className="space-y-2">
                <div>When generating task descriptions, always include:</div>
                <div className="ml-4 space-y-1">
                  <div>1. User story format (As a... I want... So that...)</div>
                  <div>2. Acceptance criteria (3-5 bullet points)</div>
                  <div>3. Technical considerations</div>
                  <div>4. Potential edge cases</div>
                  <div>5. Related tasks or dependencies</div>
                </div>
                <div className="mt-3 border-t border-border pt-3">Use our terminology:</div>
                <div className="ml-4 space-y-1">
                  <div>- "Customer" not "User"</div>
                  <div>- "Module" not "Component"</div>
                  <div>- "Deployment" not "Release"</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics */}
        <div className="bg-muted/50 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-foreground text-center text-3xl font-bold mb-12">
              Proven AI Effectiveness
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Metric value="73%" label="Faster task breakdown creation" />
              <Metric value="89%" label="Accuracy in time estimation" />
              <Metric value="94%" label="Approval rate for AI-generated descriptions" />
              <Metric value="2.3x" label="More comprehensive test coverage with AI" />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <h2 className="text-foreground text-3xl font-bold">
            Experience AI That Actually Helps
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
            See how AI automation can transform your workflow.
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

function Metric({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="border border-border rounded-lg p-8 text-center">
      <div className="text-4xl font-bold text-primary mb-2">{value}</div>
      <p className="text-muted-foreground">{label}</p>
    </div>
  );
}
