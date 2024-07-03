import css from './SearchBox.module.css'
import { useId } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';
import { selectNameFilter } from '../../redux/filters/selectors';


export default function SearchBox() {

    const dispatch = useDispatch();
    const filter = useSelector(selectNameFilter);
    
      const handleSearch = evt => {
    dispatch(changeFilter(evt.target.value));
  };
    const id = useId();

  return (
      <div className={css.searchBox}>
          <p className={css.name}>Find contacts by name</p>
          <input id={id} className={css.input} type="text" value={filter} onChange={handleSearch} />
    </div>
  )
}   