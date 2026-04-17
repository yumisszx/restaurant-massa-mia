import Header from './components/Header'; 
import './App.css'; 
import { Card } from './components/card/card'; 
import { useProdutoData } from './hooks/useProdutoData'; 
import { useState } from 'react';
import { CreateModal } from './components/create-modal/create-modal';

function App() { 
  const {data} = useProdutoData(); 
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () =>{
    setIsModalOpen(prev => !prev)
  }
  
  return ( 
    <div className='container'> 
      <Header/> 
      <h1>Cardapio</h1> 
      
      <div className="card-grid"> 
        {data?.map(produtoData => (
        <Card 
          key={produtoData.id}
          preco={produtoData.preco} 
          nome={produtoData.nome} 
          imagem={produtoData.imagem} 
          descricao={produtoData.descricao}
          tipo={produtoData.tipo ?? { id: 0, nome: "Sem tipo" }}/>))}
      </div> 

      {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
      <button onClick={handleOpenModal}>Adicionar produto</button>
    </div> 
        
  )
} 

export default App