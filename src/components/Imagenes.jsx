import React, { useState } from "react";

const Imagenes = (props) => {
    const IMG = ["/fotoPortada.jpg", "/prueba.jpg"];

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
    const message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula dui non diam vulputate at cursus nunc fermentum. Duis tincidunt felis nec eros ultrices, quis ullamcorper elit viverra. Sed lacinia mi nec nunc cursus, ac vestibulum velit viverra. Nulla facilisi. Curabitur laoreet felis sed est sodales, in facilisis magna tincidunt. Aenean pharetra erat nec mi consectetur,  a tempor elit scelerisque. Curabitur viverra, mauris eu dictum tristique, urna turpis tempus metus, at congue orci lacus a lorem. Nam in orci ultricies, bibendum ligula a, facilisis justo.";

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
                            className="object-cover w-[350px] md:w-[430px] h-[350px] md:h-[430px] transition-transform duration-500 rounded-xl"
                            loading="lazy"
                            src={IMG[currentIndex]}
                        />
                        <div className="absolute md:inset-2 inset-1 flex justify-between items-center p-4">
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
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-playfair mb-8">
                    {title}
                </h2>
                <p className="text-lg md:text-xl text-gray-700 font-light leading-relaxed font-lora">
                    {message}
                </p>
            </div>
            <div className="absolute inset-x-10 bottom-[8rem] md:bottom-16 flex flex-col items-center justify-center text-center">
                <a
                    href='#lineaTiempo'
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
