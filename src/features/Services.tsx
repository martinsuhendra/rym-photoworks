'use client'

import { useInView } from 'react-intersection-observer'
import PreWedding from 'public/pre-wedding.jpg'
import Wedding from 'public/wedding.jpg'

import SectionWrapper from '@/components/SectionWrapper'
import ServiceCard from '@/components/ServiceCard'

function Services() {
  const { ref, inView } = useInView({
    threshold: 0,
  })
  return (
    <SectionWrapper subtitle="Our" title="Services">
      <div
        ref={ref}
        className={`flex flex-wrap items-center justify-between gap-4 ${
          inView ? 'animate-fade-up' : 'animate-none'
        }`}
      >
        <ServiceCard
          image={Wedding}
          label="Wedding"
          description={`Capturing Love's Timeless Moments, Where Dreams Begin and Love Stories
          Unfold.`}
        />
        <ServiceCard
          image={PreWedding}
          label="Pre Wedding"
          description="A Journey of Love and Laughter, Turning Moments into Memories."
        />
      </div>
    </SectionWrapper>
  )
}

export default Services
