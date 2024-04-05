import { BannerWithoutTitle, DropdownAboutList } from "../../components";

const About = () => {
  return (
    <div className="aboutContent">
      <BannerWithoutTitle />
      <ul className="aboutContent__groupCollapse">
        <DropdownAboutList />
      </ul>
    </div>
  );
};

export default About;