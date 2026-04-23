import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const API_URL = "http://localhost:8080";

export const deleteProduto = async (id: string) => {
    return axios.delete(`${API_URL}/produto/${id}`);
};

export function useDeleteProduto() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteProduto,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['produto-data'] });
        }
    });
}