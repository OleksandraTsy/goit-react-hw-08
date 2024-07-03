import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/operations';
import css from './UserMenu.module.css';

export default function UserMenu() {
  
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleClick = () => {dispatch(logOut())};

  return (
    <div className={css.container}>
      <p className={css.welcome}>Welcome, {user.name}</p>
      <button className={css.btn} onClick={handleClick}>
        Logout
      </button>
    </div>
  );
}