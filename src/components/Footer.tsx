import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return(
    <footer className="bg-darkBlue p-4">
      <div className="container mx-auto flex flex-col md:flex-row gap-4 items-center justify-between">
        <Link
          href="/"
        >
          <Image
            src="/images/logos/logo-white.svg"
            alt="Isolant Aislantes"
            width={90}
            height={32}
          />
        </Link>
        <div className="text-center text-white text-xs flex flex-col gap-1 items-center">
          <p>
            Villeta, camino a Nueva Italia 9865, Paraguay
          </p>
          <p>
            <a
              href="mailto:info@isolant.com.py"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-100 ease-in-out hover:opacity-80"
            >
              info@isolant.com.py
            </a>
          </p>
          <p>
            Copyright &copy; {new Date().getFullYear()} Isolant Aislantes.
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xs text-white">Seguinos en las redes:</span>
          <ul className="flex justify-center gap-3 mt-1">
            <li>
              <a
                href="https://www.facebook.com/Isolant.Aislantes/?fref=ts"
                target="_blank"
                rel="noopener noreferrer"
                className="transition ease-in-out duration-100 hover:opacity-80"
              >
                <Image
                  src="/images/icons/social/facebook.svg"
                  alt="Facebook de Isolant Aislantes"
                  width={24}
                  height={24}
                />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/isolant_sa"
                target="_blank"
                rel="noopener noreferrer"
                className="transition ease-in-out duration-100 hover:opacity-80"
              >
                <Image
                  src="/images/icons/social/twitter.svg"
                  alt="Twitter de Isolant Aislantes"
                  width={24}
                  height={24}
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/isolant.aislantes/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition ease-in-out duration-100 hover:opacity-80"
              >
                <Image
                  src="/images/icons/social/instagram.svg"
                  alt="Instagram de Isolant Aislantes"
                  width={24}
                  height={24}
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCrYVrCoJOaHIxyim1-SHvtw"
                target="_blank"
                rel="noopener noreferrer"
                className="transition ease-in-out duration-100 hover:opacity-80"
              >
                <Image
                  src="/images/icons/social/youtube.svg"
                  alt="Youtube de Isolant Aislantes"
                  width={24}
                  height={24}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;