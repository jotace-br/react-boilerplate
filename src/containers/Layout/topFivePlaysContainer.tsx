import React from 'react'
import { Form, Input, Button, Row, Col, Typography, Card } from 'antd'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'

const { Title } = Typography

export const TopFivePlaysContainer: React.FC = () => {
  return (
    <>
      <Form.List name="topFive">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Card
                key={key}
                hoverable
                style={{
                  width: '100%',
                  border: '1px solid #dedede',
                  padding: '1em',
                  marginBottom: '1em'
                }}
                title={
                  <Title level={5} mark>
                    {name + 1}° Play
                  </Title>
                }
                bordered
                extra={
                  <Button
                    onClick={() => remove(name)}
                    block
                    icon={<MinusCircleOutlined />}
                  >
                    Remove
                  </Button>
                }
              >
                <Row gutter={8}>
                  <Col span={12}>
                    <Form.Item
                      {...restField}
                      name={[name, 'discordLink']}
                      label="Discord URL link:"
                      rules={[
                        { required: true, message: 'Missing message link' }
                      ]}
                    >
                      <Input placeholder="discord link here..." />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      {...restField}
                      name={[name, 'discordUser']}
                      label="Discord user:"
                      rules={[{ required: true, message: 'Missing user' }]}
                      style={{ width: '100%' }}
                    >
                      <Input placeholder="@user here..." />
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item
                  {...restField}
                  name={[name, 'roleMessage']}
                  label="Message to the user:"
                  rules={[
                    { required: true, message: 'Missing message to user' }
                  ]}
                >
                  <Input.TextArea
                    showCount
                    maxLength={500}
                    autoSize
                    allowClear
                    rows={2}
                    placeholder="Type your message here..."
                  />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, 'receivedRole']}
                  label="Role received:"
                  rules={[{ required: true, message: 'Missing received role' }]}
                >
                  <Input placeholder="Insert the received role..." />
                </Form.Item>
              </Card>
            ))}
            <Form.Item style={{ marginTop: 16 }}>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add field
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </>
  )
}
