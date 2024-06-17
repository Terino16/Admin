import {Poppins, Sevillana, Source_Sans_3 } from 'next/font/google'
 
export const sevillana = Sevillana({ 
    subsets: ['latin'],
    weight:["400"],
    variable: '--font-Sevillana',
  });
  export const source_sans = Source_Sans_3({ 
    subsets: ['latin'],
    weight:["400"],

  });
export const poppins700 = Poppins({
    subsets: ['latin'],
    weight:['700'],
    variable: '--font-Poppins',
})

export const poppins400 = Poppins({
  subsets: ['latin'],
  weight:['400'],
  variable: '--font-Poppins',
})
export const poppins500 = Poppins({
  subsets: ['latin'],
  weight:['500'],
  variable: '--font-Poppins',
})
export const poppins600 = Poppins({
  subsets: ['latin'],
  weight:['600'],
  variable: '--font-Poppins',
})