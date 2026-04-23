import type { TipoProdutoData } from "./TipoProdutoData"

export interface ProdutoData{
    id?: string,
    nome: string,
    imagem: string,
    preco: number,
    descricao: string,
    tipo: TipoProdutoData
}   