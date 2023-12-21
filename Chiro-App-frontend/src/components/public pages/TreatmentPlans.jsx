import React from 'react';
import { Container, Typography, Box, Grid, Slide, Slider } from '@mui/material';
import { Image } from '@mui/icons-material';
import ChiroCard from '../reusable/ChiroCard';

const TreatmentPlans = () => {
  // Sample facial treatment data
  const treatmentPlans = [
    {
      title: 'Chiro Lite',
      description: 'Comes with 10x chiropractic sessions.',
      price: '$1200',
      pic: '../images/trial-step1.jpg',
    },
    {
      title: 'Chiro Basic',
      description: 'Comes with 20x chiropractic sessions.',
      price: '$2100',
      pic: '../images/trial-step1.jpg',
    },
    {
      title: 'Chiro Silver',
      description: 'Comes with 30x chiropractic sessions.',
      price: '$2900',
      pic: '../images/trial-step1.jpg',
    },
    {
      title: 'Chiro Gold',
      description: 'Comes with 40x chiropractic sessions.',
      price: '$3500',
      pic: '../images/trial-step1.jpg',
    },
    {
      title: 'Chiro Family',
      description: ' (Shareable with family) Comes with 40x chiropractic sessions + 40x physiotherapy sessions with our specialised therapists',
      price: '$4600',
      pic: '../images/trial-step1.jpg',
    },
    {
      title: 'Chiro Life',
      description: 'Comes with 40x chiropractic sessions + 40x physiotherapy sessions with our specialised therapists.',
      price: '$4500',
      pic: '../images/trial-step1.jpg',
    },
    
  ];

  const reassurance = [
    {
      name: 'In-Depth Thorough Examinations',
      position: 'Doctor of Chiropractic',
      description:
        'We will utilise the most comprehensive series of tests and examinations to thoroughly understand your condition. X-rays are typically required to diagnose the stage of degeneration.',
      photoUrl: '../images/in-depth.jpg', 
      yoe: 'Years of Experience: 15'// Replace with actual photo URL
    },
    {
      name: 'Regular Progress Tracking With Doctor',
      position: 'Doctor of Chiropractic',
      description:
      'We consistently monitor your progress to understand if the care program is working for you, or if changes have to be made. Re-evaluations are very important.',
      photoUrl: '../images/regular-check.jpg',
      yoe: 'Years of Experience: 9' // Replace with actual photo URL
    },
    {
      name: 'No Additional Costs During Care',
      position: 'Doctor of Chiropractic',
      description:
      'Once you’re under our care, we won’t charge additional for more adjustments if an accident or an unfortunate event happens and you require more care during your care plan. ',
      photoUrl: '../images/extra-sessions.jpg',
      yoe: 'Years of Experience: 6' // Replace with actual photo URL
    },
  ];

  return (
    <Box sx={{display:"flex-column", justifyContent:"center", backgroundColor:"#f5f5f5", height:"97vh" }}>
      {/* <Typography variant="h4" component="h1" align="center"
      sx={{mt:8, mb:4}}>
        Treatment Packages
      </Typography> */}
      <Box sx={{backgroundColor:"darkslategray", pb:3}}>
      <Typography align="center" variant="h4" sx={{pt:3, pb:1, color:"lightgrey"}}>OUR TREATMENT PACKAGES</Typography>
      </Box>
      <Box display="flex" flexWrap="wrap" justifyContent="center" alignItems="center">
        <Slide
        direction="left"
        in={TreatmentPlans}
        mountOnEnter
        unmountOnExit
        style={{ transitionDelay: 200, transitionDuration: 800 }}
        sx={{ pt:5, px:3}}
      >
        <Box display="flex" flexWrap="wrap" justifyContent="center" alignItems="center">
        {treatmentPlans.map((plan, index) => (
          <Box key={index} width="30%" m={2} >
            <Box border={1} borderRadius={16} p={2} textAlign="center" sx={{backgroundColor:"white"}}>
              <Typography variant="h6" component="h2">
                {plan.title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {plan.description}
              </Typography>
              <Typography variant="h6" color="primary">
                Price: {plan.price}
              </Typography>
              {/* <img src={plan.pic} height="200"
          width="auto"></img> */}
            </Box>
          </Box>
        ))}
        </Box>
        </Slide>


        {reassurance.map((element) => {
              return(
                <Grid item xs={4}>
                <ChiroCard key={element.name} header={element.name} body={element.description} image={element.photoUrl}></ChiroCard>
                </Grid>
              )
            })};
      </Box>
    </Box>
  );
};

export default TreatmentPlans;
