import medical from '../../assets/image-one.jpg'

import './Home.css'

// props => Properties

const Home = () => {
  return (
    <div className="home-container">
      <div>
       <section>
          <div className='left-section-one'>
              <img src={medical} alt="medical" />
          </div>
          <div className='right-section-one'>
            <h1>Apply to our medical strategy and get amazing service delivery</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique odio, id non dolore labore reprehenderit. Ullam animi recusandae minus corrupti, enim repellat. Eos dolor nemo architecto, modi maiores deleniti consequuntur.</p>
          </div>
       </section>
       <div className='section-two'>
        
       </div>
       </div>
    </div>
    
  )
}

export default Home