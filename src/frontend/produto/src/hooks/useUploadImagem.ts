import axios from "axios";

export async function uploadImagem(file: File): Promise<string> {
    const formData = new FormData();
    formData.append("file", file);

    const response = await axios.post(
        "http://localhost:8080/upload",
        formData
    );

    return response.data;
}