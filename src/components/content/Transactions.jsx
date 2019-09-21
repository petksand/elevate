import React from "react";
import { Card, Icon, Avatar } from 'antd';

const { Meta } = Card;

class Transactions extends React.Component {
    render() {
        return (<Card
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
        );
    }
}

export default Transactions;