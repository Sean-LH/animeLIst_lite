import React from 'react'

export default function Items_Al(props) {
  // console.log(props)
  const {title, title_english, rating, episodes} = props
  const {image_url ,small_image_url} = props.images.jpg
  // console.log('images', small_image_url)
  return (
    <div>
      <h1>English: {title_english}</h1>

      <h1>original: {title}</h1>
      <img src={image_url}/>
      <h5>Currently has {episodes} episodes</h5>
      <h5>Has a {rating} rating</h5>
    </div>
  )
}
