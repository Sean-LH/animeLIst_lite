// import React from 'react'
// import { useState, useEffect } from 'react'
// import axios from 'axios'
// import Items_R from './Items_R'

// export default function Ranking(props) {
//   const apiList = props.wholeList
//   const [apiHolder, setApiHolder] = useState([])
//   const a = []
//   const dataGrab = () =>{
//     axios.get(apiList)
//       .then(res => {setApiHolder(res.data.data)
//       console.log('the data',res.data.data)})
//       .catch(err => (console.log(err)))
//   }

//   useEffect(()=> {
//     dataGrab()
//   },)

//   const list = apiHolder.map((item) => {
//     return (
//       <Items_R {...item}
//       all= {item}/>
//     )
//   })
//   const aList = list.concat(a)
//   const ascendList = aList.sort((a,b) =>{
//     a.props.rank-b.props.rank
//   })
//   console.log("the list",aList)
//   console.log('Ascending',ascendList)
//   return (
//     <>
//     <div>Ranking</div>
//     {/* {list} */}
//     {aList}
//     </>

//   )
// }
// /* 
// -   -   -   -   -   Idea: 
// -   Create 2 buttons at the top of this page
// -   The two buttons will have 2 functions
// -   One function to change the ascending order of the list
// -   I will use the "list" function and sort that 

//               Update!!!!!
//   - I will be concating the original array with an an empty one so that I can place everything within an array. 
//   - From there, I will be able to sort through said array and designe it to be ascending & descending
// */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Items_R from './Items_R';
export default function Ranking(props) {
  const apiList = props.wholeList;
  const [apiHolder, setApiHolder] = useState([]);
  const dataGrab = () => {
    axios
      .get(apiList)
      .then((res) => {
        setApiHolder(res.data.data);
        // console.log('the data', res.data.data);
      })
      .catch((err) => console.log(err));
  };
  const list = apiHolder.map((item) => <Items_R key={item.id} {...item} all={item} />);
  const aList = list.concat([]);
  const descendList = aList.sort((a, b) => b.props.rank - a.props.rank);
  const ascendList = aList.sort((a, b) => a.props.rank - b.props.rank);
  
  const [order, setOrder] = useState(true)
  useEffect(() => {
    dataGrab();
  }, [order]);
  // console.log('descending order', aList.sort((a, b) => b.props.rank - a.props.rank))
  function swapOrder (){
    // order ? setOrder(descendList) : setOrder(ascendList)
    setOrder(!order)
    console.log('current order', order)
    // console.log(ascendList, descendList)
  }

  function highLow(){
    setOrder(ascendList)
  }
  function lowHigh(){
    setOrder(descendList)
  }
  // console.log('the list', aList);
  // console.log('Ascending', ascendList);
  return (
    <>
      <div>Ranking</div>
      <br></br>
      {/* <button onClick={highLow}>High - Low</button>
      <button onClick={lowHigh}>Low - High</button> */}
      <button onClick={swapOrder}>Switch Order</button>
      {order ? aList : aList.sort((a, b) => b.props.rank - a.props.rank)}
    </>
  );
}
/*
  Okay the list is sorted
  - Make buttons that will display
  - Send functions to the buttons that will do the sorting to the page
    - This may require me to pass down the function data via props to the items component.
*/






