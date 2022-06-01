import React, { useContext } from 'react'
import { ShowFormContext } from '../contexts/ShowFormContext';
import { IPokemon } from '../interfaces/interfaces';
import { DataService } from '../services/DataService';

interface TableProps {
    //service: IDataService;
    data: IPokemon[],
    searchValue: string;
    setSelectedPokemon: Function,
    setPokemons: Function

   // setShowForm: Function
}

export default function PokemonTable({ data, searchValue, setSelectedPokemon, setPokemons }: TableProps) {

    const service = DataService.getInstance();

    const {setShowForm} = useContext(ShowFormContext);


    const deletePokemon = async (id: number) => {
        try {
            await service.delete(id);
            setPokemons(data.filter((poke)=> poke.id!==id));
            alert("Pokemon eliminado");
        }catch(e){}
    }
  return (
    <table data-testid="pokemon-table" className='poke-table'>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Imagen</th>
                <th>Ataque</th>
                <th>Defensa</th>
                <th>Acciones</th>

            </tr>

        </thead>
        <tbody>

        {data.filter((pokemon:IPokemon)=> {
            if(!searchValue){
                return true;
            }
            return pokemon.name.toLowerCase().includes(searchValue.toLowerCase())
        }).map((poke: IPokemon, index: number) => {
            return <tr key={index}>
                <td>{poke.name}</td>
                <td>
                 <a href={poke.image} target="_blank" rel="noopener noreferrer">ver Imagen</a>
                </td>
                <td>{poke.attack}</td>
                <td>{poke.defense}</td>
                <td>
                    <button className='btn-add ' onClick={() => {setSelectedPokemon(poke); setShowForm(true)}}>Editar</button>
                    <button className='btn-delete' onClick={() => deletePokemon(poke.id)}>Eliminar</button>
                </td>

            </tr>
        })}


        </tbody>
    
    </table>
  )
}
