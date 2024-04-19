import { useState } from 'react'
import Header_L from './components/Header'
import {Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import Ranking from './components/ranking_page/Ranking'
import Airing from './components/airing_page/Airing'
import Alphabet from './components/alphabetical_Page/Alphabet'
import './main.css'



function App() {

  const wholeList = "https://api.jikan.moe/v4/anime?"
  console.log('the whole list', wholeList)
  // const grabList=() => axios.get("https://api.jikan.moe/v4/anime?")
  //   .then(res => console.log('The data',res))
  //   .catch(err => console.log(err))

  return (
    <>
      <Header_L/>
      <Routes>
        <Route path= '/' element = {<Home/>}/>
        <Route path= '/rank' element = {<Ranking wholeList={wholeList}/>}/>
        <Route path= '/airing' element = {<Airing wholeList={wholeList}/>}/>
        <Route path= '/alphabet' element = {<Alphabet wholeList={wholeList}/>}/>
      </Routes>
    </>
  )
}

export default App

//  Action Steps
/* 
  What is Done?
  - Header that doesn't change
  - Buttons that acts as links to initiate page changes when clicked
  - The api link is in the app component
*/
/*
  What is left to be done?
  - Get the api link to each page
    - You will need to pass the url data as a prop
  - make sure the api link works on each page
  - establish Axios get and useEffect to retrive the api data
    - make a function that grabs the api via Axios.get
    - Create a state that will hold the api you are receiving 
    - The grabber function needs to send the api data to the Setter function of the api state
    - Create your useEffect function
    - Attach the Axios function to the useEffect

  - Make a component that will map through the api items and display them automatically
*/