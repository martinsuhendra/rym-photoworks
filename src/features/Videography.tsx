import SectionWrapper from '@/components/SectionWrapper'
import VideoCarousel from '@/components/VideoCarousel'

function Videography() {
  return (
    <div className="relative">
      <SectionWrapper subtitle="See" title="Videography">
        <div className="flex justify-center items-center">
          <VideoCarousel />
        </div>
      </SectionWrapper>
    </div>
  )
}

export default Videography
