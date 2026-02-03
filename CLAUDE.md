# VeroHQ Website — Development Guidelines

## Product Identity

**VeroHQ** is a release management platform for engineering teams.
**Tagline:** Plan. Track. Ship.
**URL:** https://verohq.ai

VeroHQ helps engineering teams plan, track, and ship software releases with confidence through real-time insights, automated workflows, and deadline management.

## Brand Voice & Tone

- **Professional but approachable** — not corporate jargon, not casual slang
- **Confident and direct** — state what the product does, don't hedge
- **Concise** — every sentence should earn its place. Cut filler words
- **Engineering-focused** — speak to developers, engineering managers, and CTOs
- **Benefit-driven** — lead with outcomes, follow with features

### Do:
- "Reduce release delays by 40%"
- "Track every commit from PR to production"
- "Know exactly where your release stands — in real time"

### Don't:
- "Revolutionary AI-powered synergy platform"
- "We're passionate about helping teams succeed!"
- "Best-in-class solution for modern workflows"
- Excessive exclamation marks or emojis in copy

## Core Product Features (use these consistently)

1. **Real-time Analytics** — Track progress, velocity, and blockers with dashboards and insights
2. **Git Integration** — Connect GitHub, GitLab, and Bitbucket for automated release tracking
3. **Team Collaboration** — Shared timelines, assignments, and status updates across teams
4. **AI-Powered Insights** — Intelligent recommendations, risk detection, and automated task breakdowns
5. **Time Tracking** — Monitor estimated vs. actual time to improve planning accuracy
6. **Enterprise Security** — Bank-grade encryption, SSO, role-based access, and compliance (SOC 2, GDPR)

## Key Metrics (for social proof)

- 95% on-time delivery rate
- 40% faster release cycles
- 10,000+ engineering teams
- 99.9% uptime

## Pricing Tiers

| Tier | Price | Audience |
|------|-------|----------|
| Starter | $9.99/mo | Small teams getting started |
| Professional | $19.99/mo | Growing teams (most popular) |
| Enterprise | Custom | Large orgs with compliance needs |

All plans: 14-day free trial, no credit card required.

## Target Audience

- Engineering managers coordinating releases
- DevOps teams managing deployment pipelines
- CTOs wanting visibility into release health
- Development teams (5-500 engineers) shipping software regularly

## CTAs (use consistently)

- Primary: "Start Free Trial" → links to signup route
- Secondary: "View Demo" → links to demo route
- Tertiary: "Learn More" → links to features or pricing

## Tech Stack

- **Framework:** Wasp (React + Node.js + Prisma + PostgreSQL)
- **Styling:** Tailwind CSS with semantic color tokens
- **UI Components:** ShadCN/Radix via `src/client/components/ui/`
- **Icons:** lucide-react
- **Routing:** Wasp router (`wasp/client/router`)

## Code Patterns

### Imports
```tsx
import { Link as WaspRouterLink, routes } from "wasp/client/router";
import { Button } from "../client/components/ui/button";
import { Card, CardContent, CardTitle } from "../client/components/ui/card";
import { cn } from "../client/utils";
```

### Color Tokens (always use these, never raw colors)
- `text-foreground` — primary text
- `text-muted-foreground` — secondary/supporting text
- `bg-background` — page background
- `bg-muted` — subtle background sections
- `text-primary` — brand accent color
- `border-border` — borders
- `bg-accent` / `text-accent-foreground` — hover states

### Responsive Design
- Mobile-first: base → `sm:` → `md:` → `lg:` → `xl:`
- Standard container: `max-w-7xl mx-auto px-6 lg:px-8`
- Grid patterns: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`

### Page Structure
Every marketing page follows:
1. Hero section (headline + subheadline + CTA)
2. Content sections (features, benefits, details)
3. CTA section (closing call-to-action)

### Component File Structure
- Pages go in `src/marketing/` (public) or `src/dashboard/` (authenticated)
- Landing page components go in `src/landing-page/components/`
- Shared UI components are in `src/client/components/ui/`
- Content data lives in `src/landing-page/contentSections.tsx`

## File Locations

| What | Where |
|------|-------|
| Routes & config | `main.wasp` |
| Database schema | `schema.prisma` |
| Landing page | `src/landing-page/` |
| Marketing pages | `src/marketing/` |
| Nav items | `src/client/components/NavBar/constants.ts` |
| Content data | `src/landing-page/contentSections.tsx` |
| Shared URLs | `src/shared/common.ts` |
| UI components | `src/client/components/ui/` |
| Payment plans | `src/payment/plans.ts` |
| Pricing page | `src/payment/PricingPage.tsx` |

## Custom Slash Commands

- `/create-page <page-name>` — Scaffolds a new VeroHQ page with proper branding, routing, and content. Reads this file for guidelines automatically.
