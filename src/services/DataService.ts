import axios, { AxiosRequestConfig } from "axios";
import { IDataService } from "../interfaces/interfaces";




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
    post(): Promise<any> {
        throw new Error("Method not implemented.");
    }
    getOne(id: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
    put(id: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
    
}