'use client'

import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import BrideStory from 'public/bridestory.png'

function Introduction() {
  const { ref, inView } = useInView({
    threshold: 0.25,
  })

  return (
    <div
      className={inView ? 'py-12 md:py-24 animate-fade-up' : 'py-12 md:py-24'}
      ref={ref}
    >
      <div className="relative flex py-5 items-center">
        <div className="flex-grow border-t dark:border-gray-400 border-black" />
        <h1 className="text-center flex-shrink mx-4 md:mx-12 uppercase font-primary text-3xl sm:text-4xl md:text-5xl tracking-widest">
          welcome to rym
        </h1>
        <div className="flex-grow border-t dark:border-gray-400 border-black" />
      </div>
      <div className="flex flex-col items-center justify-center gap-3 text-xs md:text-md">
        <h5 className="text-center font-secondary tracking-wide">
          &ldquo;We love to make your precious moment unforgettable
        </h5>
        <h5 className="text-center font-secondary tracking-wide">
          Remember Your Moment with us&rdquo;
        </h5>
      </div>
      <div className="flex flex-col gap-4 items-center mt-24">
        <span className="uppercase text-gray-400 font-semibold">
          as featured in
        </span>
        <Image
          src={BrideStory}
          width={154}
          height={40}
          alt="bridestory"
          className="object-cover"
          placeholder="blur"
          priority
        />
      </div>
    </div>
  )
}

export default Introduction
