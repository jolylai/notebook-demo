const path = require('path');

// ref: https://umijs.org/config/
export default {
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        dynamicImport: false,
        title: 'joly',
        dll: false,
        routes: {
          exclude: [/model\.(j|t)sx?$/, /service\.(j|t)sx?$/, /models\//, /services\//],
        },
        hardSource: false,
      },
    ],
  ],
  alias: {
    components: path.resolve(__dirname, 'src/components'),
    utils: path.resolve(__dirname, 'src/utils'),
    assets: path.resolve(__dirname, 'src/assets'),
    common: path.resolve(__dirname, 'src/common'),
  },
  base: process.env.NODE_ENV === 'production' ? '/notebook-demo' : '/',
};
