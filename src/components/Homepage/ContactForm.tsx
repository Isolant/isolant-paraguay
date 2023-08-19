import Input from '@/components/Input';
import Textarea from '@/components/Textarea';
import Button from '@/components/Button';

const ContactForm = () => {
  return(
    <section className="relative mx-auto container px-4 py-8 md:py-16 lg:py-24 xl:py-32" id="contacto">
      <div className="flex flex-col gap-2 text-center items-center">
        <h5 className="font-poppins-semibold text-gray-800 text-2xl md:text-3xl lg:text-4xl">Contactanos</h5>
        <p className="max-w-lg font-poppins-regular text-gray-600">
          Si tenes alguna consulta acerca de nuestros productos, contactate con nosotros debajo.
        </p>
      </div>
      <form className="grid md:grid-cols-2 gap-4 pt-4 md:pt-12">
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

export default ContactForm;