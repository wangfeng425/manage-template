import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Col } from 'antd';
import { UserOutlined, LockOutlined, SafetyOutlined } from '@ant-design/icons';
import { randomNum } from '@/utils/common';
import { setStorage, getStorage } from '@/utils/storage'
import { useNavigate } from 'react-router-dom'

interface propsType {
  className: string,
  // eslint-disable-next-line no-unused-vars
  switchShowBox: (box: string)=>void
}

const loginForm = (props: propsType) => {
  const [code, setCode] = useState('')
  const [account, setAccount] = useState('')
  const [accountPrompt, setAccountPrompt] = useState(false)
  const [password, setPassword] = useState('')
  const [passwordPrompt, setPasswordPrompt] = useState(false)
  const [authCode, setAuthCode] = useState('')
  const [authCodePrompt, setAuthCodePrompt] = useState(false)
  const [passwordErrorText, setPasswordErrorText] = useState('请输入密码')
  const [codeErrorText, setCodeErrorText] = useState('请输入验证码')
  const navigate = useNavigate()

  useEffect(()=>{
    if (!code) {
      createCode()
    }
  })

  let canvas: HTMLCanvasElement | undefined;

  /**
   * 生成验证码
   */
  const createCode = () => {
    if (canvas) {
      const ctx = canvas.getContext('2d')
      const chars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
      let code = ''
      if (ctx) {
        ctx.clearRect(0, 0, 80, 39)
        for (let i = 0; i < 4; i++) {
          const char = chars[randomNum(0, 57)]
          code += char
          ctx.font = randomNum(20, 25) + 'px SimHei' // 设置字体随机大小
          ctx.fillStyle = '#D3D7F7'
          ctx.textBaseline = 'middle'
          ctx.shadowOffsetX = randomNum(-3, 3)
          ctx.shadowOffsetY = randomNum(-3, 3)
          ctx.shadowBlur = randomNum(-3, 3)
          ctx.shadowColor = 'rgba(0, 0, 0, 0.3)'
          const x = 80 / 5 * (i + 1)
          const y = 39 / 2
          const deg = randomNum(-25, 25)
          /** 设置旋转角度和坐标原点**/
          ctx.translate(x, y)
          ctx.rotate(deg * Math.PI / 180)
          ctx.fillText(char as string, 0, 0)
          /** 恢复旋转角度和坐标原点**/
          ctx.rotate(-deg * Math.PI / 180)
          ctx.translate(-x, -y)
        }
        setCode(code)
      }
    }
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

  const handleCodeChange = (e: any) => {
    setAuthCode(e.target.value)

    if (!e.target.value) {
      setAuthCodePrompt(true)
    } else {
      setAuthCodePrompt(false)
    }
  }

  const register = () => {
    props.switchShowBox('register')
  }

  const onFinish = () => {
    if (!account) {
      setAccountPrompt(true)
      return
    }
    if (!password) {
      setPasswordPrompt(true)
      return
    }
    if (!authCode) {
      setAuthCodePrompt(true)
      return
    }
    if (code === authCode) {
      const storageAccount = getStorage('account')
      const storagePassword = getStorage('password')
      if ((storageAccount && storagePassword && storageAccount === account && storagePassword === password) || (account === 'admin' && password === '123456')) {
        setStorage({ name: 'userName', value: account })
        navigate('/')
      } else {
        createCode()
        setPasswordPrompt(true)
        setPasswordErrorText('密码错误')
        setPassword('')
        setAuthCode('')
      }
    } else {
      createCode()
      setCodeErrorText('验证码错误')
      setAuthCodePrompt(true)
      setAuthCode('')
    }
  };
  return (
    <div className={props.className}>
      <h3 className="white">管理员登录</h3>
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
                <p>{passwordErrorText}</p>
              </div>
              : null
          }
        </Form.Item>
        <Form.Item>
          <Col span={15}>
            <Input
              maxLength={4}
              onChange={handleCodeChange}
              placeholder="验证码"
              prefix={<SafetyOutlined className="site-form-item-icon" />}
              value={authCode}
            />
          </Col>
          <Col span={9}>
            <canvas height="39"
              onClick={createCode}
              // eslint-disable-next-line no-return-assign
              ref={(el: any) => canvas = el}
              width="80"
            />
          </Col>
          {
            authCodePrompt
              ? <div className="custom-tooltip right-135">
                <p>{codeErrorText}</p>
              </div>
              : null
          }
        </Form.Item>

        <Form.Item>
          <Button className="login-form-button"
            htmlType="submit"
            type="primary"
          >
            登 录
          </Button>
          <span className="white fs13"
            onClick={register}
          >注册</span>
        </Form.Item>
      </Form>
      <div className="footer">
        <div>欢迎登陆后台管理系统</div>
      </div>
    </div>
  )
}

export default loginForm
