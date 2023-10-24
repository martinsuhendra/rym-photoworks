import { PropsWithChildren } from 'react'

interface SectionWrapperProps extends PropsWithChildren {
  subtitle?: string
  title: string
  bg?: string
  containerProps?: string
}

function SectionWrapper({
  subtitle,
  title,
  children,
  bg = 'bg-stone-100',
  containerProps,
}: SectionWrapperProps) {
  return (
    <div className={`pb-12 ${bg}`}>
      <div className={`container py-12 ${containerProps}`}>
        <div className="py-12">
          {subtitle && (
            <span className="font-primary text-neutral text-lg">
              {subtitle}
            </span>
          )}
          <h3 className="font-primary text-neutral text-3xl tracking-wider font-bold">
            {title}
          </h3>
        </div>
        {children}
      </div>
    </div>
  )
}

export default SectionWrapper
