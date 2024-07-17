import React, { useState } from 'react'
import { useEffect } from 'react';
import EmojiData from './emoji.json'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './App.css'
import Form from 'react-bootstrap/Form';


export default function App() { 

  const[a,seta]=useState("");
  const [data,setData] = useState([]);
  const [copy,setcopy] = useState(true);

  useEffect(()=>{
      const newData = EmojiData.filter(emoji => emoji.title.toLowerCase().includes(a.toLowerCase()));
      setData(newData);
  },[a])
  
  return (
    <div><center>
<div className='input'>
<Form  >
      <Form.Group className="mb-3" variant="success " controlId="exampleForm.ControlInput1">
       
        <Form.Control type="text"
        style={{ width: '20rem' }} 
        placeholder="search for emoji" value={a} onChange={(e)=>seta(e.target.value)} />
      </Form.Group></Form></div>

      
      <div className='cards'>
        {data.map(emoji=>
       
        <div className='card1'><Card style={{ width: '10rem' }} bg='light'>
        
        <Card.Body >
          <Card.Title><h4 style={{ }}>{emoji.title}</h4></Card.Title>
          <Card.Text>
            <h1>{emoji.symbol}</h1>
          </Card.Text>
          <Button variant="success " 
          onClick={() => {navigator.clipboard.writeText(emoji.symbol);alert("Emoji Copy");
           setcopy(!copy);
          }}>copy </Button>
        </Card.Body>
      </Card></div>
        
      
        )}</div>
      
   
      
      </center></div>
  )
}
