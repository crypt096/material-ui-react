import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from '@material-ui/core/Container';
import { makeStyles } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

// Icons
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { useState } from "react";

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  }
})

export default function Notes() {
  const classes = useStyles();
  
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [titleError, setTitleError] = useState(false)
  const [detailsError, setDetailsError] = useState(false)
  const [category, setCategory] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false)
    setDetailsError(false)

    if(title === '') {
      setTitleError(true)
    }

    if(details === '') {
      setDetailsError(true)
    }

    if(title && details) {
      console.log(title, details)
    }
  }

  return (
    <Container>
      <Typography variant="h6" component="h2" color="textSecondary" gutterBottom>
        Create a NewNote
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          className={classes.field}
          label="Note title"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={titleError}
        />
        <TextField
          onChange={e => setDetails(e.target.value)}
          className={classes.field}
          label="Details"
          variant="outlined"
          color="secondary"
          multiline
          rows={4}
          fullWidth
          required
          error={detailsError}
        />

        <FormControl className={classes.field}>
          <FormLabel>Note Category</FormLabel>

          <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
            <FormControlLabel control={<Radio/>} label="Money" value="money" />
            <FormControlLabel control={<Radio/>} label="Todos" value="todos" />
            <FormControlLabel control={<Radio/>} label="Reminders" value="reminders" />
            <FormControlLabel control={<Radio/>} label="Work" value="work" />
          </RadioGroup>
        </FormControl>

         <Button type="submit" color="secondary" variant="contained" endIcon={<KeyboardArrowRightIcon/>}>Submit</Button>
      </form>
    </Container>
  );
}
