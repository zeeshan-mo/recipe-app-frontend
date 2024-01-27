import { Card, CardContent, Typography, Skeleton } from "@mui/material";
import React from "react";

const SelectionCard = ({ name, imageUrl }) => {
  return (
    <Card sx={{ height: 192 }}>
      <CardContent>
        <Typography color="blue.main" sx={{ fontSize: 20 }}>
          {name}
        </Typography>
        <Skeleton variant="rectangular" height={128} />
      </CardContent>
    </Card>
  );
};

export default SelectionCard;
