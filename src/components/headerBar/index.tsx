import React from 'react'
import { MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined } from '@ant-design/icons';
import { Menu, Dropdown, Avatar } from 'antd';
import { useNavigate } from 'react-router-dom'
import { getStorage, deleteStorage } from '@/utils/storage'
import './index.scss'

interface propsType {
  onToggle: () => void,
  collapsed: boolean
}

const HearBar = (props: propsType) => {
  const navigate = useNavigate()

  const loginout = () => {
    deleteStorage('userName')
    navigate('/login')
  }

  const menu = (
    <Menu>
      {/* <Menu.Item>
        修改密码
      </Menu.Item> */}
      <Menu.Item onClick={loginout}>
        退出登录
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="flex flex-hj pr20">
      <div onClick={() => { props.onToggle() }}>
        {
          props.collapsed ? <MenuUnfoldOutlined className="trigger"/> : <MenuFoldOutlined className="trigger"/>
        }
      </div>
      <div>
        <span className="mr10">{getStorage('userName')}</span>
        <Dropdown overlay={menu}
          overlayClassName="dropdown-style"
          placement="bottom">
          <a className="ant-dropdown-link">
            <Avatar icon={<UserOutlined />}
              size="large" />
          </a>
        </Dropdown>
      </div>
    </div>
  )
}
export default HearBar