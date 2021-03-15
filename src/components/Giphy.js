import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
}));

export const Giphy = ({ giphy }) => {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={1}>
        {giphy.map((gf) => (
          <Grid item xs={6} sm={4} md={2} className={classes.grid}>
            <div key={gf.id}>
              <img
                src={gf.images.fixed_height.url}
                alt="giphy"
                className={classes.grid}
                style={{ width: "100%", height: "200px" }}
              />
            </div>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
