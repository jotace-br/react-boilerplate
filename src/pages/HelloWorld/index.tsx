import { Button } from 'antd'
import React from 'react'
import { Text } from './style'

export const HelloWorld: React.FC = () => {
  return (
    <div>
      <Text>Hello, world!</Text>
      <Button>Cool antd button!</Button>
    </div>
  )
}
