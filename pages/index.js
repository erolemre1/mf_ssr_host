import dynamic from 'next/dynamic';
import HeaderLocal from '../components/header/DeFactoHeader.jsx'

const Content = dynamic(() => import('content_app/Content'), { ssr: true });
const Footer = dynamic(() => import('footer_app/Footer'), { ssr: true });

export default function Home() {
  return (
    <div>
      <HeaderLocal/>
      <Content />
      <Footer />
    </div>
  );
}
