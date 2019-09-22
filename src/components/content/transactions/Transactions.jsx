import React, { useContext, useEffect, useState } from "react";
import { Card, Col, Row, Icon, Avatar, Table, Divider, Tag, Popover } from 'antd';
import { AppContext } from '../../../App.context';
import { TransactionsTable } from './TransactionsTable';

const { Meta } = Card;

export const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  const { uniwards } = useContext(AppContext);

  const qrClicked = evt => {
    console.log(evt);
  };

  useEffect(() => {
    uniwards
      .transactions()
      .then(setTransactions);
  }, [uniwards]);

  return (
    <div style={{ padding: '30px' }}>
      <Row gutter={16}>
        <Col span={8}>
          <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="mos mos image"
                src="https://discover.rbcroyalbank.com/wp-content/uploads/IMG_2577-1.jpg"
              />
            }
            actions={[
              <Popover content={<img src="/qrcodes/Starbucks_5d8747efdcfff11b0977c0be_qr_code.jpg" />} title="Mos Mos">
                <Icon type="qrcode" key="qrcode" />
              </Popover>,
              <Icon type="dollar" key="dollar" />,
            ]}
          >
            <Meta
              avatar={<Avatar src={require("./assets/mos_mos_avatar.PNG")} />}
              title="Mos Mos"
              description="Mos Mos elevates the average coffee experience by steaming all added milk and incorporating it by slowly stirring beverages while pouring, so all the flavour and milk doesn't settle at the bottom."
            />
          </Card>
        </Col>
        <Col span={8} style={{ height: '100%' }}>
          <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="tophat"
                src={require("./assets/top_hat.png")}
              />
            }
            actions={[
              <Popover content={<img src="/qrcodes/Swiss_Chalet_5d8747eedcfff11b0977c0bd_qr_code.jpg" />} title="Top Hat">
                <Icon type="qrcode" key="qrcode" />
              </Popover>,
              <Icon type="dollar" key="dollar" />,
            ]}
          >
            <Meta
              avatar={<Avatar src={require("./assets/tophat_avatar.png")} />}
              title="TopHat"
              description="Top Hat is education software built for professors and teaching faculty. Make your classroom come to life with the best active learning platform. Let's Make Education Better."
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="revelo"
                src={require("./assets/revelo.jpg")}
              />
            }
            actions={[
              <Popover content={<img src="/qrcodes/Metro_5d8747ffdcfff11b0977c0c8_qr_code.jpg" />} title="Top Hat">
              <Icon type="qrcode" key="qrcode" />
            </Popover>,
              <Icon type="dollar" key="dollar" />,
            ]}
          >
            <Meta
              avatar={<Avatar src={require("./assets/revelo_avatar.jpg")} />}
              title="Revelo bikes"
              description="Revelo folding bikes fold and roll faster, store thinner, ride better and feature innovations that make life more convenient for modern riders. Simplicity and flexibility make Revelo bikes and electric bikes unlike anything else you’ve ridden."
            />
          </Card>
        </Col>
      </Row>
      <Divider />
      <Row><TransactionsTable /></Row>
    </div>
  );
}


export default Transactions;