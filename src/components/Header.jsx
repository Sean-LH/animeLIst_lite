import React from 'react'
import {Link} from 'react-router-dom'

export default function Header_L() {
  return (
    <div id='header'>
      <Link to='/'><button>Home</button></Link>
      <Link to='/rank'><button>Rank</button></Link>
      <Link to="/airing"><button>Air Date</button></Link>
      <Link to="/alphabet"><button>Alphabetical</button></Link>
    </div>
  )
}
