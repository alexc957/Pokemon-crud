import { AxiosRequestConfig } from "axios";

export interface IPokemon {
    id?: any;
    name: string;
    attack: number;
    image: string;
    defense: number; 
}

export interface IDataService {
    get(): Promise<any>;
    post(pokemon: IPokemon): Promise<any>;
    getOne(id: string): Promise<any>;
    put(id:string): Promise<any>;
    delete(id: string): Promise<any>;


}


export interface IFormProps {
    pokemon?: IPokemon;
    service: IDataService
    setShowForm: Function,
    setShouldFetch: Function
}