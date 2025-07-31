// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="tr">
      <Head>
    <title>DeFacto ile Kadın ve Erkek Giyimde Akdeniz Modası</title>
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="https://dfcdn.defacto.com.tr/AssetsV2/dist/img/favicon.png"
          />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
