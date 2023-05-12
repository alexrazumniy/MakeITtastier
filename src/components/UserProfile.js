import user_photo from "../assets/user_profile/user_photo.png";

const UserProfile = () => {
  return (
    <div className="user_profile">
      <div className="user_photo">
        <img src={user_photo} alt="user_photo" />
      </div>
        <p className="user_name">Alka Yagik</p>
    </div>
  );
};

export default UserProfile
