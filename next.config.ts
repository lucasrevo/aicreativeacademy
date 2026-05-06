import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  async headers() {
    // CSP tuned for the Whop embedded checkout. The iframe loads from
    // whop.com + js.whop.com and pokes api.whop.com for state.
    const csp = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://js.whop.com https://*.whop.com https://www.googletagmanager.com https://*.google-analytics.com https://*.googletagmanager.com https://www.clarity.ms https://*.clarity.ms",
      "style-src 'self' 'unsafe-inline' https://*.whop.com",
      "img-src 'self' data: blob: https://*.whop.com https://*.whop-checkout.com https://www.googletagmanager.com https://*.google-analytics.com https://*.clarity.ms https://*.bing.com",
      "font-src 'self' data: https://*.whop.com",
      "frame-src https://whop.com https://*.whop.com https://js.whop.com https://*.googletagmanager.com",
      "connect-src 'self' https://api.whop.com https://*.whop.com https://*.google-analytics.com https://*.googletagmanager.com https://*.analytics.google.com https://*.clarity.ms https://*.bing.com",
      "base-uri 'self'",
      "form-action 'self' https://*.whop.com",
    ].join("; ");

    return [
      {
        source: "/:path*",
        headers: [
          { key: "Content-Security-Policy", value: csp },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
