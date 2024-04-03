export const FriendListItem = ({ first, second, third, fourth, fifth }) => {
  return (
    <>
      <li>
        <span class={first.isOnline ? "online" : "offline"}>.</span>
        <img src={first.avatar} alt="User avatar" width="48" />
        <p>{first.name}</p>
      </li>
      <li>
        <span class={second.isOnline ? "online" : "offline"}>.</span>
        <img src={second.avatar} alt="User avatar" width="48" />
        <p>{second.name}</p>
      </li>
      <li>
        <span class={third.isOnline ? "online" : "offline"}>.</span>
        <img src={third.avatar} alt="User avatar" width="48" />
        <p>{third.name}</p>
      </li>
      <li>
        <span class={fourth.isOnline ? "online" : "offline"}>.</span>
        <img src={fourth.avatar} alt="User avatar" width="48" />
        <p>{fourth.name}</p>
      </li>
      <li>
        <span class={fifth.isOnline ? "online" : "offline"}>.</span>
        <img src={fifth.avatar} alt="User avatar" width="48" />
        <p>{fifth.name}</p>
      </li>
    </>
  );
};
