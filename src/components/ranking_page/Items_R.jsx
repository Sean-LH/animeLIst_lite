import React from 'react'
import { useState } from 'react'

export default function Items_R(props) {
  
  // console.log('items props', props.title)
  // Here I will be making a sorting function that will focus on the rank number and sort in ascending order
  // console.log("props", [props])
  const ranks = props.rank
  // const [items, setItems] = useState([props])
  // const ascendProps = ranks.sort((a,b) => {
  //   a-b
  // })
  // console.log("items state", items)
  return (
    <div>
      <h1>Title:{props.title}</h1>
      <h3>Ranking{props.rank}</h3>
    </div>
  )
}

/* 
  What is done so far:
  - I am able to make the list display 
  
  What is left to do:
  - Sorting these list items by the ranking number.
  - Sorting from Highest rank to lowest
*/

/**
    Notes so far:
      - the props being passed down are all individualized items 
      - I want to sort through an array of items and give it the ascending order
 */