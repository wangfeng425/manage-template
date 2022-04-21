import React, { useState } from 'react'
import { Layout } from 'antd';
import { Route, Routes, Navigate } from 'react-router-dom'
import { BaseRouter } from './../../routers/baseRouter'
import SiderNav from '../siderNav';
import HearBar from '../headerBar'

const { Header, Content, Sider } = Layout;

const Home = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="overflow-hidden hp100">
      <Sider collapsed={collapsed}
        collapsible
        trigger={null}
      >
        <SiderNav/>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: '0 16px' }}>
          <HearBar collapsed={collapsed}
            onToggle={()=>setCollapsed(!collapsed)}
          />
        </Header>
        <Content className="overflow-auto relative pl10 pr10">
          {
            <Routes>
              <Route element={<Navigate to="/welcome"/>}
                path="*"
              />
              {
                BaseRouter.map((router: any) => {
                  return (
                    <Route element={<router.component />}
                      key={router.value}
                      path={router.path}
                    />
                  )
                })
              }
            </Routes>}
        </Content>
        {/* <Footer style={{ textAlign: 'center' }}>欢迎使用</Footer> */}
      </Layout>
    </Layout>
  );
}

export default Home
