import { Button } from '../src/components/btn/Button'
import s from '../src/App.module.scss'
import LoadingSvg from '../src/assets/icons/svg/components/LoadingSvg'
import { useState } from 'react'
import clsx from 'clsx'
import { Counter } from '../src/components/counter/Counter'

function App() {
  const [quantity, setQuantity] = useState<string>(`88`)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const styleNames = {
    hideContentStyle: {
      opacity: clsx(isLoading && '0'),
      transition: '300ms',
    },

    root: {
      display: 'flex',
      flexFlow: 'row nowrap',
      gap: '20px',
      padding: '20px',
    },
  }

  return (
    <div style={styleNames.root}>
      <Button onClick={() => setIsLoading(true)}>
        {isLoading && (
          <div className={s.loading}>
            <LoadingSvg />
          </div>
        )}

        <span className={s.text} style={styleNames.hideContentStyle}>
          Скажи как мне быть, если нет стимула
        </span>
        <div style={styleNames.hideContentStyle}>
          <Counter quantity={quantity} size={24} />
        </div>
      </Button>

      <Button variant={'secondary'} onClick={() => setIsLoading(true)}>
        {isLoading && (
          <div className={s.loading}>
            <LoadingSvg />
          </div>
        )}

        <span className={s.text} style={styleNames.hideContentStyle}>
          Скажи как мне быть, если нет стимула
        </span>
      </Button>
    </div>
  )
}

export default App
