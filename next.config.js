const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

module.exports = {
    outputFileTracing: false,
  webpack(config, { isServer }) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'host_app',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {}, 
        remotes: {
          header_app: 'header_app@https://mf-ssr-header.onrender.com/_next/static/chunks/remoteEntry.js',
        },
      shared: {
  react: {
    singleton: true,
    requiredVersion: false,
    strictVersion: false, 
  },
  'react-dom': {
    singleton: true,
    requiredVersion: false,
    strictVersion: false,
  },
},

        extraOptions: {
          exposePages: false,
          enableImageLoaderFix: true,
          enableUrlLoaderFix: true,
        },
      })
    );
    return config;
  },
};
