import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';




function ChiroCard(props) {
  return (

  <Card sx={{ maxWidth: 345, m:3}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          width="auto"
          image={props.image}

        />
        <CardContent>
          <Typography align='center' fontSize="25px" variant="h5" component="div">
          {props.header}
          </Typography>
          <Typography align='center' color="grey" fontSize="12px" variant="caption" display="block" gutterBottom>{props.position}</Typography>
          <Typography align='center' variant="body2" color="text.secondary">
          {props.body}
          </Typography>
          <Typography align='center' variant="body2" color="text.secondary" sx={{mt:1}}>
          {props.yoe}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ChiroCard;
