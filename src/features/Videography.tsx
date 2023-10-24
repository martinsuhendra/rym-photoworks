import SectionWrapper from '@/components/SectionWrapper'
import VideoCarousel from '@/components/VideoCarousel'

function Videography() {
  return (
    <SectionWrapper subtitle="See" title="Videography">
      <div className="flex justify-center items-center">
        <VideoCarousel />
      </div>
    </SectionWrapper>
  )
}

export default Videography
