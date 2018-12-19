import React from 'react'
import { Card, Carousel } from 'antd'
import './ui.less'
export default class Carousels extends React.Component {
    render() {
        return (
              <Card title="图片轮播" >
                <Carousel autoplay>
                  <img src="/images/1.jpg"/>
                  <img src="/images/2.jpg"/>
                  <img src="/images/3.jpg"/>
                  <img src="/images/4.jpg"/>
                  <img src="/images/5.jpg"/>
                </Carousel>
              </Card>
        )
    }
}