export const UserProfile = ({ name, avatarPicture }) => {
    return (
        <div className="userProfile">
            <p className="userProfile__name">{name}</p>
            <img className="userProfile__picture" src={avatarPicture} alt={name} />
        </div>
    );
};
