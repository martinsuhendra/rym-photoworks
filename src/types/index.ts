import { StaticImageData } from 'next/image'

export enum ColorVariations {
  Primary = 'primary',
  Secondary = 'secondary',
  Info = 'info',
  Success = 'success',
  Warning = 'warning',
  Error = 'error',
}

export type BlogCategory = {
  imgUrl: StaticImageData
  label: string
  color: ColorVariations
}

export type Menu = {
  label: string
  url: string
}

export type PhotoCardType = {
  id?: string
  title: string
  caption: string
  image: StaticImageData
}
