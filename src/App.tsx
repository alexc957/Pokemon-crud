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


  const [searchValue, setSearchValue ] = useState<string>("");

  const [showForm, setShowForm] = useState<boolean>(false);



 
  useEffect(()=> {
    const fetchPokemons = async () => {
      try{
        const response = await dataService.get();
     
        if(response.status===200){
          setPokemons(response.data);


        }
      }catch(e){
        alert("Ocurrio un problema al obtener la data");
        console.log("Ocurri ",e)
      }
    }

    fetchPokemons();
  },[]);


  const onChangeSearch = (e:React.ChangeEvent<HTMLInputElement>)=> {
    setSearchValue(e.target.value);
   
    
  }

  
  return (
    
      <div className="App">
        <div className='searchBar'>
          <input  data-testid="search-pokemon" name='searchValue' placeholder='Buscar por nombre' value={searchValue}  onChange={onChangeSearch}/>
          <button onClick={()=> setShowForm(true)} data-testid="new-pokemon">Nuevo Pokemon</button>
        </div>

        <PokemonTable data={pokemons} searchValue={searchValue} />

        {showForm &&   <PokemoForm setPokemons={setPokemons} service={dataService}  setShowForm={setShowForm  }/>

      }
      
      </div>
   
  );
}

export default App;
