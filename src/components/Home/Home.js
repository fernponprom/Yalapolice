import React from 'react'
import MainNavbar from '../Navbar/MainNavbar'
import './Home.css'

const Home = (props) => {
  console.log(props)
  return (
  <div>
    <MainNavbar />
    <Content />
  </div>
  )
}

export default Home

const Content = () => {
  return (
    <div className="box">  
    <div className="content-body">
      <div className="head head-img">
        <div className="head-block">
            
                <div className="style">
                    การประชุมห้อง warroom
                </div>
                <div className="style">
                    ตำรวจภูธรจังหวัดยะลา
                </div>
          {/* <div className="signup">
            <button className="signup-button"><a href="/signup">Sign up</a></button>
          </div> */}
          </div>
        </div>
      </div>
      <div>
        <div className="food-block">
          
        </div>
      </div>
    </div>
  )
}