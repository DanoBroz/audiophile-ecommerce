import { HTMLAttributes } from 'react'

interface HeroConfig {
    heroHeading: string
    heroTextContent: string
    imageUrl: string
    isNew?: boolean
}

interface CategoryConfig extends HeroConfig {
    productLink: string
}

type SectionProps = HTMLAttributes<HTMLDivElement>

export type CategoryHeroProps = CategoryConfig & SectionProps

export type ProductHeroProps = HeroConfig & SectionProps
