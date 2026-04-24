import Header from '../components/Header';
import { Card } from '../components/card/card';
import { useProdutoData } from '../hooks/useProdutoData';
import { useState, useEffect } from 'react';
import { Modal } from '../components/create-modal/modal';
import type { ProdutoData } from '../interface/ProdutoData';
import Footer from '../components/Footer';

function Menu() {
  const { data } = useProdutoData();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categoriaAtiva, setCategoriaAtiva] = useState("comida");
  const [produtoSelecionado, setProdutoSelecionado] = useState<ProdutoData | null>(null);

  const openModalCreate = () => {
    setProdutoSelecionado(null);
    setIsModalOpen(true);
  };

  const openModalEdit = (produto: ProdutoData) => {
    setProdutoSelecionado(produto);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  // categorias disponiveis
  const categorias: Record<string, number> = {
    bebida: 1,
    sobremesa: 2,
    comida: 3
  };

  // Filtrar produtos pela categoria ativa
  const produtosFiltrados = data?.filter(produto =>
    produto.tipo?.id === categorias[categoriaAtiva]
  );

  // pegar categoria pela URL 
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const aba = params.get("aba");

    if (aba && categorias[aba]) {
      setCategoriaAtiva(aba);
    }
  }, []);

  return (
    <div className='container-menu'>
      <Header />

      <h1>Menu</h1>

      <button className='btn btn-add-produto' onClick={openModalCreate}>
        Adicionar produto
      </button>

      <section id="options">
        <button
          className={` btn menu-btn ${categoriaAtiva === "comida" ? "active" : ""}`}
          onClick={() => setCategoriaAtiva("comida")}
        >
          Comida
        </button>

        <button
          className={`btn menu-btn ${categoriaAtiva === "bebida" ? "active" : ""}`}
          onClick={() => setCategoriaAtiva("bebida")}
        >
          Bebida
        </button>

        <button
          className={`btn menu-btn ${categoriaAtiva === "sobremesa" ? "active" : ""}`}
          onClick={() => setCategoriaAtiva("sobremesa")}
        >
          Sobremesa
        </button>
      </section>

      <div id='produtosMenu'>
        <div className='menu active'>
          <div className="card-grid">
            {produtosFiltrados?.map(produtoData => (
              <Card
                key={produtoData.id}
                id={produtoData.id!}
                preco={produtoData.preco}
                nome={produtoData.nome}
                imagem={produtoData.imagem}
                descricao={produtoData.descricao}
                tipo={produtoData.tipo ?? { id: 0, nome: "Sem tipo" }}
                onEdit={openModalEdit}
              />
            ))}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <Modal
          produto={produtoSelecionado ?? undefined}
          closeModal={closeModal}
        />
      )}

      <Footer/>
    </div>
  );
}

export default Menu;