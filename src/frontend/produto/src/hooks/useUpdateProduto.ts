import axios from "axios";
import type { ProdutoData } from "../interface/ProdutoData";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const API_URL = "http://localhost:8080";

export const updateProduto = async (id: string, data: ProdutoData) => {
    return axios.put(`${API_URL}/produto/${id}`, data);
};

export function useUpdateProduto() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, data }: { id: string; data: any }) =>
            updateProduto(id, data),

        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['produto-data'] });
        }
    });
}