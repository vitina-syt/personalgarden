import React from 'react'
import { Button, Input, Form, Picker, Space } from 'react-vant'

const columns = [
  { text: '86 🇨🇳', value: '86' },
  { text: '87 🇺🇸', value: '87' },
  { text: '88 🏳️‍🌈', value: '88' },
  { text: '89 🏳️‍⚧️', value: '89' },
  { text: '90 🇴🇲', value: '90' },
  { text: '91 🇵🇪', value: '91' },
  { text: '92 🇩🇪', value: '92' },
]


// 自定义表单项
const MobileInput = ({
  value = { prefix: '', value: '' },
  onChange,
}) => {
  const trigger = (changedValue) => {
    onChange?.({ ...value, ...changedValue })
  }

  const onMobileChange = (value) => {
    trigger({ value })
  }

  const onPrefixChange = (prefix) => {
    trigger({ prefix })
  }
  return (
    <>
      <Picker
        popup
        value={value.prefix}
        placeholder={false}
        columns={columns}
        onConfirm={onPrefixChange}
      >
        {(_, selectRow, actions) => {
          return (
            <Space>
              <Space align='center' onClick={() => actions.open()}>
                <div>+{selectRow?.text}</div>
              </Space>
              <Input
                value={value.value}
                placeholder='请输入手机号'
                onChange={onMobileChange}
              />
            </Space>
          )
        }}
      </Picker>
    </>
  )
}

const Datafilter= (props) => {
  const [form] = Form.useForm()

  const checkMobileInput = (_, value) => {
    if (value.prefix && value.value) {
      return Promise.resolve()
    }
    if (!value.prefix) Promise.reject(new Error('请选择国家区号!'))
    return Promise.reject(new Error('手机号不能为空!'))
  }

  const onFinish = values => {
    props.getdata(values);//传值给父组件
    console.log(values)
  }

  return (
    <Form
      layout='vertical'
      form={form}
      onFinish={onFinish}
      footer={
        <div style={{ margin: '16px 16px 0' }}>
          <Button round nativeType='submit' type='primary' block>
            提交
          </Button>
        </div>
      }
    >
      <Form.Item name='name' label='姓名'>
        <Input placeholder='请输入用户姓名' />
      </Form.Item>
      <Form.Item
        initialValue={{ prefix: '86', value: '' }}
        name='mobile'
        label='手机号'
        rules={[{ required: true }, { validator: checkMobileInput }]}
      >
        <MobileInput />
      </Form.Item>
    </Form>
  )
}
export default Datafilter;