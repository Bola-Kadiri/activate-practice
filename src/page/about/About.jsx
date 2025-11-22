import MiniDrawer from "../../component/drawer/Drawer"
import DataGridDemo from "../../component/table/Table"

import './About.css'


const About = ({last_name, age}) => {

  return (
    <div className="about-container">
       <h1 className="about-heading">THIS IS ABOUT PAGE</h1>
       <h2>{last_name} is {age} years old</h2>
       {/* <MiniDrawer/> */}
       <div className="data-grid">
         <DataGridDemo/> 
       </div>
       <p className="yellow">Hello</p>
    
    </div>
  )
}

export default About