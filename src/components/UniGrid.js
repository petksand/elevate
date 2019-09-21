import React, { Component } from "react";

import { Box, Grid } from "grommet";

class UniGrid extends Component {
  render() {
    return (
      <Grid rows={["auto", "flex", "auto"]}>
        <Box pad="medium" tag="header" background="brand" height="medium">
        </Box>

        <Box pad="medium" direction="column" justify="center">
          <Box
            pad="medium"
            background="light-2"
            width="xxlarge"
            height="medium"
          >
            sidebar
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
        </Box>
      </Grid>
    );
  }
}

export default UniGrid;
