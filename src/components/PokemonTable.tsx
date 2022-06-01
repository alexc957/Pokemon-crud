import React, { useContext } from 'react'
import { ShowFormContext } from '../contexts/ShowFormContext';
import { IPokemon } from '../interfaces/interfaces';

interface TableProps {
    //service: IDataService;
    data: IPokemon[],
    searchValue: string;
    setSelectedPokemon: Function,
   // setShowForm: Function
}

export default function PokemonTable({ data, searchValue, setSelectedPokemon }: TableProps) {

    const {setShowForm} = useContext(ShowFormContext);
  return (
    <table data-testid="pokemon-table">
        <tr>
            <th>Nombre</th>
            <th>Imagen</th>
            <th>Ataque</th>
            <th>Defensa</th>
            <th>Acciones</th>

        </tr>
        {data.filter((pokemon:IPokemon)=> {
            if(!searchValue){
                return true;
            }
            return pokemon.name.toLowerCase().includes(searchValue.toLowerCase())
        }).map((poke: IPokemon) => {
            return <tr key={poke.id}>
                <td>{poke.name}</td>
                <td>{poke.image}</td>
                <td>{poke.attack}</td>
                <td>{poke.defense}</td>
                <td>
                    <button onClick={() => {setSelectedPokemon(poke); setShowForm(true)}}>Editar</button>
                    <button>Eliminar</button>
                </td>

            </tr>
        })}

    </table>
  )
}
