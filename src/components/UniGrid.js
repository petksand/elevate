import React, { Component } from "react";

import { Box, Grid } from "grommet";

class UniGrid extends Component {
  render() {
    return (
      <Grid fill rows={["auto", "flex", "auto"]}>
        <Box tag="header" background="brand" pad="small">
          Header
        </Box>
        <Box direction="row" justify="center">
          <Box width="small" background="light-2">
            sidebar
          </Box>
          <Box overflow="auto" width="large">
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
        <Box tag="footer" pad="small" background="dark-1">
          footer
        </Box>
      </Grid>
    );
  }
}

export default UniGrid;
