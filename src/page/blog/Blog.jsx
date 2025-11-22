import Accordiones from "../../component/accordiones/Accordiones"
import StackBars from "../../component/chart/Chart"

import './Blog.css'

const Blog = () => {
  return (
    <div className="blog-container">
      <h1>THIS IS OUR BLOG PAGE</h1>
      <div className="parent-accordion">
        <div className="blog-accordion">
          <Accordiones />
        </div>
        <StackBars/>
        <p>Hello</p>
      </div>


    </div>
  )
}

export default Blog