import Profile from './component/Profile';
import user from './jsonFile/user.json';
import Statistics from "./component/Statistics";
import statisticalData from './jsonFile/statistical-data.json';
import FriendList from './component/FriendList';
import friends from './jsonFile/friends.json';
import TransactionHistory from './component/TransactionHistory';
import transactions from './jsonFile/transactions.json';


function App() {
  return (
    <>
      <Profile name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}>
      </Profile>
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />;
    </>
  );
}

export default App;
