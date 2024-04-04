import '../css/friendlist.css';
export const FriendListItem = ({ friendsArray }) => {
  return friendsArray.map(friend => {
    return (
      <li>
        <span class={friend.isOnline ? 'online' : 'offline'}>.</span>
        <img src={friend.avatar} alt="user avatar" />
        <p>{friend.name}</p>
      </li>
    );
  });
};
