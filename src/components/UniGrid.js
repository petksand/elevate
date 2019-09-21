import React, { Component } from "react";

import { Box, Grid } from "grommet";

class UniGrid extends Component {
  render() {
    return (
      <Grid fill rows={["auto", "flex", "auto"]}>
        <Box tag="header" background="brand" height="medium">
          Header
        </Box>
        <Box direction="column" justify="center">
          <Box overflow="auto" width="xxlarge" height="xxlarge">
            <p>feed</p>
            <p>feed</p>
            <p>feed</p>
            <p>feed</p>
            <p>feed</p>
            <p>feed</p>
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
        <Box tag="footer" background="dark-1" height="small">
          footer
        </Box>
      </Grid>
    );
  }
}

export default UniGrid;
