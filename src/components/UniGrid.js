import React, { Component } from "react";

import { Box, Grid, Button } from "grommet";

class UniGrid extends Component {
  render() {
    return (
      <Grid rows={["auto", "flex", "auto"]}>
        <Box pad="medium" tag="header" background="#ccccff" height="medium">
          Header
        </Box>

        <Box background="light-2" pad="medium"  width="xxlarge" height="medium">
          <Button label="Default"/>
        </Box>
        <Box pad="medium" overflow="auto" width="xxlarge" height="xxlarge">
          <p>feed</p>
          <p>feed</p>
          <p>feed</p>
          <p>feed</p>
          <p>feed</p>
          <p>feed</p>
          <p>feed</p>
          <p>feed</p>
        </Box>
      </Grid>
    );
  }
}

export default UniGrid;
