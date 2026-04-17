import { useState } from "react"
import { useProdutoDataMutate } from "../../hooks/useProdutoDataMutate"
import type { ProdutoData } from "../../interface/ProdutoData"
import type { TipoProdutoData } from "../../interface/TipoProdutoData"
import { useTipoProduto } from "../../hooks/useTipoProdutoData";

interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: any): void
}


const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)}></input>
        </>
    )
}

export function CreateModal() {
    const [imagem, setImagem] = useState("");
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [preco, setPreco] = useState(0);
    const [tipo, setTipo] = useState<TipoProdutoData | null>(null);
    const { data: tipos } = useTipoProduto();
    const { mutate } = useProdutoDataMutate();

    const submit = () => {
        if (!tipo) {
            alert("Selecione um tipo");
            return;
        }

        const produtoData: ProdutoData = {
            imagem,
            nome,
            descricao,
            preco,
            tipo
        };
        mutate(produtoData);
    }


    return (
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastre novo item</h2>

                <form className="input-container">
                    <Input label="imagem" value={imagem} updateValue={setImagem} />
                    <Input label="nome" value={nome} updateValue={setNome} />
                    <Input label="descricao" value={descricao} updateValue={setDescricao} />
                    <Input label="preco" value={preco} updateValue={setPreco} />
                    <select onChange={(e) => {
                        const tipoSelecionado = tipos?.find(
                            t => t.id === Number(e.target.value)
                        );
                        setTipo(tipoSelecionado ?? null);
                    }}>
                        <option value="">Selecione a categoria</option>

                        {tipos?.map(tipo => (
                            <option key={tipo.id} value={tipo.id}>
                                {tipo.nome}
                            </option>
                        ))}
                    </select>
                </form>

                <button onClick={submit} className="btn-secundary">Inserir</button>
            </div>
        </div>
    )
}