import React, { useRef, useEffect } from 'react';
import { Card } from 'antd'
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from 'echarts/core';
// 引入柱状图图表，图表后缀都为 Chart
import { BarChart, LineChart, PieChart, ScatterChart } from 'echarts/charts';
// 引入提示框，标题，直角坐标系组件，组件后缀都为 Component
import { TitleComponent, TooltipComponent, GridComponent, LegendComponent } from 'echarts/components';
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from 'echarts/renderers';

// 注册必须的组件
echarts.use(
  [TitleComponent, TooltipComponent, LegendComponent, GridComponent, BarChart, LineChart, PieChart, ScatterChart, CanvasRenderer]
);

interface optionType {
  type: string,
  name?: string,
  xData?: (string | number)[],
  yData: any[]
}

const xData = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const yData = [101, 522, 2001, 3342, 3901, 3301, 2210]
const pieYData = [
  { value: 1048, name: '餐饮' },
  { value: 735, name: '娱乐' },
  { value: 580, name: '生活服务' },
  { value: 484, name: '出行住宿' },
  { value: 300, name: '户外' }
]
const scatterData = [
  [10.0, 8.04],
  [8.07, 6.95],
  [13.0, 7.58],
  [9.05, 8.81],
  [11.0, 8.33],
  [14.0, 7.66],
  [13.4, 6.81],
  [10.0, 6.33],
  [14.0, 8.96],
  [12.5, 6.82],
  [9.15, 7.2],
  [11.5, 7.2],
  [3.03, 4.23],
  [12.2, 7.83],
  [2.02, 4.47],
  [1.05, 3.33],
  [4.05, 4.96],
  [6.03, 7.24],
  [12.0, 6.26],
  [12.0, 8.84],
  [7.08, 5.82],
  [5.02, 5.68]
]

const chart = () => {
  const main1 = useRef(null);
  const main2 = useRef(null);
  const main3 = useRef(null);
  const main4 = useRef(null);
  let chartInstance1 = null;
  let chartInstance2 = null;
  let chartInstance3 = null;
  let chartInstance4 = null;

  // 绘制 加了部分颜色和圆角
  const renderChart = () => {
    const myChart1 = echarts.getInstanceByDom(main1.current as unknown as HTMLDivElement);
    const myChart2 = echarts.getInstanceByDom(main2.current as unknown as HTMLDivElement);
    const myChart3 = echarts.getInstanceByDom(main3.current as unknown as HTMLDivElement);
    const myChart4 = echarts.getInstanceByDom(main4.current as unknown as HTMLDivElement);
    if (myChart1) {
      chartInstance1 = myChart1;
    } else {
      chartInstance1 = echarts.init(main1.current as unknown as HTMLDivElement);
    }
    if (myChart2) {
      chartInstance2 = myChart2;
    } else {
      chartInstance2 = echarts.init(main2.current as unknown as HTMLDivElement);
    }
    if (myChart3) {
      chartInstance3 = myChart3;
    } else {
      chartInstance3 = echarts.init(main3.current as unknown as HTMLDivElement);
    }
    if (myChart4) {
      chartInstance4 = myChart4;
    } else {
      chartInstance4 = echarts.init(main4.current as unknown as HTMLDivElement);
    }

    chartInstance1.setOption(getOption({ type: 'line', name: 'XX收入', xData: xData, yData: yData }))
    chartInstance2.setOption(getOption({ type: 'bar', name: 'XX收入', xData: xData, yData: yData }))
    chartInstance3.setOption(getOption({ type: 'pie', name: 'XX收入', yData: pieYData }))
    chartInstance4.setOption(getOption({ type: 'scatter', yData: scatterData }))
  };

  const getOption = (opt: optionType) => {
    switch (opt.type) {
    case 'pie':
      return {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          show: true
        },
        series: [
          {
            name: 'Access From',
            type: opt.type,
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '20',
                fontWeight: 'bold'
              }
            },
            data: opt.yData
          }
        ]
      }
    case 'scatter':
      return {
        xAxis: {},
        yAxis: {},
        series: [
          {
            symbolSize: 20,
            data: scatterData,
            type: opt.type
          }
        ]
      }
    default:
      return {
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          top: '5%',
          left: '1%',
          right: '1%',
          bottom: '5%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: opt.xData,
          axisTick: {
            alignWithLabel: true
          }
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            type: opt.type,
            name: opt.name,
            itemStyle: {
              emphasis: {
                barBorderRadius: 30
              }
            },
            data: opt.yData
          }
        ]
      }
    }
  }

  useEffect(() => {
    renderChart();
  });

  return (
    <div className="pt10">
      <Card bordered={false}
        title="图表">
        <span>此页面用到的图表插件是echarts</span>
      </Card>
      <div className="flex pt10">
        <div className=" flex1 bg-white mr5">
          <p className="pt16 pb16 pl24 pr24 fs16 border-bottom-line">基础折线图</p>
          <div className="h400 p24"
            ref={main1}></div>
        </div>
        <div className="flex1 bg-white ml5">
          <p className="pt16 pb16 pl24 pr24 fs16 border-bottom-line">基础柱状图</p>
          <div className="h400 p24"
            ref={main2}></div>
        </div>
      </div>
      <div className="flex pt10">
        <div className=" flex1 bg-white mr5">
          <p className="pt16 pb16 pl24 pr24 fs16 border-bottom-line">基础饼状图</p>
          <div className="h400 p24"
            ref={main3}></div>
        </div>
        <div className="flex1 bg-white ml5">
          <p className="pt16 pb16 pl24 pr24 fs16 border-bottom-line">基础散点图</p>
          <div className="h400 p24"
            ref={main4}></div>
        </div>
      </div>
    </div>

  )
}

export default chart