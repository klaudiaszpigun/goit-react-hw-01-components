import { FriendListItem } from './FriendListItem';
export const FriendList = ({ friends }) => {
  const friendsArray = friends.friendsArray;
  return (
    <ul>
      <FriendListItem friendsArray={friendsArray} />
    </ul>
  );
};
