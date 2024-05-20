const Heroo = () => {
  return (
    <section id="SobreMi" className="min-h-[90vh] grid grid-cols-1 xl:grid-cols-8">
      {/* Image */}
      <div className="md:col-span-3 flex items-center justify-center relative">
        {/* Content image */}
        <div className="relative">
          <img src="https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png" className="w-[250px] h-[250px] md:w-[450px] md:h-[420px] object-cover xl:-mt-28 rounded-full" id="perfil" alt="Perfil" />
          {/* Logos */}
          <img src={"./public/image/css.png"} className="w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 object-cover rounded-full absolute top-0 right-0 sm:right-0 md:right-0 xl:right-[-50px] 2xl:right-[-100px] bg-red-900" alt="CSS Logo" />
          <img src={"./public/image/html.png"} className="w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 object-cover rounded-full absolute top-0 left-0 sm:left-0 md:left-0 xl:left-[-50px] 2xl:left-[-100px]" alt="HTML Logo" />
          <img src={"./public/image/Js.png"} className="w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 object-cover rounded-full absolute bottom-0 left-0 sm:left-0 md:left-0 xl:left-[-50px] 2xl:left-[-100px] -rotate-12" alt="Tailwind CSS Logo" />
          <img src={"./public/image/TailwinCss.png"} className="w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 object-cover rounded-full absolute bottom-0 right-0 sm:right-0 md:right-0 xl:right-[-50px] 2xl:right-[-100px] -rotate-12" alt="React Logo" />
        </div>


      </div>
      {/* Informacion */}
      <div className="md:col-span-5 flex items-center justify-center p-8 xl:p-16">
        <div className="flex flex-col gap-8">
          <h1 className="text-5xl xl:text-7xl font-bold xl:leading-[7.5rem]">
            Sobre mi
          </h1>
          <p className="text-gray-500 text-2xl leading-[2.5rem]">
            Desarrollo front-end especializado en diseño y experiencia de
            usuario utilizando tecnologías basadas en JavaScript, HTML y CSS. Me
            enfoco en crear interfaces intuitivas y atractivas que ofrezcan una
            experiencia de usuario fluida y satisfactoria..
          </p>
        </div>
      </div>
    </section>
  );
};

export default Heroo;
