import { useEffect, useState } from 'react'



import axios from 'axios';

function Show() {
  
  const [jokes, setjokes] = useState([]);

  useEffect( ()=> {
    axios.get('/api/jokes')
    .then((response) => {
      setjokes(response.data)

    } )
    .catch( (error) => {
      console.log(error )

    } )
  } , [])



  return (
    <>
      <h1>To show jokes
      </h1>
      <p>JOKES : {jokes.length}</p>

      {
        jokes.map((joke , index)=>(
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>

        ))
      }
    </>
  )
}

export default Show
