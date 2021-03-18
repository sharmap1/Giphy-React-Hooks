import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import {
  StylesProvider,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "./style.css";
import Box from "@material-ui/core/Box";
import { yellow } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  AppBar: {
    backgroundColor: "#355c7d",
    color: "yellow",
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url('https://media1.giphy.com/media/iYVneIXJQ3jdJLkZmM/giphy.gif')`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "yellow",
    fontSize: "4rem",
    letterSpacing: "0.234em",
    [theme.breakpoints.down("lg")]: {
      height: 400,
      fontSize: "3em",
      marginBottom: theme.spacing(1),
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("md")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
const customTheme = createMuiTheme({
  palette: {
    primary: {
      main: yellow[500],
    },
  },
});
const Header = ({ search, updateSearch, onSearchClick }) => {
  const classes = useStyles();
  return (
    <>
      <StylesProvider>
        <ThemeProvider theme={customTheme}>
          <AppBar className={classes.AppBar}>
            <Toolbar>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search Giphy"
                  value={search}
                  onChange={updateSearch}
                  // onClick={onSearchClick}
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ "aria-label": "search" }}
                />
              </div>
              <Button
                className={classes.root}
                variant="contained"
                color="primary"
                size="medium"
                onClick={onSearchClick}
              >
                search
              </Button>
            </Toolbar>
          </AppBar>
          <Box className={classes.hero}>
            <Box>GIPHY APP</Box>
          </Box>
        </ThemeProvider>
      </StylesProvider>
    </>
  );
};

export default Header;
