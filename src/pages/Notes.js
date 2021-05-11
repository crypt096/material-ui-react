import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from '@material-ui/core/Container'

export default function Notes() {
  return (
    <div>
      <Typography variant="h6" component="h2" color="textSecondary" gutterBottom>
        Create a NewNote
      </Typography>

      <Button onClick={() => {
        console.log('You clicked me')
      }} type="submit" color="secondary" variant="contained">Submit</Button>
    </div>
  );
}
