import React, { useState } from 'react'
import { IFormProps, IPokemon } from '../interfaces/interfaces'



export default function PokemoForm({pokemon, service, setShowForm,setShouldFetch}: IFormProps) {

  const [pokemonState, setPokemonState] = useState<IPokemon>(
    pokemon || {name: "", image: "", attack: 0, defense: 0}
  )

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      
        const response = await service.post(pokemonState);
        if(response.status===200){
          alert("Nuevo pokemon agregado");
          setShouldFetch(true);

        }else {
          alert("Ocurrio un problema");
        }
    }catch(e){
      console.log("error ",e)
      alert("ocurrio un problema ")
    }
  }
  

    return <form onSubmit={onSubmit}>
      <div>
        <label htmlFor='name'>Nombre</label>
        <input 
            data-testid="name" 
            value={pokemonState.name}
            onChange={(e)=> setPokemonState({...pokemonState, name: e.target.value})} 
            id='name' 
            name='name'  
            type="text" 
            required/>
      </div>
      <div>
        <label htmlFor='image'>Imagen</label>
        <input 
            data-testid="image" 
            id='image' 
            name='image'  
            type="text"
            required
            value={pokemonState.image} 
            onChange={(e)=> setPokemonState({...pokemonState, image: e.target.value})}/>
      </div>
      <div>
        <label htmlFor='attack'>Ataque</label>
        <input 
            id='attack' 
            name='attack' 
            data-testid="attack" 
            value={pokemonState.attack}  
            onChange={(e)=> setPokemonState({...pokemonState, attack: +e.target.value})}
            type="range" 
            min={0} 
            max={100} />
      </div>
      <div>
      <label htmlFor='defense'>Defensa</label>
        <input 
          id='defense' 
          name='defense' 
          data-testid="defense" 
          value={pokemonState.defense}
          onChange={(e)=> setPokemonState({...pokemonState, defense: +e.target.value})}  
          type="range" 
          min={0} 
          max={100} />
      </div>

      <div>
        <button type='submit'>Guardar</button>
        <button onClick={() => setShowForm(false)}>Cancelar</button>

      </div>

        


    </form>
  
}
