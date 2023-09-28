// src/components/Home.js

import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import React from "react";
import { useDispatch,useSelector } from 'react-redux'; 
import {updateClassDTO} from "../../actions/userAction/userAction";
import { classDTO_Data } from "../../selector/userSelector";

const Home = (props) => {

  const dispatch = useDispatch();

  const classDTO = useSelector(classDTO_Data);

  const handleClassDTO=(key,value)=>{
    var classDTO={...props.classDTO};
    switch(key){
      default:
        classDTO[key]=value;
    }
    dispatch(updateClassDTO(classDTO));
  }

  return (
    <Card
      className="mt-3"
      variant="outlined"
      sx={{ maxWidth: 600, height: "auto", margin: "0 auto", boxShadow: 3 }}
    >
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="First Name"
              variant="outlined"
              fullWidth
              size="small"
              value={classDTO.firstName}
              onChange={(event,value)=>{
                handleClassDTO("firstName",event.target.value);
              }}
              margin="normal"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Last Name"
              variant="outlined"
              fullWidth
              size="small"
              margin="normal"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Gender"
              variant="outlined"
              fullWidth
              size="small"
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Phone Number"
              variant="outlined"
              fullWidth
              size="small"
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              size="small"
              margin="normal"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              size="small"
              margin="normal"
              required
            />
          </Grid>
        </Grid>
        <Button variant="contained" color="primary" type="submit" fullWidth>
          Register
        </Button>
      </CardContent>
    </Card>
  );
};

export default Home;

