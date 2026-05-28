import axios, { type AxiosPromise } from "axios";
import type { LoginData } from "../interface/LoginData";
import { useQuery } from "@tanstack/react-query";

const API_URL = "http://localhost:8080"

const fetchData = async (): AxiosPromise<LoginData[]> => {
    const response = axios.get(API_URL + '/auth')
    return response;
}

export function useLoginData(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['login-data'],
        retry: 2
    })

    return{
        ...query,
        data: query.data?.data
    }
}