'use client'

import { useState } from 'react'
import Image from 'next/image'
import HeroImage from 'public/cover.jpg'

function Hero() {
  const [imgComplete, setImgComplete] = useState(false)
  return (
    <div className="container hero place-items-center md:place-items-start min-h-[calc(100vh-11rem)] inset-0">
      <div className="carousel">
        <div className="carousel-item">
          <Image
            src={HeroImage}
            fill
            alt="background image"
            className="object-cover brightness-50"
          />
        </div>
        <div className="carousel-item">
          <Image
            src={HeroImage}
            fill
            alt="background image"
            className="object-cover brightness-50"
            placeholder="blur"
            priority
            onLoadingComplete={(img) => setImgComplete(img.complete)}
          />
        </div>
      </div>
      <div className="hero-content my-auto text-neutral-content">
        <div
          className={`max-w-md text-center sm:text-left animate-fade-left animate-once animate-ease-out animate-delay-[1000ms] ${
            imgComplete ? 'animate-play' : 'animate-stop'
          }`}
        >
          <h5 className="font-secondary tracking-widest uppercase text-xs text-neutral-content mb-5">
            let us make to
          </h5>
          <h1 className="mb-10 text-5xl font-primary tracking-wider">
            Remember Your Moment
          </h1>

          <button
            type="button"
            className="btn btn-primary btn-wide text-neutral-content font-primary"
          >
            Explore
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
