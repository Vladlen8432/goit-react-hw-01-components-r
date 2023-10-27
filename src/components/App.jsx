import Profile from './Profile/profileIndex';

import Statistics from './Statistics/statisticIndex';
import data from './Statistics/data.json';

import friends from './FriendList/friends.json';
import FriendList from './FriendList/friendsIndex';

import transaction from './TransactionHistory/transactions.json';
import TransactionHistory from './TransactionHistory/transactionsIndex';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <div className="container-profile">
        <Profile />
        <Statistics title="Upload stats" stats={data} />
      </div>
      <FriendList friends={friends} />
      <TransactionHistory items={transaction} />
    </div>
  );
};
