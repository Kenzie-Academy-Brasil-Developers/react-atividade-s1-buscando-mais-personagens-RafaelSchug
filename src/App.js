import './App.css';
import {useEffect, useState} from 'react';
import {CardContainer} from './components/Card';
import {PageControl} from './components/PageControl';

function App() {
  
  const [characters, setCharacters] = useState([]);
  
  const [next, setNext] = useState('');
  const [previous, setPrevious] = useState('');

  useEffect(()=>{
    fetch("https://rickandmortyapi.com/api/character/").then(res=> res.json()).then(data=> {
      setNext(data.info.next);
      setPrevious(data.info.prev);
      setCharacters(data.results)
    })
  },[])
  
  return (
    <div className="App">
      <PageControl setPrevious={setPrevious} setNext={setNext} setCharacters={setCharacters} previous={previous} next={next}/>
      <CardContainer>{characters}</CardContainer>
    </div>
  );
}

export default App;
