const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "mc",
    projectName: "react-header",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // quando rodar cada uma das aplicações o react-router-dom n vai ser baixado de novo no bundle
    externals: ["react-router-dom"],
  });
};
