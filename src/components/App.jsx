import Profile from './Profile/profileIndex';

import Statistics from './Statistics/statisticIndex';
import data from './Statistics/data.json';

import friends from './FriendList/friends.json';
import FriendList from './FriendList/friendsIndex';

import transaction from './TransactionHistory/transactions.json';
import TransactionHistory from './TransactionHistory/transactionsIndex';

export const App = () => {
  return (
    <div className='container'>
      <Profile />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transaction} />
    </div>
  );
};
