import Person from './Person/Person';
import data from '../data/data';
import StatisticList from './Statistic/StatisticList';
import FriendList from './Friends/FriendList';
import TransactionHistory from './Transaction/TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
        height: '50%',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <Person data={data} />
      <StatisticList title="Upload stats" />
      <FriendList />
      <TransactionHistory />
    </div>
  );
};
