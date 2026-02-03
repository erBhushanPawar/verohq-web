# VeroHQ Analytics & GTM Setup Guide

## Overview

VeroHQ uses Google Tag Manager (GTM) to track all user interactions and page views. This document explains how to properly implement analytics throughout the application.

**GTM Container ID:** `GTM-TFHR33VC`

---

## Setup

### 1. Google Tag Manager Integration

GTM is already integrated in two places:

**In `main.wasp` (Head Section):**
```javascript
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-TFHR33VC');</script>
```

**In `App.tsx` (noscript Fallback):**
```jsx
<noscript>
  <iframe
    src="https://www.googletagmanager.com/ns.html?id=GTM-TFHR33VC"
    height="0"
    width="0"
    style={{ display: 'none', visibility: 'hidden' }}
  />
</noscript>
```

### 2. Automatic Page View Tracking

The `usePageViewTracking` hook automatically tracks all page views when users navigate.

**Already integrated in `App.tsx`:**
```tsx
import { usePageViewTracking } from "./hooks/usePageViewTracking";

export default function App() {
  usePageViewTracking(); // Automatically tracks page views
  // ... rest of component
}
```

---

## Using Analytics in Components

### Option 1: useAnalytics Hook (Recommended)

For custom event tracking, use the `useAnalytics` hook:

```tsx
import { useAnalytics } from '../hooks/useAnalytics';

export function MyComponent() {
  const {
    trackSignupAttempt,
    trackPricingClick,
    trackFeatureView,
    trackButtonClick,
  } = useAnalytics();

  const handleSignup = () => {
    trackSignupAttempt('component_name');
    // Handle signup...
  };

  return (
    <button onClick={handleSignup}>
      Sign Up
    </button>
  );
}
```

### Option 2: AnalyticsButton Component

For simple button tracking, use the `AnalyticsButton` wrapper:

```tsx
import { AnalyticsButton } from '../components/AnalyticsButton';

<AnalyticsButton
  analyticsLabel="signup_button"
  analyticsCategory="conversion"
  analyticsLocation="hero_section"
  onClick={handleSignup}
>
  Sign Up Now
</AnalyticsButton>
```

### Option 3: Direct GTM Event Tracking

For advanced scenarios, push events directly to the `dataLayer`:

```tsx
window.dataLayer.push({
  event: 'custom_event',
  event_category: 'engagement',
  event_label: 'my_event',
  custom_property: 'value',
  timestamp: new Date().toISOString(),
});
```

---

## Event Types & Implementation

### 1. Page Views (Automatic)
**Tracked automatically via `usePageViewTracking`**

```json
{
  "event": "page_view",
  "page_path": "/features/release-management",
  "page_title": "Release Management Features"
}
```

### 2. Button Clicks
**Use `trackButtonClick` or `AnalyticsButton`**

```tsx
const { trackButtonClick } = useAnalytics();

trackButtonClick('start_trial_button', 'hero_section');
```

```json
{
  "event": "button_click",
  "event_category": "engagement",
  "event_label": "start_trial_button",
  "button_location": "hero_section"
}
```

### 3. Signup/Trial Attempts
**Use `trackSignupAttempt`**

```tsx
const { trackSignupAttempt } = useAnalytics();

trackSignupAttempt('landing_page_cta');
```

```json
{
  "event": "signup_click",
  "event_category": "conversion",
  "event_label": "start_free_trial",
  "signup_source": "landing_page_cta"
}
```

### 4. Pricing Interactions
**Use `trackPricingClick`**

```tsx
const { trackPricingClick } = useAnalytics();

trackPricingClick('pricing_view_from_features');
trackPricingClick('plan_selected_professional');
```

```json
{
  "event": "pricing_interaction",
  "event_category": "engagement",
  "event_label": "pricing_view_from_features"
}
```

### 5. Feature Views
**Use `trackFeatureView`**

```tsx
const { trackFeatureView } = useAnalytics();

trackFeatureView('release_management');
trackFeatureView('ai_automation');
```

```json
{
  "event": "feature_view",
  "event_category": "engagement",
  "event_label": "release_management"
}
```

### 6. Navigation Clicks
**Use `trackNavigationClick`**

```tsx
const { trackNavigationClick } = useAnalytics();

trackNavigationClick('features_menu', '/features');
```

```json
{
  "event": "navigation_click",
  "event_category": "engagement",
  "event_label": "features_menu",
  "link_target": "/features"
}
```

### 7. Form Submissions
**Use `trackFormSubmission`**

```tsx
const { trackFormSubmission } = useAnalytics();

trackFormSubmission('contact_form', 'contact_page');
```

