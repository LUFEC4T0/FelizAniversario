import React from 'react'
import { useState } from 'react';

const Sorpresa = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <section id="sorpresa" className="flex flex-col items-center justify-center h-screen bg-[#daebe3]">
      <div className={`relative w-[20rem] h-56 md:w-96 md:h-60 ${isOpen ? 'bg-transparent' : 'bg-[#be9e80]'} rounded-lg shadow-lg transition-all duration-500 ease-in-out transform ${isOpen ? 'rotate-0 scale-100' : '-rotate-6 scale-95'}`}>
        {!isOpen && (
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={handleOpen}
              className="bg-white text-[#be9e80] font-bold py-3 px-5 rounded-full shadow-md hover:bg-[#e6d1ba] transition-all duration-300"
            >
              Abrir
            </button>
          </div>
        )}
        {isOpen && (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-inner">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-[#be9e80] w-full h-40 transform rotate-45 origin-center"></div>
                <div className="bg-[#be9e80] w-full h-40 transform -rotate-45 origin-center"></div>
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-white rounded-lg">
                <h3 className="text-2xl md:text-3xl font-playfair text-black mb-2 font-bold">Cena Romantica</h3>
                <p className="text-[0.8rem] md:text-[1rem] text-gray-600 font-lora">
                  Fecha: 13 de septiembre
                  <span className="block">
                    Hora: 08:00 PM
                  </span>
                  <span className="block">
                    Lugar: Sorpresa
                  </span>
                  <span className="block mb-3">
                    Requisito: Estar depilada jeje
                  </span>
                </p>
                <button
              onClick={handleClose}
              className="text-white bg-[#be9e80] font-bold py-2 px-4 rounded-full shadow-md hover:bg-[#d3b18d] transition-all duration-300"
            >
              Cerrar
            </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Sorpresa