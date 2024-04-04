export const FriendListItem = ({ friend }) => {
  const {
    avatar = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
    name,
    isOnline,
  } = friend;

  let onlineColor;
  if (isOnline) {
    onlineColor = '#46b14a';
  }

  return (
    <li>
      <span style={{ backgroundColor: onlineColor }}>{isOnline}</span>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </li>
  );
};
