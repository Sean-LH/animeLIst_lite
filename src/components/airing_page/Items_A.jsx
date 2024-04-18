import React from 'react'


export default function Items_A(props) {
  // console.log('item A:', props)
  const {season, title, title_english} = props
  const {string} = props.aired
  return (
    <div>
      <h1>{title_english}</h1>
      <h2>{title}</h2>
      <p>Which aired {string}</p>
    </div>
  )
}
