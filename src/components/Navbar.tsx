const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      {/* Name on the left */}
      <div className="text-xl font-bold text-gray-800">
        Habibullahi Usman
      </div>

      {/* Navigation Links on the right */}
      <ul className="flex space-x-6">
        <li>
          <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">Home</a>
        </li>
        <li>
          <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">About</a>
        </li>
        <li>
          <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;