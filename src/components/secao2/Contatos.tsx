import React from 'react';
import Card from './Card';
import styles from './contatos.module.css';

const Contatos = () => {
  return (
    <section className={styles.container}>
      <h1>Meus contatos</h1>
      <div className={styles.contatos}>
        <Card
          link="https://www.instagram.com/pedromonteiroficial/"
          info="@pedro oficial"
          name="Instagram"
        />
        <Card
          link="https://wa.me/5522981193154?text=Olá, gostaria de conversar com o pedro"
          info="(22) 981193154"
          name="WhatsApp"
        />
        <Card
          link="mailto:pedro@gmail.com"
          info="pedro@gmail.com"
          name="Email"
        />
      </div>
    </section>
  );
};

export default Contatos;
