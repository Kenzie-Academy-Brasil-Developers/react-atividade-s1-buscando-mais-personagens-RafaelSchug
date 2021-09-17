import {StyledCardContainer} from './style'

export const CardContainer = ({children}) => {
    
    return (
        <StyledCardContainer >
            {children.map(({name, image, status, id})=>{
               return (
                   <div className='card_content' key={`${id}`}>
                        <img src={image} alt={name} />
                        <h4>{name}</h4>
                        <div className={`${status} statusIndicator`} ></div>
                   </div>
               )
            })}
        </StyledCardContainer>
    )

}