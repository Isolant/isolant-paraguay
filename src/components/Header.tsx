"use client";

import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

const Header = ({ active }: {
  active?: string
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return(
    <header className="sticky top-0 z-20 py-2 px-4 bg-white border-b border-gray-200">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link
          href="/"
        >
          <Image
            src="/images/logos/logo-color.svg"
            alt="Isolant Aislantes"
            width={90}
            height={32}
          />
        </Link>
        <nav
          className={isOpen ? 'flex-[100%] mt-8 mb-4 text-center order-last' : 'hidden md:block'}
        >
          <ul className="flex flex-col md:flex-row md:items-baseline gap-6">
            <li className={`font-poppins-medium uppercase tracking-wider text-xs ${active === 'home' ? 'text-gray-800' : 'text-gray-500'} hover:text-darkBlue`}>
              <Link
                href="/#top"
              >
                Inicio
              </Link>
            </li>
            <li className={`font-poppins-medium uppercase tracking-wider text-xs ${active === 'about' ? 'text-gray-800' : 'text-gray-500'} hover:text-darkBlue`}>
              <Link
                href="/#empresa"
              >
                Empresa
              </Link>
            </li>
            <li className={`font-poppins-medium uppercase tracking-wider text-xs ${active === 'products' ? 'text-gray-800' : 'text-gray-500'} hover:text-darkBlue`}>
              <Link
                href="/#productos"
              >
                Productos
              </Link>
            </li>
            <li className={`font-poppins-medium uppercase tracking-wider text-xs ${active === 'contact' ? 'text-gray-800' : 'text-gray-500'} hover:text-darkBlue`}>
              <Link
                href="#contacto"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="flex items-center gap-2 group"
          >
            <Image
              src="/images/icons/whatsapp.svg"
              alt="Logo Whatsapp"
              width={42}
              height={42}
              className="group-hover:opacity-80 transition duration-75 ease-in-out"
            />
            <div className="hidden md:block group-hover:opacity-80 transition duration-75 ease-in-out flex flex-col ">
              <p className="text-gray-500 text-xs font-poppins-regular tracking-wide leading-none">Escribinos</p>
              <span className="text-darkBlue text-xs font-poppins-medium tracking-wide">(54) 9 11 2235 2139</span>
            </div>
          </a>
          <button
            className="block md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ?
              <Image
                src="/images/icons/close.svg"
                alt="Icono de una cruz. Al clickearlo, cerrarás el menú mobile."
                width={21}
                height={21}
                className="group-hover:opacity-80 transition duration-75 ease-in-out"
              />
              :
              <Image
                src="/images/icons/hamburger.svg"
                alt="Icono menu hamburguesa. Al clickearlo, abrirás el menú mobile."
                width={21}
                height={21}
                className="group-hover:opacity-80 transition duration-75 ease-in-out"
              />
            }
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header;