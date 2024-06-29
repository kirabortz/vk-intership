import { Meta, Story } from '@storybook/react'

import { Loading } from './Loading.tsx'

export default {
  title: 'Components/Loading',
  component: Loading,
} as Meta

const Template: Story = args => (
  <div style={{ position: 'relative', width: '20px' }}>
    <Loading {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {}
