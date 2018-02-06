exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === "build-html") {
    config.loader("null", {
      test: /flickty/,
      loader: "null-loader"
    });
    config.loader("null", { test: /@vimeo\/player"/, loader: "null-loader" });
  }
};
