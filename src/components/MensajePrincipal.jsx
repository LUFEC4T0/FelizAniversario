import React from "react";

const MensajePrincipal = () => {
    const title = "Un Mensaje Especial";
    const message = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula dui non diam vulputate, 
  at cursus nunc fermentum. Duis tincidunt felis nec eros ultrices, quis ullamcorper elit viverra. 
  Sed lacinia mi nec nunc cursus, ac vestibulum velit viverra. Nulla facilisi. Curabitur laoreet 
  felis sed est sodales, in facilisis magna tincidunt. Aenean pharetra erat nec mi consectetur, 
  a tempor elit scelerisque. Curabitur viverra, mauris eu dictum tristique, urna turpis tempus 
  metus, at congue orci lacus a lorem. Nam in orci ultricies, bibendum ligula a, facilisis justo.
`;

    return (
        <section
            id="mensaje-principal"
            className="relative h-screen flex flex-col justify-center items-center text-center bg-[#daebe3]"
        >
            <div className="max-w-4xl px-7 md:px-0">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-playfair mb-8">
                    {title}
                </h2>
                <p className="text-lg md:text-xl text-gray-700 font-light leading-relaxed font-lora">
                    {message}
                </p>
            </div>
            <div className="absolute inset-x-10 bottom-20 flex flex-col items-center justify-center text-center">
                <a
                    href="#imagenesDestacadas"
                    className="relative inline-block text-lg text-white font-sora group"
                >
                    <span className="relative z-10 block px-6 py-3 bg-black bg-opacity-70 rounded-full transition-all duration-300 group-hover:bg-opacity-90">
                        Ver más
                    </span>
                    <span className="absolute inset-0 border-2 border-white rounded-full transform scale-95 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100 opacity-60"></span>
                </a>
            </div>
        </section>
    );
};

export default MensajePrincipal;
