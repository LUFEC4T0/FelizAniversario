import React, { useState } from "react";

const Imagenes = (props) => {
    const IMG = [
        "/fotosGaleria/foto1.jpg",
        "/fotosGaleria/foto2.jpg",
        "/fotosGaleria/foto3.jpg",
        "/fotosGaleria/foto4.jpg",
        "/fotosGaleria/foto5.jpg",
        "/fotosGaleria/foto6.jpg",
        "/fotosGaleria/foto7.jpg",
        "/fotosGaleria/foto8.jpg",
        "/fotosGaleria/foto9.jpg",
        "/fotosGaleria/foto10.jpg",
        "/fotosGaleria/foto11.jpg",
        "/fotosGaleria/foto12.jpg",
        "/fotosGaleria/foto13.jpg",
        "/fotosGaleria/foto14.jpg",
        "/fotosGaleria/foto15.jpg",
        "/fotosGaleria/foto16.jpg",
        "/fotosGaleria/foto17.jpg",
        "/fotosGaleria/foto18.jpg",
        "/fotosGaleria/foto19.jpg",
        "/fotosGaleria/foto20.jpg",
        "/fotosGaleria/foto21.jpg",
        "/fotosGaleria/foto22.jpg",
        "/fotosGaleria/foto23.jpg",
        "/fotosGaleria/foto24.jpg",
        "/fotosGaleria/foto25.jpg",
        "/fotosGaleria/foto26.jpg",
        "/fotosGaleria/foto27.jpg",
        "/fotosGaleria/foto28.jpg",
        "/fotosGaleria/foto29.jpg",
        "/fotosGaleria/foto30.jpg",
        "/fotosGaleria/foto31.jpg",
        "/fotosGaleria/foto32.jpg",
        "/fotosGaleria/foto33.jpg",
        "/fotosGaleria/foto34.jpg",
        "/fotosGaleria/foto35.jpg",
        "/fotosGaleria/foto36.jpg",
        "/fotosGaleria/foto37.jpg",
        "/fotosGaleria/foto38.jpg",
        "/fotosGaleria/foto39.jpg",
        "/fotosGaleria/foto40.jpg",
        "/fotosGaleria/foto41.jpg",
        "/fotosGaleria/foto42.jpg",
        "/fotosGaleria/foto43.jpg",
        "/fotosGaleria/foto44.jpg",
        "/fotosGaleria/foto45.jpg",
        "/fotosGaleria/foto46.jpg",
        "/fotosGaleria/foto47.jpg",
        "/fotosGaleria/foto48.jpg",
        "/fotosGaleria/foto49.jpg",
        "/fotosGaleria/foto50.jpg",
        "/fotosGaleria/foto51.jpg",
        "/fotosGaleria/foto52.jpg",
        "/fotosGaleria/foto53.jpg",
        "/fotosGaleria/foto54.jpg",
        "/fotosGaleria/foto55.jpg",
        "/fotosGaleria/foto56.jpg",
        "/fotosGaleria/foto57.jpg",
        "/fotosGaleria/foto58.jpg",
        "/fotosGaleria/foto59.jpg",
        "/fotosGaleria/foto60.jpg",
        "/fotosGaleria/foto61.jpg",
        "/fotosGaleria/foto62.jpg",
        "/fotosGaleria/foto63.jpg",
        "/fotosGaleria/foto64.jpg",
        "/fotosGaleria/foto65.jpg",
        "/fotosGaleria/foto66.jpg",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? IMG.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === IMG.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const title = "Nuestras Imagenes";

    return (
        <section
            id={props.id}
            className="relative py-10 pb-[12rem] md:pb-0 md:py-0 md:h-screen flex flex-col-reverse  md:flex-row justify-center items-center text-center bg-[#daebe3]"
        >
            <div className="bg-[#e8f5f0] p-6 pb-2 rounded-3xl mb-10 mx-2 shadow-xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-10 font-playfair text-black md:w-[430px]">
                    Gracias por estas hermosas fotos!
                </h2>
                <div className="relative w-full max-w-4xl overflow-hidden mb-8">
                    <div className="relative flex flex-col items-center gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-hidden rounded-xl">
                        <img
                            alt="foto proyecto"
                            className="object-cover w-[350px] md:w-[430px] h-[450px] md:h-[530px] transition-transform duration-500 rounded-xl"
                            loading="lazy"
                            src={IMG[currentIndex]}
                        />
                        <div className="absolute  inset-0 flex justify-between items-center p-4">
                            <button
                                onClick={prevSlide}
                                className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-opacity duration-300"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    />
                                    <path d="M15 6l-6 6l6 6" />
                                </svg>
                            </button>
                            <button
                                onClick={nextSlide}
                                className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-opacity duration-300"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    />
                                    <path d="M9 6l6 6l-6 6" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-6 pb-4 md:w-[30rem] mb-4 md:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-playfair mb-10">
                    {title}
                </h2>
                <p className="text-lg md:text-xl text-gray-700 font-light leading-relaxed font-lora">
                    Como vas a ver, las fotos no eran para un video, sino para esta
                    sección. Perdón, jaja.
                    <span className="block mt-2">
                        Creo que una de las cosas más lindas que tenemos es que,
                        a pesar de todo, seguimos conservando las fotos desde el
                        día uno. Quería dejar plasmado aquí un poco de todas
                        esas hermosas fotos que tenemos.
                    </span>
                </p>
            </div>
            <div className="absolute inset-x-10 bottom-[8rem] md:bottom-16 flex flex-col items-center justify-center text-center">
                <a
                    href="#lineaTiempo"
                    class="relative inline-block text-lg text-white font-sora group"
                >
                    <span class="relative z-10 block px-6 py-3 bg-black bg-opacity-70 rounded-full transition-all duration-300 group-hover:bg-opacity-90">
                        Ver más
                    </span>
                    <span class="absolute inset-0 border-2 border-white rounded-full transform scale-95 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100 opacity-60"></span>
                </a>
            </div>
        </section>
    );
};

export default Imagenes;
