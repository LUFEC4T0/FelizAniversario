import React, { useState } from "react";
import ModalClave2 from "./ModalClave2.jsx";
import Sorpresa from "./Sorpresa.jsx";

const LineaTiempo = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const events = [
        {
            date: "01/01/22",
            title: "Nuestro Primer Día",
            image: "/prueba.jpg",
            description: "El día que nos conocimos, un momento mágico.",
        },
        {
            date: "14/02/22",
            title: "Primer San Valentín",
            image: "/prueba.jpg",
            description: "Celebramos nuestro primer San Valentín juntos.",
        },
        {
            date: "03/09/23",
            title: "Aniversario",
            image: "/prueba.jpg",
            description: "Nuestro primer aniversario, un día para recordar.",
        },
        {
            date: "01/01/22",
            title: "Nuestro Primer Día",
            image: "/prueba.jpg",
            description: "El día que nos conocimos, un momento mágico.",
        },
        {
            date: "14/02/22",
            title: "Primer San Valentín",
            image: "/prueba.jpg",
            description: "Celebramos nuestro primer San Valentín juntos.",
        },
        {
            date: "03/09/23",
            title: "Aniversario",
            image: "/prueba.jpg",
            description: "Nuestro primer aniversario, un día para recordar.",
        },
        {
            date: "01/01/22",
            title: "Nuestro Primer Día",
            image: "/prueba.jpg",
            description: "El día que nos conocimos, un momento mágico.",
        },
        {
            date: "14/02/22",
            title: "Primer San Valentín",
            image: "/prueba.jpg",
            description: "Celebramos nuestro primer San Valentín juntos.",
        },
        {
            date: "03/09/23",
            title: "Aniversario",
            image: "/prueba.jpg",
            description: "Nuestro primer aniversario, un día para recordar.",
        },
        {
            date: "01/01/22",
            title: "Nuestro Primer Día",
            image: "/prueba.jpg",
            description: "El día que nos conocimos, un momento mágico.",
        },
        {
            date: "14/02/22",
            title: "Primer San Valentín",
            image: "/prueba.jpg",
            description: "Celebramos nuestro primer San Valentín juntos.",
        },
        {
            date: "03/09/23",
            title: "Aniversario",
            image: "/prueba.jpg",
            description: "Nuestro primer aniversario, un día para recordar.",
        },
    ];

    const toggleEvent = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    const [modalOpen, setModalOpen] = useState(false);
    const [claveCorrecta, setClaveCorrecta] = useState(false);

    const handleUnlock = () => {
        setClaveCorrecta(true);
        setModalOpen(false);

        setTimeout(() => {
            document
                .getElementById("sorpresa")
                .scrollIntoView({ behavior: "smooth" });
        }, 300);
    };

    return (
        <>
            <section
                id="lineaTiempo"
                className="timeline-container md:py-[10rem] pt-[6rem] flex flex-col justify-center items-center bg-[#daebe3] pb-10"
            >
                <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-2 text-center">
                    Nuestra Historia
                </h2>
                <p className="mb-10 text-lg md:text-xl text-gray-700 font-light leading-relaxed font-lora w-[80%] text-center">
                    Cada fecha representa un dia muy especial de nuestra
                    relación.
                </p>
                <div className="relative flex flex-col items-center justify-between w-full max-w-6xl">
                    <div className="absolute bg-black h-full w-1 md:w-2 left-[49%] md:left-[35.8rem] transform rounded-full "></div>

                    {events.map((event, index) => (
                        <div
                            key={index}
                            className="w-full max-w-xs md:px-4 py-6 flex md:flex-wrap flex-col items-center text-center md:relative"
                        >
                            <div
                                className="cursor-pointer flex items-center justify-center bg-gradient-to-r from-[#be9e80] to-[#d3b18d] rounded-full font-sora font-bold text-black text-center z-10 relative shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
                                onClick={() => toggleEvent(index)}
                            >
                                <span className="text-xs md:text-lg font-playfair text-white shadow-lg bg-black bg-opacity-7 px-5 py-3 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105">
                                    {event.date}
                                </span>
                            </div>

                            <div
                                className={`relative transition-all duration-700 ${
                                    activeIndex === index
                                        ? "max-h-[430px] md:max-h-[400px] mt-4 md:mb-6"
                                        : "max-h-0 mt-0 overflow-hidden"
                                }`}
                            >
                                <div className="mt-4 mb-4 bg-[#e8f5f0] p-4 rounded-xl shadow-xl">
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="w-full h-64 object-cover rounded-md mb-4"
                                    />
                                    <h4 className="text-xl font-bold mb-2 font-playfair">
                                        {event.title}
                                    </h4>
                                    <p className="text-gray-700 font-lora">
                                        {event.description}
                                    </p>
                                    <button
                                        className="mt-4 text-black underline "
                                        onClick={() => toggleEvent(index)}
                                    >
                                        Cerrar
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="relative inset-x-0 md:inset-y-[3rem] flex flex-col items-center justify-center text-center mt-10">
                    <a
                        href="#sorpresa"
                        className="relative inline-block text-lg text-white font-sora group"
                        onClick={() => setModalOpen(true)}
                    >
                        <span className="relative z-10 block px-6 py-3 bg-black bg-opacity-70 rounded-full transition-all duration-300 group-hover:bg-opacity-90">
                            Una sorpresa para ti
                        </span>
                        <span className="absolute inset-0 border-2 border-white rounded-full transform scale-95 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100 opacity-60"></span>
                    </a>
                </div>
                {modalOpen && !claveCorrecta && (
                    <ModalClave2
                        onClose={() => setModalOpen(false)}
                        onClaveCorrecta={handleUnlock}
                    />
                )}
            </section>
            {claveCorrecta &&
            <>
              <Sorpresa />
            </>
            }
        </>
    );
};

export default LineaTiempo;
