import { ReactNode } from "react";
import Image from "next/image";

const Details = ({ image, alt, children }: {
  image: string,
  alt: string,
  children: ReactNode
}) => {
  return (
    <section
      className="relative grid lg:grid-cols-5 bg-gray-700 lg:h-screen relative"
    >
      <div
        className="px-4 md:px-6 lg:px-8 xl:px-16 py-12 sm:py-16 md:py-24 relative flex flex-col lg:col-span-2 justify-center items-start bg-white"
      >
        <div
          className={`
            bg-white
            -right-6
            h-12 w-12 transform rotate-45 absolute z-10 hidden lg:block`
          }
        />
        <div className="flex flex-col gap-4">
          {children}
        </div>
      </div>
      <div
        className="w-full h-96 relative lg:h-screen lg:col-span-3"
      >
        <Image 
          src={image}
          alt={alt}
          fill={true}
          className="w-full h-full object-cover"
        />
      </div>
    </section>
    // <li className="text-center flex flex-col items-center">
    //   <div
    //     className="relative flex flex-col items-center justify-center"
    //   >
    //     <Image
    //       src={icon}
    //       alt={text}
    //       width={24}
    //       height={24}
    //       className="mb-2 mx-auto"
    //     />
    //     <p
    //       className="text-white font-poppins-regular max-w-xs mx-auto text-shadow-sm"
    //     >
    //       {text}
    //     </p>
    //   </div>
    // </li>
  );
};

export default Details;