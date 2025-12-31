// Analytics utility for tracking events
// Replace with your actual analytics provider (e.g., Google Analytics, Mixpanel, Segment)

export const analytics = {
  // Track page views
  pageView: (page: string) => {
    if (typeof window !== 'undefined') {
      console.log('[Analytics] Page view:', page);
      // Example: window.gtag?.('event', 'page_view', { page_path: page });
    }
  },

  // Track CTA clicks
  trackCTAClick: (ctaName: string, location: string) => {
    if (typeof window !== 'undefined') {
      console.log('[Analytics] CTA click:', { ctaName, location });
      // Example: window.gtag?.('event', 'cta_click', { cta_name: ctaName, location });
    }
  },

  // Track form submissions
  trackFormSubmission: (formName: string, data?: Record<string, string>) => {
    if (typeof window !== 'undefined') {
      console.log('[Analytics] Form submission:', { formName, data });
      // Example: window.gtag?.('event', 'form_submit', { form_name: formName });
    }
  },

  // Track feature interactions
  trackInteraction: (action: string, category: string, label?: string) => {
    if (typeof window !== 'undefined') {
      console.log('[Analytics] Interaction:', { action, category, label });
      // Example: window.gtag?.('event', action, { event_category: category, event_label: label });
    }
  },
};

// Hook for tracking page views on route change
export const usePageTracking = () => {
  if (typeof window !== 'undefined') {
    analytics.pageView(window.location.pathname);
  }
};
