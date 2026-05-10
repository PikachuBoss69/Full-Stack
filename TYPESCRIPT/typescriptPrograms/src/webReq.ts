import axios from "axios";
import type {AxiosResponse} from "axios"
//import axios, {AxiosResponse} from "axios" ......can also do this and ignore red squigly lines.................

interface Todo{
    userId: number;
    id: number;
    title: string;
    completed: boolean
}

const fetchData = async () => {
    try{
        //AxiosResponse<T> defines the structure/type of the response returned by axios.
        const response: AxiosResponse<Todo> = await axios.get(
            "https://jsonplaceholder.typicode.com/todos/1"
        )
        console.log("Todo", response.data)
    }
    catch(error: any){
        //axios.isAxiosError() checks whether the error came from axios or not.
        if(axios.isAxiosError(error)){
            console.log("Axios Error", error.message);
            if(error.response){
                console.log(error.response.status);
            }
        }
        console.log(error);
    }
}