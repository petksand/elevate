import React from "react";
import { PromotionCards } from './PromotionCards';

class Promotions extends React.Component {
  render() {
    return (
      <div
        style={{
          padding: "1.5rem",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "flex-start"
        }}
      >
        <PromotionCards />
      </div>
    );
  }
}

export default Promotions;
