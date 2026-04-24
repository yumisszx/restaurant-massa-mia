import { useNavigate } from "react-router-dom";
import bannerFachada from './../assets/fachadaMassaMia.png'
import imgCozinha from './../assets/interiorMassaMia.png'
import imgRecepcao from './../assets/recepcaoMassaMia.png'

import { useEffect, useState } from "react";

const Home: React.FC = () => {
    const [textoDivisoria, setTextoDivisoria] = useState(0);

    const Navigate = useNavigate();

    const textos = [
        "Conheça nossos produtos!",
        "Faça já o seu pedido!"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setTextoDivisoria((prev) => (prev === 0 ? 1 : 0));
        }, 3000); // troca a cada 3 segundos

        return () => clearInterval(interval);
    }, []);


    return (
        <main>
            <div className="container">
                <div className="banner-inicial">
                    <img src={bannerFachada} alt="Banner Fachada Massa Mia"></img>
                    <h2>A <span>experiência</span> gastronômica em seu país</h2>
                </div>

                <div className='rota-menu'>
                    <section className='divisoria'>
                        <p className='texto-animado'>
                            {textos[textoDivisoria]}
                        </p>
                    </section>

                    <section className='img-section'>
                        <img src={imgCozinha} alt="Cozinha Massa Mia" />
                    </section>

                    <section className='main-section'>
                        <h3>Gastronomia <br />Italiana</h3>

                        <p>Desfrute das melhores comidas, das mais saborosas sobremesas e dos deliciosos drinks! <br />Aproveite cada sabor!</p>

                        <button onClick={() => Navigate("/menu")}>
                            menu
                        </button>
                    </section>
                </div>

                <div className='container-sobre-nos'>
                    <section className='main-section'>
                        <h3 id="sobre-nos">Sobre Nós</h3>

                        <p>Fundada em 2024, o restaurante italiano Massa Mia tem o intuito de entregar ao Brasil parte da culinária tão prestigiada, além da estética vislumbrante do território. <br />É mais que um estabelecimento, é a experiência italiana completa!</p>
                    </section>

                    <section className='img-section'>
                        <img src={imgRecepcao} alt="Recepção Massa Mia" />
                    </section>
                </div>

                {/*impletação futura
                <div className="container-avaliacao">

                </div>

                <div className="container-eventos">

                </div>
                */}
            </div>
        </main>
    );
};

export default Home;