export const Profile = ({
  imgUrl,
  name,
  tag,
  location,
  followers,
  views,
  likes,
}) => {
  return (
    <>
      <div>
        <div>
          <img src={imgUrl} alt="User avatar" />
          <p>{name}</p>
          <p>@{tag}</p>
          <p>{location}</p>
        </div>
      </div>
      <ul>
        <li>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </>
  );
};
