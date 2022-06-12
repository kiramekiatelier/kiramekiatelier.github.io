/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: { loader: "custom", domains: ["unavatar.io"] }
};

module.exports = nextConfig;
