import React, { useContext, useEffect, useState } from "react";
import { Card, Col, Row, Icon, Avatar, Table, Divider, Tag } from 'antd';
import { AppContext } from '../../../App.context';

const { Meta } = Card;

export const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  const { uniwards } = useContext(AppContext);

  useEffect(() => {
    uniwards
      .transactions()
      .then(setTransactions);
  }, [uniwards]);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <span>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </span>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <a>Find deals for {record.name}</a>
          <Divider type="vertical" />
          <a>Details</a>
        </span>
      ),
    },
  ];

  let current_datetime = new Date()
  let formatted_date = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds() 
  
  const data = [
    {
      key: '1',
      name: 'Mos Mos',
      amount: "$"+15,
      date: formatted_date,
      location: '88 Queens Quay West',
      tags: ['coffee', 'food'],
    },
    {
      key: '2',
      name: "TopHat",
      amount: "$"+42,
      date: formatted_date,
      location: '151 Bloor St W Suite 200',
      tags: ['education','software'],
    },
    {
      key: '3',
      name: 'Revelo Bikes',
      amount: "$"+1520,
      date: formatted_date,
      location: '42 Industrial Street',
      tags: ['bike', 'outdoor', 'sports'],
    },
  ];

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
              <Icon type="qrcode" key="qrcode" />,
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
        <Col span={8}>
          <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="tophat"
                src={require("./assets/top_hat.png")}
              />
            }
            actions={[
              <Icon type="qrcode" key="qrcode" />,
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
              <Icon type="qrcode" key="qrcode" />,
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
      <Row><Table columns={columns} dataSource={data} /></Row>
    </div>
  );
}


export default Transactions;