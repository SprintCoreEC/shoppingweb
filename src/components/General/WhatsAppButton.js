import React from "react";

export default function WhatsAppButton() {
  const phoneNumber = "+593980895756";
  const message = encodeURIComponent(
    "Hola, deseo más información sobre Orvil."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-5 right-5 flex items-center gap-3 z-50">
      {/* Texto (oculto en móviles) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden sm:flex bg-[#F2F2F2] text-[#545454] px-5 py-3 rounded-tl-full rounded-bl-full rounded-tr-none rounded-br-full shadow-md text-sm font-medium hover:bg-[#e6e6e6] transition-all"
      >
        ¡Contáctanos por WhatsApp!
      </a>

      {/* Icono circular (siempre visible) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#545454] p-4 rounded-full shadow-md hover:bg-[#25d366] transition-all duration-300 flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="white"
          viewBox="0 0 24 24"
        >
          <path d="M20.52 3.48A12.07 12.07 0 0 0 12 .01C5.75.01.86 4.89.86 11.15c0 2 .52 3.95 1.52 5.68L.04 24l7.49-2.34a12.13 12.13 0 0 0 4.5.86c6.25 0 11.14-4.89 11.14-11.15 0-3-.92-5.8-2.65-8.04Zm-8.4 17.61c-1.47 0-2.93-.38-4.22-1.09l-.3-.17-4.45 1.39 1.44-4.32-.19-.32A9.32 9.32 0 0 1 2.7 11.15c0-5.16 4.2-9.37 9.37-9.37 2.5 0 4.85.98 6.61 2.75a9.31 9.31 0 0 1 2.75 6.62c0 5.16-4.2 9.37-9.37 9.37Zm5.15-6.96c-.28-.14-1.65-.81-1.9-.9-.25-.1-.44-.14-.62.14-.19.28-.71.9-.87 1.09-.16.18-.32.21-.6.07-.28-.14-1.18-.43-2.26-1.36-.83-.74-1.39-1.66-1.55-1.94-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.47.14-.16.19-.28.28-.46.09-.18.05-.35-.02-.5-.07-.14-.62-1.5-.85-2.06-.22-.53-.44-.46-.62-.47h-.54c-.18 0-.47.07-.71.35-.25.28-.94.92-.94 2.24s.96 2.59 1.09 2.77c.14.18 1.89 2.89 4.6 4.05.64.28 1.14.45 1.53.58.64.2 1.22.17 1.68.1.51-.08 1.65-.67 1.89-1.32.23-.64.23-1.18.16-1.32-.07-.14-.25-.21-.53-.35Z" />
        </svg>
      </a>
    </div>
  );
}
