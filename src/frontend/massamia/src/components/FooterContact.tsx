const Footer: React.FC = () => {

    const anoAtual = new Date().getFullYear();


  return (
    <footer id="footer-contact">
        <div className="txt-footer">
            <p>Entre em contato <br />com nosso suporte</p>
        </div>
        <div className="contact-footer">
            <section className="contacts" id="endereco">
                <span>Endereço:</span>
                <p>Rua Qualquer, 123, Cidade Qualquer, Estado, País</p>
            </section>

            <section className="contacts" id="email">
                <span>E-mail</span>
                <p>massamia@restaurante.com</p>
            </section>

            <section className="contacts" id="telefone">
                <span>Telefone</span>
                <p>(12) 3456-7890</p>
            </section>
        </div>
        <p>© {anoAtual} Massa Mia</p>
    </footer>
  );
};

export default Footer;