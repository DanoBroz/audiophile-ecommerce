import type { MouseEvent } from 'react'
export type { CategoryHeroProps, ProductHeroProps } from './Hero'
export type { CartItem, AddCartItemProps, ReduceCartItemProps } from './Cart'

export interface CounterProps {
    counterType?: 'normal' | 'small'
    counterValue: number
    addition: (e: MouseEvent) => void
    substraction: (e: MouseEvent) => void
}
