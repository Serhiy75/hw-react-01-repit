import FriendListItem from 'components/FriendListItem/FriendListItem';
import css from './FriendList.module.css';

const FriendList = ({ title, friends }) => {
  return (
    <>
      <ul className={css.friendList}>
        {title && <h2>{title}</h2>}
        {friends.map(({ id, avatar, name, isOnline }) => (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        ))}
      </ul>
    </>
  );
};

export default FriendList;
