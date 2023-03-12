import FriendItem from './FriendItem';
import data from '../../data/friends';

export default function FriendList(params) {
  return (
    <ul className="friend-list">
      <FriendItem data={data} />
    </ul>
  );
}
