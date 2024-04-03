import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  const friendList = friends.friendsArr;

  return (
    <ul>
      {friendList.map(friend => (
        <FriendListItem></FriendListItem>
      ))}
    </ul>
  );
};
