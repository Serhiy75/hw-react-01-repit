import css from './FriendListItem.module.css';
import clsx from 'clsx';

const FriendListItem = ({ name, avatar, isOnline }) => {
  return (
    <li className={css.item}>
      <span
        className={clsx(css.base, {
          [css.online]: isOnline,
          [css.offline]: !isOnline,
        })}
      >
        {isOnline ? 'Online' : 'Offline'}
      </span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;
