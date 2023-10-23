'use client'

import { useInView } from 'react-intersection-observer'
import RightImage from 'public/evan-monica.jpg'
import LeftImage from 'public/riko-becca.jpg'

import PhotoCarousel from '@/components/PhotoCarousel'
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
      {/* // TODO: Create Carousel component and render data programatically */}
      <PhotoCarousel />
    </SectionWrapper>
  )
}

export default Photography
