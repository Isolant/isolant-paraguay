"use client";

import { MDXProvider } from '@mdx-js/react';
import dynamic from "next/dynamic";
import { useState } from "react";
import slugify from "react-slugify";

import styles from './Instructions.module.css';

export const Instructions = ({ product, instructions }: {
  product: string,
  instructions: Array<string>,
}) => {
  const [activeInstruction, setActiveInstruction] = useState(instructions[0]);
  const AllInstructions = dynamic(() => import(`@/content/instructions/${slugify(product)}.mdx`));
  const activeIndex = instructions.findIndex(item => item === activeInstruction);

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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8"
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
                    onClick={() => setActiveInstruction(instruction)}
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
                      onClick={() => setActiveInstruction(instruction)}
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
          <MDXProvider components={{Instruction}}>
            <AllInstructions />
          </MDXProvider>
        </article>
    </section>
  );
};

export const Instruction = ({ title }: {
  title: string
}) => {
  return (
    <p
      id={slugify(title)}
    >
      {title}
    </p>
  )
}