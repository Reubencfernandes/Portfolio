// Code: Navbar component
'use client';
const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <a href="/" className="mr-6 flex items-center space-x-2">
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rectangle%20311-x2JIzj8qEIOhKdy6PDRhjTijzC2ERf.png"
              alt="Logo"
              width={24}
              height={24}
              className="h-6 w-6"
            />
            <span className="hidden font-bold sm:inline-block text-primary">
              Reuben Fernandes
            </span>
          </a>
        </div>
        <nav className="flex flex-1 items-center justify-center space-x-6 text-sm font-medium">
          <a href="#about" className="transition-colors hover:text-primary">About</a>
          <a href="#projects" className="transition-colors hover:text-primary">Projects</a>
          <a href="#skills" className="transition-colors hover:text-primary">Skills</a>
          <a href="#contact" className="transition-colors hover:text-primary">Contact</a>
        </nav>
      </div>
      </div>
  )
}

export default Navbar