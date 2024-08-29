
function Navbar() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-800 text-white p-4 flex justify-between items-center">
        <div className="text-xl font-bold left-7">WebPage</div>
        <div className="flex items-center"><img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLU5_eUUGBfxfxRd4IquPiEwLbt4E_6RYMw&s/40"
          alt="User Profile"
          className="rounded-full w-10 h-10"
        /></div>
      </nav>
    </>
  )
}

export default Navbar
