
const Footer: React.FC = () => {

    const anoAtual = new Date().getFullYear();


  return (
    <footer>
        <p>© {anoAtual} Massa Mia</p>
    </footer>
  );
};

export default Footer;