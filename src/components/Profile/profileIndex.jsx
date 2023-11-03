import user from './user.json';
import css from './profile.module.css';

const Profile = () => {
  const { username, tag, location, avatar, stats } = user;

  return (
    <section className={css.profileSection}>
      <img className={css.imgItem} src={avatar} alt="avatar" />
      <h1 className={css.username}>{username}</h1>
      <p className={css.tagLocation}>{tag}</p>
      <p className={css.tagLocation}>{location}</p>
      <ul className={css.profileStat}>
        <li className={`${css.statItem} ${css.followers}`}>
          Followers
          <br /> <span className={css.statElement}>{stats.followers}</span>
        </li>
        <li className={`${css.statItem} ${css.views}`}>
          Views
          <br /> <span className={css.statElement}>{stats.views}</span>
        </li>
        <li className={`${css.statItem} ${css.likes}`}>
          Likes
          <br /> <span className={css.statElement}>{stats.likes}</span>
        </li>
      </ul>
    </section>
  );
};

export default Profile;
