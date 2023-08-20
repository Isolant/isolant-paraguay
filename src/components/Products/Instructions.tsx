"use client";

import { ReactNode, useState, useEffect } from "react";
import { MDXProvider } from '@mdx-js/react';
import Image from "next/image";
import dynamic from "next/dynamic";
const { Splide, SplideSlide } = require('@splidejs/react-splide');
import '@splidejs/react-splide/css';
import slugify from "react-slugify";

import styles from './Instructions.module.css';

export const Instructions = ({ product, instructions }: {
  product: string,
  instructions: Array<string>,
}) => {
  const [activeInstruction, setActiveInstruction] = useState(instructions[0]);
  const AllInstructions = dynamic(() => import(`@/content/instructions/${slugify(product)}.mdx`));
  const activeIndex = instructions.findIndex(item => item === activeInstruction);

  const setInstructionsAndSave = (instruction: string) => {
    setActiveInstruction(instruction);
    
    typeof window !== "undefined" ? localStorage.setItem('instruction', instruction) : false;
  }

  useEffect(() => {
    setInstructionsAndSave(instructions[0]);
  }, []);

  return (
    <section
      className="px-4 md:px-6 lg:px-8 xl:px-16 py-12 sm:py-16 md:py-24 bg-no-repeat bg-cover"
      style={{ backgroundImage: `url('/images/bg/lines.jpg')`}}
    >
      <div className="mx-auto container">
        <div className="flex md:items-end justify-between flex-col md:flex-row">
          <h5
            className="text-white mb-2 md:mb-0 text-xl md:text-2xl font-poppins-light sm:leading-tight"
          >
            Instrucciones de colocaci&oacute;n
            <strong className="block font-poppins-semibold">de {product}</strong>
          </h5>
        </div>
      </div>
      {instructions.length > 1 &&
        <ul
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 pt-8"
        >
          {instructions.map((instruction: string, index: number) => {
            return (
                <li
                  key={index}
                  className={`
                    ${instruction === activeInstruction ?
                      'border-white bg-white'
                      :
                      'border-gray-600'
                    }
                    p-4 group border hover:border-white transition duration-75 ease-in-out
                  `}
                >
                  <div
                    className={`
                      leading-normal text-sm sm:text-base font-light tracking-wide
                      ${instruction === activeInstruction ?
                        'text-gray-700'
                        :
                        'text-gray-300'
                      }
                      text-left cursor-pointer
                      grid justify-start h-full
                    `}
                    onClick={() => setInstructionsAndSave(instruction)}
                  >
                    <span>{instruction}</span>
                    <button
                      className={`
                        font-poppins-medium uppercase tracking-wider text-xs text-gray-500
                        block
                        ${instruction === activeInstruction ?
                          'text-gray-700'
                          :
                          'text-gray-300'
                        }
                        mt-4 text-left self-end
                      `}
                      onClick={() => setInstructionsAndSave(instruction)}
                    >
                      Ver colocaci&oacute;n
                    </button>
                  </div>
                </li>
              )
            })}
          </ul>
        }
        <article
          className={`
            ${styles.InstructionsWrapper}
            active-${activeIndex + 1}
          `}
        >
          <MDXProvider components={{Instruction, Step}}>
            <AllInstructions />
          </MDXProvider>
        </article>
    </section>
  );
};

export const Instruction = ({ title, children }: {
  title: string;
  children: Array<ReactNode>
}) => {
  return (
    <div
      className="bg-gray-500 rounded my-8"
      id={slugify(title)}
    >
      <Splide
        options={{
          arrows: true,
          dots: false,
          rewind: true,
          pagination: false,
          autoplay: false,
          classes: {
            prev: `splide__arrow--prev ${styles.PrevArrow}`,
            next: `splide__arrow--next ${styles.NextArrow}`,
          }
        }}
      >
        {children}
      </Splide>
    </div>
  )
}

export const Step = ({ image, text }: {
  image: string;
  text: string;
}) => {
  const [title, setTitle] = useState('');

  useEffect(() => {
    const title = typeof window !== "undefined" ? localStorage.getItem('instruction') : '';
    setTitle(title ? title : '');
  }, [])
  return (
    <SplideSlide>
      <div
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-4 md:p-8"
      >
        <div className="relative w-full h-48 md:h-96">
          <Image
            src={image}
            alt={text}
            className="w-full h-full object-cover rounded-md"
            fill={true}
          />
        </div>
        <div
          className="pr-4"
        >
          <h5
            className="text-gray-400 font-poppins-medium uppercase tracking-wider text-xs"
          >
            Paso {image.slice(-5).replace('.jpg', '')}
          </h5>
          <h6
            className="text-lg sm:text-xl font-poppins-semibold text-white my-2"
          >
            {title}
          </h6>
          <p
            className="text-gray-300 leading-normal text-sm sm:text-base font-light tracking-wide font-poppins-regular"
          >
            {text}
          </p>
        </div>
      </div>
    </SplideSlide>
  )
}