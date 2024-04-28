'use client';

import React from 'react';
import Lottie from 'lottie-react';
import instagramAnimation from '../../../public/lottie/instagram.json';
import whatsappAnimation from '../../../public/lottie/whatsapp.json';
import emailAnimation from '../../../public/lottie/email.json';

const AnimationIcon = ({
  instagram,
  whatsapp,
  email
}: {
  instagram?: boolean;
  whatsapp?: boolean;
  email?: boolean;
}) => {
  const [isVisible, setIsVisible] = React.useState(false);

  const targetRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) {
          setIsVisible(true);
          console.log(isVisible);
        }
      },
      { threshold: 0.5 } // Define o threshold para 50%
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [isVisible]);

  const animation = instagram
    ? instagramAnimation
    : whatsapp
      ? whatsappAnimation
      : emailAnimation;

  return (
    <div ref={targetRef}>
      <Lottie
        animationData={animation}
        autoPlay={true}
        style={{ width: `${email ? '183px' : '160px'}`, height: '160px' }}
        loop={!isVisible}
      />
    </div>
  );
};

export default AnimationIcon;
