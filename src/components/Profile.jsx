export const Profile = ({ user }) => {
  const {
    username,
    tag,
    location,
    avatar = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
    stats,
  } = user;

  return (
    <>
      <div>
        <div>
          <img src={avatar} alt="User avatar" />
          <p>{username}</p>
          <p>@{tag}</p>
          <p>{location}</p>
        </div>
      </div>
      <ul>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </>
  );
};
