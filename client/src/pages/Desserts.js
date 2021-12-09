import React from 'react';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Churros from '../images/Churros.jpg'
import cake from '../images/strawberryCake.jpg'

const Img = styled("img")({
  display: "block",
  maxWidth: "200px",
  minHeight: "250px",
  objectFit: "cover",
});
const menu = [
  {
    name: "Strawberry Cake",
    price: "6.99",
  },
  {
    name: "Churros",
    price: "5.99",
  },
];



export default function menuItem() {
  function addToTotal(){

    document.getElementById("btn1").addEventListener("click", function () {
      console.log("Added Strawberry Cake");
      document.getElementById("foodList").innerHTML +=
        "<Typography>Strawberry Cake</Typography>";
      document.getElementById("foodPrice").innerHTML +=
        "<Typography>6.99</Typography>";
        
    });

    document.getElementById("btn2").addEventListener("click", function () {
      console.log("Added Churros");
      document.getElementById("foodList").innerHTML +=
        "<Typography>Churros</Typography>";
      document.getElementById("foodPrice").innerHTML +=
        "<Typography>5.99</Typography>";
    });
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4}>
        <Card m={2} p={2} xl={{ Width: 300 }}>
          <CardContent>
            <Box display="flex" justifyContent="space-around">
              <Img alt="Strawberry Cake" src={cake} />
            </Box>
          </CardContent>
          <CardActions>
            <Button id="btn1" sx={{ mr: 3 }} variant="contained" size="small" onClick= {addToTotal}>
              Add {menu[0].name} to order
            </Button>
            <Typography>Price:${menu[0].price}</Typography>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
      <Card m={2} p={2} xl={{ Width: 300 }}>
          <CardContent>
            <Box display="flex" justifyContent="space-around">
              <Img alt="churro" src={Churros} />
            </Box>
          </CardContent>
          <CardActions>
          <Box display="flex" justifyContent="space-around">
          <Button id="btn2" sx={{ mr: 3 }} variant="contained" size="small" onClick= {addToTotal}>
              Add {menu[1].name} to order
            </Button>
            <Typography>
              Price:${menu[1].price}
            </Typography>
            </Box>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}
