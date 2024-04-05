export const Tag = ({ tags }) => {
    return (
        <div className="apartmentTagList">
            {
                tags.map((tag, index) => 
                (
                    <p className="apartmentTagList__text" key={index}>{tag}</p>
                ))
            }
        </div>
    );
};