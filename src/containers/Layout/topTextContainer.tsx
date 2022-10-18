import React from 'react'
import { Form, Input, DatePicker } from 'antd'

export const TopTextContainer: React.FC = () => {
  return (
    <>
      <Form.Item
        label="Text message:"
        name="topMessage"
        rules={[{ required: false }]}
      >
        <Input.TextArea
          showCount
          maxLength={250}
          autoSize
          allowClear
          rows={2}
          placeholder="Type your message here..."
        />
      </Form.Item>
      <Form.Item
        label="Period"
        name="topRangepicker"
        rules={[{ required: true, message: 'Period must be inputed' }]}
      >
        <DatePicker.RangePicker style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item
        label="Final emote?"
        name="topFinalMessageEmote"
        rules={[{ required: false }]}
      >
        <Input allowClear placeholder="Insert your emote here..." />
      </Form.Item>
    </>
  )
}
