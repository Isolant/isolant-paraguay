"use client";

import React, { useEffect } from 'react';

const ContactForm = () => {
  useEffect(() => {
    const formScript = document.createElement('script')
    formScript.setAttribute('data-b24-form', 'inline/4/z6c8i0')
    formScript.setAttribute('data-skip-moving', 'true')
    formScript.innerHTML = `(function(w,d,u){
      var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);
      var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
      })(window,document,'https://cdn.bitrix24.es/b30947821/crm/form/loader_1.js')`;
    
    const position = document.querySelector('.bitrix-form-container');
    position?.appendChild(formScript);
  }, [])

  return(
    <section className="relative mx-auto container px-4 pt-8 md:pt-16 lg:pt-24 xl:pt-32" id="contacto">
      <div className="bitrix-form-container" />
    </section>
  )
}

export default ContactForm;
