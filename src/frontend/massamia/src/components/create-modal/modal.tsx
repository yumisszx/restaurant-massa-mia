import { useEffect, useState } from "react"
import { useProdutoDataMutate } from "../../hooks/useProdutoDataMutate"
import type { ProdutoData } from "../../interface/ProdutoData"
import type { TipoProdutoData } from "../../interface/TipoProdutoData"
import { useTipoProduto } from "../../hooks/useTipoProdutoData";
import { uploadImagem } from "../../hooks/useUploadImagem";
import { useUpdateProduto } from "../../hooks/useUpdateProduto";

interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: any): void
}

interface ModalProps {
    produto?: ProdutoData;
    closeModal(): void
}

const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)}></input>
        </>
    )
}

export function Modal({ produto, closeModal }: ModalProps) {
    const isEdit = !!produto;

    const [imagemFile, setImagemFile] = useState<File | null>(null);
    const [nome, setNome] = useState(produto?.nome || "");
    const [descricao, setDescricao] = useState(produto?.descricao || "");
    const [preco, setPreco] = useState(produto?.preco || 0);
    const [tipo, setTipo] = useState<TipoProdutoData | null>(produto?.tipo || null);

    const [fileName, setFileName] = useState("Adicionar Imagem");

    const { data: tipos } = useTipoProduto();

    const {
        mutate: createMutate,
        isPending: isPendingCreate,
        isSuccess: isSuccessCreate
    } = useProdutoDataMutate();

    const {
        mutate: updateMutate,
        isPending: isPendingUpdate,
        isSuccess: isSuccessUpdate
    } = useUpdateProduto();

    const submit = async () => {
        if (!tipo) {
            alert("Selecione um tipo");
            return;
        }

        let imagemUrl = produto?.imagem || "";

        if (imagemFile) {
            imagemUrl = await uploadImagem(imagemFile);
        }

        if (isEdit) {
            updateMutate({
                id: produto!.id!,
                data: {
                    nome,
                    descricao,
                    preco,
                    imagem: imagemUrl,
                    tipo: { id: tipo.id }
                }
            });
        } else {
            createMutate({
                nome,
                descricao,
                preco,
                imagem: imagemUrl,
                tipo
            });
        }
    };

    useEffect(() => {
        if (!(isSuccessCreate || isSuccessUpdate)) return;
        closeModal();
    }, [isSuccessCreate, isSuccessUpdate]);


    return (
        <div className="modal-overlay">
            <div className="modal-body" >
                <button className="btn-close" onClick={closeModal}>
                    ✖
                </button>

                <h2>{isEdit ? "Editar produto" : "Novo produto"}</h2>

                <form className="input-container">
                    <label className="btn-upload">
                        <input
                            type="file"
                            hidden
                            onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                    setImagemFile(file);
                                    setFileName(file.name);
                                }
                            }}
                        />
                        {fileName}

                    </label>

                    <Input label="Nome" value={nome} updateValue={setNome} />
                    <Input label="Descrição" value={descricao} updateValue={setDescricao} />
                    <Input label="Preço" value={preco} updateValue={setPreco} />

                    <select value={tipo?.id || ""} onChange={(e) => {
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

                <button onClick={submit} className="btn-save">
                    {isEdit
                        ? (isPendingUpdate ? "Salvando..." : "Salvar")
                        : (isPendingCreate ? "Criando..." : "Criar")
                    }
                </button>
            </div>
        </div>
    )
}