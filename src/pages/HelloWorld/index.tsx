import { Button, Modal, Steps, message, Form } from 'antd'
import { TopFivePlaysContainer } from 'containers/Layout/topFivePlaysContainer'
import { TopOutplaysContainer } from 'containers/Layout/topOutplaysContainer'
import { TopTextContainer } from 'containers/Layout/topTextContainer'
import { FormatToMessage } from 'helpers/FormatValuesToMessage'
import { FormValue } from 'interfaces/formInterfaces'
import moment from 'moment'
import React, { useState } from 'react'

const { Step } = Steps

const steps = [
  {
    title: 'Top text',
    content: <TopTextContainer />
  },
  {
    title: 'Top plays',
    content: <TopFivePlaysContainer />
  },
  {
    title: 'Outplays',
    content: <TopOutplaysContainer />
  }
]

export const HelloWorld: React.FC = () => {
  const [current, setCurrent] = useState<number>(0)
  const [form] = Form.useForm()
  const [formValues, setFormValues] = useState<FormValue>({
    topMessage: '',
    topRangepicker: [moment(), moment().add(7, 'days')],
    topFinalMessageEmote: '',
    topFive: [],
    outplays: []
  })
  const [resultModal, setResultModal] = useState(false)

  const next = async () => {
    const isValid = await form.validateFields()

    if (isValid) {
      const fields = form.getFieldsValue()
      setFormValues({ ...formValues, ...fields })
      setCurrent((current: number) => current + 1)
    }
  }

  const prev = () => {
    setCurrent((current: number) => current - 1)
  }

  const onChange = (value: number) => {
    setCurrent(value)
  }

  const done = async () => {
    const fields = form.getFieldsValue()
    setFormValues({ ...formValues, ...fields })
    setResultModal(true)
    message.success('Processing complete!')
  }

  const copyDivToClipboard = () => {
    const range = document.createRange()
    const selectedDiv = document.getElementById('generated-div')
    range?.selectNode(selectedDiv as Node)
    window?.getSelection()?.removeAllRanges() // clear current selection
    window?.getSelection()?.addRange(range) // to select text
    document.execCommand('copy')
    window?.getSelection()?.removeAllRanges() // to deselect

    message.success('Message copied to clipboard!')
  }

  return (
    <>
      <Modal
        title="Best plays generator"
        visible
        centered
        width="90%"
        footer={
          <div className="steps-action">
            {current > 0 && (
              <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                Previous
              </Button>
            )}
            {current < steps.length - 1 && (
              <Button type="primary" onClick={() => next()}>
                Next
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button type="primary" onClick={() => done()}>
                Done
              </Button>
            )}
          </div>
        }
      >
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Steps
            direction="vertical"
            size="small"
            current={current}
            onChange={onChange}
            style={{ width: '40%', height: 'fit-content' }}
          >
            {steps.map(item => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>
          <Form
            name="form"
            form={form}
            layout="vertical"
            style={{ width: '100%' }}
          >
            <div className="steps-content" style={{ width: '100%' }}>
              {steps[current].content}
            </div>
          </Form>
        </div>
      </Modal>

      <Modal
        visible={resultModal}
        centered
        title="Final result"
        okText="Copy to clipboard"
        onOk={() => {
          copyDivToClipboard()
          setResultModal(false)
        }}
        onCancel={() => setResultModal(false)}
      >
        <FormatToMessage values={formValues} />
      </Modal>
    </>
  )
}
