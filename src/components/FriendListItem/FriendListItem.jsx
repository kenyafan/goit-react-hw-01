const FriendListItem = ({ avatar, name, isOnline, id }) => {
  const statusColor = isOnline ? "green" : "red";

  return (
    <li key={id}>
      <div>
        <img src={avatar} alt="Avatar" width="48" />
        <p>{name}</p>
        <p style={{ color: statusColor }}>{isOnline ? "Online" : "Offline"}</p>
      </div>
    </li>
  );
};

export default FriendListItem;
