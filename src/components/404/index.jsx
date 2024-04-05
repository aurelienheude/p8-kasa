import { Link } from "react-router-dom";

export const Error404 = () => {
    return (
        <>
            <h1 className="errorTitle">404</h1>
            <p className="errorSubText">Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className="errorLink">Retourner sur la page d'accueil</Link>
        </>
    );
}