import Header from './components/Header'; 
import './App.css'; 
import { Card } from './components/card/card'; 
import { useProdutoData } from './hooks/useProdutoData'; 
import type { ProdutoData } from './interface/ProdutoData';

function App() { 
  const {data} = useProdutoData(); 
  
  return ( 
    <div className='container'> 
      <Header/> 
      <h1>Cardapio</h1> 
      
      <div className="card-grid"> 
        {data?.map(produtoData => 
        <Card 
          key={produtoData.id}
          preco={produtoData.preco} 
          nome={produtoData.nome} 
          imagem={produtoData.imagem} 
          descricao={produtoData.descricao}/>
        )
      } 

      </div> 
    </div> 
  )
} 

export default App