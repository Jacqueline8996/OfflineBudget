const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
  
  plugins: [
    new WebpackPwaManifest({
      name: "OfflineBudget",
      short_name: "Offline Budget",
      description: "An a app that keep data moving online and offline",
      background_color: "#ffffff",
      theme_color: "#ffffff",
      "theme-color": "#ffffff",
      start_url: "/",
      icons: [
        {
          src: path.resolve("public/assets/images/icons/icon-192x192.png"),
          sizes: [96, 128, 192, 256, 384, 512],
          destination: path.join("assets", "icons")
        },
        {
          src: path.resolve("public/assets/images/icons/icon-512x512.png"),
          sizes: [96, 128, 192, 256, 384, 512],
          destination: path.join("assets", "icons")
        }
      ]
    })
  ],
  
};

module.exports = config;
