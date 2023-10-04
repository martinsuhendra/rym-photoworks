import BurgerMenu from './BurgerMenu'
import ThemeToggle from './ThemeToggle'

function Navbar() {
  return (
    <nav className="flex justify-between items-center h-24 sticky top-0 backdrop-blur-md w-full z-20">
      <ThemeToggle />
      <BurgerMenu />
    </nav>
  )
}

export default Navbar
