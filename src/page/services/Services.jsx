


const Services = ({information}) => {


  return (
    <div className="services-container">
       <h1>THIS IS OUR SERVICVES PAGE</h1>
       <div>
        {information.map((student)=>{
          return(
            <div key = {student.id}>
              <h1>My name is {student.first_name} {student.last_name} and I am a {student.occupation}</h1>
            </div>
          )
        })}
       </div>
    </div>
  )
}

export default Services