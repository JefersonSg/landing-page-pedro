import Image from 'next/image';
import styles from './minhas-fotos.module.css';
import Contatos from './Contatos';
import SlidePhoto from './SlidePhoto';

export default async function Secao2MinhasFotos() {
  return (
    <main className={styles.section_2}>
      <div className={styles.container}>
        <div className={styles.image_balanco_div}>
          <Image
            className={styles.foto_balanco}
            alt="Foto do pedro no balanço"
            src={'/foto-balanço.svg'}
            width={304}
            height={409}
          />
          <span className={styles.border}></span>

          <Image
            className={styles.preenchimento}
            alt="imagem de preenchimento"
            src={'/preenchimento.svg'}
            width={324}
            height={242}
          />
        </div>
        <p className={styles.texto_frase}>
          “ Sou assim, espontâneo e cheio de alegria! , veja algumas de minhas
          fotos ”
        </p>
        <SlidePhoto />
      </div>
      <Contatos />
    </main>
  );
}
