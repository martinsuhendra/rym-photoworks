'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from 'public/logo.png'

import useScrollPosition from '@/utils/useScrollPosition'

import BurgerMenu from './BurgerMenu'

const HERO_HEIGHT = 712

function Navbar() {
  const scrollPosition = useScrollPosition()
  const pathname = usePathname()
  const isNotHome = pathname.split('/')[1] !== ''
  const isOffset = scrollPosition > HERO_HEIGHT
  const navHeight = isOffset ? 'lg:h-24' : 'lg:h-40'
  const logoSize = isOffset
    ? 'lg:w-[80px] lg:h-[49px]'
    : 'lg:w-[143px] lg:h-[89px]'

  return (
    <nav
      className={`sticky top-0 min-w-[350px] navbar w-full backdrop-filter backdrop-blur-lg bg-opacity-30 border-gray-200 z-20 tracking-widest h-24 ${navHeight} uppercase font-semibold`}
    >
      <div className="container">
        <div
          className={`navbar-start hidden lg:flex gap-12 ${
            isOffset || isNotHome ? 'text-neutral' : 'text-neutral-content'
          } font-secondary`}
        >
          <Link href="/">home</Link>
          <Link href="/">about</Link>
          <Link href="/">services</Link>
        </div>
        <BurgerMenu />
        <div className={`navbar-center relative w-[80px] h-[49px] ${logoSize}`}>
          <Image src={Logo} fill alt="rym photoworks logo" />
        </div>
        <div className="navbar-end navbar flex-1 lg:flex-auto gap-12">
          <button
            className="btn rounded-xs btn-sm lg:btn-md text-sm font-primary"
            type="button"
          >
            get in touch
          </button>
          <Link href="/faq">
            <span
              className={`hidden lg:flex ${
                isOffset || isNotHome ? 'text-neutral' : 'text-neutral-content'
              } font-secondary`}
            >
              faq
            </span>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
