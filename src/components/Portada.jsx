import React, { useState } from "react";
import ModalClave from "./ModalClave";
import LineaTiempo from "./LineaTiempo";
import MensajePrincipal from "./MensajePrincipal.jsx";
import Imagenes from "./Imagenes.jsx";

const Portada = ({ title, subtitle }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [claveCorrecta, setClaveCorrecta] = useState(false);

    const handleUnlock = () => {
        setClaveCorrecta(true);
        setModalOpen(false);

        setTimeout(() => {
          document.getElementById('mensaje-principal').scrollIntoView({ behavior: 'smooth' });
      }, 300);
    };

    return (
        <>
            <section
                className="relative h-screen bg-cover bg-center"
                style={{ backgroundImage: `url('fotoPortada.jpg')` }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-bold font-playfair w-[80%]">
                        {title}
                    </h1>
                    <p className="mt-4 text-lg md:text-2xl font-light font-lora mb-10">
                        {subtitle}
                    </p>
                    <div class="absolute inset-x-10 bottom-20 flex flex-col items-center justify-center text-center">
                        <a
                            href="#mensaje-principal"
                            class="relative mt-8 inline-block text-lg text-white font-sora font-semibold group"
                            onClick={() => setModalOpen(true)}
                        >
                            <span class="relative z-10 block px-6 py-3 bg-black bg-opacity-70 rounded-full transition-all duration-300 group-hover:bg-opacity-90">
                                Empezar
                            </span>
                        </a>
                    </div>
                </div>
                {modalOpen && !claveCorrecta && (
                    <ModalClave
                        onClose={() => setModalOpen(false)}
                        onClaveCorrecta={handleUnlock}
                    />
                )}
            </section>
            {claveCorrecta && (
                <>
                    <MensajePrincipal />
                    <Imagenes id="imagenesDestacadas" />
                    <LineaTiempo />
                </>
            )}
        </>
    );
};

export default Portada;
