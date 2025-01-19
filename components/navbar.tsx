// Code: Navbar component
'use client';
const Navbar = () => {
  return (
    <div className="border">
    <div className="flex h-14 items-center">
        <div className="mr-4 flex">
          <a href="/" className="mr-6 flex items-center space-x-2">
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rectangle%20311-x2JIzj8qEIOhKdy6PDRhjTijzC2ERf.png"
              alt="Logo"
              width={40}
              height={40}
              className="h-6 w-6"
            />
            <span className="hidden font-bold sm:inline-block text-primary">
              Reuben Fernandes
            </span>
          </a>
        </div>
        <nav className="flex flex-1 items-center justify-center space-x-6 text-sm font-medium">
          <a href="#about" className="">About</a>
          <a href="#projects" className="">Projects</a>
          <a href="#skills" className="">Skills</a>
          <a href="#contact" className="">Contact</a>
        </nav>
      </div>
      </div>
  )
}

export default Navbar