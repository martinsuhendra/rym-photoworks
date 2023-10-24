import { PropsWithChildren } from 'react'
import AgusTheo from 'public/agus-theo.jpg'
import AldoInez from 'public/aldo-inez.jpg'
import HenryStacey from 'public/pre-wedding.jpg'

import { PhotoCardType } from '@/types'

import PhotoCard from './PhotoCard'

const MOCKED_DATA: PhotoCardType[] = [
  {
    id: '1',
    image: AldoInez,
    title: 'Aldo & Inez',
    caption:
      '"When I tell you I love you, I don’t say it out of habit. I say it to remind you that you are the best thing that has ever happened to me."',
  },
  {
    id: '2',
    image: AgusTheo,
    title: 'Agus & Theo',
    caption:
      '"When you came into my life I left all my past behind me, I just love this newly found love that is making me feel like a baby again, my sugar I adore you so much.."',
  },
  {
    id: '3',
    image: HenryStacey,
    title: 'Henry & Stacey',
    caption:
      '"When you are around me, my world turns around, and I feel your passion swell up inside my heart. I love you because when I lose control of myself, you pull closer. You are the sun in my sky, without you I’d be in darkness. I will love you until there is no love left in the world."',
  },
]

function Carousel({ children }: PropsWithChildren) {
  return (
    <div className="carousel justify-center w-full gap-24 my-24">
      {children}
    </div>
  )
}

interface PhotoSlideProps extends PropsWithChildren {
  id: string
}

function PhotoSlide({ children, id }: PhotoSlideProps) {
  return (
    <div id={id} className="carousel-item items-center gap-24 relative">
      {children}
    </div>
  )
}

function SlideNavigator() {
  return (
    <div className="flex justify-center gap-4 transform -translate-y-1/2">
      <a href="#slide1" className="btn btn-circle">
        ❮
      </a>
      <a href="#slide2" className="btn btn-circle">
        ❯
      </a>
    </div>
  )
}

function SlideItem({ image, title, caption }: PhotoCardType) {
  return (
    <div className="w-full xl:w-1/3">
      <PhotoCard image={image} title={title} caption={caption} />
    </div>
  )
}

function PhotoCarousel() {
  return (
    <div>
      <Carousel>
        <PhotoSlide id="#photo-slide1">
          {MOCKED_DATA.map(({ id, image, title, caption }) => (
            <SlideItem key={id} {...{ image, title, caption }} />
          ))}
        </PhotoSlide>
      </Carousel>
      <SlideNavigator />
      <div className="flex justify-center">
        <button
          type="button"
          className="btn btn-primary btn-wide text-neutral-content font-primary"
        >
          See All Gallery
        </button>
      </div>
    </div>
  )
}

export default PhotoCarousel
