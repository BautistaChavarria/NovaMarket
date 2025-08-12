import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(null);
  const menuRef = useRef(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  // Cerrar menú al hacer click fuera
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenu(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav ref={menuRef} className="flex items-center justify-between p-4 shadow bg-white relative">
      {/* Logo / título */}
      <h1 className="text-2xl font-bold">
        <Link to="/" className="hover:text-blue-600" onClick={() => setOpenMenu(null)}>
          NovaMarket
        </Link>
      </h1>

      {/* Menú principal */}
      <ul className="flex gap-6 relative">
        {/* Menú STOCK */}
        <li className="relative">
          <button onClick={() => toggleMenu("stock")} className="text-gray-700 hover:text-blue-600"
					>
            Stock
          </button>

          {openMenu === "stock" && (
            <ul className="absolute left-0 top-full mt-2 w-40 bg-white border rounded shadow z-10">
              <li>
                <Link to="/stock/articulos" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setOpenMenu(null)}>
                  Artículos
                </Link>
              </li>
              <li>
                <Link to="/stock/depositos" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setOpenMenu(null)}>
                  Depósitos
                </Link>
              </li>
              <li>
                <Link to="/stock" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setOpenMenu(null)}>
                  Stock
                </Link>
              </li>
              <li>
                <Link to="/stock/ajustes" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setOpenMenu(null)}>
                  Ajustes
                </Link>
              </li>
              <li>
                <Link to="/stock/historial" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setOpenMenu(null)}>
                  Historial
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Menú Compras */}
        <li>
          <Link to="/compras" className="text-gray-700 hover:text-blue-600" onClick={() => setOpenMenu(null)}>
            Compras
          </Link>
        </li>
        {/* Menú Ventas */}
        <li>
          <Link to="/ventas" className="text-gray-700 hover:text-blue-600" onClick={() => setOpenMenu(null)}>
            Ventas
          </Link>
        </li>
        {/* Menú Resumenes */}
        <li>
          <Link to="/resumenes" className="text-gray-700 hover:text-blue-600" onClick={() => setOpenMenu(null)}>
            Resumenes
          </Link>
        </li>
      </ul>

			{/* Menú de Usuario */}
      <h6>
        <Link to="/usuario" className="hover:text-blue-600" onClick={() => setOpenMenu(null)}>
          Usuario
        </Link>
      </h6>
    </nav>
  );
}
