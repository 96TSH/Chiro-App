import { Box, Button, Card, Container, CssBaseline, Fade, Grid, Slide, Typography } from '@mui/material'
import React from 'react'
import ChiroCard from '../reusable/ChiroCard';
import FormComponent from './FormComponent';


const TrialProcedure = [
  {
    name: 'Initial Consultation and Assessment',
    description:
      'An in-depth discussion with the CHIROPRACTOR (DC) on your clinical history, problems faced and seeking the best solution to your health goals.',
    photoUrl: '../images/trial-step1.jpg', // Replace with actual photo URL
  },
  {
    name: 'Spinal Examination and Posture Screening',
    description:
    'A series of orthopedic and functional neurologic tests will be performed to gauge the condition of your spine. Your posture will also be checked for any abnormalities or problem that need to be addressed.',
    photoUrl: '../images/trial-step2.jpg', // Replace with actual photo URL
  },
  {
    name: 'Review of Medical findings and Report',
    description:
    'A review of findings by the DC based on examinations and consultation outcome conducted at your first visit. Further review report that details your X Ray shall be provided should you require it, eg. Scoliosis condition.',
    photoUrl: '../images/trial-step3.jpg', // Replace with actual photo URL
  },
  {
    name: '1 x Chiropractic Treatment',
    description:
    'Finally, the Chiropractor may provide a suitable chiropractic treatment (eg. spinal adjustments / decompression therapy / IASTM / Soft Tissue mobilisation / Exercise prescription) that is appropriate at your first visit based on the findings & next follow up.',
    photoUrl: '../images/trial-step4.jpg', // Replace with actual photo URL
  },
];


const Tutorial = () => {
  return (
    <Box sx={{backgroundColor:"lightgrey", height:"max", pb:6}}>
      <CssBaseline />
      
      <Box sx={{pt:2, pb:2, backgroundColor:"darkslategray", color:"white"}}>
        <Typography align='center' variant='h4'>Sign up for our STARTER-CARE Trial @ $58 (U.P. $120)</Typography>
        <Typography align='center'>Inclusive of the following:</Typography>
      </Box>
     
      <Slide
        direction="up"
        in={true}
        mountOnEnter
        unmountOnExit
        style={{ transitionDelay: 200, transitionDuration: 1000 }}
        sx={{ py:3, px:3}}
      >
      <Grid 
      container
      direction="row"
      alignItems="stretch"
      justifyContent="center"
      >
      
        {TrialProcedure.map((element) => {
              return(
       
                <ChiroCard sx={{boxShadow: 5}} 
                key={element.name} header={element.name} body={element.description} image={element.photoUrl}>
                </ChiroCard>
            
              )
            })}
            
      </Grid>
      </Slide>
      <Box>
        <FormComponent/>
      </Box>
        
        
      
    </Box>
  )
}

export default Tutorial