import ReactDOM from 'react-dom/client';
import { App } from './components/App';

import data from '../src/data/data.json';
import friends from '../src/data/friends.json';
import items from '../src/data/transactions.json';
import user from '../src/data/user.json';

import { FriendListItem } from 'components/FriendListItem';
import { FriendList } from './FriendList';
import { Profile } from './Profile';
import { Statistics } from './Statistics';
import { TransactionHistory } from './TransactionHistory';

ReactDOM.createRoot(document.getElementById('root')).render(
  <App>
    <Profile user={user} />
    <Statistics data={data} />
    <FriendList friends={friends}>
      <FriendListItem />
    </FriendList>
    <TransactionHistory items={items} />
  </App>
);
