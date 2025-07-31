const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

module.exports = {
    outputFileTracing: false,
  webpack(config, { isServer }) {
        console.log("isServer",isServer)

    config.plugins.push(
      new NextFederationPlugin({
        name: 'host_app',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {}, 
        remotes: {
          content_app: 'content_app@https://mf-ssr-header.onrender.com/_next/static/chunks/remoteEntry.js',
          footer_app: 'footer_app@https://mf-ssr-footer.onrender.com/_next/static/chunks/remoteEntry.js',
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


// const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

// module.exports = {
//     outputFileTracing: false,
//   webpack(config, { isServer }) {
//     config.plugins.push(
//       new NextFederationPlugin({
//         name: 'host_app',
//         filename: 'static/chunks/remoteEntry.js',
//         exposes: {}, 
//      remotes: {
//   content_app: `promise new Promise(resolve => {
//     const remoteUrl = "http://localhost:3001/_next/static/chunks/remoteEntry.js";
//     const script = document.createElement("script");
//     script.src = remoteUrl;
//     script.onload = () => {
//       const proxy = {
//         get: (request) => window.content_app.get(request),
//         init: (arg) => {
//           try {
//             return window.content_app.init(arg);
//           } catch(e) {
//             console.log("remote already initialized");
//           }
//         }
//       };
//       resolve(proxy);
//     };
//     document.head.appendChild(script);
//   })`,
//   footer_app: `promise new Promise(resolve => {
//     const remoteUrl = "http://localhost:3002/_next/static/chunks/remoteEntry.js";
//     const script = document.createElement("script");
//     script.src = remoteUrl;
//     script.onload = () => {
//       const proxy = {
//         get: (request) => window.footer_app.get(request),
//         init: (arg) => {
//           try {
//             return window.footer_app.init(arg);
//           } catch(e) {
//             console.log("remote already initialized");
//           }
//         }
//       };
//       resolve(proxy);
//     };
//     document.head.appendChild(script);
//   })`
// },
//       shared: {
//   react: {
//     singleton: true,
//     requiredVersion: false,
//     strictVersion: false, 
//   },
//   'react-dom': {
//     singleton: true,
//     requiredVersion: false,
//     strictVersion: false,
//   },
// },

//         extraOptions: {
//           exposePages: false,
//           enableImageLoaderFix: true,
//           enableUrlLoaderFix: true,
//         },
//       })
//     );
//     return config;
//   },
// };
