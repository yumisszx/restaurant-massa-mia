import bannerFachada from '../../assets/fachadaMassaMia.png'

const Index: React.FC = () => {
  return (
    <main>
        <div className="container-main">
            <div className="banner-inicial">
                <img src={bannerFachada} alt='Banner Fachada Massa Mia'></img>

            </div>
        </div>
    </main>
  );
};

export default Index;