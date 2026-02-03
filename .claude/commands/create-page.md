# Create VeroHQ Page

You are creating a new page for the VeroHQ website — a release management platform for engineering teams.

## Input

The user will provide: **$ARGUMENTS**

This should contain the page name/route (e.g., "integrations", "careers", "case-studies").

## Instructions

1. **Read CLAUDE.md first** — it contains brand guidelines, tone, messaging, and technical patterns you MUST follow.

2. **Check if the page already exists** by searching for it in `VeroHQ/app/src/`. If it does, update its content instead of creating a new file.

3. **Check `main.wasp`** to see if a route already exists for this page. If not, you will need to add one.

4. **Create/update the page** following these rules:

### Content Rules
- Write real, production-quality VeroHQ copy — never placeholder text
- Tone: Professional, confident, concise. No fluff or hype words
- Focus on engineering teams and release management pain points
- Include clear CTAs that link to signup or demo routes
- All features must relate to VeroHQ's actual product capabilities:
  - Release planning & tracking
  - Real-time analytics & dashboards
  - Git integration (GitHub, GitLab, Bitbucket)
  - Team collaboration & shared timelines
  - AI-powered insights & recommendations
  - Time tracking & estimation accuracy
  - Enterprise security (SSO, encryption, compliance)

### Technical Rules
- Use existing UI components from `src/client/components/ui/` (Button, Card, etc.)
- Use Tailwind CSS classes — follow existing patterns in the codebase
- Use `cn()` from `src/client/utils` for conditional classes
- Use Wasp router links: `import { Link as WaspRouterLink, routes } from "wasp/client/router"`
- Use lucide-react icons — check what's already imported in the project
- Follow the existing page structure: default export, proper TypeScript typing
- Use semantic color tokens: `text-foreground`, `text-muted-foreground`, `bg-background`, `text-primary`, etc.
- Support dark mode via Tailwind `dark:` variants where needed
- Keep components in the same file unless they're large enough to warrant extraction
- All pages must be responsive (mobile-first with `sm:`, `md:`, `lg:` breakpoints)

### Structure Pattern
```tsx
export default function PageName() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero/Header Section */}
      {/* Main Content Sections */}
      {/* CTA Section */}
    </div>
  );
}
```

5. **After creating the page**, check if it needs:
   - A route in `main.wasp`
   - A navigation entry in `src/client/components/NavBar/constants.ts`
   - A footer link in `src/landing-page/contentSections.tsx`

6. **Report back** with what was created/modified and any routes that need to be added.
