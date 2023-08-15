import Image from "next/image";

import Button from '@/components/Button';

const About = () => {
  return(
    <section className="grid md:grid-cols-2">
      <div className="flex flex-col gap-2 items-start justify-center p-4 md:p-8 lg:p-16 xl:p-24 order-last md:order-none">
        <h3 className="font-sans font-semibold text-gray-800 text-2xl md:text-3xl lg:text-4xl">Nuestra empresa</h3>
        <p className="max-w-md font-sans text-gray-600 font-regular">
          Isolant, la empresa de aislantes de espuma de polipropeno más grande de Argentina, llegó a Paraguay.
        </p>
        <Button
          isExternal={false}
          src="/#productos"
          classes="bg-secondary hover:bg-primary text-white mt-2"
        >
          Conoc&eacute; m&aacute;s
          <svg fill="none" height="10" viewBox="0 0 13 10" width="13" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="m7.86322 9.00678c.25332.25331.67386.26276.92606-.0025l3.56502-3.56501c.2609-.24812.2609-.67022.0001-.9184l-3.56498-3.574998c-.25218-.265411-.67283-.25601-.9262-.002647-.24763.247635-.24763.665925 0 .913555l2.46318 2.46322h-8.9264c-.35807 0-.65.29193-.65.65s.29193.65.65.65h8.9264l-2.46327 2.46313-.00551.00589c-.23713.25293-.24505.6671.0056.91776z" fill="#fff" fillRule="evenodd"/></svg>
        </Button>
      </div>
      <div className="relative h-60 md:h-96">
        <Image
          fill={true}
          src="/images/homepage/about.jpg"
          alt="Imagen de la fábrica de Isolant en Paraguay"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  )
}

export default About;