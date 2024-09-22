
      import React, {createContext,useReducer} from "react"
      
      // import { initialSatate, reducer} from "../../Utility/reducer"
// import { children } from "react"
      export const DataContext=createContext()

    export const DataProvider=({children,reducer,initialSatate})=>{
            return(
                  <DataContext.Provider value={useReducer(reducer,initialSatate)}>{children}</DataContext.Provider>
            )
      }
      // const [state,dispach]=useReducer(reducer,initialSatate)