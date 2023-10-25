import { PropsWithChildren } from 'react'

type Video = {
  id: string
  title: string
  url: string
}

const MOCKED_DATA: Video[] = [
  {
    id: '1',
    title: 'Josy + Titania',
    url: 'https://www.youtube-nocookie.com/embed/ezYU-mTAF24?si=UdgvuqoHUNbrVdrY',
  },
  {
    id: '2',
    title: 'Josy + Titania',
    url: 'https://www.youtube-nocookie.com/embed/zOH8sPMkWoU?si=CIL69J_Hn8bl8jOd',
  },
  {
    id: '3',
    title: 'Josy + Titania',
    url: 'https://www.youtube-nocookie.com/embed/2ZAOntnvF7Q?si=PqKLbLIwgzhP4AQX',
  },
  {
    id: '4',
    title: 'Josy + Titania',
    url: 'https://www.youtube-nocookie.com/embed/mQAmOJXSy1g?si=7GmytAxcgik5cO4o',
  },
]

function Carousel({ children }: PropsWithChildren) {
  return <div className="carousel w-full aspect-video">{children}</div>
}

interface VideoSlideProps extends PropsWithChildren {
  id: string
}

function VideoSlide({ children, id }: VideoSlideProps) {
  return (
    <div id={id} className="carousel-item relative w-full scroll-mt-24">
      {children}
    </div>
  )
}

interface SlideNavigatorProps {
  prev: string
  next: string
}

function SlideNavigator({ prev, next }: SlideNavigatorProps) {
  return (
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-2/3">
      <a href={prev} className="btn btn-circle">
        ❮
      </a>
      <a href={next} className="btn btn-circle">
        ❯
      </a>
    </div>
  )
}

function VideoCarousel() {
  return (
    <Carousel>
      {MOCKED_DATA.map(({ id, url, title }, index) => {
        const prevHref = index === 0 ? MOCKED_DATA.length - 1 : index - 1
        const nextHref = index === MOCKED_DATA.length - 1 ? 0 : index + 1
        return (
          <VideoSlide key={id} id={`video-slide-${index}`}>
            <iframe
              className="aspect-video min-w-full"
              src={url}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
            />
            <SlideNavigator
              prev={`#video-slide-${prevHref}`}
              next={`#video-slide-${nextHref}`}
            />
          </VideoSlide>
        )
      })}
    </Carousel>
  )
}

export default VideoCarousel
