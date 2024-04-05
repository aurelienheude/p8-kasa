import { Tag, Caroussel, UserProfile, Dropdown, DropdownList, Rating } from "../../components";

import { useParams, Navigate } from "react-router-dom";
import data from "../../logements.json";

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
    <div className="apartmentContent">
      <Caroussel picture={apartment.pictures} />
      <div className="apartmentContent__primaryInfo">
        <h1 className="apartmentTitle">{apartment.title}</h1>
        <p className="apartmentLocation">{apartment.location}</p>
        <Tag tags={apartment.tags} />
      </div>

      <div className="apartmentContent__avatarAndRating">
        <Rating actualRating={apartment.rating} />
        <UserProfile name={apartment.host.name} avatarPicture={apartment.host.picture} />
      </div>
      <div className="apartmentContent__dropdownSection">
        <Dropdown dropdownTitle="Description" dropdownActiveDescription={apartment.description} />
        <DropdownList dropdownTitle="Équipements" dropdownActiveDescription={apartment.equipments} />
      </div>
    </div>
  );
};

export default Apartment;