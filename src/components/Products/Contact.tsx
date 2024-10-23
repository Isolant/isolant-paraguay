import React, { useEffect } from 'react';
import Image from 'next/image';

const Contact = () => {
  useEffect(() => {
    const formScript = document.createElement('script')
    formScript.setAttribute('data-b24-form', 'inline/1/lxfkfi')
    formScript.setAttribute('data-skip-moving', 'true')
    formScript.innerHTML = `(function(w,d,u){
      var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);
      var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
      })(window,document,'https://cdn.bitrix24.es/b30947821/crm/form/loader_1.js')`;
    
    const position = document.querySelector('.bitrix-form-container');
    position?.appendChild(formScript);
  }, [])

  return(
    <section
      className="relative mx-auto -mt-12 md:-mt-32 container px-4"
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
      </div>
      <div className="bitrix-form-container" />
    </section>
  )
}

export default Contact;
