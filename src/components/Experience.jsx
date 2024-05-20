const Experience = () => {
  return (
<section className="text-gray-800 mt-20 mx-[10%]" id="Experience">
  <h2 className="text-gray-800 text-2xl font-bold tracking-wider uppercase">
    Experiencia laboral
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-4 mb-28">
    {/* Contenido de la primera experiencia laboral */}
    <div className="bg-white shadow-lg rounded-lg p-6 m-4 relative">
      <div className="overflow-hidden rounded-t-lg">
        <img src="https://www.o10media.es/blog/wp-content/uploads/2023/01/tipos-paginas-web.jpg" alt="Imagen de perfil" className="w-full h-auto object-cover"/>
      </div>
      <h3 className="text-xl font-semibold mt-4 mb-2">
        Desarrollador Front-End
      </h3>
      <p className="text-gray-600">Administradora de Comercios y Franquicias - Septiembre 2023 - Presente</p>
      <ul className="list-disc list-inside text-gray-700">
        <li>Diseños de mockups y wireframes.</li>
        <li>Implementación de diseños responsivos con TailwindCSS.</li>
        <li>Colaboración en proyectos con metodologías ágiles.</li>
        <li>Creación de la aplicación mediante JS, Tailwind CSS, React, etc.</li>
        <li>Implementación de autenticación de usuarios e integración de API</li>
        <li>Uso de librerías CSS para el diseño de la web como Tailwind</li>
      </ul>
    </div>

  </div>
</section>

  );
};

export default Experience;
