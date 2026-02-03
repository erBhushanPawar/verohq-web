import { routes } from "wasp/client/router";
import { Link as WaspRouterLink } from "wasp/client/router";

export function Announcement() {
  return (
    <div className="from-primary to-secondary text-primary-foreground relative flex w-full items-center justify-center gap-3 bg-gradient-to-r p-3 text-center font-semibold">
      <WaspRouterLink
        to={routes.PricingPageRoute.to}
        className="hidden cursor-pointer transition-opacity hover:opacity-90 hover:drop-shadow lg:block"
      >
        Start your 14-day free trial — No credit card required
      </WaspRouterLink>
      <div className="bg-primary-foreground/20 hidden w-0.5 self-stretch lg:block"></div>
      <WaspRouterLink
        to={routes.SignupRoute.to}
        className="bg-background/20 hover:bg-background/30 hidden cursor-pointer rounded-full px-2.5 py-1 text-xs tracking-wider transition-colors lg:block"
      >
        Get Started →
      </WaspRouterLink>
      <WaspRouterLink
        to={routes.SignupRoute.to}
        className="bg-background/20 hover:bg-background/30 cursor-pointer rounded-full px-2.5 py-1 text-xs transition-colors lg:hidden"
      >
        Start Free Trial →
      </WaspRouterLink>
    </div>
  );
}
