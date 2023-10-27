import user from './user.json';
import "./profile.css";

const Profile = () => {
  const { username, tag, location, avatar } = user;

  return (
    <section className='profile-section'>
        <img className="img-item" src={avatar} alt="avatar" />
        <h1 className="username">{username}</h1>
        <p className="tag-location">{tag}</p>
        <p className="tag-location">{location}</p>
    </section>
  );
};

export default Profile;
