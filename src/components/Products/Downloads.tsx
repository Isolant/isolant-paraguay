import { ReactNode } from 'react';

const Downloads = ({ children }: {
  children: ReactNode
}) => {
  return (
    <section
      className="py-12 sm:py-16 md:py-24 bg-no-repeat bg-cover relative"
      style={{ backgroundImage: `url(/images/bg/lines.jpg)`}}
    >
      <div className="px-4 md:px-6 lg:px-8 xl:px-16 mx-auto container text-center text-white mb-4 sm:mb-8">
        <h5 className="text-2xl sm:text-4xl font-poppins-light">
          Área de{" "}
          <strong className="font-poppins-semibold">Descargas</strong>
        </h5>
        <ul
          className="px-4 md:px-6 lg:px-8 xl:px-16 pt-4 md:pt-8 lg:pt-12 mx-auto container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 sm:gap-y-12"
        >
          {children}
        </ul>
      </div>
    </section>
  );
};

export default Downloads;