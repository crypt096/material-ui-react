import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from '@material-ui/core/Container';
import { makeStyles } from "@material-ui/core";

// Icons
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

const useStyles = makeStyles({
  btn: {
    fontSize: 60,
    backgroundColor: 'violet',
    '&:hover': {
      backgroundColor: 'blue'
    }
  },
  title: {
    textDecoration: 'underline',
    marginBottom: 20,
  }
})

export default function Notes() {
  const classes = useStyles();

  return (
    <Container>
      <Typography variant="h6" component="h2" color="textSecondary" className={classes.title} gutterBottom>
        Create a NewNote
      </Typography>

      <Button className={classes.btn} type="submit" color="secondary" variant="contained" endIcon={<KeyboardArrowRightIcon/>}>Submit</Button>
    </Container>
  );
}
