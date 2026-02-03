import { routes } from "wasp/client/router";
import { BlogUrl, DocsUrl } from "../../../shared/common";
import type { NavigationItem } from "./NavBar";

const staticNavigationItems: NavigationItem[] = [
  { name: "Documentation", to: DocsUrl },
  { name: "Blog", to: BlogUrl },
];

export const marketingNavigationItems: NavigationItem[] = [
  {
    name: "Features",
    to: routes.FeaturesRoute.to,
    submenu: [
      { name: "Overview", to: routes.FeaturesRoute.to },
      { name: "Release Management", to: routes.ReleaseManagementRoute.to },
      { name: "Task Management", to: routes.TaskManagementRoute.to },
      { name: "QA & Testing", to: routes.QATestingRoute.to },
      { name: "AI Automation", to: routes.AIAutomationRoute.to },
    ],
  },
  {
    name: "Solutions",
    to: routes.EngineeringTeamsRoute.to,
    submenu: [
      { name: "For Engineering Teams", to: routes.EngineeringTeamsRoute.to },
      { name: "For Product Teams", to: routes.ProductTeamsRoute.to },
    ],
  },
  { name: "Integrations", to: routes.IntegrationsRoute.to },
  { name: "Pricing", to: routes.PricingPageRoute.to },
  { name: "About", to: routes.AboutRoute.to },
  { name: "Contact", to: routes.ContactRoute.to },
  ...staticNavigationItems,
] as const;

export const demoNavigationitems: NavigationItem[] = [
  { name: "AI Scheduler", to: routes.DemoAppRoute.to },
  { name: "File Upload", to: routes.FileUploadRoute.to },
  ...staticNavigationItems,
] as const;
