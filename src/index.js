import ReactDOM from 'react-dom/client';
import { App } from '../src/components/App';
import { FriendList } from '../src/components/FriendList';
import { FriendListItem } from '../src/components/FriendListItem';
import { Profile } from '../src/components/Profile';
import { Statistics } from '../src/components/Statistics';
import { TransationHistory } from '../src/components/TransactionHistory';
import data from '../src/data/data.json';
import friends from '../src/data/friends.json';
import transactions from '../src/data/transactions.json';
import user from '../src/data/user.json';
import '../src/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <App>
    <Profile
      imgUrl={user.avatar}
      name={user.username}
      tag={user.tag}
      location={user.location}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
    />
    <Statistics docx={data[0]} pdf={data[1]} mp3={data[2]} psd={data[3]} />
    <FriendList>
      <FriendListItem
        first={friends[0]}
        second={friends[1]}
        third={friends[2]}
        fourth={friends[3]}
        fifth={friends[4]}
      />
    </FriendList>
    <TransationHistory
      one={transactions[0]}
      two={transactions[1]}
      three={transactions[2]}
      four={transactions[3]}
      five={transactions[4]}
      six={transactions[5]}
      seven={transactions[6]}
      eight={transactions[7]}
      nine={transactions[8]}
      ten={transactions[9]}
      eleven={transactions[10]}
      twelve={transactions[11]}
      thirteen={transactions[12]}
      fourteen={transactions[13]}
      fifteen={transactions[14]}
      sixteen={transactions[15]}
      seventeen={transactions[16]}
      eighteen={transactions[17]}
      nineteen={transactions[18]}
      twenty={transactions[19]}
    />
  </App>
);
// first, second, third, fourth, fifth
