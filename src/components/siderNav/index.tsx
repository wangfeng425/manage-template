import React, { useState, useEffect } from 'react';
import { Menu } from 'antd';
import { menus } from '@/assets/const'
import { getStorage } from '@/utils/storage';
import { Link, useNavigate } from 'react-router-dom'
import { createFromIconfontCN } from '@ant-design/icons';
import './index.scss'

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_3254542_5ag8fsqs6i2.js'
});

const { SubMenu } = Menu;

interface menu {
  key: number,
  title: string,
  path: string,
  children?: menu[],
  icon?: string
}

const SiderNav = () => {
  const [selectedKeys, setSelectedKeys] = useState<any[]>([])
  const [openKeys, setOpenKeys] = useState<any[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    initSiderBar(menus)
  }, [])

  // 进入初始化侧边栏，打开选中菜单
  const initSiderBar = (menuParam: menu[]) => {
    if (!getStorage('userName')) navigate('/login')
    if (!menuParam) return []
    for (const menu of menuParam) {
      if (location.hash.includes(menu.path)) {
        setSelectedKeys([String(menu.key)])
        const key = findMenuKey(menus, (data: any)=>data.key === Number(menu.key))
        setOpenKeys(key)
      }
      if (menu.children) {
        initSiderBar(menu.children)
      }
    }
  }

  // 多级菜单时，点击菜单，收起其他菜单
  const onOpenChange = (openKeyParam: string[]) => {
    const latestOpenKey = openKeyParam[openKeyParam.length - 1]
    const key = findMenuKey(menus, (data: any)=>data.key === Number(latestOpenKey))
    setOpenKeys(key)
  }

  // 获取点击菜单路径
  const findMenuKey = (menus: menu[], func: any, path: string[] = []) => {
    if (!menus) return []
    for (const data of menus) {
      path.push(JSON.stringify(data.key))
      // console.log(func(data), path)
      if (func(data)) return path
      if (data.children) {
        const findChildren: any = findMenuKey(data.children, func, path)
        if (findChildren.length) return findChildren
      }
      path.pop()
    }
    return []
  }

  const renderMenuItem = (menu: menu) => {
    return (
      <Menu.Item icon={
        menu.icon
          ? <IconFont style={{ color: 'white' }}
            type={menu.icon}
          />
          : null}
      key={menu.key}
      >
        <Link to={menu.path}>
          <span>{menu.title}</span>
        </Link>
      </Menu.Item>
    )
  }

  const renderSubMenu = (submenu: menu) => {
    return (
      <SubMenu icon={
        submenu.icon
          ? <IconFont style={{ color: 'white' }}
            type={submenu.icon}
          />
          : null}
      key={submenu.key}
      title={submenu.title}
      >
        {
          submenu.children && submenu.children.map((item: menu) => {
            return item.children && item.children.length > 0 ? renderSubMenu(item) : renderMenuItem(item)
          })
        }
      </SubMenu>
    )
  }

  return (
    <div style={{ height: '100vh', overflowY: 'scroll' }}>
      <div style={styles.logo}></div>
      <Menu mode="inline"
        onClick={({ key }) => setSelectedKeys([key])}
        onOpenChange={onOpenChange}
        openKeys={openKeys}
        selectedKeys={selectedKeys}
        theme="dark"
      >
        {
          menus && menus.map((item: menu) => {
            return item.children && item.children.length > 0 ? renderSubMenu(item) : renderMenuItem(item)
          })
        }
      </Menu>
    </div>
  )
}

const styles = {
  logo: {
    height: '32px',
    background: 'rgba(255, 255, 255, .2)',
    margin: '16px'
  }
}

export default SiderNav