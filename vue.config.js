const path = require("path");

module.exports = {
  outputDir: path.resolve(__dirname, "./api/public"),
  devServer: {
    proxy: {
      "/api": {
        target: "https://localhost:8000/",
      },
    },
  },
};
