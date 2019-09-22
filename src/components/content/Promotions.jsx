import React from "react";

import { Card, Icon, Avatar, Typography } from "antd";

const { Text } = Typography;
const { Meta } = Card;

class Promotions extends React.Component {
  render() {
    return (
      <div
        style={{
          padding: "1.5rem",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "flex-start"
        }}
      >
        <Card
          style={{ width: 300, marginTop: 16 }}
          actions={[
            <div>
              <Icon type="info-circle" key="info" />
              <Text style={{ padding: "10px" }}>Details</Text>
            </div>
          ]}
        >
          <Meta
            avatar={
              <Avatar src="https://www.lafabricadebordados.es/2611-large_default/reebok-logo-embroidered-patch.jpg" />
            }
            title="Reebok"
            description="Take 12% off your next purchase. Conditions apply; see details for more information."
          />
        </Card>
        <Card
          style={{ width: 300, marginTop: 16 }}
          actions={[
            <div>
              <Icon type="info-circle" key="info" />
              <Text style={{ padding: "10px" }}>Details</Text>
            </div>
          ]}
        >
          <Meta
            avatar={
              <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Xsbq68JKdT8INp0JJCBQkclv-NBgC41xp5VakmzuRojsDK4d" />
            }
            title="Gymshark"
            description="Take 70% off your next purchase of $200 or more. Conditions apply; see details for more information."
          />
        </Card>
      </div>
    );
  }
}

export default Promotions;
