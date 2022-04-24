import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';

import '../02-useEffect/effects.css';
// Cuando se tiene una funcion dentro del componente se crea un nuevo espacio en memoria
// y por ende el useMemo no serviria, es por ello que se hace necesario emplear el useCallBack

//Hay 2 casos en los que se usa el useCallBack, el primero es cuando se tiene una funcion dentro del componente se crea un nuevo espacio
// y el segundo es cuando se tiene un useEffect y la dependencia de dicho useEffect es una función 

export const CallBackHook = () => { 

 const [counter, setCounter] = useState(10)


 const increment = useCallback((num) => {
    setCounter(c => c + num);
   },[setCounter])

  
 

  return (
    <div>
        <h1>UseCallBack Hook: {counter} </h1>
        <hr/>

        <ShowIncrement increment={increment} />

    </div>
  )
}
