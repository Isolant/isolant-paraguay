import Image from "next/image";

const DownloadCard = ({ icon, format, title, file }: {
  icon: string;
  format: string;
  title: string;
  file: string;
}) => {
  return(
    <li className="relative block">
      <div className="rounded-full bg-white shadow-lg w-24 h-24 flex items-center justify-center mx-auto">
        <Image
          src={icon}
          alt={title}
          width={24}
          height={24}
        />
      </div>
      <h6
        className="uppercase text-xs tracking-widest mx-auto mt-4 mb-2 sm:mt-6 text-center text-white font-poppins-semibold"
      >
        {title}
      </h6>
      <p
        className="leading-normal text-sm sm:text-md font-light tracking-wide text-white text-gray-400 text-center"
      >
        {format}
      </p>
      <ul className="flex justify-center items-center my-2">
        <li>
          <a
            href={file}
            target="_blank"
            rel="noopener noreferrer"
            className="uppercase text-xs tracking-widest text-primary font-bold hover:opacity-80 flex items-center"
            >
              <svg className="mr-1" fill="none" height="9" viewBox="0 0 14 9" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m13.6562 4.17188c-1.2656-2.48438-3.79682-4.17188-6.6562-4.17188-2.88281 0-5.41406 1.6875-6.679688 4.17188-.046874.09374-.070312.21093-.070312.32812 0 .14062.023438.25781.070312.35156 1.265628 2.48438 3.796878 4.14844 6.679688 4.14844 2.85938 0 5.3906-1.66406 6.6562-4.14844.0469-.09375.0704-.21094.0704-.32812 0-.14063-.0235-.25782-.0704-.35156zm-6.6562 3.70312c-1.875 0-3.375-1.5-3.375-3.375 0-1.85156 1.5-3.375 3.375-3.375 1.85156 0 3.375 1.52344 3.375 3.375v.02344c0 1.85156-1.52344 3.375-3.375 3.375zm0-5.625c-.21094.02344-.42188.04688-.60938.09375.14063.1875.21094.42187.21094.67969 0 .60937-.49218 1.10156-1.10156 1.10156-.25781 0-.49219-.07031-.67969-.21094-.04687.1875-.07031.39844-.07031.58594 0 1.24219 1.00781 2.25 2.25 2.25s2.25-1.00781 2.25-2.25-1.00781-2.22656-2.25-2.22656z" fill="#14bef0"/></svg>
              Ver
            </a>
        </li>
      </ul>
    </li>
  )
}

export default DownloadCard;