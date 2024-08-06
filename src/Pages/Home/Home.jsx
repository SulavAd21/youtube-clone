import React from 'react'
import './home.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Feed from '../../Components/Feed/Feed'
import Video from '../Video/Video'

const Home = ({sidebar}) => {
  return (
    <>
    <Sidebar sidebar={sidebar}/>
    <div className={`container ${sidebar?"":"large-container"}`}>
      {/* <Feed /> */}
      <Video />
    </div>

    </>
  )
}

export default Home