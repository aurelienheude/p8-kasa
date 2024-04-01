import { Nav } from "../../components/layouts/nav/nav.jsx";
import Footer from "../../components/layouts/footer/footer.jsx";
import { Banner } from "../../components/banner/banner.jsx";
import { CardList } from "../../components/cards/cards.jsx";

export const Home = () => {
    return (
        <>
            <Nav />
            <Banner />
            <div className="gridThumb">
                <CardList />
            </div>
            <Footer />
        </>
    );
}

export default Home;