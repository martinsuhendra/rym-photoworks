'use client'

import { useInView } from 'react-intersection-observer'
import AgusTheo from 'public/agus-theo.jpg'
import AldoInez from 'public/aldo-inez.jpg'
import RightImage from 'public/evan-monica.jpg'
import HenryStacey from 'public/pre-wedding.jpg'
import LeftImage from 'public/riko-becca.jpg'

import PhotoCard from '@/components/PhotoCard'
import PhotoHomeCard from '@/components/PhotoHomeCard'
import SectionWrapper from '@/components/SectionWrapper'

function Photography() {
  const { ref, inView } = useInView({
    threshold: 0,
  })

  return (
    <SectionWrapper subtitle="See" title="Photography" bg="white">
      <div
        className="grid grid-cold-1 md:grid-cols-2 gap-12 md:gap-6 items-stretch"
        ref={ref}
      >
        <div className={inView ? 'animate-fade-right' : undefined}>
          <PhotoHomeCard
            couplesName="Rico & Becca"
            caption="When I tell you I love you, I don’t say it out of habit. I say it to remind you that you are the best thing that has ever happened to me."
            Photo={LeftImage}
          />
        </div>
        <div
          className={inView ? 'animate-fade-left animate-delay-500' : undefined}
        >
          <PhotoHomeCard
            couplesName="Evan & Monica"
            caption="You are my best friend as well as my lover, and I do not know which
          side of you I enjoy the most. I treasure each side, just as I have
          treasured our life together."
            Photo={RightImage}
            orientation="right"
          />
        </div>
      </div>
      <div className="carousel w-full gap-24 my-24">
        <div id="slide1" className="carousel-item items-center gap-24 relative">
          <div className="w-1/3">
            <PhotoCard
              image={AldoInez}
              title="Aldo & Inez"
              caption='"When I tell you I love you, I don’t say it out of habit. I say it to remind you that you are the best thing that has ever happened to me."'
            />
          </div>
          <div className="w-1/3">
            <PhotoCard
              image={AgusTheo}
              title="Agus & Theo"
              caption='"When you came into my life I left all my past behind me, I just love this newly found love that is making me feel like a baby again, my sugar I adore you so much.."'
            />
          </div>
          <div className="w-1/3">
            <PhotoCard
              image={HenryStacey}
              title="Henry & Stacey"
              caption='"When you are around me, my world turns around, and I feel your passion swell up inside my heart. I love you because when I lose control of myself, you pull closer. You are the sun in my sky, without you I’d be in darkness. I will love you until there is no love left in the world."'
            />
          </div>
          <div className="w-1/3">
            <PhotoCard
              image={HenryStacey}
              title="Henry & Stacey"
              caption='"When I tell you I love you, I don’t say it out of habit. I say it to remind you that you are the best thing that has ever happened to me."'
            />
          </div>
        </div>
        <div id="slide2" className="carousel-item items-center gap-24 relative">
          <div className="w-1/3">
            <PhotoCard
              image={AldoInez}
              title="Aldo & Inez"
              caption='"When I tell you I love you, I don’t say it out of habit. I say it to remind you that you are the best thing that has ever happened to me."'
            />
          </div>
          <div className="w-1/3">
            <PhotoCard
              image={AgusTheo}
              title="Agus & Theo"
              caption='"When you came into my life I left all my past behind me, I just love this newly found love that is making me feel like a baby again, my sugar I adore you so much.."'
            />
          </div>
          <div className="w-1/3">
            <PhotoCard
              image={HenryStacey}
              title="Henry & Stacey"
              caption='"When I tell you I love you, I don’t say it out of habit. I say it to remind you that you are the best thing that has ever happened to me."'
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-4 transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide1" className="btn btn-circle">
          ❮
        </a>
        <a href="#slide2" className="btn btn-circle">
          ❯
        </a>
      </div>
      <div className="flex justify-center">
        <button
          type="button"
          className="btn btn-primary btn-wide text-neutral-content font-primary"
        >
          See All Gallery
        </button>
      </div>
    </SectionWrapper>
  )
}

export default Photography
