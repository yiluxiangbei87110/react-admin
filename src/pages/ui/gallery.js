
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
            currentImg: '/gallery/'+imgSrc
        })
    }
  render(){
      const imgs=[
        ['11.png','12.png','13.png','14.png','15.png'],
        ['16.png','17.png','18.png','19.png','20.png'],
        ['21.png','22.png','23.png','24.png','25.png']
      ]

      const imgList=imgs.map(list=> list.map(item=>
          <Card 
              key={item}
              hoverable
              style={{ width: 240 ,marginBottom:4}}
              cover={<img   src={'/gallery/'+item}  onClick={()=>this.openGallery(item)} />}
            >
          <Meta
            title="Europe Street beat"
            description="www.instagram.com"
          />
        </Card>

        ))
    return (
        <div className="card-wrap">
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
