import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Container, CssBaseline, Grid, Slide } from '@mui/material';

import ChiroCard from '../reusable/ChiroCard';
import Divider from '@mui/material/Divider';






function OurTeam() {

  const teamMembers = [
    {
      name: 'Dr Jackie Chan',
      position: 'Doctor of Chiropractic',
      description:
        'Specializations: Lower back spine health, Cervical spine health, Migraines',
      photoUrl: '../images/peterwang.jpg', 
      yoe: 'Years of Experience: 15'// Replace with actual photo URL
    },
    {
      name: 'Dr Mika Bay',
      position: 'Doctor of Chiropractic',
      description:
      'Specializations: Muscular pains, Sports-induced injuries, Posture regulating',
      photoUrl: '../images/doctor-oz.png',
      yoe: 'Years of Experience: 9' // Replace with actual photo URL
    },
    {
      name: 'Dr Trump Tan',
      position: 'Doctor of Chiropractic',
      description:
      'Specializations: Neurological disorders, Pregnancy conditioning, Physiotherapy',
      photoUrl: '../images/trump.jpg',
      yoe: 'Years of Experience: 6' // Replace with actual photo URL
    },
  ];

  return (
    <Box sx={{display:"flex-column", justifyContent:"center", backgroundColor:"#f5f5f5", height:"92vh" }}>
      <CssBaseline />
      <Box sx={{backgroundColor:"darkslategray", pb:3}}>
      <Typography align="center" variant="h5" sx={{pt:3, pb:2, mx:3, color:"lightgrey"}}>EXPERIENCED TEAM WHO UNDERSTAND YOUR NEEDS</Typography>
      <Typography sx={{color:"white", px:5, align:"center"}}>
        Our team is fully accredited, and have gone through an intensive four-year programme focusing on physiology, neurology, orthopedics, radiology, bio-mechanics, physical examination, advanced imaging, diagnosis, and chiropractic technique. Our focus is on helping your nervous system reach optimal flow so that your body can heal itself.
      </Typography>
      </Box>
      <Divider/>
      <Slide
        direction="left"
        in={OurTeam}
        mountOnEnter
        unmountOnExit
        style={{ transitionDelay: 200, transitionDuration: 1000 }}
        sx={{ pt:12, px:3}}
      >
      <Grid
        container
        spacing={0}
        direction="row"
        alignItems="center"
        justify-items="center"
        sx={{ minHeight: '100vh' }}
        >
        {teamMembers.map((element) => {
              return(
                <Grid item xs={4}>
                <ChiroCard key={element.name} header={element.name} body={element.description} position={element.position} image={element.photoUrl} yoe={element.yoe}></ChiroCard>
                </Grid>
              )
            })};
      </Grid>
      </Slide>
      
      
    </Box>
    
  
  );
}

export default OurTeam;
