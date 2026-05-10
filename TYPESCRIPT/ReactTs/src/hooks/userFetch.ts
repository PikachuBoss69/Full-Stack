import { useEffect, useState } from "react";

interface FetchState<T>{
    data: T | null;
    loading: boolean;
    error: string | null;
}

export function userFetch<T>(url:string):FetchState<T> {
    const [state, setState] = useState<FetchState<T>>({
        data: null,
        loading: true,
        error: null,
    })


    //UseEffect to make fetch request..................


    return state;
}