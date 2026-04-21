import Header from './components/Header';
import { Card } from './components/card/card';
import { useProdutoData } from './hooks/useProdutoData';
import { useState, useEffect } from 'react';
import { CreateModal } from './components/create-modal/create-modal';

function App() {
  const { data } = useProdutoData();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categoriaAtiva, setCategoriaAtiva] = useState("comida");

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev);
  };

  // Mapeamento das categorias (ajuste conforme seu backend)
  const categorias: Record<string, number> = {
    bebida: 1,
    sobremesa: 2,
    comida: 3
  };

  // Filtrar produtos pela categoria ativa
  const produtosFiltrados = data?.filter(produto =>
    produto.tipo?.id === categorias[categoriaAtiva]
  );

  // Opcional: pegar categoria pela URL (?aba=comida)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const aba = params.get("aba");

    if (aba && categorias[aba]) {
      setCategoriaAtiva(aba);
    }
  }, []);

  return (
    <div className='container'>
      <Header />

      <h1>Menu</h1>

      <section id="options">
        <button
          className={`menu-btn ${categoriaAtiva === "comida" ? "active" : ""}`}
          onClick={() => setCategoriaAtiva("comida")}
        >
          Comida
        </button>

        <button
          className={`menu-btn ${categoriaAtiva === "bebida" ? "active" : ""}`}
          onClick={() => setCategoriaAtiva("bebida")}
        >
          Bebida
        </button>

        <button
          className={`menu-btn ${categoriaAtiva === "sobremesa" ? "active" : ""}`}
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
                preco={produtoData.preco}
                nome={produtoData.nome}
                imagem={produtoData.imagem}
                descricao={produtoData.descricao}
                tipo={produtoData.tipo ?? { id: 0, nome: "Sem tipo" }}
              />
            ))}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <CreateModal closeModal={handleOpenModal} />
      )}

      <button onClick={handleOpenModal}>
        Adicionar produto
      </button>
    </div>
  );
}

export default App;