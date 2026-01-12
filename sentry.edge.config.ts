// This file configures the initialization of Sentry for edge features (middleware, edge routes, and so on).
// The config you add here will be used whenever one of the edge features is loaded.
// Note that this config is unrelated to the Vercel Edge Runtime and is also required when running locally.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NODE_ENV === 'production'
    ? "https://1383489ee45328c86a68769827f3f990@o4510682566426624.ingest.de.sentry.io/4510682568851536"
    : undefined, // Disable Sentry in development

  // Only enable Sentry in production
  enabled: process.env.NODE_ENV === 'production',

  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  tracesSampleRate: process.env.NODE_ENV === 'production' ? 1 : 0, // Disable tracing in dev

  // Enable logs to be sent to Sentry (only in production)
  enableLogs: process.env.NODE_ENV === 'production',

  // Enable sending user PII (Personally Identifiable Information)
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/configuration/options/#sendDefaultPii
  sendDefaultPii: process.env.NODE_ENV === 'production',
});
