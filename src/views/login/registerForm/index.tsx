import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { setStorage } from '@/utils/storage'
interface propsType {
  className: string,
  // eslint-disable-next-line no-unused-vars
  switchShowBox: (box: string)=>void
}

const registerForm = (props: propsType) => {
  const [account, setAccount] = useState('')
  const [accountPrompt, setAccountPrompt] = useState(false)
  const [password, setPassword] = useState('')
  const [passwordPrompt, setPasswordPrompt] = useState(false)
  const [confirmPassword, setConfirmPassword] = useState('')
  const [confirmPasswordPrompt, setConfirmPasswordPrompt] = useState(false)
  const [passwordErrorText, setPasswordErrorText] = useState('请确认密码')

  const onFinish = () => {
    if (!account) {
      setAccountPrompt(true)
      return
    }
    if (!password) {
      setPasswordPrompt(true)
      return
    }
    if (!confirmPassword) {
      setConfirmPasswordPrompt(true)
      return
    }
    if (password === confirmPassword) {
      setStorage({ name: 'account', value: account })
      setStorage({ name: 'password', value: password })
      props.switchShowBox('login')
    } else {
      setPasswordErrorText('两次密码输入不一致！')
      setConfirmPasswordPrompt(true)
      setConfirmPassword('')
    }
  };

  const gobackLogin = () => {
    props.switchShowBox('login')
  }

  const handleAccountChange = (e: any) => {
    setAccount(e.target.value)
    if (!e.target.value) {
      setAccountPrompt(true)
    } else {
      setAccountPrompt(false)
    }
  }

  const handlePasswordChange = (e: any) =>{
    setPassword(e.target.value)
    if (!e.target.value) {
      setPasswordPrompt(true)
    } else {
      setPasswordPrompt(false)
    }
  }

  const handleConfirmPasswordChange = (e: any) => {
    setConfirmPassword(e.target.value)
    if (!e.target.value) {
      setConfirmPasswordPrompt(true)
    } else {
      setConfirmPasswordPrompt(false)
    }
  }

  return (
    <div className={props.className}>
      <h3 className="white">管理员注册</h3>
      <Form
        className="login-form mt30"
        initialValues={{ remember: true }}
        name="normal_login"
        onFinish={onFinish}
      >
        <Form.Item>
          <Input onChange={handleAccountChange}
            placeholder="账号"
            prefix={<UserOutlined className="site-form-item-icon" />}
            value={account}
          />
          {
            accountPrompt
              ? <div className="custom-tooltip">
                <p>请输入账号</p>
              </div>
              : null
          }
        </Form.Item>
        <Form.Item>
          <Input
            onChange={handlePasswordChange}
            placeholder="密码"
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            value={password}
          />
          {
            passwordPrompt
              ? <div className="custom-tooltip">
                <p>请输入密码</p>
              </div>
              : null
          }
        </Form.Item>
        <Form.Item>
          <Input
            onChange={handleConfirmPasswordChange}
            placeholder="确认密码"
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            value={confirmPassword}
          />
          {
            confirmPasswordPrompt
              ? <div className="custom-tooltip">
                <p>{passwordErrorText}</p>
              </div>
              : null
          }
        </Form.Item>

        <Form.Item>
          <Button className="login-form-button"
            htmlType="submit"
            type="primary"
          >
            注册
          </Button>
          <span className="white fs13"
            onClick={gobackLogin}
          >返回登录</span>
        </Form.Item>
      </Form>
      <div className="footer">
        <div>欢迎登陆后台管理系统</div>
      </div>
    </div>
  )
}

export default registerForm