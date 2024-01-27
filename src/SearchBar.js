import { Typography, Stack, TextField, Button } from "@mui/material";

const SearchBar = () => {
  return (
    <Stack direction={"row"} sx={{ width: "70%", alignSelf: "center" }}>
      <TextField
        sx={{ width: "100%" }}
        InputProps={{
          style: {
            borderRadius: 32,
          },
          endAdornment: (
            <Button variant="contained">
              <Typography>Search</Typography>
            </Button>
          ),
        }}
      ></TextField>
    </Stack>
  );
};

export default SearchBar;
