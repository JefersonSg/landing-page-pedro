import Header from '@/components/Header';
import styles from './page.module.css';
import ComponentsQuemSou from '@/components/secao1/quem-sou';
import Secao2MinhasFotos from '@/components/secao2/minhas-fotos';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.section_1}>
          <Header />
          <ComponentsQuemSou />
        </div>
        <div>
          <Secao2MinhasFotos />
        </div>
      </main>
      <Footer />
    </>
  );
}
