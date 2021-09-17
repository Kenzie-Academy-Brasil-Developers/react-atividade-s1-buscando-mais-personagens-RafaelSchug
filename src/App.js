import './App.css';
import {useEffect, useState} from 'react';

function App() {
  
  const [characters, setCharacters] = useState([1, 2, 3]);

  const [next, setNext] = useState('');
  const [previous, setPrevious] = useState('');

  useEffect(()=>{
    fetch("https://rickandmortyapi.com/api/character/").then(res=> res.json()).then(data=> {
      console.log(data)
      setNext(data.info.next);
      setPrevious(data.info.prev);
      setCharacters(data.results)
    })
  },[])


  const handlePreviousPage = (previousPage) => {
    if(previousPage){
      fetch(previousPage).then(res=> res.json()).then(data=> {
        setNext(data.info.next);
        setPrevious(data.info.prev);
        setCharacters(data.results)
      })
    }
  }

  const handleNextPage = (nextPage) => {
    if(nextPage){
      fetch(nextPage).then(res=> res.json()).then(data=> {
        setNext(data.info.next);
        setPrevious(data.info.prev);
        setCharacters(data.results)
      })
    }
  }
  
  console.log(next)
  return (
    <div className="App">
      <button onClick={()=>handlePreviousPage(previous)}>Anterior</button>
      <button onClick={()=>handleNextPage(next)}>Próxima</button>
      {characters.map(item => <div>{item.name}</div>)}
    </div>
    
  );
}

export default App;
