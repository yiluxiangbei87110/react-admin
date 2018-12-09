import React from 'react';
import { Card } from 'antd';
import ReactEchartsCore from 'echarts-for-react/lib/core';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/pie';
echarts.registerTheme('myTheme',{
    backgroundColor: 'rgb(15,55,95)'
});
export default class Bar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            loadingChart:true,
            data:[
                { value: 500, name: 'Android' },
                { value: 200, name: 'IOS' },
                { value: 360, name: 'PC' },
                { value: 100, name: 'Other' }
             ]
        }
    }
    onChartClick=()=>{
        const data=this.state.data;
        data.push({
            value:Math.random()*1000,
            name:'Other'+Math.random()
        });
        this.setState({
            data
        });
    }
    onChartLegendselectchanged = () => {
        console.log(2)
    }

    // 方法必须放在上面，不然找不到对应的方法
    onEvents = {
        'click': this.onChartClick,
        'legendselectchanged': this.onChartLegendselectchanged
    }

    // 获取配置
    getOption=()=>{
            const option = {
                title:{
                    text:'ECharts 数据统计'
                }, 
                tooltip:{
                    trigger:'item',
                    formatter:"{a} <br/> {b} :{c} ({d}%)"
                },
                lengend:{
                    orient:'vertical',
                    left:'left',
                    data:['Android','IOS','PC','Other']
                },        
                series:[{
                    name:'访问量',
                    type:'pie',    
                    radius:'60%', 
                    data:this.state.data
                }]
            };
            return option;
    }

    // charts loadReady后的回调 模拟回调
    onChartReadyCallback=()=>{
        setTimeout(()=>{
            this.setState({
                loadingChart: false
            });
        } ,800);
    }

  render(){
    return (
      <div>
        <p>{JSON.stringify(this.state.data)}</p>
        <Card title="饼图">
          <ReactEchartsCore 
            echarts={echarts}
            style={{ height: '500px' }}
            className='noneClass' 
            theme='light'
            onChartReady={this.onChartReadyCallback}
            option={this.getOption()}
            showLoading={this.state.loadingChart}
            onEvents={this.onEvents}
            lazyUpdate={(this.getOption(),false)} 
            >
        </ReactEchartsCore>
        </Card>
    </div>)
  }
}