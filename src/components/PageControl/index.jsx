import {Button} from '@material-ui/core';


export const PageControl = ({setCharacters, previous, next, setPrevious, setNext}) => {

    
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


    return (
        <div style={{padding:'20px', display:'flex', gap:'4px', justifyContent:'center'}}>
            {previous ? <Button variant='contained' onClick={()=>handlePreviousPage(previous)}>Anterior</Button> : <Button variant='contained' disabled >Anterior</Button>}
            {next ? <Button variant='contained' onClick={()=>handleNextPage(next)}>Próxima</Button> : <Button variant='contained' disabled >Próxima</Button>} 
        </div>
    )
}