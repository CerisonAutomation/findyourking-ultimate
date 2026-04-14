import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: [
    "@fyk/ui",
    "@fyk/core",
    "@fyk/auth",
    "@fyk/schemas",
    "@fyk/types",
    "@fyk/supabase",
    "@fyk/utils",
  ],
};

export default nextConfig;
