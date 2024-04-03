import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  const friendList = friends.friendsArray;

  return (
    <ul>
      {friendList.map(friend => (
        <FriendListItem friend={friend}></FriendListItem>
      ))}
    </ul>
  );
};
