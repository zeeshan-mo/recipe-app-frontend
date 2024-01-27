import { AppBar as MuiAppBar, Toolbar, Typography } from "@mui/material";

const AppBar = () => {
  return (
    <MuiAppBar color="yellow">
      <Toolbar>
        <Typography
          variant="h3"
          sx={{ fontFamily: "Poppins" }}
          color="blue.main"
        >
          diner
        </Typography>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
