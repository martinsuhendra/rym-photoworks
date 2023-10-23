import Image, { StaticImageData } from 'next/image'

interface PhotoCardProps {
  image: StaticImageData
  title: string
  caption: string
}

function PhotoCard({ image, title, caption }: PhotoCardProps) {
  return (
    <div>
      <div className="w-[281px] h-[430px] rounded-t-full overflow-hidden relative">
        <Image alt={title} src={image} fill className="object-cover" />
      </div>
      <div className="mt-4 flex flex-col gap-3 w-[281px] text-center">
        <h3 className="font-primary text-3xl uppercase">{title}</h3>
        <span className="font-primary line-clamp-3">{caption}</span>
      </div>
    </div>
  )
}

export default PhotoCard
