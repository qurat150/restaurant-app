import React, { useState } from 'react'
import FoodCard from './FoodCard'
import { Box } from '@mui/material'  

function FoodCards() {
  let [cardData , setCardData] = useState([]);
  // console.log(cardData);
    let cards = [
      {
        name : "Example",
        desc : "this foood is really Amazyng frrrr!",
        price : "$38.00"
      },
      {
        name : "Example2",
        desc : "this foood is really Amazyng frrrr!",
        price : "$38.00"
      },
      {
        name : "Example3",
        desc : "this foood is really Amazyng frrrr!",
        price : "$38.00"
      },
      {
        name : "Example3",
        desc : "this foood is really Amazyng frrrr!",
        price : "$38.00"
      },
      {
        name : "Example3",
        desc : "this foood is really Amazyng frrrr!",
        price : "$38.00"
      },
      {
        name : "Example3",
        desc : "this foood is really Amazyng frrrr!",
        price : "$38.00"
      }
    ]
  return (
    <Box sx={{width: 1, display : "flex",margin:"auto", marginTop : "70px", gap : "70px", rowGap : "150px",flexWrap : "wrap",}}>
        {cards.map((cardData, i)=>{
          // console.log(cardData);
          return <FoodCard key={i} cardData={cardData}/>
        })}
    </Box>
  )
}

export default FoodCards