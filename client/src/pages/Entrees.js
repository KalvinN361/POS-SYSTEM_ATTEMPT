import React from 'react';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import taco1 from "../images/alpastor.jpg";
// import pho1 from "../images/pho.png";
// import pho2 from "../images/pho2.jpg";
// import Checkbox from "@mui/material/Checkbox";
// import FormGroup from "@mui/material/FormGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import phoTaco from "../images/photaco.jpg"
import whataTaco from "../images/whatataco.jpg"
import oxtailPho from '../images/oxtailPho.jpg'
import phoThai from "../images/phoThai.png"
import bunBo from '../images/pho2.jpg'
import "../components/Styles/Entrees.css"

const Img = styled("img")({
  display: "block",
  maxWidth: "200px",
  minHeight: "250px",
  objectFit: "cover",
  maxHeight: "250px"
});
const menu = [
  {
    name: "Al Pastor",
    price: "3.50",
    toppings: ["CHZ", "LTC", "JLP", "SS"],
  },
  {
    name: "Pho Taco",
    price: "5.00",
    toppings: ["NDL", "HSN", "SRC", "BNS"],
  },
  {
    name: "Whatataco",
    price: "5.50",
    toppings: ["BFF", "LTC", "TMT", "PKL"],
  },
  {
    name: "Bún bò Huế",
    price: "8.00",
    toppings: ["CHZ", "LTC", "JLP", "SS"],
  },
  {
    name: "Pho Thai",
    price: "9.00",
    toppings: ["NDL", "HSN", "SRC", "BNS"],
  },
  {
    name: "Pho Ox-Tail",
    price: "10.00",
    toppings: ["BFF", "LTC", "TMT", "PKL"],
  },
];

export default function menuItem() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4}>
        <Card m={2} p={2} xl={{ Width: 200 }}>
          <CardContent>
            <Box display="flex" justifyContent="space-around">
              <Img alt="taco1" src={taco1} />
            </Box>
          </CardContent>
          <CardActions>
            <Button sx={{ mr: 3 }} variant="contained" size="small">
              Add {menu[0].name} to order
            </Button>
            <Typography>Price:${menu[0].price}</Typography>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <Card xl={{ Width: 300 }}>
          <CardContent>
            <Box display="flex" justifyContent="space-around">
              <Img alt="phoTaco" src={phoTaco} />
            </Box>
          </CardContent>
          <CardActions>
          <Box display="flex" justifyContent="space-around">
          <Button sx={{ mr: 3 }} variant="contained" size="small">
              Add {menu[1].name} to order
            </Button>
            <Typography>
              Price:${menu[1].price}
            </Typography>
            </Box>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card xl={{ Width: 300 }}>
          <CardContent>
            <Box display="flex" justifyContent="space-around">
              <Img alt="whataTaco" src={whataTaco} />
            </Box>
          </CardContent>
          <CardActions>
            <Button sx={{ mr: 3 }} variant="contained" size="small">
              Add {menu[2].name} to order
            </Button>
            <Typography>Price:${menu[2].price}</Typography>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card xl={{ Width: 300 }}>
          <CardContent>
            <Box display="flex" justifyContent="space-around">
              <Img alt="pho1" src={bunBo} />
            </Box>
          </CardContent>
          <CardActions>
            <Button sx={{ mr: 3 }} variant="contained" size="small">
              Add {menu[3].name} to order
            </Button>
            <Typography>Price:${menu[3].price}</Typography>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card xl={{ Width: 300 }}>
          <CardContent>
            <Box display="flex" justifyContent="space-around">
              <Img alt="pho2" src={phoThai} />
            </Box>
          </CardContent>
          <CardActions>
            <Button sx={{ mr: 3 }} variant="contained" size="small">
              Add {menu[4].name} to order
            </Button>
            <Typography>Price:${menu[4].price}</Typography>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card xl={{ Width: 300 }}>
          <CardContent>
            <Box display="flex" justifyContent="space-around">
              <Img alt="pho3" src={oxtailPho} />
            </Box>
          </CardContent>
          <CardActions>
            <Button sx={{ mr: 3 }} variant="contained" size="small">
              Add {menu[5].name} to order
            </Button>
            <Typography>Price:${menu[2].price}</Typography>
          </CardActions>
        </Card>
      </Grid>
      {/* <Grid item xs={12} sm={6} md={4}>
        <Card xl={{ Width: 300 }}>
          <CardContent>
            <Box display="flex" justifyContent="space-between">
              <Img alt="pho4" src={pho1} />
              <Typography>
                Comes with:
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label={menu[6].toppings[0]}
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label={menu[6].toppings[1]}
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label={menu[6].toppings[2]}
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label={menu[6].toppings[3]}
                />
              </FormGroup>
              </Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Button sx={{ mr: 3 }} variant="contained" size="small">
              Add {menu[6].name} to order
            </Button>
            <Typography>Price:${menu[2].price}</Typography>
          </CardActions>
        </Card>
      </Grid> */}
    </Grid>
  );
}
