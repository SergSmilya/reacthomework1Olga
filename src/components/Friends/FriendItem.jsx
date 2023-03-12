import { Span } from './FriendItem.styled';

export default function FriendItem({ data }) {
  return data.map(({ avatar, name, isOnline, id }) => {
    return (
      <li className="item" key={id}>
        <Span props={isOnline}></Span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
      </li>
    );
  });
}
