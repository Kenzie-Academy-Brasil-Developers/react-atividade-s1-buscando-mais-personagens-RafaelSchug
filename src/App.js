import './App.css';
import {useEffect, useState} from 'react';
import {CardContainer} from './components/Card';

function App() {
  
  const [characters, setCharacters] = useState([]);
  
  const [next, setNext] = useState("https://rickandmortyapi.com/api/character/");

  useEffect(()=>{
    if(next !== null){
      fetch(next).then(res=> res.json()).then(data=> {
        setCharacters([...characters, ...data.results])
        setNext(data.info.next);
      })
    } 
  },[next])
  
  return (
    <div className="App">
      <h1>RICK AND MORTY</h1>
      <CardContainer>{characters}</CardContainer>
    </div>
  );
}

export default App;
