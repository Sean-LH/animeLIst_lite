import React,{useState, useEffect}from 'react'
import axios from 'axios'
import Items_Al from './Items_Al'

export default function Alphabet(props) {
  // console.log('the API', props.wholeList)
  const [apiHouse, setApiHouse] = useState([])
  const [aZ, setAZ] = useState(true)
  const oChange = function() {
    setAZ(!aZ)
    if(aZ === true){
      desc()
    } else {
      asc()
    }
  }
  const animeList = props.wholeList

  useEffect( () =>{
      axios.get(animeList)
    .then((res) => {
      // console.log(res.data.data)
      return setApiHouse(res.data.data)
    })
    .catch((err) => console.log(err))
  },[])

  const [rColor, setRColor] = useState(false)
  function switchIt() {
    setRColor(!rColor)
    console.log(rColor)
  }
  // console.log(rColor)
  console.log('the state', apiHouse)
  const desc =() => apiHouse.sort((a,b) => {
    return a.title === b.title ? 0 : a.title < b.title ? 1 : -1
  })
  const asc = () => apiHouse.sort((a,b) => a.title === b.title ? 0 : a.title > b.title ? 1 : -1)
  // apiHouse.sort((a,b) => a.title === b.title ? 0 : a.title > b.title ? 1 : -1)
  const showList = apiHouse.map((show) => <Items_Al {...show} key={show.mal_id}/>)
  return (
    <>
    <div>
    {rColor ?(
      <h4>Red</h4>
    ):(
      <h4>Blue, cuh</h4>
    )}
      <button onClick={switchIt}>Switch it</button>
    </div>
    <div>
      <button onClick={oChange}>{
        aZ ? 
        ("Z-A")
        : 
        ("A-Z")
      }</button>
      {showList}
      
    </div>
    </>
    
  )
}
/*
    -   -     -     -     -     -     NOTES!!!      -   -   -   -   -

  - I will be sorting based on Original names because not all series have english titles

*/