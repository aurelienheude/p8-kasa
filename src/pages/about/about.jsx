import { Nav } from "../../components/layouts/nav/nav.jsx";
import Footer from "../../components/layouts/footer/footer.jsx";
import { DropdownAboutList } from "../../components/dropdown/dropdown.jsx";
import { BannerWithoutTitle } from "../../components/banner/banner.jsx";

export const About = () => {
  return (
    <>
      <Nav activeClassName="activeLink" />
      <BannerWithoutTitle />
        <ul className="aboutContent">
          <DropdownAboutList />
        </ul>
      <Footer />
    </>
  );
};

export default About;