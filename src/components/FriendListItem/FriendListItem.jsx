import css from './FriendListItem.module.css';

const FriendListItem = ({ name, avatar, isOnline }) => {
  return (
    <li className={css.item}>
      <span className="status">{isOnline ? 'Online' : 'Offline'}</span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;
