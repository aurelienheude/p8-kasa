import { Nav } from "../../components/layouts/nav/nav.jsx";
import Footer from "../../components/layouts/footer/footer.jsx";
import { Tag } from "../../components/tags/tag.jsx";
import { useParams, Navigate } from "react-router-dom";
import data from "../../logements.json";
import { Caroussel } from "../../components/caroussel/caroussel.jsx";
import { UserProfile } from "../../components/avatar/avatar.jsx";
import { Dropdown } from "../../components/dropdown/dropdown.jsx";
import { Rating } from "../../components/rating/rating.jsx";

const checkApartmentExistence = (id) => {
  return data.find(item => item.id === id.toString());
}

export const Apartment = () => {
  const { id } = useParams();
  const apartment = checkApartmentExistence(id);

  if (!apartment) {
    return <Navigate to="/404" />;
  }
  
  return (
    <>
      <Nav />
      <div className="apartmentContent">
        <Caroussel cover={apartment.cover} />
        <div className="apartmentContent__primaryInfo">
          <h1 className="apartmentTitle">{apartment.title}</h1>
          <p className="">{apartment.location}</p>
        </div>

        <Tag tags={apartment.tags} />
        <div className="apartmentContent__avatarAndRating">
          <Rating actualRating={apartment.rating} />
          <UserProfile name={apartment.host.name} avatarPicture={apartment.host.picture} />
        </div>
        <div className="apartmentContent__dropdownSection">
          <Dropdown dropdownTitle="Description" dropdownActiveDescription={apartment.description} />
          <Dropdown dropdownTitle="Équipements" dropdownActiveDescription={apartment.equipments} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Apartment;