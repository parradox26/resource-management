import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  compiler: {
    styledComponents: true, // This enables the styled-components SWC compiler,
    // which is generally preferred over the Babel plugin
    // for new Next.js versions.
    // If you use an older Next.js or face issues,
    // you might need the Babel plugin.
    // For modern Next.js, this SWC compiler is sufficient.
  },
};

export default nextConfig;
