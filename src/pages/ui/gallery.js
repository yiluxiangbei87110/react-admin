
import React from 'react'
import {Card,Row,Col,Modal} from 'antd'
const { Meta } = Card;
export default class Gallery extends React.Component{
      state={
        visible:false
    }

    openGallery = (imgSrc)=>{
        this.setState({
            visible:true,
            currentImg: '/images/'+imgSrc
        })
    }
  render(){
      const imgs=[
        ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg'],
        ['6.jpg','7.jpg','8.jpg','9.jpg','10.jpg'],
        ['11.jpg','12.jpg','13.jpg','14.jpg','15.jpg']
      ]

      const imgList=imgs.map(list=> list.map(item=>
          <Card 
              key={item}
              hoverable
              style={{ width: 240 ,marginBottom:4}}
              cover={<img   src={'/images/'+item}  onClick={()=>this.openGallery(item)} />}
            >
          <Meta
            title="Europe Street beat"
            description="www.instagram.com"
          />
        </Card>

        ))
    return (
        <div>
          <Row gutter={10}>
            <Col md={8}>{imgList[0]}</Col>
            <Col md={8}>{imgList[1]}</Col>
            <Col md={8}>{imgList[2]}</Col>
          </Row>

          <Modal
              width={300}
              height={500}
              visible={this.state.visible}
              title="图片画廊"

              onCancel={()=>{
                  this.setState({
                      visible:false
                  })
              }}
              footer={null}
          >
             {<img src={this.state.currentImg}  style={{width:'100%'}}/>}
          </Modal>
        </div>
      )
  }
}
