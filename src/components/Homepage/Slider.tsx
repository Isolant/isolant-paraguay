"use client";

import { ReactElement } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import Image from "next/image";

import Button from '@/components/Button';

import styles from '@/components/Homepage/Slider.module.css';

const Slider = () => {
  return(
    <Splide
      options={{
        arrows: false,
        dots: true,
        rewind: true,
        speed: 500,
        pagination: true,
        autoplay: true,
        classes: {
          pagination: `splide__pagination ${styles.pagination}`,
        }
      }}
    >
      <SplideSlide>
        <Slide
          image="/images/homepage/slider/slide-1.jpg" 
          title={<span>Isolant <strong className="font-poppins-semibold">Paraguay</strong></span>}
          text={<span>Isolant, la empresa de aislantes de espuma de polipropeno más grande de Argentina, <strong className="font-poppins-semibold">llegó a Paraguay</strong>.</span>}
          ctaLink="#empresa"
          ctaText="Conoce Más"
          isExternal={false}
        />
      </SplideSlide>
      <SplideSlide>
        <Slide
          image="/images/homepage/slider/slide-2.jpg" 
          title={<span><strong className="font-poppins-semibold">Atacama</strong></span>}
          text={<span>El aislante líquido para techos y muros de tu casa que baja la temperatura interior <strong className="font-poppins-semibold">de 6 a 8 grados</strong>.</span>}
          ctaLink="#empresa"
          ctaText="Conoce Más"
          isExternal={false}
        />
      </SplideSlide>
      <SplideSlide>
        <Slide
          image="/images/homepage/slider/slide-3.jpg" 
          title={<span>Isolant <strong className="font-poppins-semibold">Paraguay</strong></span>}
          text={<span>Isolant, la empresa de aislantes de espuma de polipropeno más grande de Argentina, <strong className="font-poppins-semibold">llegó a Paraguay</strong>.</span>}
          ctaLink="/productos/atacama"
          ctaText="Ver producto"
          isExternal={false}
        />
      </SplideSlide>
    </Splide>
  )
}

const Slide = ({ image, title, text, ctaText, ctaLink, isExternal } : {
  image: string;
  title: ReactElement;
  text: ReactElement;
  ctaText: string;
  ctaLink: string;
  isExternal: boolean;
}) => (
  <div className="relative h-96 lg:h-[540px] flex items-center">
    <div className="bg-gradient-to-r from-gray-700 opacity-60 absolute w-full h-full z-10 mix-blend-multiply" />
    <Image
      src={image}
      alt="Isolant Paraguay"
      fill={true}
      className="w-full h-full object-cover absolute"
    />
    <div className="px-4 container mx-auto relative z-10 flex flex-col items-start gap-2">
      <h2 className="font-sans font-light text-white text-2xl md:text-3xl lg:text-4xl">{title}</h2>
      <p className="max-w-md font-sans text-white font-regular">{text}</p>
      <Button
        isExternal={isExternal}
        src={ctaLink}
        classes="bg-secondary hover:bg-primary text-white mt-2"
      >
        {ctaText}
        <svg fill="none" height="10" viewBox="0 0 13 10" width="13" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="m7.86322 9.00678c.25332.25331.67386.26276.92606-.0025l3.56502-3.56501c.2609-.24812.2609-.67022.0001-.9184l-3.56498-3.574998c-.25218-.265411-.67283-.25601-.9262-.002647-.24763.247635-.24763.665925 0 .913555l2.46318 2.46322h-8.9264c-.35807 0-.65.29193-.65.65s.29193.65.65.65h8.9264l-2.46327 2.46313-.00551.00589c-.23713.25293-.24505.6671.0056.91776z" fill="#fff" fillRule="evenodd"/></svg>
      </Button>
    </div>
  </div>
)

export default Slider;