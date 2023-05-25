import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState("");
  const [result , setResult] = useState("");
  useEffect(()=>{
    const fetchHello = async () => {
      const{ data } = await axios.get("http://localhost:3000/api/");
      //console.log(data);
      setMessage(data.message);
    }
    fetchHello();
  })

  const getResult = async (e)=> {
   e.preventDefault();
   console.log(e);
   const { data } = await axios.get("http://localhost:3000/api/" + e.target[0].value)
   setResult(data.message);
  };
  
  return (
    <div className='App'>
        {message}
        <h1>{result}</h1>
        <form onSubmit= {(e)=> getResult(e)}>
          <input type="number" name='number' id='number' />
          <br />
          <br />
          <input type="submit" value="multiple de 2!"/>
        </form>
    </div>
  )
}

export default App
