import React from 'react';
import { Card } from 'antd';
import ReactEchartsCore from 'echarts-for-react/lib/core';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/dataZoom';
import 'echarts/lib/component/visualMap';
import 'echarts/lib/component/markPoint';
import 'echarts/lib/component/markLine';
import 'echarts/lib/component/markArea';
import 'echarts/lib/component/timeline';
import 'echarts/lib/component/toolbox';
echarts.registerTheme('myTheme', {
    backgroundColor: 'rgb(15,55,95)'
});
export default class Bar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '柱形图'
        }
    }
    // 获取配置
    getOption = () => {
        const option = {
            // 标题
            title: {
                text: 'ECharts'
            },
            // 触发类型，poptip方式显示数据，默认（'item'）数据触发，可选为：'item' | 'axis' 
            tooltip: {
                trigger: 'axis'
            },
            // 图例 读的应该是legend的name
            legend: {
                data: ['销量']
            },
            // 工具箱
            toolbox: {
                //显示策略，可选为：true（显示） | false（隐藏），默认值为false  
                show: true,
                //启用功能，目前支持feature，工具箱自定义功能回调处理  
                feature: {
                    //辅助线标志  
                    mark: { show: true },
                    //dataZoom，框选区域缩放，自动与存在的dataZoom控件同步，分别是启用，缩放后退  
                    dataZoom: {
                        show: true,
                        title: {
                            dataZoom: '区域缩放',
                            dataZoomReset: '区域缩放后退'
                        }
                    },
                    //数据视图，打开数据视图，可设置更多属性,readOnly 默认数据视图为只读(即值为true)，可指定readOnly为false打开编辑功能  
                    dataView: { show: true, readOnly: true },
                    //magicType，动态类型切换，支持直角系下的折线图、柱状图、堆积、平铺转换  
                    magicType: { show: true, type: ['line', 'bar'] },
                    //restore，还原，复位原始图表  
                    restore: { show: true },
                    //saveAsImage，保存图片（IE8-不支持）,图片类型默认为'png'  
                    saveAsImage: { show: true }
                }
            },
            xAxis: {
                // show: false,  是否显示x坐标轴
                type: 'value' // type: 'category',   设置坐标轴类型，共category，value，time三种类型
            },
            //不可省略
            yAxis: {
                data: ['衬衫', '裤子', '羊毛衫', '毛衣', '高跟鞋', '袜子'],
                type: 'category'
            },
            // 系列数据
            series: [{
                // {
                //     name: '销量',
                //     type: 'bar',
                //     data: [45, 67, 78, 123, 45, 90]
                // }, {
                //     name: '访问趋势',
                //     type: 'line',
                //     data: [45, 67, 78, 123, 45, 90]
                // }
                name: '销量',
                type: 'bar',
                data: [45, 67, 78, 123, 45, 90],
                markPoint: {
                    data: [{
                            type: 'max',
                            name: '最大值'
                        },
                        {
                            type: 'min',
                            name: '最小值',
                            symbol:'arrow'
                        }
                    ]
                },
                markLine:{
                    data:[{type:'average',name:'平均值'}]
                }
            }
            ]
        };
        return option;
    }


    render() {
        return (
            <div>
        <Card title={this.state.title}>
          <ReactEchartsCore 
            echarts={echarts}
            style={{ height: '500px' }}
            className='noneClass' 
            theme='dark'
            option={this.getOption()} 
            >
        </ReactEchartsCore>
        </Card>
    </div>)
    }
}