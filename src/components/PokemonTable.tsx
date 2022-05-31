import React from 'react'
import { IDataService, IPokemon } from '../interfaces/interfaces';

interface TableProps {
    service: IDataService;
    data: IPokemon[]
}

export default function PokemonTable({ service, data }: TableProps) {
  return (
    <table data-testid="pokemon-table">
        <tr>
            <th>Nombre</th>
            <th>Imagen</th>
            <th>Ataque</th>
            <th>Defensa</th>
            <th>Acciones</th>

        </tr>
        {data.map((poke: IPokemon) => {
            return <tr key={poke.id}>
                <td>{poke.name}</td>
                <td>{poke.image}</td>
                <td>{poke.attack}</td>
                <td>{poke.defense}</td>
                <td>
                    <button>Editar</button>
                    <button>Eliminar</button>
                </td>

            </tr>
        })}

    </table>
  )
}
