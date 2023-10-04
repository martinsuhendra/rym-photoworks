import { Bars2Icon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'
import Logo from 'public/logo.png'

import { MENU_LIST } from '@/constants'

function BurgerMenu() {
  return (
    <div className="mr-4 z-30 ">
      <input id="drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <label
          htmlFor="drawer"
          className="btn btn-sm md:btn-md btn-square btn-ghost lg:hidden transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-700"
        >
          <Bars2Icon className="h-5 w-5" />
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="drawer" className="drawer-overlay" />
        <ul className="menu p-4 w-80 min-h-full bg-base-200 gap-6">
          <li className="p-3">
            <div className=" relative w-[80px] h-[49px] lg:w-[143px] lg:h-[89px]">
              <Image src={Logo} fill alt="rym photoworks logo" />
            </div>
          </li>
          {MENU_LIST.map((menu) => (
            <li key={menu.label}>
              <Link href={menu.url}>{menu.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default BurgerMenu
