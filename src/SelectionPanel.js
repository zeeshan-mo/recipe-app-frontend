import React from "react";
import SelectionCard from "./SelectionCard";
import { Typography, Stack, Grid, Divider } from "@mui/material";
import { mockSelection } from "./mocks";

const SelectionPanel = () => {
  return (
    <Stack spacing={2} sx={{ width: "70%", alignSelf: "center" }}>
      {mockSelection.map((section) => (
        <Stack spacing={2}>
          <Typography variant="h6" color="blue.main">
            {section.name}
          </Typography>
          <Divider />
          <Grid container spacing={2}>
            {section.children.map((item) => (
              <Grid item xs={4}>
                <SelectionCard name={item.itemName} imageUrl={item.itemUrl} />
              </Grid>
            ))}
          </Grid>
        </Stack>
      ))}
    </Stack>
  );
};

export default SelectionPanel;
