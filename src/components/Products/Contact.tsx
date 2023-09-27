import Image from 'next/image';

import Input from '@/components/Input';
import Textarea from '@/components/Textarea';
import Button from '@/components/Button';

const Contact = () => {
  return(
    <section
      className="relative mx-auto -mt-12 md:-mt-32 container px-4 pb-8 md:pb-16 lg:pb-24 xl:pb-32"
      id="contacto"
    >
      <div className="flex flex-col gap-2 text-center items-center">
        <div className="relative max-w-2xl w-full h-44 md:h-96">
          <Image
            src="/images/products/products.png"
            alt="Montaje de productos Isolant"
            fill={true}
            className="w-full h-full object-contain"
          />
        </div>
        <h5 className="font-poppins-regular text-gray-700 text-2xl md:text-3xl lg:text-4xl">
          Conocé nuestros <strong className="font-poppins-semibold block">productos premium</strong>
        </h5>
        <p className="max-w-lg font-poppins-regular text-gray-500">
          ¿Sabías que tenemos una amplia gama de productos Isolant de mejores prestaciones? <strong className="font-poppins-semibold">¡Contactate con nosotros y conocelos!</strong>
        </p>
      </div>
      <form
        className="grid md:grid-cols-3 gap-4 pt-4 md:pt-12"
        data-netlify="true"
        name="contacto"
        method="POST"
        action="/"
        netlify-honeypot="bot-field"
      >
        {/* Honeypot */}
        <input type="hidden" name="form-name" value="contacto" />
        <input name="bot-field" className="hidden" />

        <Input
          type="text"
          id="nombre"
          label="Nombre"
          labelVisible={false}
          placeholder="Nombre"
          required={true}
        />
        <Input
          type="email"
          id="email"
          label="Email"
          labelVisible={false}
          placeholder="Email"
          required={true}
        />
        <Input
          type="number"
          id="phone"
          label="Teléfono"
          labelVisible={false}
          placeholder="Teléfono"
          required={true}
        />
        <Textarea
          id="mensaje"
          label="Mensaje"
          labelVisible={false}
          placeholder="Mensaje"
          required={true}
          classes="md:col-span-full"
        />
        <Button
          classes="bg-secondary hover:bg-primary text-white mt-2 md:col-start-2 justify-self-start md:justify-self-end"
          type="submit"
        >
          Enviar consulta
          <svg fill="none" height="10" viewBox="0 0 13 10" width="13" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="m7.86322 9.00678c.25332.25331.67386.26276.92606-.0025l3.56502-3.56501c.2609-.24812.2609-.67022.0001-.9184l-3.56498-3.574998c-.25218-.265411-.67283-.25601-.9262-.002647-.24763.247635-.24763.665925 0 .913555l2.46318 2.46322h-8.9264c-.35807 0-.65.29193-.65.65s.29193.65.65.65h8.9264l-2.46327 2.46313-.00551.00589c-.23713.25293-.24505.6671.0056.91776z" fill="#fff" fillRule="evenodd"/></svg>
        </Button>
      </form>
    </section>
  )
}

export default Contact;