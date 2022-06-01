import React, { useContext, useEffect, useState } from 'react'
import { POKEMON_TYPES } from '../constants';
import { ShowFormContext } from '../contexts/ShowFormContext';
import { IFormProps, IPokemon } from '../interfaces/interfaces'



export default function PokemoForm({pokemon, service, setPokemons}: IFormProps) {

  const {setShowForm} = useContext(ShowFormContext);

  const [pokemonState, setPokemonState] = useState<IPokemon>(
    pokemon || {name: "", image: "", attack: 0, defense: 0, hp: 0}
  )

  useEffect(()=>{
    if(pokemon){
      setPokemonState(pokemon);
    }

  }, [pokemon])

  const editPokemon = async () => {
    const response = await service.put(pokemonState?.id, pokemonState);
    if(response.status===200){
      alert("Pokemon editado");
      setPokemons((pokemons: IPokemon[]) => pokemons.map((poke:IPokemon) => {
        if(poke.id === pokemonState.id){
          return {...poke, ...pokemonState}
        }
        return poke;
      }));

    }else {
      alert(`Ocurrio un problema ${JSON.stringify(response.data)}`);
    }
    
  }

  const addPokemon = async () => {
    const response = await service.post(pokemonState);
    if(response.status===200){
      alert("Nuevo pokemon agregado");
      setPokemons((pokemons: IPokemon[]) => [...pokemons,response.data]);
    

    }else {
      alert("Ocurrio un problema");
    }

  }

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if(pokemonState.id){
        await editPokemon();
      }else {
        await addPokemon();
      }
      
       
    }catch(e: any){
      console.log("error ",e)
      alert("ocurrio un problema "+e.toString())
    }
  }
  

    return <form onSubmit={onSubmit}>    
     <div className='row'> 

      <div className='form-child'>

        <div>
          <label htmlFor='name'>Nombre</label>
          <input 
              data-testid="name" 
              value={pokemonState.name}
              onChange={(e)=> setPokemonState({...pokemonState, name: e.target.value})} 
              id='name' 
              name='name'  
              placeholder='Nombre del pokemon'
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
              placeholder='url de la imagen del pokemon'
              required
              value={pokemonState.image} 
              onChange={(e)=> setPokemonState({...pokemonState, image: e.target.value})}/>
        </div>
        <div className='select-container'>
          <label className='tipo' htmlFor='type'>Tipo</label>
          <select 
            id="type"
            name="type" 
            data-testid="type" 
            required
            value={pokemonState.type|| "" } onChange={(e)=> setPokemonState({...pokemonState, type: e.target.value})}>
            {POKEMON_TYPES.map((type: string, index: number)=> <option key={index} value={type}>{type}</option>)}
          </select>
        </div>

        </div>
        <div className="form-child">

        <div>
          <label htmlFor='attack'>Ataque: {pokemonState.attack}</label>
          <input 
              id='attack' 
              name='attack' 
              data-testid="attack" 
              value={pokemonState.attack}  
              onChange={(e)=> setPokemonState({...pokemonState, attack: +e.target.value})}
              type="range" 
              min={0} 
              required
              max={100} />
            
        </div>

        <div>
        <label htmlFor='defense'>Defensa: {pokemonState.defense}</label>
        <input 
          id='defense' 
          name='defense' 
          data-testid="defense" 
          value={pokemonState.defense}
          onChange={(e)=> setPokemonState({...pokemonState, defense: +e.target.value})}  
          type="range" 
          required
          min={0} 
          max={100} />
        
        </div>

        <div>
        <label htmlFor='hp'>Hp: {pokemonState.hp}</label>
        <input 
          id='hp' 
          name='hp' 
          data-testid="hp" 
          value={pokemonState.hp || 0}
          onChange={(e)=> setPokemonState({...pokemonState, hp: +e.target.value})}  
          type="range" 
          min={0} 
          max={100} />
           
        </div>

        </div>


     </div>

     
    
     

      <div>
        <button className='btn-add' type='submit'>Guardar</button>
        <button  className='btn-delete' onClick={() => setShowForm(false)}>Cancelar</button>

      </div>

        


    </form>
  
}
