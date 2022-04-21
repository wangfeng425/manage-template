import React, { useEffect } from 'react'
import { Table, Image, Card } from 'antd'
import { getProduct } from './../store/actionCreator'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

const reduxAsync = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProduct())
  }, [dispatch])

  const { product } = useSelector((state: any) => ({
    product: state.product.data
  }), shallowEqual)

  return (
    <div className="pt10">
      <Card bordered={false}
        title="redux异步">
        <span>采用redux-thunk在action进行异步请求</span>
      </Card>
      <Table className="mt10"
        columns={columns}
        dataSource={product}
        rowKey="_id"
      />
    </div>
  )
}
const columns = [
  {
    title: '产品',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '描述',
    key: 'desc1',
    render: (record: any) => (
      <div>
        <p>{record.desc1}</p>
        <p>{record.desc2}</p>
        <p>{record.desc3}</p>
      </div>
    )
  },
  {
    title: '公司',
    dataIndex: 'company',
    key: 'company'
  },
  {
    title: '价格',
    dataIndex: 'price',
    key: 'price'
  },
  {
    title: '产品图片',
    key: 'bgImg',
    render: (record: any) => (
      <Image
        src={record.bgImg}
        width={200}
      />
    )
  }
];
export default reduxAsync