import React, { Component } from "react";

import { Box, Grid } from "grommet";

class UniGrid extends Component {
  render() {
    return (
      <Grid rows={["auto", "flex", "auto"]}>
        <Box tag="header" background= "#ccccff" height="medium">
          Header
        </Box>
        <Box direction="column" justify="center">
          <Box background="light-2" width="xxlarge" height="medium">
            sidebar
          </Box>
          <Box overflow="auto" width="xxlarge" height="xxlarge">
            <p>feed</p>
            <p>feed</p>
            <p>feed</p>
            <p>feed</p>
            <p>feed</p>
            <p>feed</p>
            <p>feed</p>
            <p>feed</p>
          </Box>
        </Box>
      </Grid>
    );
  }
}

export default UniGrid;
