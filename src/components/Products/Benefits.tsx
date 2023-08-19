import Image from "next/image";

const Benefit = ({ icon, text }: {
  icon: string,
  text: string,
}) => {
  return (
    <li className="text-center flex flex-col items-center">
      <div
        className="relative flex flex-col items-center justify-center"
      >
        <Image
          src={icon}
          alt={text}
          width={24}
          height={24}
          className="mb-2 mx-auto"
        />
        <p
          className="text-white font-poppins-regular max-w-xs mx-auto text-shadow-sm"
        >
          {text}
        </p>
      </div>
    </li>
  );
};

export default Benefit;