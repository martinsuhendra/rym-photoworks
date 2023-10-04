import Image from 'next/image'
import Link from 'next/link'
import Logo from 'public/logo.png'

import BurgerMenu from './BurgerMenu'

function Navbar() {
  return (
    <nav className="sticky top-0 min-w-[350px] navbar w-full backdrop-filter backdrop-blur-lg bg-opacity-30 border-gray-200 z-20 tracking-widest h-44 uppercase font-semibold">
      <div className="container">
        <div className="navbar-start hidden lg:flex gap-12 xl:gap-24 text-neutral-content font-secondary">
          <Link href="/">home</Link>
          <Link href="/">about</Link>
          <Link href="/">services</Link>
        </div>
        <BurgerMenu />
        <div className="navbar-center relative w-[80px] h-[49px] lg:w-[143px] lg:h-[89px]">
          <Image src={Logo} fill alt="rym photoworks logo" />
        </div>
        <div className="navbar-end navbar flex-1 lg:flex-auto gap-12 xl:gap-24">
          <button
            className="btn rounded-xs btn-sm lg:btn-md text-sm"
            type="button"
          >
            get in touch
          </button>
          <span className="hidden lg:flex text-neutral-content font-secondary">
            faq
          </span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
