const Board = () => {
  return (
    <nav className="flex justify-between  bg-teal-500">
      <a
        href="#responsive-header"
        className="block mt-2 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
      >
        Internships
      </a>

      <a
        href="#responsive-header"
        className="block mt-2 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
      >
        Destinos
      </a>

      <a
        href="#responsive-header"
        className="block mt-2 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
      >
        Programas
      </a>

      <a
        href="#responsive-header"
        className="block mt-2 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
      >
        Alojamientos
      </a>

      <a
        href="#responsive-header"
        className="block mt-2 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
      >
        Centro de Ayuda
      </a>

      <a
        href="#responsive-header"
        className="block mt-2 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
      >
        Travel Updates
      </a>

      <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
        <svg
          className="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </nav>
  );
};

export default Board;
