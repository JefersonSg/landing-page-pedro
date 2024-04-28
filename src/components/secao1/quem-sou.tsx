import Image from 'next/image';
import styles from './QuemSouEU.module.css';

export default async function ComponentsQuemSou() {
  return (
    <main className={styles.section_1_container}>
      <div className={styles.container1}>
        <h1>Oi eu sou o Pedro</h1>
        <p>
          No one shall be held in slavery or servitude; slavery and the slave
          trade shall be prohibited in all their forms.No one shall be held in
          slavery or servitude; slavery and the slave trade shall be prohibited
          in all their forms.
        </p>
        <div className={styles.fotos}>
          <Image
            className={styles.foto1}
            alt="Imagem modelo"
            src={'/foto1.svg'}
            width={130}
            height={104}
          />
          <Image
            className={styles.foto1}
            alt="Imagem modelo"
            src={'/foto2.svg'}
            width={130}
            height={104}
          />
          <Image
            className={styles.foto1}
            alt="Imagem modelo"
            src={'/foto3.svg'}
            width={130}
            height={104}
          />
          <Image
            className={styles.foto1}
            alt="Imagem modelo"
            src={'/foto4.svg'}
            width={130}
            height={104}
          />
        </div>
        <span className={styles.seta}>
          <Image alt="seta" src={'/seta.svg'} width={71} height={71} />
        </span>
      </div>
      <div>
        <Image
          className={styles.foto_perfil}
          alt="Imagem principal seção 1"
          src={'/foto-perfil.svg'}
          width={556}
          height={556}
        />
      </div>
    </main>
  );
}
