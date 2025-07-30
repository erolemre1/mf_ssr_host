import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import HeaderLocal from '../components/header/DeFactoHeader.jsx'

const Header = dynamic(() => import('header_app/Header'), { ssr: true });

export default function Home() {
  return (
    <div>
      <HeaderLocal/>
       <Suspense fallback={<p>Yükleniyor...</p>}>
        <Header />
      </Suspense>
    </div>
  );
}
