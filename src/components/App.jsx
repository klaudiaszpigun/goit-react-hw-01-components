import data from '../data/data.json';
import friends from '../data/friends.json';
import items from '../data/transactions.json';
import user from '../data/user.json';

import { FriendList } from './FriendList';
import { Profile } from './Profile';
import { Statistics } from './Statistics';
import { TransactionHistory } from './TransactionHistory';

export const App = () => {
  return (
    <div>
      <Profile user={user}></Profile>
      <Statistics data={data}></Statistics>
      <FriendList friends={friends}></FriendList>
      <TransactionHistory items={items}></TransactionHistory>
    </div>
  );
};
