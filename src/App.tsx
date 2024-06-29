import { Button } from './components/ui/btn/Button'
import s from '../src/App.module.scss'
import { useState } from 'react'
import clsx from 'clsx'
import { Counter } from './components/ui/counter/Counter'

import { Loading } from './components/ui/loading/Loading.tsx'

function App() {
  const [quantity] = useState<string>(`88`)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const setLoadingHandler = () => setIsLoading(true)

  const classNames = {
    btnText: clsx(s.text, isLoading && s.hideContent),
    counter: clsx(isLoading && s.hideContent),
  }

  return (
    <Button size={36} onClick={setLoadingHandler}>
      {isLoading && <Loading />}

      <span className={classNames.btnText}>Скажи как мне жить, если нет стимула</span>

      <Counter quantity={quantity} size={24} className={classNames.counter} />
    </Button>
  )
}

export default App
