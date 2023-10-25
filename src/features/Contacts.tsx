'use client'

import { useMemo } from 'react'
import { IconContext } from 'react-icons'
import {
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineYoutube,
} from 'react-icons/ai'
import { LiaFacebook } from 'react-icons/lia'

import SectionWrapper from '@/components/SectionWrapper'

function Contacts() {
  const iconStyle = useMemo(
    () => ({ style: { width: 24, height: 24, color: '#4b5563' } }),
    [],
  )
  return (
    <SectionWrapper
      subtitle="Our"
      title="Contacts"
      bg="white"
      containerProps="flex flex-col justify-center items-center text-center"
    >
      <div className="text-center">
        <span className="font-primary">
          Monica : +62 811-1110-676 (WA Only)
        </span>
        <p className="uppercase text-gray-400 font-semibold mt-12">
          follow us on
        </p>
      </div>
      <div className="mt-4 flex flex-row gap-4 justify-center items-center">
        <IconContext.Provider value={iconStyle}>
          <a
            href="https://instagram.com/rym_photography?igshid=MzRlODBiNWFlZA=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineInstagram />
          </a>
          <a
            href="https://www.youtube.com/@rememberyourmoment4782/featured"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineYoutube />
          </a>
          <a
            href="https://www.facebook.com/rymphotography?mibextid=LQQJ4d"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LiaFacebook />
          </a>
          <a
            href="mailto:rym.photography@yahoo.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineMail />
          </a>
        </IconContext.Provider>
      </div>
    </SectionWrapper>
  )
}

export default Contacts
