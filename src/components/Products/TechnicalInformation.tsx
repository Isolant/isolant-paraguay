import { ReactNode } from "react";
import Image from "next/image";

export const TechnicalInformation = ({ product, productImage, children }: {
  productImage: string,
  product: string,
  children: ReactNode
}) => {
  return (
    <section
      className="px-4 md:px-6 lg:px-8 xl:px-16 py-12 sm:py-16 md:py-24 relative"
    >
      <ul className="mx-auto container grid lg:grid-cols-6 gap-8">
        <li className="max-w-xs lg:col-span-2 relative self-start">
          <div
            className="relative max-w-sm lg:col-span-2"
          >
            <div className="mx-auto py-8 max-w-[120px] h-60 relative">
              <Image
                src={productImage}
                alt={product}
                fill={true}
                className="w-full h-full object-contain z-10"
              />
            </div>
            <svg className="text-gray-500 fill-current absolute top-0 left-0 transform rotate-180 z-10" fill="none" height="90" viewBox="0 0 90 90" width="90" xmlns="http://www.w3.org/2000/svg"><g fill-opacity=".3"><path d="m90 0h4.28571v4.28571h-4.28571z" transform="matrix(0 1 -1 0 90 -90)"/><path d="m90 17.1429h4.28571v4.28571h-4.28571z" transform="matrix(0 1 -1 0 107.1429 -72.8571)"/><path d="m72.8574 17.1429h4.28571v4.28571h-4.28571z" transform="matrix(0 1 -1 0 90.0003 -55.7145)"/><path d="m90 34.2857h4.28571v4.28571h-4.28571z" transform="matrix(0 1 -1 0 124.2857 -55.7143)"/><path d="m72.8574 34.2857h4.28571v4.28571h-4.28571z" transform="matrix(0 1 -1 0 107.1431 -38.5717)"/><path d="m55.7139 34.2857h4.28571v4.28571h-4.28571z" transform="matrix(0 1 -1 0 89.9996 -21.4282)"/><path d="m90 51.4286h4.28571v4.28571h-4.28571z" transform="matrix(0 1 -1 0 141.4286 -38.5714)"/><path d="m72.8574 51.4286h4.28571v4.28571h-4.28571z" transform="matrix(0 1 -1 0 124.286 -21.4288)"/><path d="m55.7139 51.4286h4.28571v4.28571h-4.28571z" transform="matrix(0 1 -1 0 107.1425 -4.2853)"/><path d="m38.5713 51.4286h4.28571v4.28571h-4.28571z" transform="matrix(0 1 -1 0 89.9999 12.8573)"/><path d="m90 68.5714h4.28571v4.28571h-4.28571z" transform="matrix(0 1 -1 0 158.5714 -21.4286)"/><path d="m72.8574 68.5714h4.28571v4.28571h-4.28571z" transform="matrix(0 1 -1 0 141.4288 -4.286)"/><path d="m55.7139 68.5714h4.28571v4.28571h-4.28571z" transform="matrix(0 1 -1 0 124.2853 12.8575)"/><path d="m38.5713 68.5714h4.28571v4.28571h-4.28571z" transform="matrix(0 1 -1 0 107.1427 30.0001)"/><path d="m21.4287 68.5714h4.28571v4.28571h-4.28571z" transform="matrix(0 1 -1 0 90.0001 47.1427)"/><path d="m90 85.7143h4.28571v4.28571h-4.28571z" transform="matrix(0 1 -1 0 175.7143 -4.2857)"/><path d="m72.8574 85.7143h4.28571v4.28571h-4.28571z" transform="matrix(0 1 -1 0 158.5717 12.8569)"/><path d="m55.7139 85.7143h4.28571v4.28571h-4.28571z" transform="matrix(0 1 -1 0 141.4282 30.0004)"/><path d="m38.5713 85.7143h4.28571v4.28571h-4.28571z" transform="matrix(0 1 -1 0 124.2856 47.143)"/><path d="m21.4287 85.7143h4.28571v4.28571h-4.28571z" transform="matrix(0 1 -1 0 107.143 64.2856)"/><path d="m4.28613 85.7143h4.28571v4.28571h-4.28571z" transform="matrix(0 1 -1 0 90.00043 81.42817)"/></g></svg>
            <svg className="text-gray-500 fill-current absolute top-0 right-0 transform -rotate-90 z-10" fill="none" height="45" viewBox="0 0 90 45" width="90" xmlns="http://www.w3.org/2000/svg"><path d="m45.0001 45c24.8528 0 45-20.1472 45-45h-90.00003896c0 24.8528 20.14713896 45 45.00003896 45z" /></svg>
            <svg className="text-blue-100 fill-current absolute bottom-0 xl:inset-x-8" fill="none" height="155" viewBox="0 0 310 155" width="310" xmlns="http://www.w3.org/2000/svg"><path d="m155 155c85.604 0 155-69.3959 155-155h-310c0 85.6041 69.3959 155 155 155z" /></svg>
          </div>
        </li>
        <li className="lg:col-span-4">
          <h5
            className="text-xl md:text-2xl font-poppins-light text-gray-700 sm:leading-tight mb-4"
          >
            Especificaciones
            <strong className="font-poppins-semibold block">de {product}</strong>
          </h5>
          <ol className="grid lg:grid-cols-2 gap-4 lg:gap-8">
            {children}
          </ol>
        </li>
      </ul>
    </section>
  );
};

export const TechnicalInformationItem = ({ title, text }: {
  title: string;
  text: string;
}) => {
  return (
    <li className="flex flex-col gap-1">
      <h5
        className="font-poppins-medium uppercase tracking-wider text-xs text-gray-500"
      >
        {title}
      </h5>
      <p
        className="text-gray-700 leading-normal text-sm sm:text-base font-poppins-light tracking-wide"
      >
        {text}
      </p>
    </li>
  )
}