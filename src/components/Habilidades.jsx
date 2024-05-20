const Habilidades = () => {
  return (
    <section className="text-gray-800 mx-[10%]" id="Habilidades">
      <h2 className="text-gray-800 text-2xl font-bold tracking-wider uppercase">Habilidades</h2>
      <div className="flex flex-row justify-center mt-4 flex-wrap gap-8 sm:flex-col sm:items-center sm:gap-8">
        {/* Aquí puedes agregar contenido adicional si es necesario */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 place-items-center mt-16 mb-16">
          <img src="./public/image/html.png" alt="Habilidad 1" className="w-24 h-24 sm:w-full sm:h-auto md:w-32 md:h-32 rounded-full shadow-lg transform transition duration-300 hover:scale-110"/>
          <img src="./public/image/css.png" alt="Habilidad 2" className="w-24 h-24 sm:w-full sm:h-auto md:w-32 md:h-32 rounded-full shadow-lg transform transition duration-300 hover:scale-110"/>
          <img src="./public/image/Js.png" alt="Habilidad 3" className="w-24 h-24 sm:w-full sm:h-auto md:w-32 md:h-32 rounded-full shadow-lg transform transition duration-300 hover:scale-110"/>
          <img src="./public/image/tailwinCss.png" alt="Habilidad 4" className="w-24 h-24 sm:w-full sm:h-auto md:w-32 md:h-32 rounded-full shadow-lg transform transition duration-300 hover:scale-110"/>
          <img src="./public/image/bost.png" alt="Habilidad 5" className="w-24 h-24 sm:w-full sm:h-auto md:w-32 md:h-32 rounded-full shadow-lg transform transition duration-300 hover:scale-110"/>
          <img src="./public/image/github.png" alt="Habilidad 6" className="w-24 h-24 sm:w-full sm:h-auto md:w-32 md:h-32 rounded-full shadow-lg transform transition duration-300 hover:scale-110"/>
        </div>

      </div>
    </section>
  )
}    

export default Habilidades
