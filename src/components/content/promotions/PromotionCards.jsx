import React from "react";

import { Card, Icon, Avatar, Typography, Carousel } from "antd";
const { Text } = Typography;
const { Meta } = Card;

const ClassAsk = () => (
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
        <Avatar shape="square" src="https://raw.githubusercontent.com/HardikPaliwal/ClassAsk/master/public/favicon.png" />
      }
      title="ClassAsk"
      description="Post-secondary institutions receive 20% off for a limited time. Conditions apply; see details for more information."
    />
  </Card>
);

const Blip = () => (
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
        <Avatar shape="square" src="https://static.wixstatic.com/media/8a8faf_879cca6ad15740f9b202e69abed631c1~mv2.png/v1/fill/w_130,h_130,al_c,q_80,usm_0.66_1.00_0.01/AppStore_white_1024.webp" />
      }
      title="Blip"
      description="Post-secondary get free deliveries for 2 weeks. Conditions apply; see details for more information."
    />
  </Card>
);

const Mowies = () => (
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
        <Avatar shape="square" src="https://d15mvavv27jnvy.cloudfront.net/EMrek/a48b9a669e4554c295a66557df0df090.jpg" />
      }
      title="Mowies"
      description="Discounted movies for students. Conditions apply; see details for more information."
    />
  </Card>
);

const Oselly = () => (
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
        <Avatar shape="square" src="https://oselly.com/assets/logo.png" />
      }
      title="Oselly"
      description="Students get 50% off on their first ball game. Conditions apply; see details for more information."
    />
  </Card>
);

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

const Univjobs = () => (
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
        <Avatar shape="square" src="data:image/png;base64,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" />
      }
      title="Univjobs"
      description="Discounts for student postings (10-29%). Conditions apply; see details for more information."
    />
  </Card>
);

const cards = [Chazle, TeamStudy, Univjobs, ClassAsk, Oselly, Blip, Mowies];

const repeat = arr => count =>
  [...Array(count).keys()].reduce((p, _) => [...p, ...arr], arr);

export const PromotionCards = () => (
  <>
    {repeat(cards)(0).map((Card, i) => (
      <Card key={Card.name + i} />
    ))}
  </>
);
