import user_photo from "../assets/user_profile/user_photo.jpg";

const UserProfile = () => {
  return (
    <div className="user_profile">
      <div className="user_photo_wrapper">
        <img className="user_photo" src={user_photo} alt="user_photo" />
      </div>
      <p className="user_name">Razumniy Alex</p>
    </div>
  );
};

export default UserProfile
