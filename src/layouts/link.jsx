import { Nav, Footer } from "../components";

export const LayoutContent = ({ children }) => {
    return (
        <>
            <Nav />
                {children}
            <Footer />
        </>
    )
};