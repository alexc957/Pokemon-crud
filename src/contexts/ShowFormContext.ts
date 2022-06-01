import { createContext } from "react";
interface IShowFormContext {
    setShowForm: Function;
}

export const ShowFormContext = createContext<IShowFormContext>({setShowForm: ()=> console.warn("not implemented yet")});

export const ShowFormContextProvider = ShowFormContext.Provider;

export const ShowFormContextConsumer = ShowFormContext.Consumer;