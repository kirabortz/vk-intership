import clsx from 'clsx'

import s from './Counter.module.scss'

export type CounterProps = {
  pulse?: boolean
  quantity: string
  size?: 8 | 12 | 16 | 20 | 24
  stroke?: boolean
  variant?: 'primary' | 'secondary'
  className?: string
}

export const Counter = ({
  pulse = false,
  quantity,
  size = 16,
  stroke = false,
  variant = 'primary',
  className,
}: CounterProps) => {
  let finalQuantity = quantity

  if (Number(finalQuantity) > 99) {
    finalQuantity = '99+'
  } else if (finalQuantity.toString().length > 3) {
    finalQuantity = finalQuantity.toString().slice(0, 3)
  }

  const fsStyle = clsx(size > 12 ? s[`fs-${size / 2}`] : s['fs-0'])

  const strokeStyle = clsx({
    [s['stroke-small']]: stroke && size === 8,
    [s['stroke-medium']]: stroke && size > 8 && size < 24,
    [s['stroke-large']]: stroke && size >= 24,
    [s['stroke-none']]: !stroke,
  })

  return (
    <div className={clsx(s.root, s[variant], s[`boxSize-${size}`], strokeStyle, className)}>
      <span className={clsx(s.text, fsStyle)}>{finalQuantity}</span>
      {pulse && size <= 12 && (
        <>
          <div className={clsx(s.pulse, s.one, s[`boxSize-${size}`])}></div>
          <div className={clsx(s.pulse, s.two, s[`boxSize-${size}`])}></div>
        </>
      )}
    </div>
  )
}
