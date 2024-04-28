import Link from 'next/link';
import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.header_navigation}>
        <div className={styles.logo}>KIDS - FASHION</div>
        <ul>
          <li>
            <Link href={'#quem-sou-eu'}>Quem sou eu</Link>
          </li>
          <li>
            <Link href={'#quem-sou-eu'}>Fotos</Link>
          </li>
          <li>
            <Link href={'#quem-sou-eu'}>Contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
