import Image, { StaticImageData } from 'next/image'

interface ServiceCardProps {
  image: StaticImageData
  label: string
  description: string
}

function ServiceCard({ image, label, description }: ServiceCardProps) {
  return (
    <div className="relative grid h-[24rem] md:h-[34rem] flex-grow w-[24rem] flex-col shadow-xl items-center rounded-sm justify-center overflow-hidden bg-white text-center text-gray-700">
      <div className="absolute hover:scale-125 ease-in duration-1000 inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover bg-center text-gray-700 shadow-none">
        <Image
          src={image}
          alt="Shoes"
          fill
          className="object-cover object-center"
        />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
      </div>
      <div className="relative">
        <h2 className="mb-6 block font-primary text-4xl font-bold leading-[1.5] tracking-normal text-white antialiased">
          {label}
        </h2>
        <p className="text-neutral-content max-w-xs font-primary text-sm">
          {description}
        </p>
      </div>
    </div>
  )
}

export default ServiceCard
