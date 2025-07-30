import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const Header = dynamic(() => import('header_app/Header'), { ssr: true });

export default function Home() {
  return (
    <div>
      <Suspense fallback={<p>Yükleniyor...</p>}>
        <Header />
      </Suspense>
      <p>Host App içeriği</p>
    </div>
  );
}
