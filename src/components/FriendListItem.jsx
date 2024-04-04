export const FriendListItem = ({ friendsArray }) => {
  return friendsArray.map(friend => {
    return (
      <li>
        <span>.</span>
        <img src={friend.avatar} alt="user avatar" />
        <p>{friend.name}</p>
      </li>
    );
  });
};
