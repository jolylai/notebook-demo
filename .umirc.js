const path = require("path");

export default {
  plugins: ["umi-plugin-dva"],
  proxy: {
    "/api": {
      target: "http://192.168.80.198:23101",
      changeOrigin: true,
      pathRewrite: { "^/api": "/api" }
    }
  },
  alias: {
    components: path.resolve(__dirname, "src/components")
  }
};
