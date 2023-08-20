import { ReactNode } from "react";
import Image from "next/image";

import Button from "../Button";

const Hero = ({ image, title, product, children }: {
  image: string;
  product: string;
  title: ReactNode;
  children: ReactNode;
}) => {
  return(
    <section 
      className="bg-gray-800 relative flex items-center flex-col h-screen"
    >
      <Image
        src={image}
        alt={product}
        fill={true}
        className="opacity-60 w-full h-full object-cover object-top"
      />
      <div className="max-w-xl absolute w-full h-full flex flex-col justify-center items-center text-center gap-4">
        <h1
          className="text-2xl sm:text-4xl font-poppins-light text-white mx-auto sm:leading-tight text-shadow-md"
        >
          {title}
        </h1>
        <Button
          isExternal={false}
          src="/#contacto"
          classes="text-white border border-white font-poppins-regular hover:bg-secondary hover:border-secondary flex items-center gap-2"
        >
          Comprar ahora
          <svg fill="none" height="9" viewBox="0 0 12 9" width="12" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="m7.11322 8.5318c.25332.25332.67386.26276.92606-.0025l3.56502-3.56501c.2609-.24812.2609-.67022.0001-.9184l-3.56498-3.574994c-.25218-.26541-.67283-.25601-.9262-.002647-.24763.247631-.24763.665921 0 .913551l2.46323 2.46323h-8.92645c-.358071 0-.65.29192-.65.65 0 .35807.291929.65.65.65h8.92645l-2.46332 2.46313-.00551.00588c-.23713.25294-.24505.6671.0056.91776z" fill="#fff" fillRule="evenodd"/></svg>
        </Button>
      </div>
      <ul className="px-4 absolute bottom-0 py-8 md:py-16 lg:pb-24 lg:pt-0 grid grid-cols-1 md:grid-cols-3 items-baseline w-full gap-4 lg:gap-8">
        {children}
      </ul>
    </section>
  )
}

export default Hero;