import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from '@material-ui/core/Container';
import { makeStyles } from "@material-ui/core";

// Icons
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

export default function Notes() {
  const useStyles = makeStyles({
    btn: {
      fontSize: 60,
      backgroundColor: 'violet',
    }
  })
  
  return (
    <Container>
      <Typography variant="h6" component="h2" color="textSecondary" gutterBottom>
        Create a NewNote
      </Typography>

      <Button onClick={() => {
        console.log('You clicked me')
      }} type="submit" color="secondary" variant="contained" endIcon={<KeyboardArrowRightIcon/>}>Submit</Button>
    </Container>
  );
}
