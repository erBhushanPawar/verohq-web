import { forwardRef } from 'react';
import { Button, type ButtonProps } from './ui/button';
import { useAnalytics } from '../hooks/useAnalytics';

interface AnalyticsButtonProps extends ButtonProps {
  analyticsLabel?: string;
  analyticsCategory?: string;
  analyticsLocation?: string;
}

/**
 * Button component with built-in analytics tracking
 * Tracks all button clicks to GTM
 */
export const AnalyticsButton = forwardRef<
  HTMLButtonElement,
  AnalyticsButtonProps
>(
  (
    {
      analyticsLabel,
      analyticsCategory = 'engagement',
      analyticsLocation = 'unknown',
      children,
      onClick,
      ...props
    },
    ref
  ) => {
    const { trackButtonClick } = useAnalytics();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      // Track the button click
      if (analyticsLabel) {
        trackButtonClick(analyticsLabel, analyticsLocation);
      }

      // Call original onClick handler if provided
      onClick?.(e);
    };

    return (
      <Button ref={ref} onClick={handleClick} {...props}>
        {children}
      </Button>
    );
  }
);

AnalyticsButton.displayName = 'AnalyticsButton';
