import clsx from 'clsx';
import '../css/friendlist.css';
import { FriendListItem } from './FriendListItem';
export const FriendList = ({ friends }) => {
  const friendsArray = friends.friendsArray;
  return (
    <ul className={clsx('friends')}>
      <FriendListItem friendsArray={friendsArray} />
    </ul>
  );
};
