import React from "react";
import { Stack, Button, Typography } from "@mui/material";
import { FilterAltOutlined } from "@mui/icons-material";

const FilterButton = () => {
  return (
    <Stack sx={{ width: "70%", alignSelf: "center" }}>
      <Button
        variant="outlined"
        sx={{ alignSelf: "end" }}
        startIcon={<FilterAltOutlined />}
      >
        <Typography>Filter</Typography>
      </Button>
    </Stack>
  );
};

export default FilterButton;
