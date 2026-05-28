import { useState } from "react";
import { Link } from "react-router-dom";

interface ModalLoginProps{
    closeLogin(): void;
}

export function loginModal({login, closeLogin} : ModalLoginProps) {
    const [email, setEmail] = useState(login?.email || "");
    const [senha, setSenha] = useState(login?.senha || "");
    

    return (
        <div className="modal-overlay">
            <div className="modal-body">
                <button className="btn btn-close" onClick={closeLogin}>
                    ✖
                </button>

                <h2>Faça seu login</h2>

                <form action="">

                </form>

                <Link to="/">Não possui conta? Cadastre-se</Link>
            </div>
        </div>
    )
}