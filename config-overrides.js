const path = require("path");

module.exports = {
  webpack: function (config) {
    config.devtool = "source-map";
    config.resolve = {
      extensions: [".js", ".html"],
      alias: {
        "@core": path.resolve(__dirname, "src/core"),
        "@views": path.resolve(__dirname, "src/core/views"),
        "@components": path.resolve(__dirname, "src/core/views/components"),
        "@hooks": path.resolve(__dirname, "src/core/views/hooks"),
        "@constants": path.resolve(__dirname, "src/core/constants"),
        "@observers": path.resolve(__dirname, "src/core/observers"),
        "@theme": path.resolve(__dirname, "src/core/theme"),
        "@images": path.resolve(__dirname, "src/core/views/assets/images"),
        "@src": path.resolve(__dirname, "src"),
      },
    };
    config.module.rules.push({
      test: /\.js$/,
      loader: "esbuild-loader",
      options: {
        loader: "jsx",
        target: "es2020",
      },
    });
    return config;
  },
};
