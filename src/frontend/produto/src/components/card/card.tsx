import "./card.css"

interface CardProps {
    preco: number,
    nome: string,
    imagem: string,
    descricao: string
    tipo: {
        id?: number;
        nome: string;
    };
}

export function Card({ preco, imagem, nome, descricao }: CardProps) {
    return (
        <div className="card">
            <img src={imagem} alt={nome} />
            <h2>{nome}</h2>
            <p>{descricao}</p>
            <span>R$ {preco}</span>
        </div>
    )
}