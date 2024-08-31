import React from "react";

const MensajePrincipal = () => {
    const title = "Feliz Aniversario!";

    return (
        <section
            id="mensaje-principal"
            className="relative flex flex-col justify-center items-center text-center bg-[#daebe3] md:h-screen "
        >
            <div className="max-w-4xl px-7 md:px-0 mt-[10vh] md:mt-0 mb-[7vh] md:mb-0" >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-playfair mb-8">
                    {title}
                </h2>
                <p className="text-lg md:text-xl text-gray-700 font-light leading-relaxed font-lora">
                    Quise hacer algo diferente esta vez, algo que la verdad no
                    había visto, pero se me ocurrió: te hice esta página, la
                    cual quedará siempre para ti. Quiero darte las gracias por
                    estos hermosos 4 años, por soportar tantas de mis tonterías,
                    por aguantarme a mí y, sobre todo, por perdonar mis errores.
                    De verdad, gracias por estar ahí para mí. Como te he dicho
                    muchas veces, eres el pilar de mi vida; sé que sin ti no
                    sería quien soy ahora. <br />
                    <br />
                    Sé que muchas veces tenemos nuestros problemas, nuestras
                    peleas, pero no quiero que te rindas, no quiero que te des
                    por vencida. Cuando te digo que estoy totalmente entregado a
                    ti, es porque lo estoy. Tenemos nuestras temporadas en las
                    que estamos mal, en las que discutimos mucho, pero lo
                    importante es saber afrontarlas y salir adelante juntos.
                    <br />
                    <br />
                    Para terminar, espero que te guste este detalle. ¡Solo
                    recuerda que te amo!
                </p>
            </div>
            <div className="md:absolute md:inset-x-10 md:bottom-20 flex flex-col items-center justify-center text-center mb-[9vh] md:mb-0">   
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
