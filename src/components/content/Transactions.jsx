import React from "react";
import { Card, Col, Row, Icon, Avatar } from 'antd';

const { Meta } = Card;

class Transactions extends React.Component {
  render() {
    return (
      <div style={{ background: '#ECECEC', padding: '30px' }}>
        <Row gutter={16}>
          <Col span={8}>
            <Card
              style={{ width: 300 }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[
                <Icon type="qrcode" key="qrcode" />,
                <Icon type="dollar" key="dollar" />,
              ]}
            >
              <Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title="Mos Mos"
                description="This is the description"
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card
              style={{ width: 300 }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[
                <Icon type="qrcode" key="qrcode" />,
                <Icon type="dollar" key="dollar" />,
              ]}
            >
              <Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title="Mos Mos"
                description="This is the description"
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card
              style={{ width: 300 }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[
                <Icon type="qrcode" key="qrcode" />,
                <Icon type="dollar" key="dollar" />,
              ]}
            >
              <Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title="Mos Mos"
                description="This is the description"
              />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Transactions;