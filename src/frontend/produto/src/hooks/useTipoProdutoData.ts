import { useQuery } from "@tanstack/react-query";
import type { TipoProdutoData } from "../interface/TipoProdutoData";
import axios from "axios";

const fetchTipo = async (): Promise<TipoProdutoData[]> => {
    const response = await axios.get("http://localhost:8080/tipoproduto");
    return response.data;
};

export function useTipoProduto() {
    return  useQuery<TipoProdutoData[]>({
        queryKey: ['tipo-produto'],
        queryFn: fetchTipo
    });
}