import ReactDOM from 'react-dom/client';
import { App } from './components/App';

import data from '../src/data/data.json';
import friends from '../src/data/friends.json';
//import items from '../src/data/transactions.json';
import user from '../src/data/user.json';

import { FriendList } from '../src/components/FriendList';
import { FriendListItem } from '../src/components/FriendListItem';
import { Profile } from '../src/components/Profile';
import { Statistics } from '../src/components/Statistics';
//import { TransactionHistory } from '../src/components/TransactionHistory';

ReactDOM.createRoot(document.getElementById('root')).render(
  <App>
    <Profile user={user} />
    <Statistics dates={data} />
    <FriendList friends={friends}>
      <FriendListItem />
    </FriendList>
  </App>
);
//
//
//
//</FriendList>
//<TransactionHistory items={items} />
