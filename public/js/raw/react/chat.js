import * as chat from "./send.js";
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    height:"88vh"
  },
  root2: {
    margin: theme.spacing(1, 2),
    padding: theme.spacing(1, 2),
    textAlign:"left",
    
  },
  title:{
    fontWeight:"bold",
    float:"left"
  },
  msg:{
    paddingLeft:5
  }
}));

function Rendermsg(props) {
  let classes = props.c
  return (
    <Paper className={classes.root2}>
      <Typography className={classes.msgw} component="div">
        <Typography className={classes.title} component="b">
          {props.ago} {props.name} said:
        </Typography>
        <Typography className={classes.msg} component="span">
          {props.msg}
        </Typography>
      </Typography>
    </Paper>
  );
}

function AutoGrid() {
  /*constructor(props) {
    super(props);
    
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  };*/
  const classes = useStyles();
  const [error, seterror] = useState(null);
  const [loaded, setloaded] = useState(false);
  const [items, setitems] = useState([]);
  let renderSquare = function(n,m,a) {
    return (
      <Rendermsg
        name = {n}
        ago = {a}
        msg = {m}
        c = {classes}
      />
    );
  }


  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
              <Paper className={classes.root2}>
                <Typography className={classes.msgw} component="div">
                  <Typography className={classes.title} component="b">
                    5min ago George said:
                  </Typography>
                  <Typography className={classes.msg} component="span">
                      Uhuh
                      It took five min at least
                      And so far, there is no point in being up there
                      U just get to the top and stand there a moment heavy breathing then think, "oh boy! I just climbed about two hundred meters of spiral staircase! That must have been like seventy stories!" Then you think, "I just climbed seventy stories for no reason." Then u sign and begin climbing back down. Then stop, go back up and jump from the balcony down into the water to break your fall. Then you miss by one block, landing just on the bank of the swamp and poof, you're home.
                      "NV418 fell from a hight" ya think?
                      You have died
                      I know that!!!
                      I fell from the building limit!!!
                  </Typography>
                </Typography>
              </Paper>
              <Paper className={classes.root2}>
                <Typography className={classes.title} component="b">
                  5min ago BoB said:
                </Typography>
                <Typography className={classes.msg} component="span">
                    test test test
                </Typography>
              </Paper>
              {renderSquare("bob","hi there test","1yr ago ")}
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
          
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

ReactDOM.render(<AutoGrid />, document.querySelector('#chat'));