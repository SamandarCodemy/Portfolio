import React,{useState} from 'react'
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { CardActionArea } from '@mui/material';
import Img1 from "../assets/img-01.jpg"
import Img2 from "../assets/img-02.jpg"
import Img3 from "../assets/img-03.jpg"
import Img4 from "../assets/img-04.jpg"
import Img5 from "../assets/img-05.jpg"
import Img6 from "../assets/img-06.jpg"
import Img7 from "../assets/img-07.jpg"
import Img8 from "../assets/img-08.jpg"
import Img9 from "../assets/img-09.jpg"
import Img10 from "../assets/img-10.jpg"
import Img11 from "../assets/img-11.jpg"
import Img12 from "../assets/img-12.jpg"
import Img13 from "../assets/img-13.jpg"
import Img14 from "../assets/img-14.jpg"
import Img15 from "../assets/img-15.jpg"
import Img16 from "../assets/img-16.jpg"
 
export default function Vidios() {
 const [data,setdata] = useState(
  [
   {
    img:Img1,
    date:"22 Oct 2020",
    veiw:"10,465 views"
   }, {
    img:Img2,
    date:"18 Oct 2020",
    veiw:"3,465 views"
   }, {
    img:Img3,
    date:"26 Oct 2020",
    veiw:"15,465 views"
   }, {
    img:Img4,
    date:"2 Nov 2020",
    veiw:"8,000 views"
   }, {
    img:Img5,
    date:"21 Dec 2020",
    veiw:"43,223 views"
   }, {
    img:Img6,
    date:"24 December 2020",
    veiw:"10,465 views"
   }, {
    img:Img7,
    date:"1 Jen 2021",
    veiw:"18,465 views"
   }, {
    img:Img8,
    date:"3 Jen 2021",
    veiw:"10,465 views"
   }, {
    img:Img9,
    date:"22 Oct 2020",
    veiw:"10,465 views"
   }, {
    img:Img10,
    date:"22 Oct 2020",
    veiw:"10,465 views"
   }, {
    img:Img11,
    date:"22 Oct 2020",
    veiw:"10,465 views"
   }, {
    img:Img12,
    date:"22 Oct 2020",
    veiw:"10,465 views"
   }, {
    img:Img13,
    date:"22 Oct 2020",
    veiw:"10,465 views"
   }, {
    img:Img14,
    date:"22 Oct 2020",
    veiw:"10,465 views"
   }, {
    img:Img15,
    date:"22 Oct 2020",
    veiw:"10,465 views"
   }, {
    img:Img16,
    date:"22 Oct 2020",
    veiw:"10,465 views"
   }
  
  
  ]
 )
 const [spacing, setSpacing] = React.useState(2);
  return (
    <div>
     <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2}} sx={{padding:"15px"}}>
   <Grid item xs={6} sx={{color:"#5ABCBDFF",fontSize:"25px"}}>LastVidios</Grid>

   <Grid item xs={6}>
    <div style={{marginLeft:"60%",color:"#5ABCBDFF"}}>
   Page <button style={{border:"none",color:"#5ABCBDFF"}}>1</button> of 180
    </div>
   </Grid>
</Grid>
     <Box sx={{ flexGrow: 1,padding:"0px 15px" }}>
      <Grid container spacing={{ xs: 4, md: 4 }} columns={{ xs: 4, sm:8, md: 16 }}>
        {data.map((val, index) => (
          <Grid item xs={4} sm={4} md={4} key={index}>
            <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
       <img src={val.img} alt="" />
        <CardContent>
          
          <Typography variant="body2" color="text.secondary">
         {val.date}
         <div style={{marginLeft:"40%",display:"inline-block"}}>
         {val.veiw}
         </div>
          </Typography>
        </CardContent>
      </CardActionArea>
     </Card>  
          </Grid>
        ))}
      </Grid>
     </Box>
     <Grid container sx={{padding:"15px",textAlign:"center"}}>
      <Grid item xs={4}>
      <Button variant="contained" sx={{backgroundColor:"#5ABCBDFF"}}>Previos</Button>
      </Grid>
      <Grid item xs={4}>
      <Button variant="outlined" sx={{backgroundColor:"#5ABCBDFF", color:"white", border:"none", marginLeft:"5px"}}>1</Button>
      <Button variant="outlined" sx={{backgroundColor:"#EEEEEEFF", color:"black", border:"none", marginLeft:"5px"}}>2</Button>
      <Button variant="outlined" sx={{backgroundColor:"#EEEEEEFF", color:"black", border:"none", marginLeft:"5px"}}>3</Button>
      <Button variant="outlined" sx={{backgroundColor:"#EEEEEEFF", color:"black", border:"none", marginLeft:"5px"}}>4</Button>

      </Grid>
       <Grid item xs={4}>
       <Button variant="contained" sx={{backgroundColor:"#5ABCBDFF",}}>Next page</Button>
      </Grid>
          </Grid>
    </div>
  )
}