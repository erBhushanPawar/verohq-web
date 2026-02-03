/**
 * Custom hook for tracking analytics events with Google Tag Manager
 */

export interface GTMEvent {
  event: string;
  event_category: string;
  event_label: string;
  value?: number;
  page_path?: string;
  [key: string]: any;
}

export const useAnalytics = () => {
  const trackEvent = (eventData: GTMEvent) => {
    if (window.dataLayer) {
      window.dataLayer.push({
        ...eventData,
        timestamp: new Date().toISOString(),
      });
    }
  };

  const trackPageView = (pagePath: string, pageTitle: string) => {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'page_view',
        page_path: pagePath,
        page_title: pageTitle,
        timestamp: new Date().toISOString(),
      });
    }
  };

  const trackButtonClick = (buttonName: string, buttonLocation: string) => {
    trackEvent({
      event: 'button_click',
      event_category: 'engagement',
      event_label: buttonName,
      button_location: buttonLocation,
    });
  };

  const trackSignupAttempt = (source: string) => {
    trackEvent({
      event: 'signup_click',
      event_category: 'conversion',
      event_label: 'start_free_trial',
      signup_source: source,
    });
  };

  const trackPricingClick = (action: string) => {
    trackEvent({
      event: 'pricing_interaction',
      event_category: 'engagement',
      event_label: action,
    });
  };

  const trackFeatureView = (featureName: string) => {
    trackEvent({
      event: 'feature_view',
      event_category: 'engagement',
      event_label: featureName,
    });
  };

  const trackNavigationClick = (linkName: string, linkTarget: string) => {
    trackEvent({
      event: 'navigation_click',
      event_category: 'engagement',
      event_label: linkName,
      link_target: linkTarget,
    });
  };

  const trackFormSubmission = (formName: string, formType: string) => {
    trackEvent({
      event: 'form_submit',
      event_category: 'conversion',
      event_label: formName,
      form_type: formType,
    });
  };

  const trackScroll = (scrollPercentage: number, pageSection: string) => {
    trackEvent({
      event: 'scroll_depth',
      event_category: 'engagement',
      event_label: pageSection,
      scroll_percentage: scrollPercentage,
    });
  };

  const trackTimeOnPage = (pageTitle: string, timeSpent: number) => {
    trackEvent({
      event: 'time_on_page',
      event_category: 'engagement',
      event_label: pageTitle,
      time_spent_seconds: timeSpent,
    });
  };

  const trackExternalLinkClick = (linkUrl: string, linkText: string) => {
    trackEvent({
      event: 'external_link_click',
      event_category: 'engagement',
      event_label: linkText,
      link_url: linkUrl,
    });
  };

  return {
    trackEvent,
    trackPageView,
    trackButtonClick,
    trackSignupAttempt,
    trackPricingClick,
    trackFeatureView,
    trackNavigationClick,
    trackFormSubmission,
    trackScroll,
    trackTimeOnPage,
    trackExternalLinkClick,
  };
};