```json
{
  "event": "form_submit",
  "event_category": "conversion",
  "event_label": "contact_form",
  "form_type": "contact_page"
}
```

### 8. Scroll Depth
**Use `trackScroll`**

```tsx
const { trackScroll } = useAnalytics();

trackScroll(50, 'pricing_page'); // 50% scroll on pricing page
```

```json
{
  "event": "scroll_depth",
  "event_category": "engagement",
  "event_label": "pricing_page",
  "scroll_percentage": 50
}
```

### 9. Time on Page
**Use `trackTimeOnPage`**

```tsx
const { trackTimeOnPage } = useAnalytics();

trackTimeOnPage('Features Page', 45); // 45 seconds
```

```json
{
  "event": "time_on_page",
  "event_category": "engagement",
  "event_label": "Features Page",
  "time_spent_seconds": 45
}
```

### 10. External Link Clicks
**Use `trackExternalLinkClick`**

```tsx
const { trackExternalLinkClick } = useAnalytics();

trackExternalLinkClick('https://docs.verohq.com', 'Documentation');
```

```json
{
  "event": "external_link_click",
  "event_category": "engagement",
  "event_label": "Documentation",
  "link_url": "https://docs.verohq.com"
}
```

---

## Implementation Checklist

### Critical CTAs to Track
- [ ] Homepage "Start Free Trial" button
- [ ] All pricing page interactions
- [ ] Feature page "Learn More" buttons
- [ ] Navigation menu clicks
- [ ] Contact form submissions
- [ ] "Schedule Demo" buttons
- [ ] Sign up / Login buttons

### Page Views to Monitor
- [ ] Home page
- [ ] All feature pages
- [ ] Pricing page
- [ ] Solutions pages
- [ ] Integrations page
- [ ] Blog posts

### Engagement Metrics to Track
- [ ] Scroll depth on long pages
- [ ] Time spent on feature pages
- [ ] Form interactions
- [ ] Video plays (if applicable)
- [ ] FAQ accordion clicks
- [ ] Testimonial interactions

---

## Viewing Analytics

### Google Analytics 4
1. Go to [Google Analytics 4](https://analytics.google.com)
2. Select the VeroHQ property
3. Navigate to **Reports** → **Realtime** to see live events

### Event Insights
- **Conversions**: Track signup attempts and pricing page views
- **Engagement**: Monitor feature page views and navigation clicks
- **Users**: Understand visitor behavior across pages
- **Funnels**: Create conversion funnels (home → features → pricing → signup)

---

## Best Practices

### 1. Consistent Labeling
Use clear, consistent event labels:
```
✅ "start_trial_hero_section"
❌ "btn1" or "cta"
```

### 2. Include Context
Always include location/source information:
```tsx
trackSignupAttempt('landing_page_cta'); // Include WHERE
trackSignupAttempt('features_release_management_page');
```

### 3. Use Category Appropriately
- `engagement` - User interactions with features
- `conversion` - Signup attempts, form submissions
- `navigation` - Menu clicks, link navigation

### 4. Custom Properties for Complex Events
```tsx
const { trackEvent } = useAnalytics();

trackEvent({
  event: 'plan_selected',
  event_category: 'conversion',
  event_label: 'professional_plan',
  plan_type: 'Professional',
  plan_price: '$29/month',
  previous_page: 'pricing',
});
```

---

## Debugging GTM

### Check GTM is Loading
1. Open DevTools → Console
2. Type: `window.dataLayer`
3. Should see an array with events

### View Events Being Fired
```javascript
// In DevTools console
window.dataLayer.forEach(item => console.log(item));
```

### Use GTM Preview Mode
1. Go to Google Tag Manager > Container
2. Click **Preview** button
3. Visit your site to see events in real-time

---

## Common Issues & Fixes

### Events Not Appearing
1. Verify GTM ID is correct: `GTM-TFHR33VC`
2. Check browser console for errors
3. Ensure hooks are properly imported
4. Verify `dataLayer` exists: `window.dataLayer`

### Page Views Not Tracking
- Check `usePageViewTracking()` is called in `App.tsx`
- Verify location pathname is changing
- Check browser console for errors

### Custom Events Not Working
- Ensure `useAnalytics()` hook is imported
- Verify event label is not empty
- Check `window.dataLayer` in console
- Ensure analytics code is in correct component

---

## Resources

- [Google Tag Manager Documentation](https://support.google.com/tagmanager)
- [Google Analytics 4 Setup](https://support.google.com/analytics/answer/10089681)
- [GTM Event Tracking Best Practices](https://support.google.com/analytics/answer/9237567)

---

## Support

For analytics questions or issues, contact your analytics administrator or refer to the useAnalytics hook documentation in the code.
