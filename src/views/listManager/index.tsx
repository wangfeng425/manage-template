import React from 'react'
import { Input, Button, Table, Tag, Space, Card } from 'antd'
import PlSearch from '../../components/search/plSearch'
import PlSearchItem from '../../components/search/plSearchItem'

const SearchFooter = (
  <div>
    <Button type="primary">导 出</Button>
    <span className="pull-right hl34">共10条</span>
  </div>
)

const listManager = () => {
  return (
    <div className="pt10">
      <Card bordered={false}
        title="搜索框的封装使用">
        <span>数据展示中常用到的搜索，进行了简易的封装，减少代码冗杂</span>
      </Card>
      <PlSearch footer={SearchFooter}
        isShowSearch
      >
        <PlSearchItem content={<Input/>}
          label={'姓名'}
        ></PlSearchItem>
        <PlSearchItem content={<Input/>}
          label={'姓名'}
        ></PlSearchItem>
        <PlSearchItem content={<Input/>}
          label={'姓名'}
        ></PlSearchItem>
        <PlSearchItem content={<Input/>}
          label={'姓名'}
        ></PlSearchItem>
        <PlSearchItem content={<Input/>}
          label={'姓名'}
        ></PlSearchItem>
      </PlSearch>
      <Table className="mt10"
        columns={columns}
        dataSource={data}
      />
    </div>
  )
}
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text: string) => <a>{text}</a>
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age'
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address'
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags: string[]) => (
      <>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color}
              key={tag}
            >
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    )
  },
  {
    title: 'Action',
    key: 'action',
    render: (text: string, record: any) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    )
  }
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer']
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser']
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher']
  }
];
export default listManager
