import Item from './Item'

function List(){
    return(
        <>
         <h1>Minha Lista</h1>
         <ul>
          <Item marca = "Ferrari" ano_lancamento={1955}/>
          <Item marca = "Fiat" ano_lancamento={1964}/>
          <Item marca = {1}/>
         </ul>
        
        </>
    )
}

export default List