import { createContext, useContext } from "react";

const AppContext = createContext();

const AppProvider = ({children}) => {
    

    return (
        <AppContext.Provider value={'Home'}>
            {children}
         </AppContext.Provider>
        )
}


const useGbolbalContext = () => {

    return useContext(AppContext);
}



export { AppContext, AppProvider, useGbolbalContext};