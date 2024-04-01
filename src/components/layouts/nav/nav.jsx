export const Nav = () => {
    return (
        <nav>
            <img className="logo" src="/image/logo.svg" alt="Logo Kasa"/>
            <ul>
                <li><a href="/" className="navlink">Accueil</a></li>
                <li><a href="about" className="navlink">A Propos</a></li>
            </ul>
        </nav>
    );
}