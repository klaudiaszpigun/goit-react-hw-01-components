import clsx from 'clsx';
import '../css/friendlist.css';
export const FriendListItem = ({ friendsArray }) => {
  return friendsArray.map(friend => {
    return (
      <li className={clsx('list-item', 'friend-container')}>
        <span className={clsx(friend.isOnline ? 'online' : 'offline')}>⬤</span>
        <p>{friend.name}</p>
        <img src={friend.avatar} alt="user avatar" width="64px" height="64px" />
      </li>
    );
  });
};
