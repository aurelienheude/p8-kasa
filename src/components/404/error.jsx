export const Error404 = () => {
    return (
        <div className="errorContent">
            <h1 className="errorTitle">404</h1>
            <p className="text">Oups! La page que vous demandez n'existe pas.</p>

            <a href="accueil" className="textLink">Retourner sur la page d'accueil</a>
        </div>
    );
}

export default Error404;