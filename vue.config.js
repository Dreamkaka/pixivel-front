const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  productionSourceMap: false,
  configureWebpack: (config) => {
    if (isProduction) {
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;
    }
  },
  pwa: {
    name: "Pxelk",
    themeColor: "#00ddff",
    msTileColor: "#000000",
    manifestOptions: {
      name: "Pixvz",
      short_name: "Pixvz",
      theme_color: "#00ddff",
      background_color: "#fafafa",
      display: "standalone",
      scope: "./",
      start_url: "./",
      id: "/",
      icons: [
        {
          src: "img/icons/icon-48x48.png",
          sizes: "48x48",
          type: "image/png",
        },
        {
          src: "img/icons/icon-64x64.png",
          sizes: "64x64",
          type: "image/png",
        },

        {
          src: "img/icons/icon-128x128.png",
          sizes: "128x128",
          type: "image/png",
        },
        {
          src: "img/icons/icon-256x256.png",
          sizes: "256x256",
          type: "image/png",
        },

      ],
    },
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "#8F77B5",
    iconPaths: {
      maskicon: null,
      favicon32: "img/icons/icon-48x48.png",
      favicon16: "favicon.ico",
      appleTouchIcon: null,
      msTileImage: null,
    },
    workboxPluginMode: "GenerateSW",
    workboxOptions: {
      exclude: ["ads.txt"],
      skipWaiting: true,
      clientsClaim: true,
      importWorkboxFrom: "local",
      importsDirectory: "js",
      runtimeCaching: [],
    },
  },
};
