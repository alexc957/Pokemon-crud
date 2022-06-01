import axios from "axios";
import { IDataService, IPokemon } from "../interfaces/interfaces";




export class DataService implements IDataService {
    private static instance: IDataService; 
    private constructor() {}


  

    static getInstance(): IDataService {
        if(!this.instance){
            this.instance = new this();
        }
        return this.instance;
    }



    get(): Promise<any> {
        //throw new Error();

        return axios.get(`${process.env.REACT_APP_POKE_API}/pokemons?idAuthor=1`);
    }
    post(pokemon: IPokemon): Promise<any> {
       return axios.post(`${process.env.REACT_APP_POKE_API}/pokemons?idAuthor=1`,{...pokemon, idAuthor: 1});
    }
    getOne(id: string): Promise<any> {
        return axios.get(`${process.env.REACT_APP_POKE_API}/pokemons/${id}`);
    }
    put(id: string, pokemon:IPokemon): Promise<any> {
    return axios.put(`${process.env.REACT_APP_POKE_API}/pokemons/${id}`,{...pokemon,idAuthor: 1});
    }
    delete(id: number): Promise<any> {
        return axios.delete(`${process.env.REACT_APP_POKE_API}/pokemons/${id}`);
    }
    
}