import {
  ComponentPropsWithoutRef,
  ElementRef,
  ElementType,
  ForwardedRef,
  ReactNode,
  forwardRef,
} from 'react'

import { clsx } from 'clsx'

import s from './Button.module.scss'
export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  children: ReactNode
  className?: string
  size?: 28 | 36 | 56
  variant?: 'primary' | 'secondary'
} & ComponentPropsWithoutRef<T>

export const ButtonPolymorph = <T extends ElementType = 'button'>(
  props: ButtonProps<T>,
  ref: any
) => {
  const { as: Component = 'button', className, size = 36, variant = 'primary', ...rest } = props

  const styleNames = {
    boxSizeStyle: {
      height: `${size}px`,
    },
    indentsStyle: {
      gap: size === 28 ? '4px' : size < 36 ? '6px' : '8px',
      padding: size === 28 ? '6px 10px' : size < 36 ? '8px 12px' : '16px',
    },
    root: clsx(s.button, s[variant], className),
  }

  return (
    <Component
      className={styleNames.root}
      ref={ref}
      style={{ ...styleNames.boxSizeStyle, ...styleNames.indentsStyle }}
      {...rest}
    />
  )
}

export const Button = forwardRef(ButtonPolymorph) as <T extends ElementType = 'button'>(
  props: {
    ref?: ForwardedRef<ElementRef<T>>
  } & ButtonProps<T> &
    Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>
) => ReturnType<typeof ButtonPolymorph>
