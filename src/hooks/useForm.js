import { useState } from "react"


export const useForm = (initialState = {}) => {
 
    const [values, setValues] = useState(initialState); 

    const reset = () => {
        setValues(initialState);
    }

    const handleInputChange = ({target}) => {

        setValues({
            ...values,
            [target.name]: target.value //Esto es para que se guarde la info segun corresponda, es decir name = "jaider", email="javut2010@hotmail.com"

        });
        

    }

    return [values, handleInputChange, reset];

}
