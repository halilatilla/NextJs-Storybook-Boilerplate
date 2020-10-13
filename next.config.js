// next.config.js
const withPlugins = require("next-compose-plugins");
const withPWA = require("next-pwa");

const isDev = process.env.NODE_ENV !== "production";

const nextConfig = {
  pwa: {
    dest: "public",
    disable: isDev,
  },
};

module.exports = withPlugins([], withPWA(nextConfig));
