import React from 'react';
import styles from './DeFactoHeader.module.css';

export default function DeFactoHeader() {
  return (
    <header className={styles.dfHeader}>
      <div className={`${styles.dfTopBar} ${styles.container}`}>
        <div className={styles.header__top}>
          <div className={styles.header}>
            <div className={styles.languageSelection} title="Ülke - Dil Ayarları" id="languageSelection">
              <span>TÜRKIYE</span>
              <span>TL</span>
              <span>TÜRKÇE</span>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.dfMainBar} ${styles.container}`}>
        <a href="/" className={styles.dfLogo}>
          <img
            src="https://dfcdn.defacto.com.tr/AssetsV2/dist/img/de-facto-logo-light-v2.svg"
            alt="DeFacto Logo"
          />
        </a>

        <nav className={styles.dfNav}>
          <a href="/kadin">Kadın</a>
          <a href="/erkek">Erkek</a>
          <a href="/cocuk">Çocuk & Bebek</a>
        </nav>

        <div className={styles.dfSearch}>
          <svg xmlns="http://www.w3.org/2000/svg" className="ui-icon" width="16" height="16" viewBox="0 0 20 20" fill="none">
            <path fill="currentColor" d="M9.047 0C4.056 0 0 4.056 0 9.047a9.06 9.06 0 0 0 9.047 9.049 9.06 9.06 0 0 0 9.049-9.049A9.06 9.06 0 0 0 9.047 0zm0 .953a8.09 8.09 0 0 1 8.096 8.094 8.09 8.09 0 0 1-8.096 8.096A8.09 8.09 0 0 1 .953 9.047C.953 4.57 4.57.953 9.047.953z" />
            <path fill="currentColor" d="M15.377 15.377a.476.476 0 0 0 0 .674l3.811 3.811a.476.476 0 1 0 .674-.674l-3.811-3.811a.476.476 0 0 0-.674 0z" />
          </svg>
          <input type="text" placeholder="Ürün, kategori ya da marka ara" />
        </div>

        <div className={styles.dfTsRight}>
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" className="ui-icon ui-icon--primary" width="16" height="20" fill="none">
              <path d="M1.322 12a.42.42 0 0 0-.416.365l-.902 7.166A.42.42 0 0 0 .42 20h15.16a.42.42 0 0 0 .416-.469l-.902-7.166a.42.42 0 0 0-.416-.365zm.369.832h12.617l.797 6.334H.895zM8.336 0C5.555 0 3.301 2.239 3.301 5s2.254 5 5.035 5 5.035-2.239 5.035-5-2.254-5-5.035-5zm0 .832c2.317 0 4.195 1.866 4.195 4.168s-1.878 4.168-4.195 4.168S4.141 7.301 4.141 5 6.019.832 8.336.832z" fill="currentColor" />
            </svg>
            Giriş Yap
          </a>
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" className="ui-icon ui-icon--primary" width="20px" height="18px" fill="none"><path d="M5.197 0a5.06 5.06 0 0 0-3.69 1.6c-2.009 2.13-2.007 5.497 0 7.629l8.101 8.606a.53.53 0 0 0 .388.165.53.53 0 0 0 .388-.165l8.109-8.599c2.009-2.13 2.009-5.498 0-7.629a5.06 5.06 0 0 0-7.381 0L10 2.785 8.887 1.6A5.06 5.06 0 0 0 5.197 0h0zm0 .911c1.047 0 2.096.436 2.922 1.311l1.497 1.592a.53.53 0 0 0 .388.165.53.53 0 0 0 .388-.165l1.489-1.585c1.651-1.751 4.185-1.75 5.836 0s1.651 4.635 0 6.385l-7.717 8.184-7.717-8.192a4.74 4.74 0 0 1 0-6.385C3.108 1.347 4.15.911 5.196.911h0z" fill="currentColor"></path></svg>
            Favorilerim
          </a>
          <a href="#">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" fillRule="evenodd" className="ui-icon ui-icon--primary" width="18px" height="18px"><path d="M9.002 0a4.05 4.05 0 0 0-4.064 4.029v.209h-.43l-2.42.014-1.139.008-.479.004.004.473H.473l-.002-.473c-.26.002-.471.215-.471.475v12.787c0 .262.213.475.475.475h17.051c.262 0 .475-.213.475-.475V4.738c0-.26-.211-.473-.471-.475l-.479-.004-1.139-.008-2.42-.012h-.443v-.191A4.05 4.05 0 0 0 9.002 0zm-.004.947h.004a3.1 3.1 0 0 1 3.1 3.102v.189H5.885v-.205A3.1 3.1 0 0 1 8.998.947zM5.885 5.186h6.217V6.92c0 .262.211.475.473.475s.475-.213.475-.475V5.186h.443l2.414.012 1.137.008h.01V17.05H.947V5.207h.01l1.137-.008 2.414-.012h.43v1.734a.47.47 0 0 0 .473.473c.262 0 .475-.211.475-.473z" fill="currentColor"></path></svg>
            Sepetim <span className={styles.miniBasketCount}>0</span>
          </a>
        </div>
      </div>
    </header>
  );
}
