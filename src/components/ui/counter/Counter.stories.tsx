import { Counter } from './Counter.tsx'
import { Meta, Story } from '@storybook/react'

export default {
  title: 'Components/Counter',
  component: Counter,
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary'] },
    stroke: { control: 'boolean' },
    pulse: { control: 'boolean' },
    quantity: { control: 'text' },
    size: { control: 'select', options: [8, 12, 16, 20, 24] },
  },
} as Meta

const Template: Story = args => (
  <div style={{ backgroundColor: 'yellowgreen', width: '50px' }}>
    <Counter {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  variant: 'primary',
  stroke: false,
  pulse: false,
  quantity: '88',
  size: 24,
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'secondary',
  stroke: false,
  pulse: false,
  quantity: '88',
  size: 24,
}

export const WithStroke = Template.bind({})
WithStroke.args = {
  variant: 'primary',
  stroke: true,
  pulse: false,
  quantity: '88',
  size: 24,
}

export const WithPulse = Template.bind({})
WithPulse.args = {
  variant: 'secondary',
  stroke: false,
  pulse: true,
  quantity: '88',
  size: 12,
}
