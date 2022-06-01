import { AxiosRequestConfig } from "axios";

export interface IPokemon {
    id?: any;
    name: string;
    attack: number;
    image: string;
    defense: number; 
    hp?: number;
    type?: string;
}

export interface IDataService {

    get(): Promise<any>;
    post(pokemon: IPokemon): Promise<any>;
    getOne(id: string): Promise<any>;
    put(id:string, pokemon: IPokemon): Promise<any>;
    delete(id: number): Promise<any>;


}


export interface IFormProps {
    pokemon?: IPokemon;
    service: IDataService
   // setShowForm: Function,
    setPokemons: Function,
}


export interface IDataContex  {
    filteredPokemons: IPokemon[];
    setFilteredPokemons: Function;
}