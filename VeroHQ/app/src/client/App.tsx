import { useEffect, useMemo } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { routes } from "wasp/client/router";
import { Toaster } from "../client/components/ui/toaster";
import "./Main.css";
import NavBar from "./components/NavBar/NavBar";
import {
  demoNavigationitems,
  marketingNavigationItems,
} from "./components/NavBar/constants";
import CookieConsentBanner from "./components/cookie-consent/Banner";
import { usePageViewTracking } from "./hooks/usePageViewTracking";

/**
 * use this component to wrap all child components
 * this is useful for templates, themes, and context
 */
export default function App() {
  const location = useLocation();

  // Track page views automatically
  usePageViewTracking();

  const isMarketingPage = useMemo(() => {
    return (
      location.pathname === "/" ||
      location.pathname.startsWith("/pricing") ||
      location.pathname.startsWith("/features") ||
      location.pathname.startsWith("/solutions") ||
      location.pathname.startsWith("/integrations") ||
      location.pathname.startsWith("/about") ||
      location.pathname.startsWith("/contact") ||
      location.pathname.startsWith("/blog")
    );
  }, [location]);

  const navigationItems = isMarketingPage
    ? marketingNavigationItems
    : demoNavigationitems;

  const shouldDisplayAppNavBar = useMemo(() => {
    return (
      location.pathname !== routes.LoginRoute.build() &&
      location.pathname !== routes.SignupRoute.build()
    );
  }, [location]);

  const isAdminDashboard = useMemo(() => {
    return location.pathname.startsWith("/admin");
  }, [location]);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView();
      }
    }
  }, [location]);

  return (
    <>
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-TFHR33VC"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
      <div className="bg-background text-foreground min-h-screen">
        {isAdminDashboard ? (
          <Outlet />
        ) : (
          <>
            {shouldDisplayAppNavBar && (
              <NavBar navigationItems={navigationItems} />
            )}
            <div className="mx-auto max-w-screen-2xl">
              <Outlet />
            </div>
          </>
        )}
      </div>
      <Toaster position="bottom-right" />
      <CookieConsentBanner />
    </>
  );
}
