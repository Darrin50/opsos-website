/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Legacy /features page described 6 retired modules (OpsPulse, FlowAI,
      // WasteWatch, ShiftAdvisor, Ask OpsOS, SafetyShield) that do not match
      // the ratified five-product architecture. /products is its replacement
      // in the new IA (HCO-123 / OpsOS#148).
      {
        source: '/features',
        destination: '/products',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
