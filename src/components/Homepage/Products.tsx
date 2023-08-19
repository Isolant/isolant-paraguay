"use client";
import { useState } from 'react';

import ProductCard from '@/components/ProductCard';

const Products = () => {
  const [limit, setLimit] = useState(6);

  const products = [
    {
      thumbnail: "/images/homepage/products/thumbnails/atacama.jpg",
      product: "/images/homepage/products/atacama.png",
      cta: "/productos/atacama",
      title:"Atacama",
      description: "El único aislante líquido de fácil aplicación para cualquier tipo de techo o muro que baja de 6° a 8° la temperatura de tu casa."
    },
    {
      thumbnail: "/images/homepage/products/thumbnails/cedro-net.jpg",
      product: "/images/homepage/products/cedro-net.png",
      cta: "/productos/cedro-net",
      title: "Cedro NET",
      description: "Isolant CEDRO NET es el único aislante del mercado con terminación símil madera que permite decorar tus ambientes, además de aislarlos térmicamente."
    },
    {
      thumbnail: "/images/homepage/products/thumbnails/doble-alu-net.jpg",
      product: "/images/homepage/products/doble-alu-net.png",
      cta: "/productos/doble-alu-net",
      title: "Doble Alu NET",
      description: "Aislante con red incorporada para galpones y tinglados. ¡Ahorra hasta un 40% de la mano de obra!"
    },
    {
      thumbnail: "/images/homepage/products/thumbnails/alu-stark-net.jpg",
      product: "/images/homepage/products/alu-stark-net.png",
      cta: "/productos/alu-stark-net",
      title: "Alu Stark NET",
      description: "Aislante con terminación blanca con red incorporada. ¡Ahorra hasta un 40% de la mano de obra!"
    },
    {
      thumbnail: "/images/homepage/products/thumbnails/doble-alu.jpg",
      product: "/images/homepage/products/doble-alu.png",
      cta: "/productos/doble-alu",
      title: "Doble Alu",
      description: "Aislante térmico e impermeable para galpones y tinglados. ¡Solape para termo soldar patentado!"
    },
    {
      thumbnail: "/images/homepage/products/thumbnails/alu-stark.jpg",
      product: "/images/homepage/products/alu-stark.png",
      cta: "/productos/alu-stark",
      title: "Alu Stark",
      description: "Aislante con terminación blanca y alta resistencia."
    },
    {
      thumbnail: "/images/homepage/products/thumbnails/rufi-aluminizada.jpg",
      product: "/images/homepage/products/rufi-aluminizada.png",
      cta: "/productos/rufi-aluminizada",
      title: "Rufi Aluminizada",
      description: "Aislante térmico económico, que responde a un mercado de necesidades competitivas, sin dejar de ser una espuma de calidad Isolant."
    },
    {
      thumbnail: "/images/homepage/products/thumbnails/rufi-doble-aluminizada.jpg",
      product: "/images/homepage/products/rufi-doble-aluminizada.png",
      cta: "/productos/rufi-doble-aluminizada",
      title: "Rufi Doble Aluminizada",
      description: "Aislante térmico económico, que responde a un mercado de necesidades competitivas, sin dejar de ser una espuma de calidad Isolant."
    },
    {
      thumbnail: "/images/homepage/products/thumbnails/rufi-aluminio.jpg",
      product: "/images/homepage/products/rufi-aluminio.png",
      cta: "/productos/rufi-aluminio",
      title: "Rufi Aluminio",
      description: "Aislante térmico económico, que responde a un mercado de necesidades competitivas, sin dejar de ser una espuma de calidad Isolant."
    }
  ];

  return(
    <section className="relative bg-gray-50">
      <div className="relative mx-auto container px-4 pt-8 md:pt-16 lg:pt-24 xl:pt-32">
        <div className="flex flex-col gap-2 text-center items-center">
          <h3 className="font-poppins-semibold text-gray-800 text-2xl md:text-3xl lg:text-4xl">Nuestros productos</h3>
          <p className="max-w-lg font-poppins-regular text-gray-600">
            Isolant, la empresa de aislantes de espuma de polipropeno más grande de Argentina, llegó a Paraguay.
          </p>
        </div>
        <ul className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 lg:gap-8 xl:gap-12 pt-8 md:pt-12 lg:pt-16">
          {products.slice(0, limit).map((product, index) =>
            <li key={index}>
              <ProductCard
                thumbnail={product.thumbnail}
                product={product.product}
                cta={product.cta}
                title={product.title}
                description={product.description}
              />
            </li>
          )}
        </ul>
      </div>
      <button
        className="w-full absolute -bottom-8 bg-gradient-to-t from-gray-50 h-24 z-10 flex flex-col items-center justify-center gap-1 group"
        onClick={() => setLimit(limit === 6 ? -1 : 6)}
      >
        <span className="text-darkBlue font-poppins-medium uppercase tracking-wider text-xs group-hover:opacity-80 transition ease-in-out duration-100">
          Ver
          {limit === 6 ? ' más ' : ' menos '}
          productos
        </span>
        <svg className={`group-hover:opacity-80 relative transform ${limit === -1 ? 'order-first rotate-180' : 'top-1 animate-bounce'}`} fill="none" height="8" viewBox="0 0 14 8" width="14" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="m.292893.292893c.390524-.3905241 1.023687-.3905241 1.414217 0l5.29289 5.292897 5.2929-5.292897c.3905-.3905241 1.0237-.3905241 1.4142 0 .3905.390524.3905 1.023687 0 1.414217l-5.99999 6c-.39053.39052-1.02369.39052-1.41422 0l-5.999997-6c-.3905241-.39053-.3905241-1.023693 0-1.414217z" fill="#263a48" fillRule="evenodd"/></svg>
      </button>
    </section>
  )
}

export default Products;