import Image, { StaticImageData } from 'next/image'

interface PhotoHomeCardProps {
  couplesName: string
  caption: string
  Photo: StaticImageData
  orientation?: 'left' | 'right' | 'center'
}

function PhotoHomeCard({
  couplesName,
  caption,
  Photo,
  orientation = 'left',
}: PhotoHomeCardProps) {
  const orientationStyle = orientation === 'right' ? 'md:text-right' : undefined

  return (
    <div>
      <div className={`md:h-44 text-left mb-12 md:mb-0 ${orientationStyle}`}>
        <h3 className="font-primary text-5xl">{couplesName}</h3>
        <p className="mt-4 font-primary line-clamp-3">{caption}</p>
      </div>
      <div className="w-full aspect-video relative">
        <Image
          src={Photo}
          alt="Wedding Photo"
          fill
          placeholder="blur"
          className="object-cover"
        />
      </div>
    </div>
  )
}

export default PhotoHomeCard
