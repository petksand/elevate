import React from "react";

import { Card, Icon, Avatar, Typography, Carousel } from "antd";
const { Text } = Typography;
const { Meta } = Card;

const TeamStudy = () => (
  <Card
    style={{ width: 300, margin: "1.5rem" }}
    actions={[
      <div>
        <Icon type="info-circle" key="info" />
        <Text style={{ padding: "10px" }}>Details</Text>
      </div>
    ]}
  >
    <Meta
      avatar={
        <Avatar shape="square" src="https://media.licdn.com/dms/image/C560BAQHnbkwXn-4pLQ/company-logo_200_200/0?e=2159024400&v=beta&t=oMGIsvYIrx8HPgq7YiI3GQqxkftiICm_Lat5ejjrpGc" />
      }
      title="Team Study"
      description="Free study notes. Conditions apply; see details for more information."
    />
  </Card>
);

const Chazle = () => (
  <Card
    style={{ width: 300, margin: "1.5rem" }}
    actions={[
      <div>
        <Icon type="info-circle" key="info" />
        <Text style={{ padding: "10px" }}>Details</Text>
      </div>
    ]}
  >
    <Meta
      avatar={
        <Avatar shape="square" src="https://media.licdn.com/dms/image/C560BAQG8Kgxk_JNMiw/company-logo_200_200/0?e=2159024400&v=beta&t=d3HIDBybFNmfzmu9nyUaQpth7QNFedMJmp11axNTvD4" />
      }
      title="Chazle"
      description="Take 30% off your next software project. Conditions apply; see details for more information."
    />
  </Card>
);

const cards = [Chazle, TeamStudy];

const repeat = arr => count =>
  [...Array(count).keys()].reduce((p, _) => [...p, ...arr], arr);

export const PromotionCards = () => (
  <>
    {repeat(cards)(100).map((Card, i) => (
      <Card key={Card.name + i} />
    ))}
  </>
);
