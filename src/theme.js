import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    button: {
      textTransform: "none",
    },
    h1: {
      fontSize: 96,
      fontFamily: "Poppins",
    },
    h2: {
      fontSize: 60,
      fontFamily: "Bree Serif",
    },
    h3: {
      fontSize: 48,
      fontFamily: "Bree Serif",
    },
    h4: {
      fontSize: 34,
      fontFamily: "Bree Serif",
    },
    h5: {
      fontSize: 24,
      fontFamily: "Bree Serif",
    },
    h6: {
      fontSize: 20,
      fontFamily: "Bree Serif",
    },
    subtitle1: {
      fontSize: 16,
      fontFamily: "Quattrocento Sans",
    },
    subtitle2: {
      fontSize: 14,
      fontFamily: "Quattrocento Sans",
    },
    body1: {
      fontSize: 16,
      fontFamily: "Quattrocento Sans",
    },
    body2: {
      fontSize: 14,
      fontFamily: "Quattrocento Sans",
    },
    caption: {
      fontSize: 12,
      fontFamily: "Quattrocento Sans",
    },
    overline: {
      fontSize: 12,
      fontFamily: "Quattrocento Sans",
    },
  },
  components: {
    MuiTextField: {
      defaultProps: {
        InputProps: {
          style: {
            borderRadius: 32,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          borderRadius: 32,
          color: "white",
          background: "#426B7C",
        },
        outlined: {
          borderRadius: 32,
          color: "#426B7C",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: "#F7EDDF",
        },
      },
    },
  },
  palette: {
    blue: { main: "#426B7C" },
    yellow: { main: "#F7C272" },
    salmon: { main: "#FF6058" },
    orange: { main: "#F09233" },
    state: { main: "#9CA8B6" },
    lightblue: { main: "#DCE4E7" },
    lightyellow: { main: "#F7EDDF" },
  },
});

export default theme;
