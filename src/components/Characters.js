import React from 'react'

export default function Characters({characters, setCharacters}) {
    const reset = () => {
        setCharacters(null);
    }
    
  return (
    <div className='characters'>
        <h1>Personajes</h1>
        <span className='btn-search' onClick={reset}>Volver a la home</span>
        <div className='container-characters'>
            {characters.map((e,i) => {
                return(
                    <div className='character-container' key={i}>
                    <div>
                        <img src={e.image} alt={e.name}/>
                    </div>
                    <div>
                        <h3>{e.name}</h3>
                        <h6>{e.status === "Alive" ? (
                            <>
                            <span className='alive'/>Alive
                            </>
                        ) : (
                           <>
                           <span className='dead'/>Dead
                           </> 
                        )}</h6>
                        <p className='text-grey'><span>Episodios:  {e.episode.length}</span></p>
                        <p><span className='text-grey'>{e.species}</span></p>
                    </div>
                    </div>
                )
            })}

        </div>
        <span className='back-gome' onClick={reset}>Volver a la home</span>
    </div>
  )
}
