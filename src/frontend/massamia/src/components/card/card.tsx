import { useDeleteProduto } from "../../hooks/useDeleteProduto";
import type { ProdutoData } from "../../interface/ProdutoData";

interface CardProps {
    id: string,
    preco: number,
    nome: string,
    imagem: string,
    descricao: string
    tipo: {
        id?: number;
        nome: string;
    };
    onEdit: (produto: ProdutoData) => void;
}

export function Card({ id, preco, imagem, nome, descricao, tipo, onEdit }: CardProps) {

    const { mutate } = useDeleteProduto();

    const handleDelete = () => {
        if (confirm("Tem certeza que deseja deletar?")) {
            mutate(id);
        }
    };

    const produto = { id, preco, imagem, nome, descricao, tipo };

    return (
        <div className={`card ${tipo.nome.toLowerCase()}`}>
            <img src={imagem} alt={nome} className="card-img" />

            <div className="card-content">
                <h2 className="card-title">{nome}</h2>

                <p className="card-description">{descricao}</p>

                <span className="card-price">
                    {preco.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL"
                    })}
                </span>

            </div>

            <div className="btns-card">
                <button onClick={handleDelete} className="btn-card btn-delete">
                    Deletar
                </button>
                <button className="btn-card btn-edit" onClick={() => onEdit(produto)}>
                    Editar
                </button>
            </div>
        </div>
    );
}
