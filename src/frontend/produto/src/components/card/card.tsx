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

export function Card({ preco, imagem, nome, descricao, tipo }: CardProps) {
    return (
        <div className={`card ${tipo.nome.toLowerCase()}`}>
            <img src={imagem} alt={nome} className="card-img" />

            <div className="card-content">
                <h2 className="card-title">{nome}</h2>

                <p className="card-description">{descricao}</p>

                <span className="card-price">
                    {preco.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}
                </span>
            </div>
        </div>
    );
}