import React from 'react'
import { IFormProps } from '../interfaces/interfaces'



export default function PokemoForm({pokemon, service}: IFormProps) {
  

    return <form>
      <div>
        <label htmlFor='name'>Nombre</label>
        <input id='name' name='name'  type="text" />
      </div>
      <div>
        <label htmlFor='image'>Imagen</label>
        <input id='image' name='image'  type="text" />
      </div>
      <div>
        <label htmlFor='attack'>Ataque</label>
        <input id='attack' name='attack'  type="range" min={0} max={100} />
      </div>
      <div>
      <label htmlFor='defense'>Defensa</label>
        <input id='defense' name='defense'  type="range" min={0} max={100} />
      </div>

        


    </form>
  
}
