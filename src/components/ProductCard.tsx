import Link from "next/link";
import Image from "next/image";

const ProductCard = ({ thumbnail, product, title, description, cta }: {
  thumbnail: string;
  product: string;
  title: string;
  description: string;
  cta: string;
}) => {
  return(
    <div className="relative">
      <div className="relative w-full h-60">
        <Image
          src={thumbnail}
          alt={title}
          fill={true}
          className="rounded-lg w-full h-full object-cover"
        />
        <div className="w-20 h-28 absolute right-0 md:-right-6 -bottom-4">
          <Image
            src={product}
            alt={title}
            fill={true}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <div className="relative mt-4 md:mt-6 flex flex-col gap-3">
        <h4 className="font-poppins-semibold text-gray-800 text-xl md:text-2xl">{title}</h4>
        <p className="font-poppins-regular text-gray-600">
          {description}
        </p>
        <Link
          href={cta}
          className="text-secondary font-poppins-medium uppercase tracking-wider text-xs hover:opacity-80 transition ease-in-out duration-100 flex items-center gap-1"
        >
          Ver ficha de producto
          <svg className="fill-current text-secondary" fill="none" height="10" viewBox="0 0 13 10" width="13" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="m7.86322 9.00678c.25332.25331.67386.26276.92606-.0025l3.56502-3.56501c.2609-.24812.2609-.67022.0001-.9184l-3.56498-3.574998c-.25218-.265411-.67283-.25601-.9262-.002647-.24763.247635-.24763.665925 0 .913555l2.46318 2.46322h-8.9264c-.35807 0-.65.29193-.65.65s.29193.65.65.65h8.9264l-2.46327 2.46313-.00551.00589c-.23713.25293-.24505.6671.0056.91776z" fillRule="evenodd"/></svg>
        </Link>
      </div>
    </div>
  )
}

export default ProductCard;