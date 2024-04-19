import {useState, useEffect} from 'react' //React was removed from this line
import axios from 'axios';
import Items_A from './Items_A';

export default function Airing(props) {
  const apiList = props.wholeList
  const [apiHolder, setApiHolder] = useState([]);
  const [ascending, setAscending] = useState(true)

  const dataGet = () => {
    ascending?
    axios
      .get(apiList)
      .then((res) => {
        setApiHolder(res.data.data.sort((a,b)=> b.aired.prop.from.year - a.aired.prop.from.year));
        // setApiHolder(res.data.data.sort((a,b)=> a.aired.prop.from.year - b.aired.prop.from.year))
        // console.log('the airing data', res.data.data)
      })
      :
      axios
      .get(apiList)
      .then((res) => {
        setApiHolder(res.data.data.sort((a,b)=> a.aired.prop.from.year - b.aired.prop.from.year));
        // setApiHolder(res.data.data.sort((a,b)=> a.aired.prop.from.year - b.aired.prop.from.year))
        // console.log('the airing data', res.data.data)
      })
      // .catch((err) => console.log(err));
  }
  const showList = apiHolder.map((item) => <Items_A {...item} key={item.id} />)

  useEffect(() => {
    dataGet()
  }, [ascending])

  // const [a]
  console.log('holder state:', apiHolder)
  const [sortedData, setSortedData] = useState([])
  // setSortedData(apiHolder.sort((a,b) => a.aired.prop.from.year - b.aired.prop.from.year))
  console.log('list shower:', sortedData)
  // const oldFirst = apiHolder.sort((a,b) => a.aired.prop.from.year - b.aired.prop.from.year)
  // const oldFirst = () => apiHolder.sort((a,b) => a.aired.prop.from.year - b.aired.prop.from.year)

    // const oldFirst = () => apiHolder.sort((a,b) => a.aired.prop.from.year - b.aired.prop.from.year)
  
    // const newFirst = () => apiHolder.sort((a,b) => b.aired.prop.from.year - a.aired.prop.from.year)

  // const [newest, setNewest]= useState(apiHolder.sort((a,b) => b.aired.prop.from.year - a.aired.prop.from.year))
  // const newFirst = apiHolder.sort((a,b) => b.aired.prop.from.year - a.aired.prop.from.year)
  // console.log("old First?", oldFirst)


  function swapper(){
    setAscending(!ascending);
    console.log(ascending)
    }
  

  return (
    <>
    <div>Airing</div>
    <br/>
    <button onClick={swapper}>Change Order</button>
    {/* <button onClick={newFirst}>Descending</button> */}
    <br/>
    {/* {showList} */}
    { 
      ascending?
        showList
        :
        showList
    }

    </>
    
  )
}

/*
  AS OF NOW!!
    - I have the list displaying the anime titles and dates(in string form)
    - I'm getting the list to render based on the sorted dates,
      But one of the shows isn't displaying
      And when swapping which order to display, one isn't rendering

  Next!!!
    - Applying the change to make it render on page
    - Create a button to initiate change to date order
    - Write logic for button then test it
*/

// user state
// make a sorting function for asc and desc

// onclick