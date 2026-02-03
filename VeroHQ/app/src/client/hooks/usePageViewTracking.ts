import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAnalytics } from './useAnalytics';

/**
 * Hook that automatically tracks page views when location changes
 */
export const usePageViewTracking = () => {
  const location = useLocation();
  const { trackPageView } = useAnalytics();

  useEffect(() => {
    // Get page title from document or construct from pathname
    const pageTitle = document.title || getPageTitleFromPath(location.pathname);

    // Track page view
    trackPageView(location.pathname, pageTitle);

    // Optional: Send to parent window if in iframe
    if (window.parent !== window) {
      window.parent.postMessage(
        {
          event: 'page_view',
          path: location.pathname,
          title: pageTitle,
        },
        '*'
      );
    }
  }, [location.pathname, trackPageView]);
};

/**
 * Helper function to generate page title from pathname
 */
function getPageTitleFromPath(pathname: string): string {
  const pathSegments = pathname.split('/').filter(Boolean);

  const pageNames: { [key: string]: string } = {
    'features': 'Features',
    'release-management': 'Release Management Features',
    'task-management': 'Task Management Features',
    'qa-testing': 'QA & Testing Features',
    'ai-automation': 'AI Automation Features',
    'solutions': 'Solutions',
    'engineering': 'Solutions for Engineering Teams',
    'product': 'Solutions for Product Teams',
    'integrations': 'Integrations',
    'pricing': 'Pricing',
    'about': 'About',
    'contact': 'Contact',
    'blog': 'Blog',
    'dashboard': 'Dashboard',
    'account': 'Account',
  };

  if (pathSegments.length === 0) {
    return 'Home';
  }

  // Return the friendly name or construct from path
  const lastSegment = pathSegments[pathSegments.length - 1];
  return pageNames[lastSegment] || formatPathToTitle(lastSegment);
}

/**
 * Format path segment to readable title
 */
function formatPathToTitle(segment: string): string {
  return segment
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
