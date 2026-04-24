import { useNavigate } from "react-router-dom";
import bannerFachada from './../assets/fachadaMassaMia.png'

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
            <div className="container-main">
                <div className="banner-inicial">
                    <img src={bannerFachada} alt='Banner Fachada Massa Mia'></img>
                    <p>A <span>experiência</span> gastronômica em seu país</p>
                </div>

                <div className='rota-menu'>
                    <section className='divisoria'>
                        <p className='texto-animado'>
                            {textos[textoDivisoria]}
                        </p>
                    </section>

                    <section className='img-section'>

                    </section>

                    <section className='main-section'>


                        <button onClick={() => Navigate("/menu")}>
                            menu
                        </button>
                    </section>
                </div>

                <div className='sobre-nos'>
                    <section className='main-section'>

                    </section>

                    <section className='img-section'>

                    </section>
                </div>
            </div>
        </main>
    );
};

export default Home;