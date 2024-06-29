import type { Meta, Story } from '@storybook/react'

import { Button } from './Button.tsx'
import { Counter } from '../counter/Counter.tsx'
import s from '../../../App.module.scss'
import { Loading } from '../loading/Loading.tsx'
import { useState } from 'react'
import clsx from 'clsx'

export default {
  title: 'Components/Button',
  component: Button,
} as Meta

const Template: Story = args => {
  const [quantity] = useState<string>('88')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const setLoadingHandler = () => setIsLoading(true)

  const classNames = {
    btnText: clsx(s.text, isLoading && s.hideContent),
    counter: clsx(isLoading && s.hideContent),
  }

  return (
    <Button size={36} onClick={setLoadingHandler} {...args}>
      {isLoading && <Loading />}

      <span className={classNames.btnText}>Скажи как мне жить, если нет стимула</span>

      {args.showCounter && (
        <Counter
          quantity={quantity}
          size={24}
          className={classNames.counter}
          variant={args.counterVariant}
        />
      )}
    </Button>
  )
}

export const Primary = Template.bind({})
Primary.args = {}

export const PrimaryWithCounter = Template.bind({})
PrimaryWithCounter.args = {
  variant: 'primary',
  showCounter: true,
  counterVariant: 'primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'secondary',
  counterVariant: 'secondary',
}

export const SecondaryWithCounter = Template.bind({})
SecondaryWithCounter.args = {
  variant: 'secondary',
  showCounter: true,
  counterVariant: 'secondary',
}
