import FilterButton from "./FilterButton";
import AppBar from "./AppBar";
import SearchBar from "./SearchBar";
import SelectionPanel from "./SelectionPanel";
import { Typography, Stack } from "@mui/material";

function App() {
  return (
    <>
      <AppBar />
      <Stack spacing={2} sx={{ mt: 10 }}>
        <Typography variant="h3" color="blue.main" sx={{ alignSelf: "center" }}>
          Pick your Ingredients
        </Typography>
        <SearchBar />
        <FilterButton />
        <SelectionPanel />
      </Stack>
    </>
  );
}

export default App;
