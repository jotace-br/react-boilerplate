import React from 'react'
import { Form, Input, Button, Row, Col, Typography, Card } from 'antd'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'

const { Title } = Typography

export const TopOutplaysContainer: React.FC = () => {
  return (
    <>
      <Form.List name="outplays">
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
                    {name + 1}° Outplay
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
                  label="Clip description:"
                  rules={[{ required: true, message: 'Missing description' }]}
                >
                  <Input
                    allowClear
                    placeholder="Type the description here..."
                  />
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
                Add outplay
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </>
  )
}
