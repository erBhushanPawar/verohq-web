import { Link as WaspRouterLink, routes } from "wasp/client/router";
import { Button } from "../../client/components/ui/button";

export default function Hero() {
  return (
    <div className="relative w-full pt-14">
      <TopGradient />
      <BottomGradient />
      <div className="md:p-24">
        <div className="max-w-8xl mx-auto px-6 lg:px-8">
          <div className="lg:mb-18 mx-auto max-w-3xl text-center">
            <h1 className="text-foreground text-5xl font-bold sm:text-6xl">
              Ship Faster. Track Smarter.{" "}
              <span className="text-gradient-primary">Release with Confidence.</span>
            </h1>
            <p className="text-muted-foreground mx-auto mt-6 max-w-2xl text-lg leading-8">
              VeroHQ is the AI-powered release management platform that unifies
              your entire software delivery lifecycle—from planning to production.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" variant="default" asChild>
                <WaspRouterLink to={routes.SignupRoute.to}>
                  Start Free Trial <span aria-hidden="true">&rarr;</span>
                </WaspRouterLink>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <WaspRouterLink to={routes.PricingPageRoute.to}>
                  Schedule Demo
                </WaspRouterLink>
              </Button>
            </div>
            <p className="text-muted-foreground mt-4 text-sm">
              14-day free trial &middot; No credit card required
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-4xl">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
              <Stat value="95%" label="On-time delivery" />
              <Stat value="40%" label="Faster releases" />
              <Stat value="10k+" label="Engineering teams" />
              <Stat value="99.9%" label="Uptime" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <p className="text-primary text-3xl font-bold">{value}</p>
      <p className="text-muted-foreground mt-1 text-sm">{label}</p>
    </div>
  );
}

function TopGradient() {
  return (
    <div
      className="absolute right-0 top-0 -z-10 w-full transform-gpu overflow-hidden blur-3xl sm:top-0"
      aria-hidden="true"
    >
      <div
        className="aspect-[1020/880] w-[70rem] flex-none bg-gradient-to-tr from-amber-400 to-purple-300 opacity-10 sm:right-1/4 sm:translate-x-1/2 dark:hidden"
        style={{
          clipPath:
            "polygon(80% 20%, 90% 55%, 50% 100%, 70% 30%, 20% 50%, 50% 0)",
        }}
      />
    </div>
  );
}

function BottomGradient() {
  return (
    <div
      className="absolute inset-x-0 top-[calc(100%-40rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-65rem)]"
      aria-hidden="true"
    >
      <div
        className="relative aspect-[1020/880] w-[90rem] bg-gradient-to-br from-amber-400 to-purple-300 opacity-10 sm:-left-3/4 sm:translate-x-1/4 dark:hidden"
        style={{
          clipPath: "ellipse(80% 30% at 80% 50%)",
        }}
      />
    </div>
  );
}
