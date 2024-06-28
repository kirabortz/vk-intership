import clsx from 'clsx'

import s from './Counter.module.scss'

type Props = {
  pulse?: boolean
  quantity: string
  size?: 8 | 12 | 16 | 20 | 24
  stroke?: boolean
  variant?: 'primary' | 'secondary'
}

export const Counter = ({
  pulse = false,
  quantity,
  size = 16,
  stroke = false,
  variant = 'primary',
}: Props) => {
  const styleNames = {
    boxSizeStyle: {
      height: `${size}px`,
      width: `${size}px`,
    },
    fontSizeStyle: {
      fontSize: size > 12 ? `${size / 2}px` : '0px',
    },
    pulseOne: clsx(pulse && size <= 12 && s.pulse, s.one),
    pulseTwo: clsx(pulse && size <= 12 && s.pulse, s.two),
    root: clsx(s.root, s[variant]),
    strokeStyle: {
      strokeWidth: stroke ? (size === 8 ? '1px' : size < 24 ? '2px' : '3px') : '0',
    },

    text: clsx(s.text),
  }

  let finalQuantity = quantity

  if (Number(finalQuantity) > 99) {
    finalQuantity = '99+'
  } else if (finalQuantity.length > 3) {
    finalQuantity = finalQuantity.slice(0, 3)
  }

  return (
    <div
      className={styleNames.root}
      style={{ ...styleNames.boxSizeStyle, ...styleNames.strokeStyle }}
    >
      <span className={styleNames.text} style={styleNames.fontSizeStyle}>
        {finalQuantity}
      </span>
      <div className={styleNames.pulseOne} style={styleNames.boxSizeStyle}></div>
      <div className={styleNames.pulseTwo} style={styleNames.boxSizeStyle}></div>
    </div>
  )
}
