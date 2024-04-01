import { Nav } from "../../components/layouts/nav/nav.jsx";
import Footer from "../../components/layouts/footer/footer.jsx";

const Error = () => {
    return (
        <>
            <Nav />
            <div className="gridThumb">
                <div className="errorContent">
                    <h1 className="errorTitle">404</h1>
                    <p className="text">Oups! La page que vous demandez n'existe pas.</p>
                    <a href="/" className="errorLink">Retourner sur la page d’accueil</a>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Error;