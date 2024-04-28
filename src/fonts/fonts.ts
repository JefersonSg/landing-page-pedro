import { Titan_One, Roboto, Shadows_Into_Light_Two } from 'next/font/google';

export const typeFirst = Roboto({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  display: 'auto',
  variable: '--text-body'
});

export const typeTitle = Titan_One({
  weight: ['400'],
  subsets: ['latin'],
  display: 'auto',
  variable: '--text-title'
});

export const typeScript = Shadows_Into_Light_Two({
  weight: ['400'],
  subsets: ['latin'],
  display: 'auto',
  variable: '--text-script'
});
