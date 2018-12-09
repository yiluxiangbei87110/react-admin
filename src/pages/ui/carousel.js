import React from 'react'
import { Card, Carousel } from 'antd'
import './ui.less'
export default class Carousels extends React.Component {
    render() {
        return (
            <div>
              <Card title="图片轮播" >
                <Carousel vertical >
                  <img src={'https://cdn.goodq.top/caches/5cb9fb790b2c31b7acfc050a6f7e15b2/aHR0cDovL3d3dy54ZmlzaHRvdXIuY29tLmNuL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wNC80ZjBhMDZhNjYyYzEyNmQ4M2Y0YWVhMzRiZTRkMWI2Yi5qcGc_p_p100_p_3D.jpg'}/>
                  <img src={'https://cdn.goodq.top/caches/5cb9fb790b2c31b7acfc050a6f7e15b2/aHR0cDovL3d3dy54ZmlzaHRvdXIuY29tLmNuL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wNC9mOWQ0MDgxNjZiN2Q4YmY3Yjk4MmQ3ZTllMWViZmMzZi5qcGc_p_p100_p_3D.jpg'}/>
                  <img src={'https://cdn.goodq.top/caches/5cb9fb790b2c31b7acfc050a6f7e15b2/aHR0cDovL3d3dy54ZmlzaHRvdXIuY29tLmNuL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8xMS8zMWNlMDY5NDUzMDA1YWY5OWFkODk0YzkyYmIzOGRhYi5wbmc_p_p100_p_3D.png'}/>
                  <img src={'https://cdn.goodq.top/caches/5cb9fb790b2c31b7acfc050a6f7e15b2/aHR0cDovL3d3dy54ZmlzaHRvdXIuY29tLmNuL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8xMS8zZWZkMDRiOTFjYWNjNjY4NGI0ZjI1OTdjYjk1NTBlNy5wbmc_p_p100_p_3D.png'}/>
                </Carousel>
              </Card>
            
              <Card title="图片轮播">
                  <Carousel autoplay>
                    <div><h3>1</h3></div>
                    <div><h3>2</h3></div>
                    <div><h3>3</h3></div>
                    <div><h3>4</h3></div>
                  </Carousel>
               </Card>
            </div>

        )
    }
}