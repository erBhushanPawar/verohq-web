// Track custom events
export const trackEvent = async (args: any, context: any) => {
  const { eventType, eventName, properties, page } = args;

  // Get session ID from context or generate one
  const sessionId = 'session-' + Date.now();
  const userId = context.user?.id || null;

  // Get user agent, IP, etc. from request
  const userAgent = context.req?.headers['user-agent'] || null;
  const ipAddress = context.req?.ip || context.req?.connection?.remoteAddress || null;

  await context.entities.AnalyticsEvent.create({
    data: {
      eventType,
      eventName,
      userId,
      sessionId,
      page,
      userAgent,
      ipAddress,
      properties: properties || {}
    }
  });

  return { success: true };
};

// Track page views
export const trackPageView = async (args: any, context: any) => {
  const { path, referrer, duration } = args;

  // Get session ID from context or generate one
  const sessionId = 'session-' + Date.now();
  const userId = context.user?.id || null;

  // Get user agent, etc. from request
  const userAgent = context.req?.headers['user-agent'] || '';

  await context.entities.PageView.create({
    data: {
      path,
      userId,
      sessionId,
      referrer,
      duration,
      userAgent
    }
  });

  return { success: true };
};
