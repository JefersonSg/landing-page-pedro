import React from 'react';
import styles from './card.module.css';
import AnimationIcon from '../lottie/AnimationIcon';

const Card = ({
  link,
  name,
  info
}: {
  link: string;
  name: string;
  info: string;
}) => {
  return (
    <a target="_blank" href={link} className={styles.card} rel="noreferrer">
      <AnimationIcon
        email={name === 'email'}
        instagram={name === 'Instagram'}
        whatsapp={name === 'WhatsApp'}
      />
      <h3>{name}</h3>
      <p>{info}</p>
    </a>
  );
};

export default Card;
