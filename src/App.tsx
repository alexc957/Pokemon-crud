/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';

import './App.css';
import { DataService } from './services/DataService';
import { IPokemon ,IDataService} from './interfaces/interfaces';
import PokemonTable from './components/PokemonTable';
import PokemoForm from './components/PokemoForm';

function App() {
  const dataService: IDataService = DataService.getInstance();

  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const [filteredPokemons, setFilteredPokemons] = useState<IPokemon[]>([]);

  const [searchValue, setSearchValue ] = useState<string>("");

  const [showForm, setShowForm] = useState<boolean>(false);

  const [shouldFetch, setShouldFetch] = useState<boolean>(false);

 
  useEffect(()=> {
    const fetchPokemons = async () => {
      try{
        const response = await dataService.get();
        //console.log('whats response ', response)
        if(response.status===200){
          setPokemons(response.data);
          setFilteredPokemons(response.data);

        }
      }catch(e){
        alert("Ocurrio un problema al obtener la data");
        console.log("Ocurri ",e)
      }
    }

    fetchPokemons();
  },[shouldFetch]);

  /*const onSearch = () => {
    if(searchValue!==''){
     
      setFilteredPokemons(pokemons.filter((poke:IPokemon)=> {
     
        return poke.name.toLowerCase().includes(searchValue.toLowerCase());
      }))
    }else {
      setFilteredPokemons(pokemons);
    }
    
  }*/

  const onChangeSearch = (e:React.ChangeEvent<HTMLInputElement>)=> {
    setSearchValue(e.target.value);
    if(e.target.value===""){
      setFilteredPokemons(pokemons);
    }else {
      setFilteredPokemons(pokemons.filter((poke:IPokemon)=> {
     
        return poke.name.toLowerCase().includes(e.target.value.toLowerCase());
      }))
    }
  }

  
  return (
    <div className="App">
      <div className='searchBar'>
        <input  data-testid="search-pokemon" name='searchValue' placeholder='Buscar por nombre' value={searchValue}  onChange={onChangeSearch}/>
        <button onClick={()=> setShowForm(true)}>Nuevo Pokemon</button>
      </div>

      <PokemonTable data={filteredPokemons} service={dataService} />

      {showForm &&   <PokemoForm setShouldFetch={setShouldFetch} service={dataService}  setShowForm={setShowForm  }/>

     }
     
    </div>
  );
}

export default App;
