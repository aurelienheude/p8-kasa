export const Tag = ({ tags }) => {
    return (
        <div className="apartmentTagList">
            {
                tags.map((tag, index) => 
                (
                    <p className="apartmentTag smallTextTag" key={index}>{tag}</p>
                ))
            }
        </div>
    );
};