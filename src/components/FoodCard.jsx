import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CustomButton from './CustomButton';
import Typography from '@mui/material/Typography';
import image1 from "../images/food/food3.png"

import "../styles/card.css"

export default function FoodCard(props) {
  let cardData = props.cardData;
  return (
    <Card className='card-main'>
      <CardMedia className='card-media' image={image1} title={cardData.name}/>
      <CardContent className='card-content'>
        <Typography  gutterBottom variant="h6" component="div" fontSize="15px">
          {cardData.name}
        </Typography>
        <Typography variant="body2" fontSize="14px" color="text.secondary">
          {cardData.desc}
        </Typography>
      </CardContent>
      <CardActions className='card-actions'>
      <Typography gutterBottom variant="h6" component="div" fontSize="15px">
          {cardData.price}
        </Typography>
        <CustomButton className="addToCard-btn" color="white" bgColor="#d31b27">Add to Cart</CustomButton>
      </CardActions>
    </Card>
  );
}