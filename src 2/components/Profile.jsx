import clsx from 'clsx';
import '../css/profile.css';
export const Profile = ({ user }) => {
  const { username, tag, location, avatar, stats } = user;

  return (
    <div className={clsx('profile-container')}>
      <div className={clsx('avatar-container')}>
        <img src={avatar} alt="User avatar" width="150px" height="150px" />
        <p>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>
      <ul className={clsx('list')}>
        <li className={clsx('list-item')}>
          <span>Followers: </span>
          <span>{stats.followers}</span>
        </li>
        <li className={clsx('list-item')}>
          <span>Views: </span>
          <span>{stats.views}</span>
        </li>
        <li className={clsx('list-item')}>
          <span>Likes: </span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
